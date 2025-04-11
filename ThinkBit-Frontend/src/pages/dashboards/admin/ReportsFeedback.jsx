


import React, { useState } from "react";
import {
  FaSearch,
  FaExclamationTriangle,
  FaCheckCircle,
  FaClock,
  FaFilter,
  FaReply,
  FaUser,
} from "react-icons/fa";

const initialReports = [
  {
    id: 1,
    user: "John Doe",
    issue: "Exam Submission Failed",
    status: "Pending",
    timestamp: "2025-02-27 10:00 AM",
  },
  {
    id: 2,
    user: "Jane Smith",
    issue: "Incorrect Answer Key",
    status: "Resolved",
    timestamp: "2025-02-27 10:15 AM",
  },
  {
    id: 3,
    user: "Alice Brown",
    issue: "Unable to Log In",
    status: "Open",
    timestamp: "2025-02-27 10:30 AM",
  },
  {
    id: 4,
    user: "Bob Johnson",
    issue: "System Lag During Exam",
    status: "Pending",
    timestamp: "2025-02-27 10:45 AM",
  },
  {
    id: 5,
    user: "Chris Evans",
    issue: "Payment Processing Error",
    status: "Open",
    timestamp: "2025-02-27 11:00 AM",
  },
];

const ReportsFeedback = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [reports, setReports] = useState(initialReports);

  // Function to handle status update
  const updateStatus = (id, newStatus) => {
    setReports((prevReports) =>
      prevReports.map((report) =>
        report.id === id ? { ...report, status: newStatus } : report
      )
    );
  };

  const filteredReports = reports
    .filter((report) =>
      report.user.toLowerCase().includes(search.toLowerCase())
    )
    .filter((report) => filter === "All" || report.status === filter);

  return (
    <div className="p-6 max-w-6xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-6 text-center text-red-400 drop-shadow-lg">
        📝 Reports & Feedback
      </h2>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div className="relative w-full md:w-1/2">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search by user..."
            className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All Reports</option>
          <option value="Open">Open</option>
          <option value="Pending">Pending</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      {/* Reports Table */}
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg overflow-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700 text-gray-400 uppercase text-sm tracking-wide">
              <th className="py-3 px-4">User</th>
              <th className="py-3 px-4">Issue</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Timestamp</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((report) => (
              <tr
                key={report.id}
                className="border-b border-gray-800 hover:bg-gray-800 transition-all duration-300">
                <td className="py-3 px-4 flex items-center gap-2">
                  <FaUser className="text-blue-400" />
                  {report.user}
                </td>
                <td className="py-3 px-4">{report.issue}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      report.status === "Resolved"
                        ? "bg-green-500 text-white"
                        : report.status === "Pending"
                        ? "bg-yellow-500 text-black"
                        : "bg-red-500 text-white"
                    }`}>
                    {report.status === "Resolved" && (
                      <FaCheckCircle className="inline mr-1" />
                    )}
                    {report.status === "Pending" && (
                      <FaClock className="inline mr-1" />
                    )}
                    {report.status === "Open" && (
                      <FaExclamationTriangle className="inline mr-1" />
                    )}
                    {report.status}
                  </span>
                </td>
                <td className="py-3 px-4">{report.timestamp}</td>
                <td className="py-3 px-4 flex gap-2">
                  <button
                    className="bg-green-500 px-3 py-1 rounded-lg flex items-center gap-2 shadow-lg hover:bg-green-600 transition-all"
                    onClick={() => updateStatus(report.id, "Resolved")}>
                    <FaCheckCircle /> Resolve
                  </button>
                  <button
                    className="bg-yellow-500 px-3 py-1 rounded-lg flex items-center gap-2 shadow-lg hover:bg-yellow-600 transition-all"
                    onClick={() => updateStatus(report.id, "Pending")}>
                    <FaClock /> Pending
                  </button>
                  <button className="bg-blue-500 px-3 py-1 rounded-lg flex items-center gap-2 shadow-lg hover:bg-blue-600 transition-all">
                    <FaReply /> Respond
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportsFeedback;
