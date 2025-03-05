const User = require("../models/User");

// Get User Profile
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  //  try {
  //    if (req.user.email === process.env.ADMIN_EMAIL) {
  //      // Mock admin data (totalUsers should be fetched from DB)
  //      const totalUsers = await User.countDocuments();
  //      return res.json({
  //        name: "Admin",
  //        email: process.env.ADMIN_EMAIL,
  //        role: "admin",
  //        totalUsers,
  //      });
  //    }

  //    // Fetch user details if not admin
  //    const user = await User.findOne({ email: req.user.email }).select(
  //      "-password"
  //    );
  //    if (!user) return res.status(404).json({ message: "User not found" });

  //    res.json(user);
   } catch (error) {
    console.error("Error in getUserProfile:", error);
     res.status(500).json({ message: "Server Error" });
   }
};

module.exports = { getUserProfile };
