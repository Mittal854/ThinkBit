import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { FaChartLine, FaTrophy, FaPercentage } from "react-icons/fa";

const Progress = () => {
  const [examData, setExamData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExamData = async () => {
      try {
        const response = await axios.get("/api/exam/my-results", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });

        const results = response.data.results || []; // Ensure it's always an array
        console.log("Exam Data:", results); // Debugging

        setExamData(results);
        setLoading(false);
      } catch (err) {
        console.error(
          "Error fetching exam data:",
          err.response?.data || err.message
        );
        setError(err.response?.data?.message || "Failed to fetch exam data.");
        setLoading(false);
      }
    };


    fetchExamData();
  }, []);

  // Handle loading state
  if (loading) {
    return (
      <div className="p-6 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">📈 My Progress</h2>
        <p>Loading your performance data...</p>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="p-6 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">📈 My Progress</h2>
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  // Calculate insights dynamically
  const totalExams = examData.length;
  const bestScore = totalExams ? Math.max(...examData.map((d) => d.score)) : 0;
  const averageScore = totalExams
    ? (examData.reduce((sum, d) => sum + d.score, 0) / totalExams).toFixed(1)
    : 0;
  const lastScore = examData[totalExams - 1]?.score || 0;
  const prevScore = examData[totalExams - 2]?.score || lastScore;
  const performanceChange =
    prevScore !== 0 ? ((lastScore - prevScore) / prevScore) * 100 : 0;

  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        📈 My Progress
      </h2>

      {/* Performance Chart */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <FaChartLine /> Performance Over Time
        </h3>
        {totalExams > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={examData}>
              <XAxis dataKey="examName" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip
                contentStyle={{ backgroundColor: "#222", borderRadius: "8px" }}
              />
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#4CAF50"
                strokeWidth={3}
                dot={{ fill: "#4CAF50", r: 5 }}
                activeDot={{ r: 8, stroke: "#fff", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-400">No exam data available.</p>
        )}
      </div>

      {/* Performance Stats */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-all">
          <h4 className="text-lg font-semibold flex justify-center items-center gap-2">
            📚 Total Exams
          </h4>
          <p className="text-3xl font-bold">{totalExams}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-all">
          <h4 className="text-lg font-semibold flex justify-center items-center gap-2">
            <FaTrophy /> Best Score
          </h4>
          <p className="text-3xl font-bold text-yellow-400">{bestScore}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-all">
          <h4 className="text-lg font-semibold flex justify-center items-center gap-2">
            🎯 Average Score
          </h4>
          <p className="text-3xl font-bold text-blue-400">{averageScore}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-all">
          <h4 className="text-lg font-semibold flex justify-center items-center gap-2">
            <FaPercentage /> Performance Change
          </h4>
          <p
            className={`text-3xl font-bold ${
              performanceChange >= 0 ? "text-green-400" : "text-red-400"
            }`}>
            {performanceChange.toFixed(1)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
