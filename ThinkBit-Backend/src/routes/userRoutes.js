const express = require("express");
const { verifyToken } = require("../middleware/authMiddleware");
const { getUserProfile } = require("../controllers/userController");

const router = express.Router();

router.get("/profile", verifyToken, getUserProfile);

module.exports = router;
