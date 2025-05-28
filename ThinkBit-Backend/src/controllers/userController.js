const User = require("../models/User");

// Get User Profile
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  
   } catch (error) {
    console.error("Error in getUserProfile:", error);
     res.status(500).json({ message: "Server Error" });
   }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
const updateUser = async (req, res) => {
  try {
    const { name, email, status, role } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, status, role },
      { new: true, runValidators: true }
    ).select("-password");

    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Toggle user role
const toggleUserRole = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.role = user.role === "student" ? "examiner" : "student";
    await user.save();
    res.json(user);
  } catch (error) {
    console.error("Error toggling role:", error);
    res.status(500).json({ message: "Server Error" });
  }
};


module.exports = { getUserProfile,getAllUsers,updateUser,deleteUser,toggleUserRole };
