import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBook, FaClock, FaUsers } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";

const Exams = () => {
  const [exams, setExams] = useState([]);
  const [timeLeft, setTimeLeft] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const userRole = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  let userId = null;

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      userId = decodedToken.id || decodedToken._id;
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await fetch(
          "https://thibkbit-backend.vercel.app/api/exam/allexams"
        );
        if (!response.ok) throw new Error("Failed to fetch exams");
        const data = await response.json();
        setExams(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchExams();
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      const updatedTime = {};
      exams.forEach((exam) => {
        const now = new Date().getTime();
        const startTime = new Date(exam.startTime).getTime();
        const endTime = exam.endTime ? new Date(exam.endTime).getTime() : null;

        if (endTime && now > endTime) {
          updatedTime[exam._id] = "Exam ended ";
        } else if (now < startTime) {
          const diff = startTime - now;
          updatedTime[exam._id] = `${Math.floor(
            diff / (1000 * 60 * 60 * 24)
          )}d ${Math.floor((diff / (1000 * 60 * 60)) % 24)}h ${Math.floor(
            (diff / 1000 / 60) % 60
          )}m left ⏳`;
        } else {
          updatedTime[exam._id] = "Ongoing 🚀";
        }
      });
      setTimeLeft(updatedTime);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 60000);
    return () => clearInterval(timer);
  }, [exams]);

  const handleEnroll = async (exam) => {
    if (userRole !== "student") {
      toast.error("Only students can enroll in exams!");
      return;
    }

    const now = new Date().getTime();
    const examEndTime = new Date(exam.endTime).getTime();
    if (now > examEndTime) {
      toast.error("Enrollment closed! Exam has ended.");
      return;
    }

    try {
      const response = await fetch(
        "https://thibkbit-backend.vercel.app/api/exam/enroll",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ examId: exam._id }),
        }
      );

      if (!response.ok) throw new Error("Enrollment failed!");
      toast.success(`You have successfully enrolled in ${exam.title}! ✅`);

      const updatedExamsResponse = await fetch(
        "https://thibkbit-backend.vercel.app/api/exam/allexams"
      );
      const updatedExams = await updatedExamsResponse.json();
      setExams(updatedExams);
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (loading)
    return <p className="text-center text-lg text-white">Loading exams...</p>;
  if (error) return <p className="text-center text-red-500 text-lg">{error}</p>;

  return (
    <div className="min-h-screen p-6 mt-17 text-white">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-400">
          🚀 Exams
        </h2>
        <div className="grid md:grid-cols-2 mt-10 gap-6">
          {exams.map((exam) => (
            <motion.div
              key={exam._id}
              className="bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700 backdrop-blur-lg bg-opacity-80"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}>
              <h3 className="text-xl font-bold flex items-center gap-2 mb-2 text-blue-400">
                <FaBook /> {exam.title}
              </h3>
              <p className="text-gray-300 flex items-center gap-2">
                <FaClock className="text-yellow-400" />{" "}
                {new Date(exam.startTime).toLocaleString()}
              </p>
              <p className="text-gray-300 mt-2">{exam.description}</p>
              <p className="text-gray-300 flex items-center gap-2">
                <FaUsers className="text-pink-400" />{" "}
                {exam.enrolledStudents.length} Enrolled
              </p>
              <p className="text-sm text-green-400 mt-2">
                {timeLeft[exam._id] || "Loading..."}
              </p>
              {userRole === "student" &&
                userId &&
                !exam.enrolledStudents.some(
                  (s) => s?._id?.toString() === userId
                ) &&
                new Date().getTime() < new Date(exam.endTime).getTime() && (
                  <button
                    className="mt-4 bg-green-500 px-4 py-2 rounded-lg font-semibold text-white hover:bg-green-600"
                    onClick={() => handleEnroll(exam)}>
                    Enroll Now
                  </button>
                )}
              {exam.enrolledStudents.some(
                (s) => s?._id?.toString() === userId
              ) && (
                <p className="text-green-400 font-semibold mt-2">✅ Enrolled</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exams;
