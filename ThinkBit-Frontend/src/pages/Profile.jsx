// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//   const navigate = useNavigate();

//   // Static user data (will be replaced with API data later)
//   const user = {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     role: "student", // Can be "examiner" or "admin"
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     navigate("/auth");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
//       <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center w-96">
//         <h1 className="text-2xl font-bold text-blue-400">Profile</h1>
//         <p className="text-lg mt-4">
//           <strong>Name:</strong> {user.name}
//         </p>
//         <p className="text-lg">
//           <strong>Email:</strong> {user.email}
//         </p>
//         <p className="text-lg">
//           <strong>Role:</strong> {user.role}
//         </p>

//         <button
//           onClick={handleLogout}
//           className="mt-6 bg-red-500 hover:bg-red-700 px-4 py-2 rounded-lg transition-all duration-300">
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   FaUser,
//   FaEnvelope,
//   FaUserTag,
//   FaCalendarAlt,
//   FaEdit,
//   FaSignOutAlt,
// } from "react-icons/fa";

// const Profile = () => {
//   const navigate = useNavigate();

//   // Static user data (replace with API data later)
//   const user = {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     role: "student", // Can be "examiner" or "admin"
//     joined: "January 15, 2024",
//     status: "Active",
//   };

//   const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     navigate("/auth");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
//       <motion.div
//         className="bg-gray-800 bg-opacity-80 backdrop-blur-md p-8 rounded-xl shadow-lg text-center w-96 relative"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}>
//         <div className="flex justify-center mb-4">
//           <motion.div
//             className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg"
//             whileHover={{ scale: 1.1 }}>
//             <FaUser />
//           </motion.div>
//         </div>

//         <h1 className="text-2xl font-bold text-blue-400">{user.name}</h1>
//         <p className="text-gray-300 text-sm">Joined: {user.joined}</p>

//         <div className="mt-4 space-y-3">
//           <p className="flex items-center gap-2 text-lg">
//             <FaEnvelope className="text-yellow-400" /> {user.email}
//           </p>
//           <p className="flex items-center gap-2 text-lg">
//             <FaUserTag className="text-green-400" />
//             <span className="capitalize bg-gray-700 px-2 py-1 rounded-md">
//               {user.role}
//             </span>
//           </p>
//           <p className="flex items-center gap-2 text-lg">
//             <FaCalendarAlt className="text-pink-400" /> {user.status}
//           </p>
//         </div>

//         <div className="mt-6 flex justify-center gap-4">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
//             <FaEdit /> Edit Profile
//           </motion.button>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold flex items-center gap-2"
//             onClick={() => setShowLogoutConfirm(true)}>
//             <FaSignOutAlt /> Logout
//           </motion.button>
//         </div>
//       </motion.div>

//       {showLogoutConfirm && (
//         <motion.div
//           className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}>
//           <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg">
//             <p className="text-lg mb-4">Are you sure you want to logout?</p>
//             <div className="flex justify-center gap-4">
//               <button
//                 className="bg-red-500 px-4 py-2 rounded-lg font-semibold hover:bg-red-700"
//                 onClick={handleLogout}>
//                 Yes, Logout
//               </button>
//               <button
//                 className="bg-gray-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-700"
//                 onClick={() => setShowLogoutConfirm(false)}>
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default Profile;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   FaUser,
//   FaEnvelope,
//   FaUserTag,
//   FaCalendarAlt,
//   FaEdit,
//   FaSignOutAlt,
//   FaChartLine,
//   FaClock,
// } from "react-icons/fa";

// const Profile = () => {
//   const navigate = useNavigate();

//   // Static user data (Replace with API data later)
//   const user = {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     role: "student", // Options: "examiner", "admin"
//     joined: "January 15, 2024",
//     lastLogin: "March 2, 2025 - 10:45 AM",
//     status: "Active",
//     activityLevel: "High",
//   };

//   const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     navigate("/auth");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white px-6">
//       <motion.div
//         className="bg-gray-900 bg-opacity-90 backdrop-blur-md p-10 rounded-2xl shadow-2xl text-center w-[400px] relative border border-gray-700 neon-glow"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}>
//         {/* Avatar */}
//         <motion.div
//           className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-4xl font-bold shadow-lg border-4 border-white absolute -top-12 left-1/2 transform -translate-x-1/2 avatar-hover"
//           whileHover={{ scale: 1.1, rotate: 10 }}>
//           <FaUser />
//         </motion.div>

//         {/* User Details */}
//         <h1 className="text-3xl font-bold text-blue-400 mt-10">{user.name}</h1>
//         <p className="text-gray-300 text-sm mt-1">Joined: {user.joined}</p>

//         <div className="mt-6 space-y-4">
//           <p className="flex items-center gap-3 text-lg">
//             <FaEnvelope className="text-yellow-400" /> {user.email}
//           </p>
//           <p className="flex items-center gap-3 text-lg">
//             <FaUserTag className="text-green-400" />
//             <span className="capitalize bg-gray-800 px-3 py-1 rounded-lg shadow-md">
//               {user.role}
//             </span>
//           </p>
//           <p className="flex items-center gap-3 text-lg">
//             <FaClock className="text-red-400" /> Last Login: {user.lastLogin}
//           </p>
//           <p className="flex items-center gap-3 text-lg">
//             <FaChartLine className="text-pink-400" /> Activity Level:
//             <span className="bg-gray-800 px-3 py-1 rounded-lg shadow-md">
//               {user.activityLevel}
//             </span>
//           </p>
//         </div>

//         {/* Buttons */}
//         <div className="mt-8 flex justify-center gap-4">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-md">
//             <FaEdit /> Edit Profile
//           </motion.button>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-md"
//             onClick={() => setShowLogoutConfirm(true)}>
//             <FaSignOutAlt /> Logout
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Logout Confirmation Modal */}
//       {showLogoutConfirm && (
//         <motion.div
//           className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}>
//           <div className="bg-gray-900 p-6 rounded-lg text-center shadow-lg border border-gray-700">
//             <p className="text-lg mb-4">Are you sure you want to logout?</p>
//             <div className="flex justify-center gap-4">
//               <button
//                 className="bg-red-500 px-4 py-2 rounded-lg font-semibold hover:bg-red-700"
//                 onClick={handleLogout}>
//                 Yes, Logout
//               </button>
//               <button
//                 className="bg-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-800"
//                 onClick={() => setShowLogoutConfirm(false)}>
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default Profile;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   FaUser,
//   FaEnvelope,
//   FaUserTag,
//   FaCalendarAlt,
//   FaEdit,
//   FaSignOutAlt,
//   FaChartLine,
//   FaClock,
//   FaTrophy,
//   FaBookOpen,
// } from "react-icons/fa";

// const Profile = () => {
//   const navigate = useNavigate();
//   const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

//   // Mock user data (Replace with API data later)
//   const user = {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     role: "student",
//     joined: "January 15, 2024",
//     lastLogin: "March 2, 2025 - 10:45 AM",
//     status: "Active",
//     activityLevel: "High",
//     examsTaken: 15,
//     highestScore: "92%",
//     badgesEarned: 5,
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     navigate("/auth");
//   };

//   return (
//     <div className="relative flex flex-col items-center mt-10 justify-center min-h-screen  text-white px-6 overflow-hidden">
//       {/* Animated Background */}
//       {/* <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-10 blur-3xl"></div>
//         <div className="absolute w-72 h-72 bg-blue-500 opacity-30 rounded-full filter blur-3xl animate-pulse top-1/4 left-10"></div>
//         <div className="absolute w-72 h-72 bg-purple-500 opacity-30 rounded-full filter blur-3xl animate-pulse bottom-1/4 right-10"></div>
//       </div> */}

//       <motion.div
//         className="relative bg-gray-800 bg-opacity-80 backdrop-blur-lg p-10 rounded-2xl shadow-2xl text-center w-[400px] border border-gray-700 neon-glow"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}>
//         {/* Animated Avatar */}
//         <motion.div
//           className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-4xl font-bold shadow-lg border-4 border-white absolute -top-12 left-1/2 transform -translate-x-1/2 avatar-hover"
//           whileHover={{ scale: 1.1, rotate: 10 }}>
//           <FaUser />
//         </motion.div>

//         {/* User Details */}
//         <h1 className="text-3xl font-bold text-blue-400 mt-10">{user.name}</h1>
//         <p className="text-gray-300 text-sm mt-1">Joined: {user.joined}</p>

//         <div className="mt-6 space-y-4">
//           <p className="flex items-center gap-3 text-lg">
//             <FaEnvelope className="text-yellow-400" /> {user.email}
//           </p>
//           <p className="flex items-center gap-3 text-lg">
//             <FaUserTag className="text-green-400" />
//             <span className="capitalize bg-gray-800 px-3 py-1 rounded-lg shadow-md">
//               {user.role}
//             </span>
//           </p>
//           <p className="flex items-center gap-3 text-lg">
//             <FaClock className="text-red-400" /> Last Login: {user.lastLogin}
//           </p>
//           <p className="flex items-center gap-3 text-lg">
//             <FaChartLine className="text-pink-400" /> Activity Level:
//             <span className="bg-gray-800 px-3 py-1 rounded-lg shadow-md">
//               {user.activityLevel}
//             </span>
//           </p>
//         </div>

//         {/* Stats Section */}
//         <div className="mt-8 bg-gray-800 p-4 rounded-lg shadow-md text-gray-300">
//           <h2 className="text-lg font-semibold text-white mb-3">Your Stats</h2>
//           <p className="flex items-center justify-between">
//             <FaBookOpen className="text-blue-400" /> Exams Taken:{" "}
//             <span className="text-lg text-blue-300">{user.examsTaken}</span>
//           </p>
//           <p className="flex items-center justify-between">
//             <FaTrophy className="text-yellow-400" /> Highest Score:{" "}
//             <span className="text-lg text-yellow-300">{user.highestScore}</span>
//           </p>
//           <p className="flex items-center justify-between">
//             <FaUser className="text-purple-400" /> Badges Earned:{" "}
//             <span className="text-lg text-purple-300">{user.badgesEarned}</span>
//           </p>
//         </div>

//         {/* Buttons */}
//         <div className="mt-8 flex justify-center gap-4">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-md">
//             <FaEdit /> Edit Profile
//           </motion.button>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-md"
//             onClick={() => setShowLogoutConfirm(true)}>
//             <FaSignOutAlt /> Logout
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Logout Confirmation Modal */}
//       {showLogoutConfirm && (
//         <motion.div
//           className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}>
//           <div className="bg-gray-900 p-6 rounded-lg text-center shadow-lg border border-gray-700">
//             <p className="text-lg mb-4">Are you sure you want to logout?</p>
//             <div className="flex justify-center gap-4">
//               <button
//                 className="bg-red-500 px-4 py-2 rounded-lg font-semibold hover:bg-red-700"
//                 onClick={handleLogout}>
//                 Yes, Logout
//               </button>
//               <button
//                 className="bg-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-800"
//                 onClick={() => setShowLogoutConfirm(false)}>
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default Profile;

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import axios from "axios";
// import {
//   FaUser,
//   FaEnvelope,
//   FaUserTag,
//   FaCalendarAlt,
//   FaEdit,
//   FaSignOutAlt,
//   FaChartLine,
//   FaClock,
//   FaTrophy,
//   FaBookOpen,
//   FaUsers,
//   FaClipboardList,
//   FaChartPie,
// } from "react-icons/fa";

// const Profile = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get("http://localhost:5000/api/user/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUser(res.data);
//       } catch (error) {
//         console.error("Error fetching profile:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     navigate("/auth");
//   };

//   if (loading) {
//     return <div className="text-center mt-20 text-white">Loading...</div>;
//   }

//   return (
//     <div className="relative flex flex-col items-center mt-10 justify-center min-h-screen text-white px-6 overflow-hidden">
//       <motion.div
//         className="relative bg-gray-800 bg-opacity-80 backdrop-blur-lg p-10 rounded-2xl shadow-2xl text-center w-[400px] border border-gray-700 neon-glow"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}>
//         <motion.div
//           className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-4xl font-bold shadow-lg border-4 border-white absolute -top-12 left-1/2 transform -translate-x-1/2 avatar-hover"
//           whileHover={{ scale: 1.1, rotate: 10 }}>
//           <FaUser />
//         </motion.div>

//         <h1 className="text-3xl font-bold text-blue-400 mt-10">{user?.name}</h1>
//         <p className="text-gray-300 text-sm mt-1">Joined: {user?.joined}</p>

//         <div className="mt-6 space-y-4">
//           <p className="flex items-center gap-3 text-lg">
//             <FaEnvelope className="text-yellow-400" /> {user?.email}
//           </p>
//           <p className="flex items-center gap-3 text-lg">
//             <FaUserTag className="text-green-400" />
//             <span className="capitalize bg-gray-800 px-3 py-1 rounded-lg shadow-md">
//               {user?.role}
//             </span>
//           </p>
//         </div>

//         {/* Role-Specific Dashboard Sections */}
//         {user?.role === "student" && (
//           <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md text-gray-300">
//             <h2 className="text-lg font-semibold text-white mb-3">
//               Student Dashboard
//             </h2>
//             <p>View Exam History, Track Performance, Earn Badges</p>
//           </div>
//         )}

//         {user?.role === "examiner" && (
//           <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md text-gray-300">
//             <h2 className="text-lg font-semibold text-white mb-3">
//               Examiner Dashboard
//             </h2>
//             <p className="flex items-center gap-2">
//               <FaClipboardList className="text-yellow-400" /> Manage Exams
//             </p>
//             <p className="flex items-center gap-2">
//               <FaChartPie className="text-blue-400" /> Evaluate Responses
//             </p>
//           </div>
//         )}

//         {user?.role === "admin" && (
//           <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md text-gray-300">
//             <h2 className="text-lg font-semibold text-white mb-3">
//               Admin Dashboard
//             </h2>
//             <p className="flex items-center gap-2">
//               <FaUsers className="text-green-400" /> Manage Users
//             </p>
//             <p className="flex items-center gap-2">
//               <FaChartPie className="text-blue-400" /> Monitor Performance
//             </p>
//           </div>
//         )}

//         <div className="mt-8 flex justify-center gap-4">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-md">
//             <FaEdit /> Edit Profile
//           </motion.button>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-md"
//             onClick={() => setShowLogoutConfirm(true)}>
//             <FaSignOutAlt /> Logout
//           </motion.button>
//         </div>
//       </motion.div>

//       {showLogoutConfirm && (
//         <motion.div
//           className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}>
//           <div className="bg-gray-900 p-6 rounded-lg text-center shadow-lg border border-gray-700">
//             <p className="text-lg mb-4">Are you sure you want to logout?</p>
//             <button
//               className="bg-red-500 px-4 py-2 rounded-lg font-semibold"
//               onClick={handleLogout}>
//               Yes, Logout
//             </button>
//             <button
//               className="bg-gray-700 px-4 py-2 rounded-lg font-semibold"
//               onClick={() => setShowLogoutConfirm(false)}>
//               Cancel
//             </button>
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default Profile;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaUserTag,
  FaCalendarAlt,
  FaEdit,
  FaSignOutAlt,
  FaChartLine,
  FaClock,
  FaTrophy,
  FaBookOpen,
  FaUsers,
  FaTasks,
} from "react-icons/fa";

const Profile = () => {
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const fetchUserProfile = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/api/user/profile", {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       });
  //       const data = await response.json();
  //       setUser(data);
  //     } catch (error) {
  //       console.error("Error fetching user profile:", error);
  //     }
  //   };
  //   fetchUserProfile();
  // }, []);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        

        // If no user data received, manually set admin details
        if (localStorage.getItem("role") === "admin") {
          setUser({
            name: "Admin",
            email: "admin@thinkbit.com",
            role: "admin",
            totalUsers: 100, // Placeholder, update dynamically
          });
        } else {
          const response = await fetch(
            "http://localhost:5000/api/user/profile",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
              },
            }
          );

          if (!response.ok) throw new Error("Failed to fetch profile");

          const data = await response.json();
          setUser(data);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/auth");
  };

  if (!user) return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <div className="relative flex flex-col items-center mt-10 justify-center min-h-screen text-white px-6 overflow-hidden">
      <motion.div
        className="relative bg-gray-800 bg-opacity-80 backdrop-blur-lg p-10 rounded-2xl shadow-2xl text-center w-[400px] border border-gray-700 neon-glow"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
        <motion.div
          className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-4xl font-bold shadow-lg border-4 border-white absolute -top-12 left-1/2 transform -translate-x-1/2 avatar-hover"
          whileHover={{ scale: 1.1, rotate: 10 }}>
          <FaUser />
        </motion.div>

        <h1 className="text-3xl font-bold text-blue-400 mt-10">{user.name}</h1>
        {/* <p className="text-gray-300 text-sm mt-1">Joined: {user.joined}</p> */}

        <div className="mt-6 space-y-4">
          <p className="flex items-center gap-3 text-lg">
            <FaEnvelope className="text-yellow-400" /> {user.email}
          </p>
          <p className="flex items-center gap-3 text-lg">
            <FaUserTag className="text-green-400" />
            <span className="capitalize bg-gray-800 px-3 py-1 rounded-lg shadow-md">
              {user.role}
            </span>
          </p>
          {/* <p className="flex items-center gap-3 text-lg">
            <FaClock className="text-red-400" /> Last Login: {user.lastLogin}
          </p> */}
        </div>

        {/* Role-based Sections */}
        {/* {user.role === "student" && (
          <div className="mt-8 bg-gray-800 p-4 rounded-lg shadow-md text-gray-300">
            <h2 className="text-lg font-semibold text-white mb-3">
              Your Stats
            </h2>
            <p className="flex items-center justify-between">
              <FaBookOpen className="text-blue-400" /> Exams Taken:{" "}
              <span className="text-lg text-blue-300">{user.examsTaken}</span>
            </p>
            <p className="flex items-center justify-between">
              <FaTrophy className="text-yellow-400" /> Highest Score:{" "}
              <span className="text-lg text-yellow-300">
                {user.highestScore}
              </span>
            </p>
          </div>
        )}

        {user.role === "examiner" && (
          <div className="mt-8 bg-gray-800 p-4 rounded-lg shadow-md text-gray-300">
            <h2 className="text-lg font-semibold text-white mb-3">
              Examiner Dashboard
            </h2>
            <p className="flex items-center justify-between">
              <FaTasks className="text-green-400" /> Exams Created:{" "}
              <span className="text-lg text-green-300">
                {user.examsCreated}
              </span>
            </p>
          </div>
        )}

        {user.role === "admin" && (
          <div className="mt-8 bg-gray-800 p-4 rounded-lg shadow-md text-gray-300">
            <h2 className="text-lg font-semibold text-white mb-3">
              Admin Dashboard
            </h2>
            <p className="flex items-center justify-between">
              <FaUsers className="text-red-400" /> Total Users:{" "}
              <span className="text-lg text-red-300">{user.totalUsers}</span>
            </p>
          </div>
        )} */}

        <div className="mt-8 flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-md">
            <FaEdit /> Edit Profile
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-md"
            onClick={() => setShowLogoutConfirm(true)}>
            <FaSignOutAlt /> Logout
          </motion.button>
        </div>
      </motion.div>

      {showLogoutConfirm && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}>
          <div className="bg-gray-900 p-6 rounded-lg text-center shadow-lg border border-gray-700">
            <p className="text-lg mb-4">Are you sure you want to logout?</p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-red-500 px-4 py-2 rounded-lg font-semibold hover:bg-red-700"
                onClick={handleLogout}>
                Yes, Logout
              </button>
              <button
                className="bg-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-800"
                onClick={() => setShowLogoutConfirm(false)}>
                Cancel
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Profile;