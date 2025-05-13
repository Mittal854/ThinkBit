
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEye } from "react-icons/fa";

const ExamHistory = () => {
  const [examHistory, setExamHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExamHistory = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/exam/my-history",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setExamHistory(response.data.results || []);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching exam history:", err);
        setError("Failed to fetch exam history.");
        setLoading(false);
      }
    };

    fetchExamHistory();
  }, []);

  const getGradeColor = (grade) => {
    switch (grade) {
      case "O":
        return "text-emerald-400";
      case "A+":
      case "A":
        return "text-green-400";
      case "B+":
      case "B":
        return "text-blue-400";
      case "C":
        return "text-yellow-400";
      case "P":
        return "text-gray-400";
      default:
        return "text-red-400";
    }
  };

  if (loading) {
    return (
      <div className="p-6 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">📜 Exam History</h2>
        <p>Loading exam history...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">📜 Exam History</h2>
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 flex items-center">
        📜 Exam History
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-700">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-4 border">Exam Name</th>
              <th className="p-4 border">Date</th>
              <th className="p-4 border">Score</th>
              <th className="p-4 border">Grade</th>
              <th className="p-4 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {examHistory.length > 0 ? (
              examHistory.map((exam) => (
                <tr
                  key={exam.id}
                  className="border-b border-gray-600 hover:bg-gray-700 transition-all">
                  <td className="p-4 border">{exam.name}</td>
                  <td className="p-4 border">{exam.date}</td>
                  <td className="p-4 border font-semibold text-white">
                    {exam.score}%
                  </td>
                  <td className="p-4 border font-semibold">
                    <span className={getGradeColor(exam.grade)}>
                      {exam.grade}
                    </span>
                  </td>

                  <td className="p-4 border text-center">
                    <button className="bg-blue-600 flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-500 transition-all">
                      <FaEye /> View Certificate
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-400">
                  No exam history available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamHistory;
