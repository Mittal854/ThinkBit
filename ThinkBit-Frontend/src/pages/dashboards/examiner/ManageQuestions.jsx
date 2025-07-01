import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus, FaTimes } from "react-icons/fa";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageQuestions = () => {
  const [exams, setExams] = useState([]);
  const [selectedExam, setSelectedExam] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    type: "MCQ",
    questionText: "",
    options: ["", "", "", ""], // Default 4 options for MCQs
    correctOption: null,
    marks: 1,
  });

  const API_URL = "https://thinkbitbackend.netlify.app/";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get(`${API_URL}/api/exams`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setExams(res.data))
      .catch((error) => console.error("Error fetching exams:", error));
  }, []);

  const handleExamChange = async (event) => {
    const examId = event.target.value;
    setSelectedExam(examId);
    if (!examId) return;

    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `${API_URL}/api/exams/${examId}/questions`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleAddQuestion = async () => {
    if (!selectedExam) return toast.error("Please select an exam first!");
    if (!newQuestion.questionText.trim()) {
      return toast.error("Question text cannot be empty!");
    }
    if (newQuestion.marks <= 0) {
      return toast.error("Marks must be greater than 0!");
    }
    if (newQuestion.type === "MCQ") {
      if (newQuestion.options.some((opt) => opt.trim() === "")) {
        return toast.error("All options must be filled for MCQ!");
      }
      if (newQuestion.correctOption === null) {
        return toast.error("Please select the correct option for MCQ!");
      }
    }

    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${API_URL}/api/exams/${selectedExam}/add-question`,
        newQuestion,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setQuestions([...questions, response.data.newQuestion]);
      setShowModal(false);
      toast.success("Question added successfully!");

      setNewQuestion({
        type: "MCQ",
        questionText: "",
        options: ["", "", "", ""],
        correctOption: null,
        marks: 1,
      });
    } catch (error) {
      toast.error("Error adding question!");
      console.error("Error adding question:", error);
    }
  };

  const handleDeleteQuestion = async (questionId) => {
    if (!selectedExam) return toast.error("Please select an exam first!");

    const token = localStorage.getItem("token");
    try {
      await axios.delete(
        `${API_URL}/api/exams/${selectedExam}/delete-question/${questionId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setQuestions((prevQuestions) =>
        prevQuestions.filter((q) => q._id !== questionId)
      );
      toast.success("Question deleted successfully!");
    } catch (error) {
      toast.error("Error deleting question!");
      console.error("Error deleting question:", error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <ToastContainer />
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
        🗂 Manage Questions
      </h2>

      <div className="mb-6">
        <label className="block text-lg font-semibold text-gray-300 mb-2">
          Select an Exam:
        </label>
        <select
          onChange={handleExamChange}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white">
          <option value="">-- Choose an Exam --</option>
          {exams.map((exam) => (
            <option key={exam._id} value={exam._id}>
              {exam.title}
            </option>
          ))}
        </select>
      </div>

      {selectedExam && (
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-200">
              Questions for {exams.find((e) => e._id === selectedExam)?.title}
            </h3>
            <button
              className="bg-green-500 px-4 py-2 ml-3 rounded-lg text-white flex items-center gap-2"
              onClick={() => setShowModal(true)}>
              <FaPlus /> Add Question
            </button>
          </div>

          <div className="space-y-4">
            {questions.length > 0 ? (
              questions.map((q) => (
                <div
                  key={q._id}
                  className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center">
                  <div>
                    <p className="text-gray-200 font-medium">
                      {q.questionText}
                    </p>
                    <p className="text-gray-400 text-sm">
                      Type: {q.type} | Marks: {q.marks}
                    </p>
                  </div>
                  <button
                    className="text-red-400 hover:text-red-500 transition-all"
                    onClick={() => handleDeleteQuestion(q._id)}>
                    <FaTrash size={18} />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-center">
                No questions available for this exam.
              </p>
            )}
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold text-white mb-4">
              Add New Question
            </h3>
            <select
              className="w-full p-2 rounded-md mb-2 bg-gray-700 text-white"
              value={newQuestion.type}
              onChange={(e) =>
                setNewQuestion({ ...newQuestion, type: e.target.value })
              }>
              <option value="MCQ">MCQ</option>
              <option value="Subjective">Subjective</option>
            </select>
            <input
              type="text"
              placeholder="Enter Question"
              value={newQuestion.questionText}
              onChange={(e) =>
                setNewQuestion({ ...newQuestion, questionText: e.target.value })
              }
              className="w-full border p-2 rounded-md mb-2 bg-gray-700 text-white"
            />
            <input
              type="number"
              placeholder="Enter Marks"
              value={newQuestion.marks}
              onChange={(e) =>
                setNewQuestion({ ...newQuestion, marks: e.target.value })
              }
              className="w-full border p-2 rounded-md mb-2 bg-gray-700 text-white"
            />
            {newQuestion.type === "MCQ" && (
              <>
                {newQuestion.options.map((option, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <input
                      type="text"
                      placeholder={`Option ${index + 1}`}
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...newQuestion.options];
                        newOptions[index] = e.target.value;
                        setNewQuestion({
                          ...newQuestion,
                          options: newOptions,
                          // If the correct option was this, update it to new value
                          correctOption:
                            newQuestion.correctOption === option
                              ? e.target.value
                              : newQuestion.correctOption,
                        });
                      }}
                      className="w-full border p-2 rounded-md bg-gray-700 text-white"
                    />
                  </div>
                ))}

                {/* Dropdown to select correct option */}
                <select
                  className="flex items-center gap-2 mb-2 bg-gray-700"
                  value={newQuestion.correctOption}
                  onChange={(e) =>
                    setNewQuestion({
                      ...newQuestion,
                      correctOption: e.target.value,
                    })
                  }>
                  <option value="">Select Correct Option</option>
                  {newQuestion.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option || `Option ${index + 1}`}
                    </option>
                  ))}
                </select>
              </>
            )}

            <button
              onClick={handleAddQuestion}
              className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageQuestions;
