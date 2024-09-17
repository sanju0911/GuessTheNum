const express = require("express");
const {
  addOrUpdateScore,
  getHighestScore,
  getScore,
} = require("../controllers/ScoreController");

const router = express.Router();

router.post("/score", addOrUpdateScore);
router.get("/highScores", getHighestScore);

module.exports = router;
