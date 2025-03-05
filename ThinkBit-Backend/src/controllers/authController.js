const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.registerUser = async (req, res) => {
  try {
    console.log("\n[REGISTER REQUEST]");
    console.log("Received Data:", req.body);

    const { name, email, password, role } = req.body;

    if (role === "admin") {
      console.log("Admin registration attempt blocked.");
      return res
        .status(403)
        .json({ message: "Admin registration is not allowed" });
    }

    const trimmedEmail = email.trim();
    console.log("Trimmed Email:", trimmedEmail);

    let user = await User.findOne({ email: trimmedEmail });
    console.log("User Exists Check:", user ? "User Found" : "User Not Found");

    if (user) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password:", hashedPassword);

    user = new User({
      name,
      email: trimmedEmail,
      password: hashedPassword,
      role: role || "student",
    });

    await user.save();
    console.log("User Registered Successfully:", user);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    console.log("\n[LOGIN REQUEST]");
    console.log("Received Email:", req.body.email);
    console.log("Received Password:", req.body.password);

    const { email, password } = req.body;
    const trimmedEmail = email.trim();
    console.log("Trimmed Email:", trimmedEmail);

    if (trimmedEmail === process.env.ADMIN_EMAIL) {
      if (password !== process.env.ADMIN_PASSWORD) {
        console.log("Invalid admin credentials");
        return res.status(403).json({ message: "Invalid admin credentials" });
      }

      console.log("Admin Login Successful");
      const token = jwt.sign({ id: "admin", role: "admin" }, process.env.JWT_SECRET);

      return res.json({
        token,
        user: { id: "admin", name: "Administrator", email: process.env.ADMIN_EMAIL, role: "admin" },
      });
    }
    const user = await User.findOne({ email: trimmedEmail });
    console.log("User Found in DB:", user ? "User Exists" : "User Not Found");
    if (!user) return res.status(400).json({ message: "Invalid credentials" });
    console.log("Stored Hashed Password:", user.password);
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password Match Result:", isMatch);
    if (!isMatch) {
      console.log("Invalid Credentials - Password Mismatch");
      return res.status(400).json({ message: "Invalid credentials" });
    }
    console.log("User Login Successful");
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, );
    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
