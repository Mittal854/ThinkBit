import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Login
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://thinkbit.onrender.comapi/auth/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      console.log("Login Response Data:", response.data); // Debugging

      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role);
      localStorage.setItem("userId", user.id);
      localStorage.setItem("username", user.name);

      toast.success(`Welcome back, ${user.name}! Redirecting...`, {
        position: "top-center",
      });

      setTimeout(() => {
        if (user.role === "student") {
          navigate("/dashboard/student/myexams");
        } else if (user.role === "examiner") {
          navigate("/dashboard/examiner/createexam");
        } else if (user.role === "admin") {
          navigate("/dashboard/admin/usermanagement");
        } else {
          toast.error("Invalid role assigned. Please contact support.");
        }
      }, 1500);
      setTimeout(() => {
        window.location.reload();
      }, 1510);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Login failed. Please try again.";

      toast.error(errorMessage, {
        position: "top-center",
      });
    }
  };

  // Handle Registration
  const handleRegister = async () => {
    try {
      if (formData.role === "admin") {
        toast.error("Admin registration is not allowed.", {
          position: "top-center",
        });
        return;
      }
      await axios.post(
        "https://thinkbit.onrender.comapi/auth/register",
        formData
      );
      toast.success("Registration successful! You can now log in.", {
        position: "top-center",
      });
      setTimeout(() => setIsLogin(true), 1500);
    } catch (error) {
      toast.error("Registration failed. Please check your details.", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <motion.div
        className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-bold text-center mb-4">
          {isLogin ? "Welcome Back" : "Create an Account"}
        </h2>
        <form className="space-y-4">
          {!isLogin && (
            <div className="flex items-center bg-gray-700 p-3 rounded-lg">
              <FaUser className="text-gray-400 mr-3" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="bg-transparent outline-none w-full text-white"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="flex items-center bg-gray-700 p-3 rounded-lg">
            <FaEnvelope className="text-gray-400 mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-transparent outline-none w-full text-white"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center bg-gray-700 p-3 rounded-lg">
            <FaLock className="text-gray-400 mr-3" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="bg-transparent outline-none w-full text-white"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {!isLogin && (
            <select
              name="role"
              className="w-full p-3 bg-gray-700 rounded-lg text-white"
              value={formData.role}
              onChange={handleChange}
              required>
              <option value="student">Student</option>
              <option value="examiner">Examiner</option>
            </select>
          )}
          <button
            type="button"
            onClick={isLogin ? handleLogin : handleRegister}
            className="w-full bg-purple-600 hover:bg-purple-700 p-3 rounded-lg font-semibold">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="text-center mt-4 text-gray-400">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            className="text-purple-400 hover:underline"
            onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </motion.div>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default AuthPage;
