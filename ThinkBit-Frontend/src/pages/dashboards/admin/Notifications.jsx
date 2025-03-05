// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FaBell,
//   FaCheckCircle,
//   FaExclamationTriangle,
//   FaTimes,
// } from "react-icons/fa";
// import { Toaster, toast } from "react-hot-toast";

// const Notifications = () => {
//   const [filter, setFilter] = useState("All");

//   const notifications = [
//     {
//       id: 1,
//       type: "success",
//       message: "Settings updated successfully!",
//       time: "2 min ago",
//     },
//     {
//       id: 2,
//       type: "warning",
//       message: "Your backup is outdated!",
//       time: "10 min ago",
//     },
//     {
//       id: 3,
//       type: "info",
//       message: "New admin features available!",
//       time: "30 min ago",
//     },
//     {
//       id: 4,
//       type: "error",
//       message: "Login attempt failed!",
//       time: "1 hr ago",
//     },
//   ];

//   const filteredNotifications =
//     filter === "All"
//       ? notifications
//       : notifications.filter((n) => n.type === filter.toLowerCase());

//   const removeNotification = (id) => {
//     toast.success("Notification dismissed!");
//   };

//   return (
//     <motion.div
//       className="p-6 max-w-4xl mx-auto text-white"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}>
//       <Toaster />

//       {/* Header */}
//       <h2 className="text-4xl font-bold mb-6 text-center text-blue-400 drop-shadow-lg">
//         🔔 Notifications
//       </h2>

//       {/* Filter Options */}
//       <div className="flex justify-center gap-4 mb-6">
//         {["All", "Success", "Warning", "Info", "Error"].map((category) => (
//           <button
//             key={category}
//             className={`px-4 py-2 rounded-lg shadow-md transition ${
//               filter === category
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-800 text-gray-400 hover:bg-gray-700"
//             }`}
//             onClick={() => setFilter(category)}>
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Notifications List */}
//       <div className="space-y-4">
//         {filteredNotifications.length > 0 ? (
//           filteredNotifications.map((notif) => (
//             <motion.div
//               key={notif.id}
//               className={`p-4 rounded-lg flex justify-between items-center shadow-lg bg-opacity-80 backdrop-blur-md ${
//                 notif.type === "success"
//                   ? "bg-green-500/30"
//                   : notif.type === "warning"
//                   ? "bg-yellow-500/30"
//                   : notif.type === "info"
//                   ? "bg-blue-500/30"
//                   : "bg-red-500/30"
//               }`}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.3 }}>
//               <div className="flex items-center gap-3">
//                 {notif.type === "success" && (
//                   <FaCheckCircle className="text-green-400 text-xl" />
//                 )}
//                 {notif.type === "warning" && (
//                   <FaExclamationTriangle className="text-yellow-400 text-xl" />
//                 )}
//                 {notif.type === "info" && (
//                   <FaBell className="text-blue-400 text-xl" />
//                 )}
//                 {notif.type === "error" && (
//                   <FaTimes className="text-red-400 text-xl" />
//                 )}
//                 <div>
//                   <p className="text-lg font-medium">{notif.message}</p>
//                   <p className="text-sm text-gray-400">{notif.time}</p>
//                 </div>
//               </div>
//               <button
//                 className="text-gray-400 hover:text-white"
//                 onClick={() => removeNotification(notif.id)}>
//                 <FaTimes />
//               </button>
//             </motion.div>
//           ))
//         ) : (
//           <p className="text-center text-gray-400">No notifications found.</p>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default Notifications;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   FaBell,
//   FaCheckCircle,
//   FaExclamationTriangle,
//   FaTimes,
//   FaInbox,
//   FaTrash,
// } from "react-icons/fa";
// import { Toaster, toast } from "react-hot-toast";

// const Notifications = () => {
//   const [filter, setFilter] = useState("All");
//   const [notifications, setNotifications] = useState([]);

//   // Load notifications from local storage (simulating a real-world scenario)
//   useEffect(() => {
//     const savedNotifications = JSON.parse(
//       localStorage.getItem("notifications")
//     ) || [
//       {
//         id: 1,
//         type: "success",
//         message: "Settings updated successfully!",
//         time: "2 min ago",
//         read: false,
//       },
//       {
//         id: 2,
//         type: "warning",
//         message: "Your backup is outdated!",
//         time: "10 min ago",
//         read: false,
//       },
//       {
//         id: 3,
//         type: "info",
//         message: "New admin features available!",
//         time: "30 min ago",
//         read: true,
//       },
//       {
//         id: 4,
//         type: "error",
//         message: "Login attempt failed!",
//         time: "1 hr ago",
//         read: false,
//       },
//     ];
//     setNotifications(savedNotifications);
//   }, []);

//   // Save to local storage on update
//   useEffect(() => {
//     localStorage.setItem("notifications", JSON.stringify(notifications));
//   }, [notifications]);

//   // Mark a notification as read
//   const markAsRead = (id) => {
//     setNotifications((prev) =>
//       prev.map((n) => (n.id === id ? { ...n, read: true } : n))
//     );
//     toast.success("Marked as read!");
//   };

//   // Delete a notification
//   const deleteNotification = (id) => {
//     setNotifications((prev) => prev.filter((n) => n.id !== id));
//     toast.error("Notification deleted!");
//   };

//   // Clear all notifications
//   const clearAll = () => {
//     setNotifications([]);
//     toast.error("All notifications cleared!");
//   };

//   // Filter notifications
//   const filteredNotifications =
//     filter === "All"
//       ? notifications
//       : notifications.filter((n) => n.type === filter.toLowerCase());

//   return (
//     <motion.div
//       className="p-6 max-w-4xl mx-auto text-white"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}>
//       <Toaster />

//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-4xl font-bold text-blue-400 drop-shadow-lg">
//           🔔 Notifications
//         </h2>
//         {notifications.length > 0 && (
//           <button
//             className="bg-red-500 px-4 py-2 rounded-lg flex items-center gap-2 shadow-md hover:bg-red-600 transition"
//             onClick={clearAll}>
//             <FaTrash /> Clear All
//           </button>
//         )}
//       </div>

//       {/* Filter Options */}
//       <div className="flex justify-center gap-4 mb-6">
//         {["All", "Success", "Warning", "Info", "Error", "Unread"].map(
//           (category) => (
//             <button
//               key={category}
//               className={`px-4 py-2 rounded-lg shadow-md transition ${
//                 filter === category
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-800 text-gray-400 hover:bg-gray-700"
//               }`}
//               onClick={() => setFilter(category)}>
//               {category}
//             </button>
//           )
//         )}
//       </div>

//       {/* Notifications List */}
//       <div className="space-y-4">
//         {filteredNotifications.length > 0 ? (
//           filteredNotifications.map((notif) => (
//             <motion.div
//               key={notif.id}
//               className={`p-4 rounded-lg flex justify-between items-center shadow-lg transition-all ${
//                 notif.read ? "bg-gray-800/50" : "bg-gray-900"
//               }`}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.3 }}>
//               <div className="flex items-center gap-3">
//                 {notif.type === "success" && (
//                   <FaCheckCircle className="text-green-400 text-xl" />
//                 )}
//                 {notif.type === "warning" && (
//                   <FaExclamationTriangle className="text-yellow-400 text-xl" />
//                 )}
//                 {notif.type === "info" && (
//                   <FaBell className="text-blue-400 text-xl" />
//                 )}
//                 {notif.type === "error" && (
//                   <FaTimes className="text-red-400 text-xl" />
//                 )}
//                 <div>
//                   <p
//                     className={`text-lg font-medium ${
//                       notif.read ? "text-gray-400" : "text-white"
//                     }`}>
//                     {notif.message}
//                   </p>
//                   <p className="text-sm text-gray-400">{notif.time}</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3">
//                 {!notif.read && (
//                   <button
//                     className="text-green-400 hover:text-green-500"
//                     onClick={() => markAsRead(notif.id)}>
//                     <FaInbox />
//                   </button>
//                 )}
//                 <button
//                   className="text-gray-400 hover:text-red-400"
//                   onClick={() => deleteNotification(notif.id)}>
//                   <FaTimes />
//                 </button>
//               </div>
//             </motion.div>
//           ))
//         ) : (
//           <p className="text-center text-gray-400">No notifications found.</p>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default Notifications;


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FaBell,
//   FaTimes,
//   FaCheckCircle,
//   FaExclamationTriangle,
//   FaInfoCircle,
// } from "react-icons/fa";

// const Notifications = () => {
//   const [notifications, setNotifications] = useState([
//     {
//       id: 1,
//       type: "system",
//       message: "System update completed successfully.",
//       icon: <FaCheckCircle className="text-green-400" />,
//     },
//     {
//       id: 2,
//       type: "alert",
//       message: "Security warning: Suspicious login detected.",
//       icon: <FaExclamationTriangle className="text-yellow-400" />,
//     },
//     {
//       id: 3,
//       type: "message",
//       message: "New message from Admin.",
//       icon: <FaInfoCircle className="text-blue-400" />,
//     },
//     {
//       id: 4,
//       type: "system",
//       message: "Backup completed successfully.",
//       icon: <FaCheckCircle className="text-green-400" />,
//     },
//   ]);

//   const [filter, setFilter] = useState("all");

//   // Remove a notification
//   const dismissNotification = (id) => {
//     setNotifications(notifications.filter((notif) => notif.id !== id));
//   };

//   // Filtered notifications
//   const filteredNotifications =
//     filter === "all"
//       ? notifications
//       : notifications.filter((notif) => notif.type === filter);

//   return (
//     <motion.div
//       className="p-6 max-w-3xl mx-auto text-white"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}>
//       <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400 drop-shadow-lg flex items-center justify-center gap-2">
//         <FaBell /> Notifications
//       </h2>

//       {/* Filter Tabs */}
//       <div className="flex justify-center gap-4 mb-6">
//         {["all", "system", "message", "alert"].map((category) => (
//           <button
//             key={category}
//             className={`px-4 py-2 rounded-lg ${
//               filter === category
//                 ? "bg-yellow-500"
//                 : "bg-gray-700 hover:bg-gray-600"
//             } transition-all`}
//             onClick={() => setFilter(category)}>
//             {category.charAt(0).toUpperCase() + category.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* Notifications List */}
//       <div className="space-y-4">
//         {filteredNotifications.length > 0 ? (
//           filteredNotifications.map((notif) => (
//             <motion.div
//               key={notif.id}
//               className="flex items-center justify-between bg-gray-900 p-4 rounded-lg shadow-lg"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 20 }}
//               transition={{ duration: 0.3 }}>
//               <div className="flex items-center gap-3">
//                 {notif.icon}
//                 <span>{notif.message}</span>
//               </div>
//               <button
//                 onClick={() => dismissNotification(notif.id)}
//                 className="text-red-400 hover:text-red-500">
//                 <FaTimes />
//               </button>
//             </motion.div>
//           ))
//         ) : (
//           <p className="text-center text-gray-400">No notifications found.</p>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default Notifications;


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaBell,
//   FaTimes,
//   FaCheckCircle,
//   FaExclamationTriangle,
//   FaInfoCircle,
//   FaTrash,
//   FaEye,
//   FaEyeSlash,
// } from "react-icons/fa";

// const Notifications = () => {
//   const [notifications, setNotifications] = useState([
//     {
//       id: 1,
//       type: "system",
//       message: "System update completed successfully.",
//       icon: <FaCheckCircle className="text-green-400" />,
//       timestamp: "Just now",
//       read: false,
//     },
//     {
//       id: 2,
//       type: "alert",
//       message: "Security Alert: Unusual login attempt detected!",
//       icon: <FaExclamationTriangle className="text-yellow-400" />,
//       timestamp: "2 mins ago",
//       read: false,
//     },
//     {
//       id: 3,
//       type: "message",
//       message: "Admin sent a new announcement.",
//       icon: <FaInfoCircle className="text-blue-400" />,
//       timestamp: "5 mins ago",
//       read: true,
//     },
//     {
//       id: 4,
//       type: "system",
//       message: "Scheduled maintenance will occur tonight at 12 AM.",
//       icon: <FaCheckCircle className="text-green-400" />,
//       timestamp: "10 mins ago",
//       read: false,
//     },
//   ]);

//   const [filter, setFilter] = useState("all");

//   // Filter Notifications
//   const filteredNotifications =
//     filter === "all"
//       ? notifications
//       : notifications.filter((notif) => notif.type === filter);

//   // Mark a notification as read/unread
//   const toggleReadStatus = (id) => {
//     setNotifications((prev) =>
//       prev.map((notif) =>
//         notif.id === id ? { ...notif, read: !notif.read } : notif
//       )
//     );
//   };

//   // Remove a single notification
//   const dismissNotification = (id) => {
//     setNotifications((prev) => prev.filter((notif) => notif.id !== id));
//   };

//   // Clear all notifications
//   const clearAllNotifications = () => {
//     setNotifications([]);
//   };

//   return (
//     <motion.div
//       className="p-6 max-w-3xl mx-auto text-white"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}>
//       <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400 drop-shadow-lg flex items-center justify-center gap-2">
//         <FaBell /> Notifications
//       </h2>

//       {/* Filter Tabs */}
//       <div className="flex justify-center gap-4 mb-6">
//         {["all", "system", "message", "alert"].map((category) => (
//           <button
//             key={category}
//             className={`px-4 py-2 rounded-lg ${
//               filter === category
//                 ? "bg-yellow-500"
//                 : "bg-gray-700 hover:bg-gray-600"
//             } transition-all`}
//             onClick={() => setFilter(category)}>
//             {category.charAt(0).toUpperCase() + category.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* Action Buttons */}
//       <div className="flex justify-between items-center mb-4">
//         <button
//           className="bg-red-500 px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:bg-red-600 transition-all"
//           onClick={clearAllNotifications}
//           disabled={notifications.length === 0}>
//           <FaTrash /> Clear All
//         </button>
//         <span className="text-gray-400">
//           {filteredNotifications.length} notifications
//         </span>
//       </div>

//       {/* Notifications List */}
//       <div className="space-y-4">
//         <AnimatePresence>
//           {filteredNotifications.length > 0 ? (
//             filteredNotifications.map((notif) => (
//               <motion.div
//                 key={notif.id}
//                 className={`flex items-center justify-between p-4 rounded-lg shadow-lg bg-gray-900 ${
//                   notif.read ? "opacity-60" : "opacity-100"
//                 }`}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 20 }}
//                 transition={{ duration: 0.3 }}>
//                 <div className="flex items-center gap-3">
//                   {notif.icon}
//                   <div>
//                     <p className="text-lg">{notif.message}</p>
//                     <p className="text-gray-400 text-sm">{notif.timestamp}</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <button
//                     className="text-blue-400 hover:text-blue-500"
//                     onClick={() => toggleReadStatus(notif.id)}>
//                     {notif.read ? <FaEyeSlash /> : <FaEye />}
//                   </button>
//                   <button
//                     className="text-red-400 hover:text-red-500"
//                     onClick={() => dismissNotification(notif.id)}>
//                     <FaTimes />
//                   </button>
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <p className="text-center text-gray-400">No notifications found.</p>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// export default Notifications;


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaBell,
//   FaTimes,
//   FaCheckCircle,
//   FaExclamationTriangle,
//   FaInfoCircle,
//   FaTrash,
//   FaEye,
//   FaEyeSlash,
// } from "react-icons/fa";

// const Notifications = () => {
//   const [notifications, setNotifications] = useState([
//     {
//       id: 1,
//       type: "system",
//       message: "System update completed successfully.",
//       icon: <FaCheckCircle className="text-green-400" />,
//       timestamp: "Just now",
//       read: false,
//     },
//     {
//       id: 2,
//       type: "alert",
//       message: "Security Alert: Unusual login attempt detected!",
//       icon: <FaExclamationTriangle className="text-yellow-400" />,
//       timestamp: "2 mins ago",
//       read: false,
//     },
//     {
//       id: 3,
//       type: "message",
//       message: "Admin sent a new announcement.",
//       icon: <FaInfoCircle className="text-blue-400" />,
//       timestamp: "5 mins ago",
//       read: true,
//     },
//     {
//       id: 4,
//       type: "system",
//       message: "Scheduled maintenance will occur tonight at 12 AM.",
//       icon: <FaCheckCircle className="text-green-400" />,
//       timestamp: "10 mins ago",
//       read: false,
//     },
//   ]);

//   const [filter, setFilter] = useState("all");

//   // Filter Notifications
//   const filteredNotifications =
//     filter === "all"
//       ? notifications
//       : notifications.filter((notif) => notif.type === filter);

//   // Mark a notification as read/unread
//   const toggleReadStatus = (id) => {
//     setNotifications((prev) =>
//       prev.map((notif) =>
//         notif.id === id ? { ...notif, read: !notif.read } : notif
//       )
//     );
//   };

//   // Remove a single notification
//   const dismissNotification = (id) => {
//     setNotifications((prev) => prev.filter((notif) => notif.id !== id));
//   };

//   // Clear all notifications
//   const clearAllNotifications = () => {
//     setNotifications([]);
//   };

//   return (
//     <motion.div
//       className="p-8 max-w-3xl mx-auto text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-xl"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}>
//       <div className="flex items-center justify-between">
//         <h2 className="text-3xl font-bold mb-6 text-yellow-400 drop-shadow-lg flex items-center gap-3">
//           <FaBell /> Notifications
//           {notifications.filter((notif) => !notif.read).length > 0 && (
//             <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-full animate-pulse">
//               {notifications.filter((notif) => !notif.read).length}
//             </span>
//           )}
//         </h2>

//         <button
//           className="bg-red-500 px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:bg-red-600 transition-all"
//           onClick={clearAllNotifications}
//           disabled={notifications.length === 0}>
//           <FaTrash /> Clear All
//         </button>
//       </div>

//       {/* Filter Tabs */}
//       <div className="flex justify-center gap-4 mb-6">
//         {["all", "system", "message", "alert"].map((category) => (
//           <motion.button
//             key={category}
//             className={`px-4 py-2 rounded-full ${
//               filter === category
//                 ? "bg-yellow-500 text-black"
//                 : "bg-gray-700 hover:bg-gray-600"
//             } transition-all shadow-md`}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setFilter(category)}>
//             {category.charAt(0).toUpperCase() + category.slice(1)}
//           </motion.button>
//         ))}
//       </div>

//       {/* Notifications List */}
//       <div className="space-y-4">
//         <AnimatePresence>
//           {filteredNotifications.length > 0 ? (
//             filteredNotifications.map((notif) => (
//               <motion.div
//                 key={notif.id}
//                 className={`flex items-center justify-between p-5 rounded-lg shadow-lg bg-gray-900 ${
//                   notif.read ? "opacity-60" : "opacity-100"
//                 } transition-all`}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 20 }}
//                 transition={{ duration: 0.3 }}>
//                 <div className="flex items-center gap-4">
//                   {notif.icon}
//                   <div>
//                     <p className="text-lg">{notif.message}</p>
//                     <p className="text-gray-400 text-sm">{notif.timestamp}</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <button
//                     className="text-blue-400 hover:text-blue-500"
//                     onClick={() => toggleReadStatus(notif.id)}>
//                     {notif.read ? <FaEyeSlash /> : <FaEye />}
//                   </button>
//                   <button
//                     className="text-red-400 hover:text-red-500"
//                     onClick={() => dismissNotification(notif.id)}>
//                     <FaTimes />
//                   </button>
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <p className="text-center text-gray-400">No notifications found.</p>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// export default Notifications;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaBell,
//   FaTimes,
//   FaCheckCircle,
//   FaExclamationTriangle,
//   FaInfoCircle,
//   FaTrash,
//   FaEye,
//   FaEyeSlash,
//   FaSearch,
// } from "react-icons/fa";
// import toast, { Toaster } from "react-hot-toast";

// const Notifications = () => {
//   const [notifications, setNotifications] = useState([
//     {
//       id: 1,
//       type: "system",
//       message: "System update completed successfully.",
//       icon: <FaCheckCircle className="text-green-400" />,
//       timestamp: Date.now() - 2000,
//       read: false,
//     },
//     {
//       id: 2,
//       type: "alert",
//       message: "Security Alert: Unusual login attempt detected!",
//       icon: <FaExclamationTriangle className="text-yellow-400" />,
//       timestamp: Date.now() - 120000,
//       read: false,
//     },
//     {
//       id: 3,
//       type: "message",
//       message: "Admin sent a new announcement.",
//       icon: <FaInfoCircle className="text-blue-400" />,
//       timestamp: Date.now() - 300000,
//       read: true,
//     },
//   ]);

//   const [filter, setFilter] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");

//   // Format timestamps dynamically
//   const formatTime = (timestamp) => {
//     const diff = Math.floor((Date.now() - timestamp) / 1000);
//     if (diff < 60) return `${diff} sec ago`;
//     if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
//     if (diff < 86400) return `${Math.floor(diff / 3600)} hrs ago`;
//     return `${Math.floor(diff / 86400)} days ago`;
//   };

//   // Filtered Notifications
//   const filteredNotifications = notifications
//     .filter((notif) => (filter === "all" ? true : notif.type === filter))
//     .filter((notif) =>
//       notif.message.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//   // Mark as Read/Unread
//   const toggleReadStatus = (id) => {
//     setNotifications((prev) =>
//       prev.map((notif) =>
//         notif.id === id ? { ...notif, read: !notif.read } : notif
//       )
//     );
//   };

//   // Dismiss Notification
//   const dismissNotification = (id) => {
//     setNotifications((prev) => prev.filter((notif) => notif.id !== id));
//   };

//   // Clear All
//   const clearAllNotifications = () => {
//     setNotifications([]);
//     toast.success("All notifications cleared!");
//   };

//   // Auto-clear old notifications (after 30s)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setNotifications((prev) =>
//         prev.filter((notif) => Date.now() - notif.timestamp < 30000)
//       );
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   // Simulate New Notification (Testing)
//   useEffect(() => {
//     const newNotification = {
//       id: Date.now(),
//       type: "message",
//       message: "New exam notification received!",
//       icon: <FaInfoCircle className="text-blue-400" />,
//       timestamp: Date.now(),
//       read: false,
//     };
//     setTimeout(() => {
//       setNotifications((prev) => [...prev, newNotification]);
//       toast("📩 New Notification Received!", {
//         style: { background: "#1f2937", color: "#fff" },
//       });
//     }, 10000);
//   }, []);

//   return (
//     <motion.div
//       className="p-8 max-w-3xl mx-auto text-white bg-gray-900 rounded-2xl shadow-xl relative"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}>
//       <Toaster position="top-center" />

//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <h2 className="text-3xl font-bold mb-6 text-yellow-400 flex items-center gap-3">
//           <FaBell /> Notifications
//           {notifications.filter((notif) => !notif.read).length > 0 && (
//             <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-full animate-pulse">
//               {notifications.filter((notif) => !notif.read).length}
//             </span>
//           )}
//         </h2>

//         <button
//           className="bg-red-500 px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:bg-red-600 transition-all"
//           onClick={clearAllNotifications}
//           disabled={notifications.length === 0}>
//           <FaTrash /> Clear All
//         </button>
//       </div>

//       {/* Search Bar */}
//       <div className="relative mb-6">
//         <FaSearch className="absolute left-3 top-3 text-gray-400" />
//         <input
//           type="text"
//           placeholder="Search notifications..."
//           className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       {/* Filter Buttons */}
//       <div className="flex justify-center gap-4 mb-6">
//         {["all", "system", "message", "alert"].map((category) => (
//           <motion.button
//             key={category}
//             className={`px-4 py-2 rounded-full ${
//               filter === category
//                 ? "bg-yellow-500 text-black"
//                 : "bg-gray-700 hover:bg-gray-600"
//             } transition-all shadow-md`}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setFilter(category)}>
//             {category.charAt(0).toUpperCase() + category.slice(1)}
//           </motion.button>
//         ))}
//       </div>

//       {/* Notifications List */}
//       <div className="space-y-4">
//         <AnimatePresence>
//           {filteredNotifications.length > 0 ? (
//             filteredNotifications.map((notif) => (
//               <motion.div
//                 key={notif.id}
//                 className={`flex items-center justify-between p-5 rounded-lg shadow-lg bg-gray-900 ${
//                   notif.read ? "opacity-60" : "opacity-100"
//                 } transition-all`}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 20 }}
//                 transition={{ duration: 0.3 }}>
//                 <div className="flex items-center gap-4">
//                   {notif.icon}
//                   <div>
//                     <p className="text-lg">{notif.message}</p>
//                     <p className="text-gray-400 text-sm">
//                       {formatTime(notif.timestamp)}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <button
//                     className="text-blue-400 hover:text-blue-500"
//                     onClick={() => toggleReadStatus(notif.id)}>
//                     {notif.read ? <FaEyeSlash /> : <FaEye />}
//                   </button>
//                   <button
//                     className="text-red-400 hover:text-red-500"
//                     onClick={() => dismissNotification(notif.id)}>
//                     <FaTimes />
//                   </button>
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <p className="text-center text-gray-400">No notifications found.</p>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// export default Notifications;


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
