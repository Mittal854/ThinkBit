import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBell,
  FaTimes,
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaTrash,
  FaEye,
  FaEyeSlash,
  FaSearch,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "system",
      message: "System update completed successfully.",
      icon: <FaCheckCircle className="text-green-400" />,
      timestamp: Date.now() - 2000,
      read: false,
    },
    {
      id: 2,
      type: "alert",
      message: "Security Alert: Unusual login attempt detected!",
      icon: <FaExclamationTriangle className="text-yellow-400" />,
      timestamp: Date.now() - 120000,
      read: false,
    },
  ]);

  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Play Sound Effect for New Notifications
  const playNotificationSound = () => {
    const audio = new Audio(
      "https://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a"
    );
    audio.play();
  };

  // Format timestamps dynamically
  const formatTime = (timestamp) => {
    const diff = Math.floor((Date.now() - timestamp) / 1000);
    if (diff < 60) return `${diff} sec ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
    return `${Math.floor(diff / 3600)} hrs ago`;
  };

  // Filtered Notifications
  const filteredNotifications = notifications
    .filter((notif) => (filter === "all" ? true : notif.type === filter))
    .filter((notif) =>
      notif.message.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Mark as Read/Unread
  const toggleReadStatus = (id) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, read: !notif.read } : notif
      )
    );
  };

  // Dismiss Notification
  const dismissNotification = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  // Clear All
  const clearAllNotifications = () => {
    setNotifications([]);
    toast.success("All notifications cleared!");
  };

  // Simulate New Notification (Testing)
  useEffect(() => {
    setTimeout(() => {
      const newNotification = {
        id: Date.now(),
        type: "message",
        message: "New system update available!",
        icon: <FaInfoCircle className="text-blue-400" />,
        timestamp: Date.now(),
        read: false,
      };
      setNotifications((prev) => [...prev, newNotification]);
      toast("📩 New Notification!", {
        style: { background: "#1f2937", color: "#fff" },
      });
      playNotificationSound(); // 🔊 Play sound
    }, 10000);
  }, []);

  return (
    <motion.div
      className="p-8 max-w-3xl mx-auto bg-gray-900 text-white rounded-xl shadow-lg relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <Toaster position="top-center" />

      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-700">
        <h2 className="text-3xl font-bold text-yellow-400 flex items-center gap-3">
          <FaBell /> Notifications
          {notifications.filter((notif) => !notif.read).length > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
              {notifications.filter((notif) => !notif.read).length}
            </span>
          )}
        </h2>

        <button
          className="bg-red-500 px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:bg-red-600 transition-all"
          onClick={clearAllNotifications}
          disabled={notifications.length === 0}>
          <FaTrash /> Clear All
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mt-4 mb-6">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search notifications..."
          className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        {["all", "system", "message", "alert"].map((category) => (
          <motion.button
            key={category}
            className={`px-4 py-2 rounded-full ${
              filter === category
                ? "bg-yellow-500 text-black"
                : "bg-gray-700 hover:bg-gray-600"
            } transition-all shadow-md`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(category)}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        <AnimatePresence>
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notif) => (
              <motion.div
                key={notif.id}
                className={`flex items-center justify-between p-5 rounded-lg shadow-md ${
                  notif.read
                    ? "bg-gray-800 opacity-60"
                    : "bg-gray-900 opacity-100"
                } transition-all`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}>
                <div className="flex items-center gap-4">
                  {notif.icon}
                  <div>
                    <p className="text-lg">{notif.message}</p>
                    <p className="text-gray-400 text-sm">
                      {formatTime(notif.timestamp)}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="text-blue-400 hover:text-blue-500"
                    onClick={() => toggleReadStatus(notif.id)}>
                    {notif.read ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  <button
                    className="text-red-400 hover:text-red-500"
                    onClick={() => dismissNotification(notif.id)}>
                    <FaTimes />
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-400">No notifications found.</p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Notifications;
