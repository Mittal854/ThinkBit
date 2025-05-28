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
            "https://thinkbit-backend.onrender.com/api/user/profile",
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
    localStorage.removeItem("username");
    navigate("/auth");
    window.location.reload();
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
        </div>
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
