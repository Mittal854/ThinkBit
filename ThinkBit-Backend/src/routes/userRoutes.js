const express = require("express");
const { verifyToken } = require("../middleware/authMiddleware");
const { getUserProfile, getAllUsers, updateUser, deleteUser, toggleUserRole } = require("../controllers/userController");

const router = express.Router();

router.get("/profile", verifyToken, getUserProfile);
router.get("/", getAllUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.patch("/:id/toggle-role", toggleUserRole);

module.exports = router;
