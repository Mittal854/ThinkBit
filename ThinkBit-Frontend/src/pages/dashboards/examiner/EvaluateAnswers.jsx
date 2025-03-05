import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const EvaluateAnswers = () => {
  const submissions = [
    {
      id: 1,
      student: "John Doe",
      question: "Explain the concept of recursion with an example.",
      answer:
        "Recursion is a method of solving problems where the solution depends on solutions to smaller instances of the same problem. Example: Factorial calculation.",
      maxMarks: 10,
    },
    {
      id: 2,
      student: "Jane Smith",
      question: "What is the time complexity of QuickSort?",
      answer:
        "The average time complexity of QuickSort is O(n log n). The worst case occurs when the pivot is always the smallest or largest element, leading to O(n^2).",
      maxMarks: 5,
    },
  ];

  const [evaluations, setEvaluations] = useState(
    submissions.map((submission) => ({ score: "", feedback: "" }))
  );

  const handleInputChange = (index, field, value) => {
    const updatedEvaluations = [...evaluations];
    if (field === "score") {
      const maxMarks = submissions[index].maxMarks;
      const score = Math.min(Math.max(Number(value), 0), maxMarks); // Ensures value is within range
      if (Number(value) > maxMarks) {
        alert(`Score cannot exceed maximum marks (${maxMarks})!`);
      }
      updatedEvaluations[index][field] = score;
    } else {
      updatedEvaluations[index][field] = value;
    }
    setEvaluations(updatedEvaluations);
  };

  const handleSubmitEvaluation = (index) => {
    alert(
      `Evaluation Submitted: \nScore: ${evaluations[index].score} \nFeedback: ${evaluations[index].feedback}`
    );
  };

  return (
    <div className="p-6 max-w-5xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
        📊 Evaluate Answers
      </h2>
      <p className="text-gray-400 text-center mb-6">
        Review and grade student answers with feedback.
      </p>

      {submissions.map((submission, index) => (
        <div
          key={submission.id}
          className="bg-gray-900 p-6 mb-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-200">
            {submission.student}'s Answer
          </h3>
          <p className="text-gray-400 mt-2">
            🔹 <span className="font-semibold text-gray-300">Question:</span>{" "}
            {submission.question}
          </p>
          <p className="text-gray-300 bg-gray-800 p-3 rounded-lg mt-3">
            📝 <span className="font-semibold">Answer:</span>{" "}
            {submission.answer}
          </p>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 mb-1">
                Score (Max {submission.maxMarks})
              </label>
              <input
                type="number"
                max={submission.maxMarks}
                min={0}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
                placeholder="Enter score"
                value={evaluations[index].score}
                onChange={(e) =>
                  handleInputChange(index, "score", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Feedback</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
                placeholder="Enter feedback"
                value={evaluations[index].feedback}
                onChange={(e) =>
                  handleInputChange(index, "feedback", e.target.value)
                }
              />
            </div>
          </div>

          <button
            className="bg-blue-500 px-4 py-2 mt-4 rounded-lg text-white flex items-center gap-2 hover:bg-blue-600 transition-all"
            onClick={() => handleSubmitEvaluation(index)}>
            <FaCheckCircle /> Submit Evaluation
          </button>
        </div>
      ))}
    </div>
  );
};

export default EvaluateAnswers;
