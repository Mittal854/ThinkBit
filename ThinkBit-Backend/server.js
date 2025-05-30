const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");

require("dotenv").config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
// app.use(
//   cors({
//     origin: "https://think-bit.vercel.app",
//     credentials: true,
//   })
// );
// Routes
app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/user", require("./src/routes/userRoutes"));
app.use("/api/exam", require("./src/routes/examRoutes"));
app.use("/api/exams", require("./src/routes/exam"));
app.use("/api/evaluations", require("./src/routes/evaluationRoutes"));

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
