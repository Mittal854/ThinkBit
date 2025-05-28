import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

const ExamAnalytics = () => {
  const [examData, setExamData] = useState([]);
  const [topPerformers, setTopPerformers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [examinerId, setExaminerId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getExaminerId = () => {
      const token = localStorage.getItem("token");
      if (!token) return null;

      try {
        const decodedToken = jwtDecode(token);
        return decodedToken.id;
      } catch (error) {
        console.error("Error decoding token:", error);
        return null;
      }
    };

    const fetchAnalytics = async () => {
      const id = getExaminerId();
      if (!id) {
        setError("Not authenticated");
        setLoading(false);
        return;
      }

      setExaminerId(id);
      try {
        const response = await fetch(
          `https://thibkbit-backend.vercel.app/api/exam/analytics/${id}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Ensure the data is in the right format
        if (data && data.examData && Array.isArray(data.examData)) {
          // Convert string values to numbers where needed
          const processedExamData = data.examData.map((exam) => ({
            ...exam,
            avgScore: parseFloat(exam.avgScore),
            passRate: parseFloat(exam.passRate),
            totalAttempts: parseInt(exam.totalAttempts),
          }));
          console.log("Processed Exam Data:", processedExamData);

          setExamData(processedExamData);
        } else {
          setExamData([]);
          console.warn("Exam data is not in expected format", data);
        }

        if (data && data.topPerformers && Array.isArray(data.topPerformers)) {
          setTopPerformers(data.topPerformers);
        } else {
          setTopPerformers([]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching analytics:", error);
        setError("Failed to load analytics");
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (error) {
    return (
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">📊 Exam Analytics</h2>
        <div className="bg-red-800 text-white p-4 rounded-lg">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">📊 Exam Analytics</h2>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl">Loading analytics...</p>
        </div>
      ) : examData.length === 0 ? (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <p className="text-xl">No exam data available yet.</p>
          <p className="mt-2">
            As students complete exams, analytics will appear here.
          </p>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-lg font-semibold">Total Exams Conducted</h4>
              <p className="text-3xl font-bold">{examData.length}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-lg font-semibold">Average Score</h4>
              <p className="text-3xl font-bold">
                {examData.length > 0
                  ? (
                      examData.reduce((sum, d) => sum + d.avgScore, 0) /
                      examData.length
                    ).toFixed(1)
                  : "N/A"}
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-lg font-semibold">Average Pass Rate</h4>
              <p className="text-3xl font-bold">
                {examData.length > 0
                  ? (
                      examData.reduce((sum, d) => sum + d.passRate, 0) /
                      examData.length
                    ).toFixed(1)
                  : "N/A"}
                %
              </p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">
              📈 Performance Trends
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={examData}>
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <Line
                  type="monotone"
                  dataKey="avgScore"
                  stroke="#4CAF50"
                  strokeWidth={2}
                  name="Average Score"
                />
                <Line
                  type="monotone"
                  dataKey="passRate"
                  stroke="#FFC107"
                  strokeWidth={2}
                  name="Pass Rate (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {topPerformers.length > 0 ? (
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">🏆 Top Performers</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topPerformers}>
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip />
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <Bar
                    dataKey="score"
                    fill="#3B82F6"
                    barSize={40}
                    name="Score"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">🏆 Top Performers</h3>
              <p>No top performer data available yet.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ExamAnalytics;
