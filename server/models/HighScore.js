const mongoose = require("mongoose");

const highScoreSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

const HighScore = mongoose.model("HighScore", highScoreSchema);

module.exports = HighScore;
