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
  Legend,
  ReferenceLine,
} from "recharts";
import { FaChartLine, FaTrophy, FaPercentage } from "react-icons/fa";

const Progress = () => {
  const [examData, setExamData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExamData = async () => {
      try {
        const response = await axios.get(
          "https://thibkbit-backend.vercel.app//api/exam/my-history",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        const results = (response.data.results || []).map((exam, index) => ({
          ...exam,
          examName: exam.name || `Exam ${index + 1}`, // Ensure we have a name or fallback
          // Ensure score is a number
          score: parseFloat(exam.score),
        }));

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

  // Ensure that score is converted to a number for calculations
  const bestScore = totalExams
    ? Math.max(...examData.map((d) => parseFloat(d.score)))
    : 0;

  const averageScore = totalExams
    ? (
        examData.reduce((sum, d) => sum + parseFloat(d.score), 0) / totalExams
      ).toFixed(1)
    : 0;

  const lastScore = examData[totalExams - 1]?.score || 0;
  const prevScore = examData[totalExams - 2]?.score || lastScore;

  const performanceChange =
    prevScore !== 0
      ? ((parseFloat(lastScore) - parseFloat(prevScore)) /
          parseFloat(prevScore)) *
        100
      : 0;

  const formattedPerformanceChange = `${
    performanceChange >= 0 ? "+" : ""
  }${performanceChange.toFixed(1)}%`;

  // Determine the appropriate Y-axis range based on actual data
  const scores = examData.map((d) => d.score);
  const minScoreValue = totalExams ? Math.min(...scores) : 0;

  // Set bottom range to be 5% below the minimum score (but not below 0)
  // or 0 if the minimum score is already very low
  const yAxisMin =
    minScoreValue < 20 ? 0 : Math.max(0, Math.floor(minScoreValue - 5));

  // Set top range to be 5% above the maximum score (but not above 100)
  const yAxisMax = Math.min(100, Math.ceil(Math.max(...scores, 0) + 5));

  // Format exam names for better display if needed
  const formattedExamData = examData.map((exam) => ({
    ...exam,
    // If exam names are too long, truncate them
    displayName:
      exam.examName.length > 15
        ? exam.examName.substring(0, 12) + "..."
        : exam.examName,
  }));

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
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={formattedExamData}
                margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
                <XAxis
                  dataKey="displayName"
                  stroke="#aaa"
                  angle={-45}
                  textAnchor="end"
                  height={70}
                  interval={0}
                  tick={{ fontSize: 12 }}
                />
                <YAxis
                  stroke="#aaa"
                  domain={[yAxisMin, yAxisMax]}
                  tickCount={6}
                  label={{
                    value: "Score (%)",
                    angle: -90,
                    position: "insideLeft",
                    offset: -5,
                    style: { fill: "#aaa", fontSize: 12 },
                  }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#333",
                    borderRadius: "4px",
                    border: "none",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                    color: "#fff",
                  }}
                  formatter={(value) => [`${value}%`, "Score"]}
                  labelFormatter={(label) => {
                    // Find the original exam name for the tooltip
                    const exam = formattedExamData.find(
                      (e) => e.displayName === label
                    );
                    return `${exam?.examName || label}`;
                  }}
                />
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#444"
                  opacity={0.5}
                />
                <Legend verticalAlign="top" height={36} />
                <ReferenceLine
                  y={parseFloat(averageScore)}
                  stroke="#0088FE"
                  strokeDasharray="3 3"
                  label={{
                    value: "Average",
                    fill: "#0088FE",
                    fontSize: 10,
                    position: "right",
                  }}
                />
                <Line
                  name="Score (%)"
                  type="monotone"
                  dataKey="score"
                  stroke="#4CAF50"
                  strokeWidth={2.5}
                  dot={{
                    fill: "#4CAF50",
                    r: 4,
                    strokeWidth: 1,
                    stroke: "#fff",
                  }}
                  activeDot={{ r: 7, stroke: "#fff", strokeWidth: 2 }}
                  animationDuration={1000}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="h-80 flex items-center justify-center">
            <p className="text-center text-gray-400">No exam data available.</p>
          </div>
        )}
      </div>

      {/* Performance Stats */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-all">
          <h4 className="text-lg font-semibold flex justify-center items-center gap-2">
            📚 Total Exams
          </h4>
          <p className="text-3xl font-bold">{totalExams}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-all">
          <h4 className="text-lg font-semibold flex justify-center items-center gap-2">
            <FaTrophy /> Best Score
          </h4>
          <p className="text-3xl font-bold text-yellow-400">{bestScore}%</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-all">
          <h4 className="text-lg font-semibold flex justify-center items-center gap-2">
            🎯 Average Score
          </h4>
          <p className="text-3xl font-bold text-blue-400">{averageScore}%</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-all">
          <h4 className="text-lg font-semibold flex justify-center items-center gap-2">
            <FaPercentage /> Performance Change
          </h4>
          <p
            className={`text-3xl font-bold ${
              performanceChange >= 0 ? "text-green-400" : "text-red-400"
            }`}>
            {formattedPerformanceChange}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
