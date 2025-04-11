
const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  questionText: { type: String, required: true },
  type: { type: String, enum: ["MCQ", "Subjective"], required: true },
  options: { type: [String], default: undefined }, // Optional for MCQ
  correctOption: { type: String, default: undefined }, // Only required for MCQ
  marks: { type: Number, required: true }, // ✅ Marks per question
});

const examSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    questions: [questionSchema], // Supports both MCQ & Subjective
    duration: { type: Number, required: true },
    timeAllotted: { type: Number, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // ✅ Tracks enrolled students
  },
  { timestamps: true }
);

const Exam = mongoose.model("Exam", examSchema);
module.exports = Exam;
