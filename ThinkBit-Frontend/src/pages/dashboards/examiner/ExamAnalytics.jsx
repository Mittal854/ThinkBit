// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
//   BarChart,
//   Bar,
// } from "recharts";

// const mockData = [
//   { name: "Exam 1", avgScore: 75, passRate: 80 },
//   { name: "Exam 2", avgScore: 82, passRate: 85 },
//   { name: "Exam 3", avgScore: 78, passRate: 83 },
//   { name: "Exam 4", avgScore: 90, passRate: 92 },
//   { name: "Exam 5", avgScore: 85, passRate: 88 },
// ];

// const topPerformers = [
//   { name: "Alice", score: 95 },
//   { name: "Bob", score: 92 },
//   { name: "Charlie", score: 90 },
//   { name: "David", score: 88 },
//   { name: "Eve", score: 85 },
// ];

// const ExamAnalytics = () => {
//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-bold mb-4">📊 Exam Analytics</h2>

//       <div className="grid md:grid-cols-3 gap-6 mb-6">
//         <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
//           <h4 className="text-lg font-semibold">Total Exams Conducted</h4>
//           <p className="text-3xl font-bold">{mockData.length}</p>
//         </div>
//         <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
//           <h4 className="text-lg font-semibold">Average Score</h4>
//           <p className="text-3xl font-bold">
//             {(
//               mockData.reduce((sum, d) => sum + d.avgScore, 0) / mockData.length
//             ).toFixed(1)}
//           </p>
//         </div>
//         <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
//           <h4 className="text-lg font-semibold">Average Pass Rate</h4>
//           <p className="text-3xl font-bold">
//             {(
//               mockData.reduce((sum, d) => sum + d.passRate, 0) / mockData.length
//             ).toFixed(1)}
//             %
//           </p>
//         </div>
//       </div>

//       <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
//         <h3 className="text-xl font-semibold mb-4">📈 Performance Trends</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={mockData}>
//             <XAxis dataKey="name" stroke="#fff" />
//             <YAxis stroke="#fff" />
//             <Tooltip />
//             <CartesianGrid strokeDasharray="3 3" stroke="#444" />
//             <Line
//               type="monotone"
//               dataKey="avgScore"
//               stroke="#4CAF50"
//               strokeWidth={2}
//             />
//             <Line
//               type="monotone"
//               dataKey="passRate"
//               stroke="#FFC107"
//               strokeWidth={2}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//         <h3 className="text-xl font-semibold mb-4">🏆 Top Performers</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={topPerformers}>
//             <XAxis dataKey="name" stroke="#fff" />
//             <YAxis stroke="#fff" />
//             <Tooltip />
//             <CartesianGrid strokeDasharray="3 3" stroke="#444" />
//             <Bar dataKey="score" fill="#3B82F6" barSize={40} />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default ExamAnalytics;

import React, { useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";
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

  useEffect(() => {
    const getExaminerId = () => {
      const token = localStorage.getItem("token");
      if (!token) return null;

      try {
        const decodedToken = jwtDecode(token);
        return decodedToken.id; // Extracting the examiner ID from the token
      } catch (error) {
        console.error("Error decoding token:", error);
        return null;
      }
    };

    const fetchAnalytics = async () => {
      const id = getExaminerId();
      if (!id) return;

      setExaminerId(id);
      try {
        const response = await fetch(
          `http://localhost:5000/api/exam/analytics/${id}`
        );
        const data = await response.json();
        setExamData(data.examData);
        setTopPerformers(data.topPerformers);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching analytics:", error);
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">📊 Exam Analytics</h2>

      {loading ? (
        <p>Loading...</p>
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
                />
                <Line
                  type="monotone"
                  dataKey="passRate"
                  stroke="#FFC107"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">🏆 Top Performers</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topPerformers}>
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <Bar dataKey="score" fill="#3B82F6" barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default ExamAnalytics;
