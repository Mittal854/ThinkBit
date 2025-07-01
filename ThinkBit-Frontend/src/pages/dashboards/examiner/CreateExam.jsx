import React, { useState, useEffect } from "react";
import { FaPlus, FaSave } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateExam = () => {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [timeAllotted, setTimeAllotted] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [questionType, setQuestionType] = useState("MCQ");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const [newQuestion, setNewQuestion] = useState({
    questionText: "",
    options: ["", "", "", ""],
    correctOption: "",
    marks: "",
  });

  // 🕒 Auto-calculate End Time
  useEffect(() => {
    if (startTime && duration) {
      const start = new Date(startTime);
      start.setMinutes(start.getMinutes() + Number(duration));

      // Convert to local timezone
      const localEndTime = new Date(
        start.getTime() - start.getTimezoneOffset() * 60000
      )
        .toISOString()
        .slice(0, 16);

      setEndTime(localEndTime);
    }
  }, [startTime, duration]);

  // ➕ Add Question
  const handleAddQuestion = () => {
    if (!newQuestion.questionText.trim()) {
      toast.error("Please enter a question!");
      return;
    }

    if (
      !newQuestion.marks.trim() ||
      isNaN(newQuestion.marks) ||
      newQuestion.marks <= 0
    ) {
      toast.error("Please enter valid marks!");
      return;
    }

    let formattedQuestion = {
      questionText: newQuestion.questionText,
      type: questionType,
      marks: Number(newQuestion.marks),
    };

    if (questionType === "MCQ") {
      if (newQuestion.options.some((opt) => !opt.trim())) {
        toast.error("Please fill in all MCQ options!");
        return;
      }
      if (!newQuestion.correctOption.trim()) {
        toast.error("Please select the correct answer!");
        return;
      }
      formattedQuestion.options = newQuestion.options;
      formattedQuestion.correctOption = newQuestion.correctOption;
    }

    setQuestions([...questions, formattedQuestion]);

    setNewQuestion({
      questionText: "",
      options: ["", "", "", ""],
      correctOption: "",
      marks: "",
    });

    toast.success("Question added successfully!");
  };

  // 📌 Handle Option Change (Fixed)
  const handleOptionChange = (index, value) => {
    setNewQuestion((prevState) => {
      const updatedOptions = [...prevState.options];
      updatedOptions[index] = value;

      return {
        ...prevState,
        options: updatedOptions,
      };
    });
  };

  // ✅ Submit Exam to Backend
  const handleSaveExam = async () => {
    if (!title.trim() || !duration || !startTime || questions.length === 0) {
      toast.error(
        "Please fill in all required fields and add at least one question."
      );
      return;
    }

    const examData = {
      title,
      duration: Number(duration),
      timeAllotted: Number(timeAllotted),
      startTime,
      questions,
    };

    setLoading(true);
    toast.info("Saving exam...");

    try {
      const token = localStorage.getItem("token");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await axios.post(
        "https://thinkbitbackend.netlify.app/api/exam/create",
        examData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setTimeout(() => {
        toast.success(" Exam created successfully!");
      }, 1000);
      setTitle("");
      setDuration("");
      setTimeAllotted("");
      setStartTime("");
      setEndTime("");
      setQuestions([]);
      setQuestionType("MCQ");
    } catch (error) {
      console.error("Error creating exam:", error);
      toast.error("❌ Failed to create exam! Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto text-white">
      <ToastContainer />
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
        📚 Create Exam
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
          placeholder="Enter Exam Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
            placeholder="Duration (mins)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <input
            type="number"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
            placeholder="Per Student Time (mins)"
            value={timeAllotted}
            onChange={(e) => setTimeAllotted(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="datetime-local"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          <input
            type="datetime-local"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
            value={endTime}
            readOnly
          />
        </div>
      </div>

      {/* Question Section */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-300">
          ➕ Add Questions
        </h3>
        <select
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-500 text-white mt-3"
          value={questionType}
          onChange={(e) => setQuestionType(e.target.value)}>
          <option value="MCQ">MCQ</option>
          <option value="Subjective">Subjective</option>
        </select>

        <input
          type="text"
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mt-3"
          placeholder="Enter Question Text"
          value={newQuestion.questionText}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, questionText: e.target.value })
          }
        />

        {/* Input for Marks */}
        <input
          type="number"
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mt-3"
          placeholder="Enter Marks"
          value={newQuestion.marks}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, marks: e.target.value })
          }
        />

        {/* MCQ Options */}
        {questionType === "MCQ" &&
          newQuestion.options.map((option, index) => (
            <input
              key={index}
              type="text"
              className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 text-white mt-2"
              placeholder={`Option ${index + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
          ))}

        {/* Correct Option Selection */}
        {questionType === "MCQ" && (
          <select
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mt-3"
            value={newQuestion.correctOption}
            onChange={(e) =>
              setNewQuestion({ ...newQuestion, correctOption: e.target.value })
            }>
            <option value="">Select Correct Option</option>
            {newQuestion.options.map((option, index) => (
              <option key={index} value={option}>
                {option || `Option ${index + 1}`}
              </option>
            ))}
          </select>
        )}

        <button
          className="bg-blue-600 px-6 py-2 mt-4 rounded-lg text-white w-full hover:bg-blue-700 flex items-center justify-center gap-2"
          onClick={handleAddQuestion}>
          <FaPlus /> Add Question
        </button>
      </div>

      <button
        className="bg-green-600 px-6 py-3 mt-6 rounded-lg text-white w-full hover:bg-green-700 flex items-center justify-center gap-2"
        onClick={handleSaveExam}
        disabled={loading}>
        <FaSave /> Save Exam
      </button>
    </div>
  );
};

export default CreateExam;
