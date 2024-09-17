const HighScore = require("../models/HighScore");

const addOrUpdateScore = async (req, res) => {
  const { email, score } = req.body;
  try {
    if (!email || score === undefined) {
      return res.status(400).json({ message: "Email and score are required" });
    }

    const existingScore = await HighScore.findOne({ email });

    if (existingScore) {
      existingScore.score = score;
      existingScore.time = new Date();
      await existingScore.save();
      res.status(200).json({ message: "Score updated successfully" });
    } else {
      const newScore = new HighScore({ email, score, time: new Date() });
      await newScore.save();
      res.status(201).json({ message: "Score added successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getHighestScore = async (req, res) => {
  try {
    const highestScore = await HighScore.find().sort({ score: -1 }).limit(1);
    if (highestScore.length === 0) {
      return res.status(404).json({ message: "No high scores found" });
    }
    res.status(200).json(highestScore[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addOrUpdateScore, getHighestScore };
