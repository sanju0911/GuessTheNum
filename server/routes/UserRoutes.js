const express = require("express");
const {
  register,
  login,
  logout,
  getUserByEmail,
  getScore,
} = require("../controllers/UserController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", getUserByEmail);
router.get("/getscore", getScore);

module.exports = router;
