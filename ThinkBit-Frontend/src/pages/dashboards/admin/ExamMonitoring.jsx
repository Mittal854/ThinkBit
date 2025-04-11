
import React from "react";
import {
  FaUserGraduate,
  FaClock,
  FaExclamationTriangle,
  FaEye,
  FaVideo,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const liveExamData = [
  { name: "10:00 AM", activeStudents: 150 },
  { name: "10:15 AM", activeStudents: 140 },
  { name: "10:30 AM", activeStudents: 130 },
  { name: "10:45 AM", activeStudents: 150 },
];

const ExamMonitoring = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-6 text-center text-red-400 drop-shadow-lg">
        🎯 Exam Monitoring Dashboard
      </h2>

      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg flex items-center gap-4">
          <FaUserGraduate className="text-blue-400 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Active Students</h3>
            <p className="text-2xl font-bold">120</p>
          </div>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg flex items-center gap-4">
          <FaClock className="text-yellow-400 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Ongoing Exams</h3>
            <p className="text-2xl font-bold">5</p>
          </div>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg flex items-center gap-4">
          <FaExclamationTriangle className="text-red-500 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Flagged Activities</h3>
            <p className="text-2xl font-bold">3</p>
          </div>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg flex items-center gap-4">
          <FaVideo className="text-green-400 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Live Proctoring</h3>
            <p className="text-2xl font-bold">Enabled</p>
          </div>
        </div>
      </div>

      {/* Live Monitoring Section */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Live Student Activity</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={liveExamData}>
            <XAxis dataKey="name" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="activeStudents"
              stroke="#4CAF50"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Flagged Activities */}
      <div className="mt-6 bg-gray-900 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-red-400">
          Flagged Activities 🚨
        </h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-4 bg-gray-800 p-3 rounded-lg">
            <FaEye className="text-red-400 text-xl" />
            <p>
              <strong>10:05 AM:</strong> Student ID: 102 | Suspicious Browser
              Activity
            </p>
          </li>
          <li className="flex items-center gap-4 bg-gray-800 p-3 rounded-lg">
            <FaEye className="text-red-400 text-xl" />
            <p>
              <strong>10:20 AM:</strong> Student ID: 215 | Multiple Window
              Switching
            </p>
          </li>
          <li className="flex items-center gap-4 bg-gray-800 p-3 rounded-lg">
            <FaEye className="text-red-400 text-xl" />
            <p>
              <strong>10:35 AM:</strong> Student ID: 178 | Unusual Idle Time
            </p>
          </li>
        </ul>
      </div>

      {/* Live Proctoring Section */}
      <div className="mt-6 bg-gray-900 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-green-400">
          Live Proctoring Feeds 🎥
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg flex justify-center items-center text-gray-400 text-lg">
            Camera Feed 1
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex justify-center items-center text-gray-400 text-lg">
            Camera Feed 2
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex justify-center items-center text-gray-400 text-lg">
            Camera Feed 3
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex justify-center items-center text-gray-400 text-lg">
            Camera Feed 4
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamMonitoring;
