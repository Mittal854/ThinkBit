

import React, { useState } from "react";
import {
  FaSearch,
  FaUser,
  FaClock,
  FaFilter,
  FaDownload,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const logsData = [
  {
    id: 1,
    user: "John Doe",
    action: "Logged In",
    timestamp: "2025-02-27 10:00 AM",
  },
  {
    id: 2,
    user: "Jane Smith",
    action: "Started Exam",
    timestamp: "2025-02-27 10:15 AM",
  },
  {
    id: 3,
    user: "Alice Brown",
    action: "Logged Out",
    timestamp: "2025-02-27 10:30 AM",
  },
  {
    id: 4,
    user: "Bob Johnson",
    action: "Flagged for Suspicious Activity",
    timestamp: "2025-02-27 10:45 AM",
  },
  {
    id: 5,
    user: "Chris Evans",
    action: "Logged In",
    timestamp: "2025-02-27 11:00 AM",
  },
  {
    id: 6,
    user: "Emily White",
    action: "Logged Out",
    timestamp: "2025-02-27 11:15 AM",
  },
];

const UserLogs = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const logsPerPage = 4;

  const filteredLogs = logsData
    .filter((log) => log.user.toLowerCase().includes(search.toLowerCase()))
    .filter((log) => filter === "All" || log.action === filter);

  const indexOfLastLog = currentPage * logsPerPage;
  const indexOfFirstLog = indexOfLastLog - logsPerPage;
  const currentLogs = filteredLogs.slice(indexOfFirstLog, indexOfLastLog);

  const exportToCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      [
        "User,Action,Timestamp",
        ...logsData.map((log) => `${log.user},${log.action},${log.timestamp}`),
      ].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "user_logs.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="p-6 max-w-6xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-400 drop-shadow-lg">
        📜 User Activity Logs
      </h2>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div className="relative w-full md:w-1/2">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search by user..."
            className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <select
            className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All Actions</option>
            <option value="Logged In">Logged In</option>
            <option value="Started Exam">Started Exam</option>
            <option value="Logged Out">Logged Out</option>
            <option value="Flagged for Suspicious Activity">Flagged</option>
          </select>
          <button
            className="bg-blue-500 px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:bg-blue-600 transition-all"
            onClick={exportToCSV}>
            <FaDownload /> Export
          </button>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg overflow-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700 text-gray-400 uppercase text-sm tracking-wide">
              <th className="py-3 px-4">User</th>
              <th className="py-3 px-4">Action</th>
              <th className="py-3 px-4">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {currentLogs.map((log) => (
              <tr
                key={log.id}
                className="border-b border-gray-800 hover:bg-gray-800 transition-all duration-300">
                <td className="py-3 px-4 flex items-center gap-2">
                  <FaUser className="text-blue-400" /> {log.user}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      log.action === "Logged In"
                        ? "bg-green-500 text-white"
                        : log.action === "Logged Out"
                        ? "bg-yellow-500 text-black"
                        : log.action === "Flagged for Suspicious Activity"
                        ? "bg-red-500 text-white"
                        : "bg-blue-500 text-white"
                    }`}>
                    {log.action}
                  </span>
                </td>
                <td className="py-3 px-4 flex items-center gap-2">
                  <FaClock className="text-yellow-400" /> {log.timestamp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center items-center gap-3">
        <button
          className={`px-4 py-2 rounded-full text-lg font-medium shadow-md transition-all ${
            currentPage === 1
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}>
          <FaArrowLeft />
        </button>
        <span className="text-lg font-semibold bg-gray-800 px-4 py-2 rounded-lg shadow-md">
          {currentPage}
        </span>
        <button
          className={`px-4 py-2 rounded-full text-lg font-medium shadow-md transition-all ${
            indexOfLastLog >= filteredLogs.length
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastLog >= filteredLogs.length}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default UserLogs;
