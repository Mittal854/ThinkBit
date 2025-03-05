// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   FaBook,
//   FaFilter,
//   FaClock,
//   FaClipboardList,
//   FaUsers,
//   FaQuestionCircle,
// } from "react-icons/fa";

// const examsData = [
//   {
//     id: 1,
//     title: "Mathematics - Algebra",
//     date: "March 10, 2025",
//     time: "10:00 AM",
//     duration: "90 min",
//     questions: 30,
//     enrollmentLimit: 100,
//     enrolled: 45,
//     status: "Upcoming",
//   },
//   {
//     id: 2,
//     title: "Physics - Mechanics",
//     date: "March 15, 2025",
//     time: "2:00 PM",
//     duration: "60 min",
//     questions: 25,
//     enrollmentLimit: 80,
//     enrolled: 75,
//     status: "Enrolled",
//   },
//   {
//     id: 3,
//     title: "Computer Science - Data Structures",
//     date: "March 20, 2025",
//     time: "4:00 PM",
//     duration: "120 min",
//     questions: 40,
//     enrollmentLimit: 50,
//     enrolled: 50,
//     status: "Completed",
//   },
//   {
//     id: 4,
//     title: "Chemistry - Organic",
//     date: "March 22, 2025",
//     time: "11:00 AM",
//     duration: "75 min",
//     questions: 28,
//     enrollmentLimit: 60,
//     enrolled: 30,
//     status: "Upcoming",
//   },
// ];

// const Exams = () => {
//   const [filter, setFilter] = useState("All");

//   // Filter exams based on status
//   const filteredExams =
//     filter === "All"
//       ? examsData
//       : examsData.filter((exam) => exam.status === filter);

//   // Function to calculate time left for upcoming exams
//   const getTimeLeft = (examDate) => {
//     const examTime = new Date(examDate).getTime();
//     const currentTime = new Date().getTime();
//     const timeLeft = examTime - currentTime;
//     const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));
//     return daysLeft > 0 ? `${daysLeft} days left` : "Starts today!";
//   };

//   return (
//     <div className="min-h-screen p-6">
//       <div className="max-w-6xl mx-auto text-white">
//         <h2 className="text-4xl font-bold mb-6 text-center text-blue-400 drop-shadow-lg">
//           📝 Available Exams
//         </h2>

//         {/* Filter Options */}
//         <div className="flex justify-center gap-4 mb-6">
//           {["All", "Upcoming", "Enrolled", "Completed"].map((category) => (
//             <button
//               key={category}
//               className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
//                 filter === category
//                   ? "bg-blue-500 text-white shadow-lg"
//                   : "bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white"
//               }`}
//               onClick={() => setFilter(category)}>
//               <FaFilter className="inline-block mr-2" /> {category}
//             </button>
//           ))}
//         </div>

//         {/* Exams List */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {filteredExams.map((exam) => (
//             <motion.div
//               key={exam.id}
//               className="bg-gray-800 bg-opacity-80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:bg-opacity-100 transition-all"
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.2 }}>
//               <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
//                 <FaBook className="text-blue-400" /> {exam.title}
//               </h3>
//               <p className="text-gray-400 flex items-center gap-2">
//                 <FaClock className="text-yellow-400" /> {exam.date} at{" "}
//                 {exam.time}
//               </p>
//               <p className="text-gray-400 flex items-center gap-2">
//                 <FaClipboardList className="text-green-400" /> Duration:{" "}
//                 {exam.duration}
//               </p>
//               <p className="text-gray-400 flex items-center gap-2">
//                 <FaQuestionCircle className="text-red-400" /> {exam.questions}{" "}
//                 Questions
//               </p>
//               <p className="text-gray-400 flex items-center gap-2">
//                 <FaUsers className="text-purple-400" /> {exam.enrolled}/
//                 {exam.enrollmentLimit} Enrolled
//               </p>
//               {exam.status === "Upcoming" && (
//                 <p className="text-sm font-semibold mt-2 text-green-400">
//                   {getTimeLeft(exam.date)}
//                 </p>
//               )}
//               <p
//                 className={`text-sm font-semibold mt-2 flex items-center gap-2 ${
//                   exam.status === "Upcoming"
//                     ? "text-green-400"
//                     : exam.status === "Enrolled"
//                     ? "text-yellow-400"
//                     : "text-gray-400"
//                 }`}>
//                 <FaClipboardList /> {exam.status}
//               </p>
//               {exam.status === "Upcoming" && (
//                 <button className="mt-4 bg-blue-500 px-4 py-2 rounded-lg font-semibold text-white shadow-lg hover:bg-blue-600 transition-all">
//                   Enroll Now
//                 </button>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Exams;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   FaBook,
//   FaFilter,
//   FaClock,
//   FaClipboardList,
//   FaUsers,
//   FaQuestionCircle,
//   FaCheckCircle,
//   FaTimesCircle,
//   FaStar,
// } from "react-icons/fa";

// const examsData = [
//   {
//     id: 1,
//     title: "Mathematics - Algebra",
//     date: "March 10, 2025 10:00:00",
//     duration: "90 min",
//     questions: 30,
//     enrollmentLimit: 100,
//     enrolled: 45,
//     passingMarks: 40,
//     level: "Intermediate",
//     type: "MCQ",
//     status: "Upcoming",
//   },
//   {
//     id: 2,
//     title: "Physics - Mechanics",
//     date: "March 15, 2025 14:00:00",
//     duration: "60 min",
//     questions: 25,
//     enrollmentLimit: 80,
//     enrolled: 75,
//     passingMarks: 50,
//     level: "Advanced",
//     type: "MCQ + Descriptive",
//     status: "Enrolled",
//   },
//   {
//     id: 3,
//     title: "Computer Science - Data Structures",
//     date: "March 20, 2025 16:00:00",
//     duration: "120 min",
//     questions: 40,
//     enrollmentLimit: 50,
//     enrolled: 50,
//     passingMarks: 60,
//     level: "Expert",
//     type: "Coding",
//     status: "Completed",
//   },
//   {
//     id: 4,
//     title: "Chemistry - Organic",
//     date: "March 22, 2025 11:00:00",
//     duration: "75 min",
//     questions: 28,
//     enrollmentLimit: 60,
//     enrolled: 30,
//     passingMarks: 45,
//     level: "Beginner",
//     type: "MCQ",
//     status: "Upcoming",
//   },
// ];

// const Exams = () => {
//   const [filter, setFilter] = useState("All");

//   const filteredExams =
//     filter === "All"
//       ? examsData
//       : examsData.filter((exam) => exam.status === filter);

//   // Countdown Timer
//   const [timeLeft, setTimeLeft] = useState({});

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const updatedTime = {};
//       examsData.forEach((exam) => {
//         if (exam.status === "Upcoming") {
//           const examTime = new Date(exam.date).getTime();
//           const now = new Date().getTime();
//           const diff = examTime - now;

//           if (diff > 0) {
//             const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//             const minutes = Math.floor((diff / 1000 / 60) % 60);
//             const seconds = Math.floor((diff / 1000) % 60);
//             updatedTime[exam.id] = `${hours}h ${minutes}m ${seconds}s left`;
//           } else {
//             updatedTime[exam.id] = "Starting now!";
//           }
//         }
//       });
//       setTimeLeft(updatedTime);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="bg-gray-950 min-h-screen p-6">
//       <div className="max-w-6xl mx-auto text-white">
//         <h2 className="text-4xl font-bold mb-6 text-center text-blue-400 drop-shadow-lg">
//           📝 Available Exams
//         </h2>

//         {/* Filter Options */}
//         <div className="flex justify-center gap-4 mb-6">
//           {["All", "Upcoming", "Enrolled", "Completed"].map((category) => (
//             <button
//               key={category}
//               className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
//                 filter === category
//                   ? "bg-blue-500 text-white shadow-lg"
//                   : "bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white"
//               }`}
//               onClick={() => setFilter(category)}>
//               <FaFilter className="inline-block mr-2" /> {category}
//             </button>
//           ))}
//         </div>

//         {/* Exams List */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {filteredExams.map((exam) => (
//             <motion.div
//               key={exam.id}
//               className="bg-gray-900 bg-opacity-80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:bg-opacity-100 transition-all"
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.2 }}>
//               <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
//                 <FaBook className="text-blue-400" /> {exam.title}
//               </h3>
//               <p className="text-gray-400 flex items-center gap-2">
//                 <FaClock className="text-yellow-400" /> {exam.date}
//               </p>
//               <p className="text-gray-400 flex items-center gap-2">
//                 <FaClipboardList className="text-green-400" /> Duration:{" "}
//                 {exam.duration}
//               </p>
//               <p className="text-gray-400 flex items-center gap-2">
//                 <FaQuestionCircle className="text-red-400" /> {exam.questions}{" "}
//                 Questions
//               </p>
//               <p className="text-gray-400 flex items-center gap-2">
//                 <FaUsers className="text-purple-400" /> {exam.enrolled}/
//                 {exam.enrollmentLimit} Enrolled
//               </p>
//               <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
//                 <div
//                   className="bg-blue-500 h-2 rounded-full"
//                   style={{
//                     width: `${(exam.enrolled / exam.enrollmentLimit) * 100}%`,
//                   }}></div>
//               </div>

//               <p className="text-gray-400 flex items-center gap-2 mt-2">
//                 <FaStar className="text-yellow-400" /> Level: {exam.level}
//               </p>
//               <p className="text-gray-400 flex items-center gap-2">
//                 <FaCheckCircle className="text-green-400" /> Passing Marks:{" "}
//                 {exam.passingMarks}
//               </p>
//               <p className="text-gray-400 flex items-center gap-2">
//                 <FaClipboardList className="text-blue-400" /> Type: {exam.type}
//               </p>

//               {exam.status === "Upcoming" && (
//                 <p className="text-sm font-semibold mt-2 text-green-400">
//                   {timeLeft[exam.id] || "Loading..."}
//                 </p>
//               )}

//               <p
//                 className={`text-sm font-semibold mt-2 flex items-center gap-2 ${
//                   exam.status === "Upcoming"
//                     ? "text-green-400"
//                     : exam.status === "Enrolled"
//                     ? "text-yellow-400"
//                     : "text-gray-400"
//                 }`}>
//                 {exam.status === "Completed" ? (
//                   <FaCheckCircle className="text-green-500" />
//                 ) : (
//                   <FaTimesCircle className="text-red-400" />
//                 )}{" "}
//                 {exam.status}
//               </p>

//               {exam.status === "Upcoming" && (
//                 <button className="mt-4 bg-blue-500 px-4 py-2 rounded-lg font-semibold text-white shadow-lg hover:bg-blue-600 transition-all">
//                   Enroll Now
//                 </button>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Exams;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   FaBook,
//   FaFilter,
//   FaClock,
//   FaClipboardList,
//   FaUsers,
//   FaStar,
//   FaChalkboardTeacher,
//   FaCheckCircle,
//   FaTimesCircle,
//   FaLaptopCode,
//   FaPen,
//   FaListUl,
// } from "react-icons/fa";

// const examsData = [
//   {
//     id: 1,
//     title: "Mathematics - Algebra",
//     date: "March 10, 2025 10:00:00",
//     duration: "90 min",
//     questions: 30,
//     enrolled: 45,
//     capacity: 100,
//     passingMarks: 40,
//     level: "Intermediate",
//     type: "MCQ",
//     instructor: "Dr. John Smith",
//     status: "Upcoming",
//   },
//   {
//     id: 2,
//     title: "Physics - Mechanics",
//     date: "March 15, 2025 14:00:00",
//     duration: "60 min",
//     questions: 25,
//     enrolled: 80,
//     capacity: 80,
//     passingMarks: 50,
//     level: "Advanced",
//     type: "MCQ + Descriptive",
//     instructor: "Prof. Lisa Ray",
//     status: "Enrolled",
//   },
//   {
//     id: 3,
//     title: "Computer Science - Data Structures",
//     date: "March 20, 2025 16:00:00",
//     duration: "120 min",
//     questions: 40,
//     enrolled: 50,
//     capacity: 50,
//     passingMarks: 60,
//     level: "Expert",
//     type: "Coding",
//     instructor: "Dr. Alan Turing",
//     status: "Completed",
//   },
//   {
//     id: 4,
//     title: "Chemistry - Organic",
//     date: "March 22, 2025 11:00:00",
//     duration: "75 min",
//     questions: 28,
//     enrolled: 30,
//     capacity: 60,
//     passingMarks: 45,
//     level: "Beginner",
//     type: "MCQ",
//     instructor: "Dr. Marie Curie",
//     status: "Upcoming",
//   },
// ];

// const Exams = () => {
//   const [filter, setFilter] = useState("All");

//   const filteredExams =
//     filter === "All"
//       ? examsData
//       : examsData.filter((exam) => exam.status === filter);

//   const [timeLeft, setTimeLeft] = useState({});

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const updatedTime = {};
//       examsData.forEach((exam) => {
//         if (exam.status === "Upcoming") {
//           const examTime = new Date(exam.date).getTime();
//           const now = new Date().getTime();
//           const diff = examTime - now;

//           if (diff > 0) {
//             const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//             const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//             const minutes = Math.floor((diff / 1000 / 60) % 60);
//             updatedTime[exam.id] = `${days}d ${hours}h ${minutes}m left`;
//           } else {
//             updatedTime[exam.id] = "Starting now!";
//           }
//         }
//       });
//       setTimeLeft(updatedTime);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className=" min-h-screen p-6 mt-19">
//       <div className="max-w-6xl mx-auto text-white">
        

//         {/* Filter Options */}
//         <div className="flex justify-center gap-4 mb-6">
//           {["All", "Upcoming", "Enrolled", "Completed"].map((category) => (
//             <button
//               key={category}
//               className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
//                 filter === category
//                   ? "bg-blue-500 text-white shadow-lg"
//                   : "bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white"
//               }`}
//               onClick={() => setFilter(category)}>
//               <FaFilter className="inline-block mr-2" /> {category}
//             </button>
//           ))}
//         </div>

//         {/* Exams List */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {filteredExams.map((exam) => (
//             <motion.div
//               key={exam.id}
//               className="bg-gray-800 bg-opacity-80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:bg-opacity-100 transition-all"
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.2 }}>
//               <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
//                 <FaBook className="text-blue-400" /> {exam.title}
//               </h3>
//               <p className="text-gray-400 flex items-center gap-2">
//                 <FaClock className="text-yellow-400" /> {exam.date}
//               </p>
//               <p className="text-gray-400 flex items-center gap-2">
//                 <FaClipboardList className="text-green-400" /> {exam.duration} |{" "}
//                 {exam.questions} Questions
//               </p>
//               <p className="text-gray-400 flex items-center gap-2">
//                 <FaChalkboardTeacher className="text-pink-400" /> Instructor:{" "}
//                 {exam.instructor}
//               </p>

//               {/* Enrollment Progress Bar */}
//               <p className="text-gray-400 flex items-center gap-2 mt-2">
//                 <FaUsers className="text-purple-400" /> {exam.enrolled}/
//                 {exam.capacity} Enrolled
//               </p>
//               <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
//                 <div
//                   className="bg-blue-500 h-2 rounded-full"
//                   style={{
//                     width: `${(exam.enrolled / exam.capacity) * 100}%`,
//                   }}></div>
//               </div>

//               <p className="text-gray-400 flex items-center gap-2 mt-2">
//                 <FaStar className="text-yellow-400" /> Level: {exam.level}
//               </p>

//               {/* Exam Type Icon */}
//               <p className="text-gray-400 flex items-center gap-2">
//                 {exam.type === "MCQ" ? (
//                   <FaListUl className="text-blue-400" />
//                 ) : exam.type === "Coding" ? (
//                   <FaLaptopCode className="text-red-400" />
//                 ) : (
//                   <FaPen className="text-green-400" />
//                 )}
//                 {exam.type}
//               </p>

//               {/* Live Countdown */}
//               {exam.status === "Upcoming" && (
//                 <p className="text-sm font-semibold mt-2 text-green-400">
//                   {timeLeft[exam.id] || "Loading..."}
//                 </p>
//               )}

//               {/* Enrollment Button */}
//               {exam.status === "Upcoming" && exam.enrolled < exam.capacity && (
//                 <button className="mt-4 bg-blue-500 px-4 py-2 rounded-lg font-semibold text-white shadow-lg hover:bg-blue-600 transition-all">
//                   Enroll Now
//                 </button>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Exams;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   FaBook,
//   FaFilter,
//   FaClock,
//   FaClipboardList,
//   FaUsers,
//   FaStar,
//   FaChalkboardTeacher,
//   FaListUl,
//   FaLaptopCode,
//   FaPen,
//   FaCheckCircle,
//   FaTimesCircle,
// } from "react-icons/fa";

// const examsData = [
//   {
//     id: 1,
//     title: "Mathematics - Algebra",
//     date: "March 10, 2025 10:00:00",
//     duration: "90 min",
//     questions: 30,
//     enrolled: 45,
//     capacity: 50,
//     passingMarks: 40,
//     level: "Intermediate",
//     type: "MCQ",
//     instructor: "Dr. John Smith",
//     status: "Upcoming",
//   },
//   {
//     id: 2,
//     title: "Physics - Mechanics",
//     date: "March 15, 2025 14:00:00",
//     duration: "60 min",
//     questions: 25,
//     enrolled: 80,
//     capacity: 80,
//     passingMarks: 50,
//     level: "Advanced",
//     type: "MCQ + Descriptive",
//     instructor: "Prof. Lisa Ray",
//     status: "Enrolled",
//   },
//   {
//     id: 3,
//     title: "Computer Science - Data Structures",
//     date: "March 20, 2025 16:00:00",
//     duration: "120 min",
//     questions: 40,
//     enrolled: 50,
//     capacity: 50,
//     passingMarks: 60,
//     level: "Expert",
//     type: "Coding",
//     instructor: "Dr. Alan Turing",
//     status: "Completed",
//   },
//   {
//     id: 4,
//     title: "Chemistry - Organic",
//     date: "March 22, 2025 11:00:00",
//     duration: "75 min",
//     questions: 28,
//     enrolled: 30,
//     capacity: 60,
//     passingMarks: 45,
//     level: "Beginner",
//     type: "MCQ",
//     instructor: "Dr. Marie Curie",
//     status: "Upcoming",
//   },
// ];

// const Exams = () => {
//   const [filter, setFilter] = useState("All");
//   const [timeLeft, setTimeLeft] = useState({});

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const updatedTime = {};
//       examsData.forEach((exam) => {
//         if (exam.status === "Upcoming") {
//           const examTime = new Date(exam.date).getTime();
//           const now = new Date().getTime();
//           const diff = examTime - now;

//           if (diff > 0) {
//             const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//             const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//             const minutes = Math.floor((diff / 1000 / 60) % 60);
//             updatedTime[exam.id] = `${days}d ${hours}h ${minutes}m left`;
//           } else {
//             updatedTime[exam.id] = "Starting now!";
//             toast.info(`${exam.title} is starting now!`);
//           }
//         }
//       });
//       setTimeLeft(updatedTime);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleEnroll = (exam) => {
//     if (exam.enrolled >= exam.capacity) {
//       toast.error("This exam is full!");
//     } else {
//       toast.success(`You have successfully enrolled in ${exam.title}!`);
//     }
//   };

//   const filteredExams =
//     filter === "All"
//       ? examsData
//       : examsData.filter((exam) => exam.status === filter);

//   return (
//     <div className="min-h-screen p-6">
//       <ToastContainer position="top-right" autoClose={3000} />
//       <div className="max-w-6xl mx-auto text-white">
//         <h2 className="text-4xl font-bold mb-6 text-center text-blue-400 drop-shadow-lg">
//           📝 Available Exams
//         </h2>

//         {/* Filter Options */}
//         <div className="flex justify-center gap-4 mb-6">
//           {["All", "Upcoming", "Enrolled", "Completed"].map((category) => (
//             <button
//               key={category}
//               className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
//                 filter === category
//                   ? "bg-blue-500 text-white shadow-lg"
//                   : "bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white"
//               }`}
//               onClick={() => setFilter(category)}>
//               <FaFilter className="inline-block mr-2" /> {category}
//             </button>
//           ))}
//         </div>

//         {/* Exams List */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {filteredExams.map((exam) => (
//             <motion.div
//               key={exam.id}
//               className="bg-gray-800 bg-opacity-80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:bg-opacity-100 transition-all"
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.2 }}>
//               <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
//                 <FaBook className="text-blue-400" /> {exam.title}
//               </h3>
//               <p className="text-gray-400 flex items-center gap-2">
//                 <FaClock className="text-yellow-400" /> {exam.date}
//               </p>

//               {/* Exam Status Badge */}
//               <p className="mt-2 flex items-center gap-2 text-sm font-semibold">
//                 {exam.status === "Upcoming" && (
//                   <span className="bg-green-500 text-white px-2 py-1 rounded-full">
//                     Upcoming
//                   </span>
//                 )}
//                 {exam.status === "Enrolled" && (
//                   <span className="bg-yellow-500 text-white px-2 py-1 rounded-full">
//                     Enrolled
//                   </span>
//                 )}
//                 {exam.status === "Completed" && (
//                   <span className="bg-gray-500 text-white px-2 py-1 rounded-full">
//                     Completed
//                   </span>
//                 )}
//               </p>

//               {/* Enrollment Progress */}
//               <p className="text-gray-400 flex items-center gap-2 mt-2">
//                 <FaUsers className="text-purple-400" /> {exam.enrolled}/
//                 {exam.capacity} Enrolled
//               </p>
//               <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
//                 <div
//                   className="bg-blue-500 h-2 rounded-full"
//                   style={{
//                     width: `${(exam.enrolled / exam.capacity) * 100}%`,
//                   }}></div>
//               </div>

//               {/* Live Countdown */}
//               {exam.status === "Upcoming" && (
//                 <p className="text-sm font-semibold mt-2 text-green-400">
//                   {timeLeft[exam.id] || "Loading..."}
//                 </p>
//               )}

//               {/* Enroll Button */}
//               {exam.status === "Upcoming" && (
//                 <button
//                   className="mt-4 bg-blue-500 px-4 py-2 rounded-lg font-semibold text-white shadow-lg hover:bg-blue-600 transition-all"
//                   onClick={() => handleEnroll(exam)}>
//                   Enroll Now
//                 </button>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Exams;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   FaBook,
//   FaClock,
//   FaClipboardList,
//   FaUsers,
//   FaStar,
//   FaChalkboardTeacher,
//   FaLaptopCode,
//   FaPen,
//   FaCheckCircle,
//   FaTimesCircle,
//   FaFilter,
//   FaListUl,
// } from "react-icons/fa";

// const examsData = [
//   {
//     id: 1,
//     title: "Mathematics - Algebra",
//     date: "March 10, 2025 10:00:00",
//     duration: "90 min",
//     questions: 30,
//     enrolled: 45,
//     capacity: 50,
//     passingMarks: 40,
//     level: "Intermediate",
//     type: "MCQ",
//     instructor: "Dr. John Smith",
//     status: "Upcoming",
//   },
//   {
//     id: 2,
//     title: "Physics - Mechanics",
//     date: "March 15, 2025 14:00:00",
//     duration: "60 min",
//     questions: 25,
//     enrolled: 80,
//     capacity: 80,
//     passingMarks: 50,
//     level: "Advanced",
//     type: "MCQ + Descriptive",
//     instructor: "Prof. Lisa Ray",
//     status: "Enrolled",
//   },
//   {
//     id: 3,
//     title: "Computer Science - Data Structures",
//     date: "March 20, 2025 16:00:00",
//     duration: "120 min",
//     questions: 40,
//     enrolled: 50,
//     capacity: 50,
//     passingMarks: 60,
//     level: "Expert",
//     type: "Coding",
//     instructor: "Dr. Alan Turing",
//     status: "Completed",
//   },
//   {
//     id: 4,
//     title: "Chemistry - Organic",
//     date: "March 22, 2025 11:00:00",
//     duration: "75 min",
//     questions: 28,
//     enrolled: 30,
//     capacity: 60,
//     passingMarks: 45,
//     level: "Beginner",
//     type: "MCQ",
//     instructor: "Dr. Marie Curie",
//     status: "Upcoming",
//   },
// ];

// const Exams = () => {
//   const [filter, setFilter] = useState("All");
//   const [timeLeft, setTimeLeft] = useState({});

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const updatedTime = {};
//       examsData.forEach((exam) => {
//         if (exam.status === "Upcoming") {
//           const examTime = new Date(exam.date).getTime();
//           const now = new Date().getTime();
//           const diff = examTime - now;

//           if (diff > 0) {
//             const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//             const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//             const minutes = Math.floor((diff / 1000 / 60) % 60);
//             updatedTime[exam.id] = `${days}d ${hours}h ${minutes}m left`;
//           } else {
//             updatedTime[exam.id] = "Starting now!";
//             toast.info(`${exam.title} is starting now!`);
//           }
//         }
//       });
//       setTimeLeft(updatedTime);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleEnroll = (exam) => {
//     if (exam.enrolled >= exam.capacity) {
//       toast.error("This exam is full!");
//     } else {
//       toast.success(`You have successfully enrolled in ${exam.title}!`);
//     }
//   };

//   const filteredExams =
//     filter === "All"
//       ? examsData
//       : examsData.filter((exam) => exam.status === filter);

//   return (
//     <div className=" min-h-screen p-6">
//       <ToastContainer position="top-right" autoClose={3000} />
//       <div className="max-w-6xl mx-auto text-white">
//         <h2 className="text-4xl font-bold mb-6 text-center text-blue-400 drop-shadow-lg">
//           📝 Available Exams
//         </h2>

//         {/* Filter Options */}
//         <div className="flex justify-center gap-4 mb-6">
//           {["All", "Upcoming", "Enrolled", "Completed"].map((category) => (
//             <button
//               key={category}
//               className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
//                 filter === category
//                   ? "bg-blue-500 text-white shadow-lg"
//                   : "bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white"
//               }`}
//               onClick={() => setFilter(category)}>
//               <FaFilter className="inline-block mr-2" /> {category}
//             </button>
//           ))}
//         </div>

//         {/* Exams List */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {filteredExams.map((exam) => (
//             <motion.div
//               key={exam.id}
//               className="bg-gray-800 bg-opacity-90 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:bg-opacity-100 transition-all border border-gray-700"
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.2 }}>
//               <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
//                 <FaBook className="text-blue-400" /> {exam.title}
//               </h3>
//               <p className="text-gray-400 flex items-center gap-2">
//                 <FaClock className="text-yellow-400" /> {exam.date}
//               </p>
//               <p className="text-gray-400 flex items-center gap-2 mt-2">
//                 <FaChalkboardTeacher className="text-purple-400" /> Instructor:{" "}
//                 {exam.instructor}
//               </p>
//               <p className="text-gray-400 flex items-center gap-2">
//                 <FaListUl className="text-green-400" /> {exam.questions}{" "}
//                 Questions
//               </p>

//               {/* Live Countdown */}
//               {exam.status === "Upcoming" && (
//                 <p className="text-sm font-semibold mt-2 text-green-400">
//                   {timeLeft[exam.id] || "Loading..."}
//                 </p>
//               )}

//               {/* Enrollment Progress */}
//               <p className="text-gray-400 flex items-center gap-2 mt-2">
//                 <FaUsers className="text-pink-400" /> {exam.enrolled}/
//                 {exam.capacity} Enrolled
//               </p>

//               {/* Enroll Button */}
//               {exam.status === "Upcoming" && (
//                 <button
//                   className="mt-4 bg-blue-500 px-4 py-2 rounded-lg font-semibold text-white shadow-lg hover:bg-blue-600 transition-all"
//                   onClick={() => handleEnroll(exam)}>
//                   Enroll Now
//                 </button>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Exams;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   FaBook,
//   FaClock,
//   FaClipboardList,
//   FaUsers,
//   FaStar,
//   FaChalkboardTeacher,
//   FaLaptopCode,
//   FaPen,
//   FaCheckCircle,
//   FaTimesCircle,
//   FaFilter,
//   FaListUl,
//   FaExclamationTriangle,
// } from "react-icons/fa";

// const examsData = [
//   {
//     id: 1,
//     title: "Mathematics - Algebra",
//     date: "March 10, 2025 10:00:00",
//     duration: "90 min",
//     questions: 30,
//     enrolled: 45,
//     capacity: 50,
//     passingMarks: 40,
//     level: "Intermediate",
//     type: "MCQ",
//     instructor: "Dr. John Smith",
//     status: "Upcoming",
//     description:
//       "This exam covers fundamental and advanced algebraic concepts, including equations, matrices, and polynomials.",
//   },
//   {
//     id: 2,
//     title: "Physics - Mechanics",
//     date: "March 2, 2025 00:41:00",
//     duration: "60 min",
//     questions: 25,
//     enrolled: 80,
//     capacity: 80,
//     passingMarks: 50,
//     level: "Advanced",
//     type: "MCQ + Descriptive",
//     instructor: "Prof. Lisa Ray",
//     status: "Enrolled",
//     description:
//       "Explore Newton's laws, forces, energy conservation, and rotational dynamics in this mechanics-focused exam.",
//   },
//   {
//     id: 3,
//     title: "Computer Science - Data Structures",
//     date: "March 20, 2025 16:00:00",
//     duration: "120 min",
//     questions: 40,
//     enrolled: 50,
//     capacity: 50,
//     passingMarks: 60,
//     level: "Expert",
//     type: "Coding",
//     instructor: "Dr. Alan Turing",
//     status: "Completed",
//     description:
//       "Test your knowledge on linked lists, trees, graphs, and advanced algorithms in this coding-focused exam.",
//   },
//   {
//     id: 4,
//     title: "Chemistry - Organic",
//     date: "March 22, 2025 11:00:00",
//     duration: "75 min",
//     questions: 28,
//     enrolled: 30,
//     capacity: 60,
//     passingMarks: 45,
//     level: "Beginner",
//     type: "MCQ",
//     instructor: "Dr. Marie Curie",
//     status: "Upcoming",
//     description:
//       "Covers essential organic chemistry topics, including hydrocarbons, functional groups, and reaction mechanisms.",
//   },
// ];

// const Exams = () => {
//   const [filter, setFilter] = useState("All");
//   const [timeLeft, setTimeLeft] = useState({});

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const updatedTime = {};
//       examsData.forEach((exam) => {
//         if (exam.status === "Upcoming") {
//           const examTime = new Date(exam.date).getTime();
//           const now = new Date().getTime();
//           const diff = examTime - now;

//           if (diff > 0) {
//             const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//             const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//             const minutes = Math.floor((diff / 1000 / 60) % 60);
//             updatedTime[exam.id] = `${days}d ${hours}h ${minutes}m left`;
//           } else {
//             updatedTime[exam.id] = "Starting now!";
//             toast.info(`${exam.title} is starting now!`);
//           }
//         }
//       });
//       setTimeLeft(updatedTime);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleEnroll = (exam) => {
//     if (exam.enrolled >= exam.capacity) {
//       toast.error("This exam is full!");
//     } else {
//       toast.success(`You have successfully enrolled in ${exam.title}!`);
//     }
//   };

//   const filteredExams =
//     filter === "All"
//       ? examsData
//       : examsData.filter((exam) => exam.status === filter);

//   return (
//     <div className="min-h-screen p-6">
//       <ToastContainer position="top-right" autoClose={3000} />
//       <div className="max-w-6xl mx-auto text-white">
//         <h2 className="text-4xl font-bold mb-6 text-center text-blue-400 drop-shadow-lg">
//           📝 Available Exams
//         </h2>

//         <div className="flex justify-center gap-4 mb-6">
//           {["All", "Upcoming", "Enrolled", "Completed"].map((category) => (
//             <button
//               key={category}
//               className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
//                 filter === category
//                   ? "bg-blue-500 text-white shadow-lg"
//                   : "bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white"
//               }`}
//               onClick={() => setFilter(category)}>
//               <FaFilter className="inline-block mr-2" /> {category}
//             </button>
//           ))}
//         </div>

//         <div className="grid md:grid-cols-2 gap-6">
//           {filteredExams.map((exam) => (
//             <motion.div
//               key={exam.id}
//               className="bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-opacity-100 transition-all border border-gray-700"
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.2 }}>
//               <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
//                 <FaBook className="text-blue-400" /> {exam.title}
//               </h3>
//               <p className="text-gray-400 flex items-center gap-2">
//                 <FaClock className="text-yellow-400" /> {exam.date}
//               </p>
//               <p className="text-gray-400 mt-2">{exam.description}</p>
//               <p className="text-gray-400 flex items-center gap-2">
//                 <FaUsers className="text-pink-400" /> {exam.enrolled}/
//                 {exam.capacity} Enrolled
//               </p>
//               {exam.status === "Upcoming" && (
//                 <p className="text-sm font-semibold mt-2 text-green-400">
//                   {timeLeft[exam.id] || "Loading..."}
//                 </p>
//               )}
//               {exam.status === "Upcoming" && (
//                 <button
//                   className="mt-4 bg-blue-500 px-4 py-2 rounded-lg font-semibold text-white shadow-lg hover:bg-blue-600 transition-all"
//                   onClick={() => handleEnroll(exam)}>
//                   Enroll Now
//                 </button>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Exams;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   FaBook,
//   FaClock,
//   FaUsers,
//   FaFilter,
//   FaCheckCircle,
//   FaExclamationTriangle,
// } from "react-icons/fa";

// const examsData = [
//   {
//     id: 1,
//     title: "Mathematics - Algebra",
//     date: "March 10, 2025 10:00:00",
//     duration: "90 min",
//     questions: 30,
//     enrolled: 45,
//     capacity: 50,
//     status: "Upcoming",
//     description:
//       "This exam covers fundamental and advanced algebraic concepts.",
//   },
//   {
//     id: 2,
//     title: "Physics - Mechanics",
//     date: "March 2, 2025 00:41:00",
//     duration: "60 min",
//     questions: 25,
//     enrolled: 80,
//     capacity: 80,
//     status: "Enrolled",
//     description:
//       "Explore Newton's laws, forces, energy conservation, and rotational dynamics.",
//   },
//   {
//     id: 3,
//     title: "Computer Science - Data Structures",
//     date: "March 20, 2025 16:00:00",
//     duration: "120 min",
//     questions: 40,
//     enrolled: 50,
//     capacity: 50,
//     status: "Completed",
//     description:
//       "Test your knowledge on linked lists, trees, graphs, and algorithms.",
//   },
// ];

// const Exams = () => {
//   const [filter, setFilter] = useState("All");
//   const [timeLeft, setTimeLeft] = useState({});

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const updatedTime = {};
//       examsData.forEach((exam) => {
//         const examTime = new Date(exam.date).getTime();
//         const now = new Date().getTime();
//         const diff = examTime - now;

//         if (diff > 0) {
//           const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//           const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//           const minutes = Math.floor((diff / 1000 / 60) % 60);
//           updatedTime[exam.id] = `${days}d ${hours}h ${minutes}m left`;
//         } else {
//           updatedTime[exam.id] = "Starting now!";
//         }
//       });
//       setTimeLeft(updatedTime);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleEnroll = (exam) => {
//     if (exam.enrolled >= exam.capacity) {
//       toast.error("This exam is full!");
//     } else {
//       toast.success(`You have successfully enrolled in ${exam.title}!`);
//     }
//   };

//   const filteredExams =
//     filter === "All"
//       ? examsData
//       : examsData.filter((exam) => exam.status === filter);

//   return (
//     <div className="min-h-screen  p-6">
//       <ToastContainer position="top-right" autoClose={3000} />
//       <div className="max-w-6xl mx-auto text-white">
//         <h2 className="text-4xl font-bold mb-6 text-center text-blue-400 drop-shadow-lg">
//           📝 Available Exams
//         </h2>

//         <div className="flex justify-center gap-4 mb-6">
//           {["All", "Upcoming", "Enrolled", "Completed"].map((category) => (
//             <button
//               key={category}
//               className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
//                 filter === category
//                   ? "bg-blue-500 text-white shadow-lg"
//                   : "bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white"
//               }`}
//               onClick={() => setFilter(category)}>
//               <FaFilter className="inline-block mr-2" /> {category}
//             </button>
//           ))}
//         </div>

//         <div className="grid md:grid-cols-2 gap-6">
//           {filteredExams.map((exam) => (
//             <motion.div
//               key={exam.id}
//               className="bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-opacity-100 transition-all border border-gray-700"
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.2 }}>
//               <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
//                 <FaBook className="text-blue-400" /> {exam.title}
//               </h3>
//               <p className="text-gray-400 flex items-center gap-2">
//                 <FaClock className="text-yellow-400" /> {exam.date}
//               </p>
//               <p className="text-gray-400 mt-2">{exam.description}</p>
//               <p className="text-gray-400 flex items-center gap-2">
//                 <FaUsers className="text-pink-400" /> {exam.enrolled}/
//                 {exam.capacity} Enrolled
//               </p>
//               <div className="w-full bg-gray-700 rounded-full h-3 mt-2">
//                 <div
//                   className="bg-blue-500 h-3 rounded-full"
//                   style={{
//                     width: `${(exam.enrolled / exam.capacity) * 100}%`,
//                   }}></div>
//               </div>
//               {exam.status === "Upcoming" && (
//                 <p className="text-sm font-semibold mt-2 text-green-400">
//                   {timeLeft[exam.id] || "Loading..."}
//                 </p>
//               )}
//               {exam.status === "Upcoming" &&
//                 timeLeft[exam.id] !== "Starting now!" && (
//                   <button
//                     className="mt-4 bg-blue-500 px-4 py-2 rounded-lg font-semibold text-white shadow-lg hover:bg-blue-600 transition-all"
//                     onClick={() => handleEnroll(exam)}>
//                     Enroll Now
//                   </button>
//                 )}
//               {timeLeft[exam.id] === "Starting now!" && (
//                 <button className="mt-4 bg-green-500 px-4 py-2 rounded-lg font-semibold text-white shadow-lg hover:bg-green-600 transition-all">
//                   Start Exam
//                 </button>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Exams;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   FaBook,
//   FaClock,
//   FaUsers,
//   FaFilter,
//   FaCheckCircle,
//   FaTimesCircle,
//   FaPlayCircle,
// } from "react-icons/fa";

// const examsData = [
//   {
//     id: 1,
//     title: "Mathematics - Algebra",
//     date: "March 10, 2025 10:00:00",
//     duration: "90 min",
//     questions: 30,
//     enrolled: 45,
//     capacity: 50,
//     status: "Upcoming",
//     description:
//       "This exam covers fundamental and advanced algebraic concepts.",
//   },
//   {
//     id: 2,
//     title: "Physics - Mechanics",
//     date: "March 2, 2025 00:41:00",
//     duration: "60 min",
//     questions: 25,
//     enrolled: 80,
//     capacity: 80,
//     status: "Enrolled",
//     description:
//       "Explore Newton's laws, forces, energy conservation, and rotational dynamics.",
//   },
//   {
//     id: 3,
//     title: "Computer Science - Data Structures",
//     date: "March 20, 2025 16:00:00",
//     duration: "120 min",
//     questions: 40,
//     enrolled: 50,
//     capacity: 50,
//     status: "Completed",
//     description:
//       "Test your knowledge on linked lists, trees, graphs, and algorithms.",
//   },
// ];

// const Exams = () => {
//   const [filter, setFilter] = useState("All");
//   const [timeLeft, setTimeLeft] = useState({});

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const updatedTime = {};
//       examsData.forEach((exam) => {
//         const examTime = new Date(exam.date).getTime();
//         const now = new Date().getTime();
//         const diff = examTime - now;

//         if (diff > 0) {
//           const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//           const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//           const minutes = Math.floor((diff / 1000 / 60) % 60);
//           updatedTime[exam.id] = `${days}d ${hours}h ${minutes}m left ⏳`;
//         } else {
//           updatedTime[exam.id] = "Starting now! 🚀";
//         }
//       });
//       setTimeLeft(updatedTime);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleEnroll = (exam) => {
//     if (exam.enrolled >= exam.capacity) {
//       toast.error("This exam is full!");
//     } else {
//       toast.success(`You have successfully enrolled in ${exam.title}! ✅`);
//     }
//   };

//   const filteredExams =
//     filter === "All"
//       ? examsData
//       : examsData.filter((exam) => exam.status === filter);

//   return (
//     <div className="min-h-screen p-6 bg-gray-900 text-white">
//       <ToastContainer position="top-right" autoClose={3000} />
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold mb-6 text-center text-blue-400 drop-shadow-lg">
//           📝 Available Exams
//         </h2>

//         <div className="flex justify-center gap-4 mb-6">
//           {["All", "Upcoming", "Enrolled", "Completed"].map((category) => (
//             <button
//               key={category}
//               className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
//                 filter === category
//                   ? "bg-blue-500 text-white shadow-lg"
//                   : "bg-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white"
//               }`}
//               onClick={() => setFilter(category)}>
//               <FaFilter className="inline-block mr-2" /> {category}
//             </button>
//           ))}
//         </div>

//         <div className="grid md:grid-cols-2 gap-6">
//           {filteredExams.map((exam) => (
//             <motion.div
//               key={exam.id}
//               className="bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-opacity-100 transition-all border border-gray-700"
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.2 }}>
//               <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
//                 <FaBook className="text-blue-400" /> {exam.title}
//               </h3>
//               <p className="text-gray-400 flex items-center gap-2">
//                 <FaClock className="text-yellow-400" /> {exam.date}
//               </p>
//               <p className="text-gray-400 mt-2">{exam.description}</p>
//               <p className="text-gray-400 flex items-center gap-2">
//                 <FaUsers className="text-pink-400" /> {exam.enrolled}/
//                 {exam.capacity} Enrolled
//               </p>
//               <div className="w-full bg-gray-700 rounded-full h-3 mt-2">
//                 <div
//                   className="bg-blue-500 h-3 rounded-full"
//                   style={{
//                     width: `${(exam.enrolled / exam.capacity) * 100}%`,
//                   }}></div>
//               </div>
//               {exam.status === "Upcoming" && (
//                 <p className="text-sm font-semibold mt-2 text-green-400">
//                   {timeLeft[exam.id] || "Loading..."}
//                 </p>
//               )}
//               {exam.status === "Upcoming" &&
//                 timeLeft[exam.id] !== "Starting now! 🚀" && (
//                   <button
//                     className="mt-4 bg-blue-500 px-4 py-2 rounded-lg font-semibold text-white shadow-lg hover:bg-blue-600 transition-all"
//                     onClick={() => handleEnroll(exam)}>
//                     Enroll Now
//                   </button>
//                 )}
//               {timeLeft[exam.id] === "Starting now! 🚀" && (
//                 <button className="mt-4 bg-green-500 px-4 py-2 rounded-lg font-semibold text-white shadow-lg hover:bg-green-600 transition-all">
//                   <FaPlayCircle className="mr-2" /> Start Exam
//                 </button>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Exams;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   FaBook,
//   FaClock,
//   FaUsers,
//   FaFilter,
//   FaCheckCircle,
//   FaTimesCircle,
//   FaPlayCircle,
//   FaBolt,
//   FaBrain,
// } from "react-icons/fa";

// const examsData = [
//   {
//     id: 1,
//     title: "Mathematics - Algebra",
//     date: "March 10, 2025 10:00:00",
//     duration: "90 min",
//     questions: 30,
//     enrolled: 45,
//     capacity: 50,
//     status: "Upcoming",
//     difficulty: "Intermediate",
//     tags: ["Math", "Algebra", "Equations"],
//     description:
//       "This exam covers fundamental and advanced algebraic concepts.",
//   },
//   {
//     id: 2,
//     title: "Physics - Mechanics",
//     date: "March 2, 2025 00:41:00",
//     duration: "60 min",
//     questions: 25,
//     enrolled: 80,
//     capacity: 80,
//     status: "Enrolled",
//     difficulty: "Hard",
//     tags: ["Physics", "Forces", "Motion"],
//     description:
//       "Explore Newton's laws, forces, energy conservation, and rotational dynamics.",
//   },
//   {
//     id: 3,
//     title: "Computer Science - Data Structures",
//     date: "March 20, 2025 16:00:00",
//     duration: "120 min",
//     questions: 40,
//     enrolled: 50,
//     capacity: 50,
//     status: "Completed",
//     difficulty: "Advanced",
//     tags: ["CS", "Algorithms", "Graphs"],
//     description:
//       "Test your knowledge on linked lists, trees, graphs, and algorithms.",
//   },
// ];

// const Exams = () => {
//   const [filter, setFilter] = useState("All");
//   const [timeLeft, setTimeLeft] = useState({});

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const updatedTime = {};
//       examsData.forEach((exam) => {
//         const examTime = new Date(exam.date).getTime();
//         const now = new Date().getTime();
//         const diff = examTime - now;

//         if (diff > 0) {
//           const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//           const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//           const minutes = Math.floor((diff / 1000 / 60) % 60);
//           updatedTime[exam.id] = `${days}d ${hours}h ${minutes}m left ⏳`;
//         } else {
//           updatedTime[exam.id] = "Starting now! 🚀";
//         }
//       });
//       setTimeLeft(updatedTime);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleEnroll = (exam) => {
//     if (exam.enrolled >= exam.capacity) {
//       toast.error("This exam is full!");
//     } else {
//       toast.success(`You have successfully enrolled in ${exam.title}! ✅`);
//     }
//   };

//   const filteredExams =
//     filter === "All"
//       ? examsData
//       : examsData.filter((exam) => exam.status === filter);

//   return (
//     <div className="min-h-screen p-6 text-white">
//       <ToastContainer position="top-right" autoClose={3000} />
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold mb-6 text-center text-blue-400 drop-shadow-lg">
//           🚀 Futuristic Exams Dashboard
//         </h2>

//         <div className="flex justify-center gap-4 mb-6">
//           {["All", "Upcoming", "Enrolled", "Completed"].map((category) => (
//             <button
//               key={category}
//               className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white ${
//                 filter === category
//                   ? "opacity-100"
//                   : "opacity-70 hover:opacity-100"
//               }`}
//               onClick={() => setFilter(category)}>
//               <FaFilter className="inline-block mr-2" /> {category}
//             </button>
//           ))}
//         </div>

//         <div className="grid md:grid-cols-2 gap-6">
//           {filteredExams.map((exam) => (
//             <motion.div
//               key={exam.id}
//               className="bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700 backdrop-blur-lg bg-opacity-80"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}>
//               <h3 className="text-xl font-bold flex items-center gap-2 mb-2 text-blue-400">
//                 <FaBook /> {exam.title}
//               </h3>
//               <p className="text-gray-300 flex items-center gap-2">
//                 <FaClock className="text-yellow-400" /> {exam.date}
//               </p>
//               <p className="text-gray-300 mt-2">{exam.description}</p>
//               <p className="text-gray-300 flex items-center gap-2">
//                 <FaUsers className="text-pink-400" /> {exam.enrolled}/
//                 {exam.capacity} Enrolled
//               </p>
//               <p className="text-sm text-green-400 mt-2">
//                 {timeLeft[exam.id] || "Loading..."}
//               </p>
//               {exam.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="text-xs bg-blue-500 text-white px-2 py-1 rounded-lg m-1">
//                   #{tag}
//                 </span>
//               ))}
//               {exam.status === "Upcoming" &&
//                 timeLeft[exam.id] !== "Starting now! 🚀" && (
//                   <button
//                     className="mt-4 bg-green-500 px-4 py-2 rounded-lg font-semibold text-white shadow-lg hover:bg-green-600 transition-all"
//                     onClick={() => handleEnroll(exam)}>
//                     Enroll Now
//                   </button>
//                 )}
//               {timeLeft[exam.id] === "Starting now! 🚀" && (
//                 <button className="mt-4 bg-orange-500 px-4 py-2 rounded-lg font-semibold text-white shadow-lg hover:bg-orange-600 transition-all">
//                   <FaPlayCircle className="mr-2" /> Start Exam
//                 </button>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Exams;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   FaBook,
//   FaClock,
//   FaUsers,
//   FaFilter,
//   FaPlayCircle,
// } from "react-icons/fa";

// const examsData = [
//   {
//     id: 1,
//     title: "Mathematics - Algebra",
//     startTime: "March 10, 2025 10:00:00",
//     duration: 90,
//     questions: 30,
//     enrolled: 45,
//     capacity: 50,
//     createdBy: "examiner", // Change accordingly
//     status: "Upcoming",
//     description:
//       "This exam covers fundamental and advanced algebraic concepts.",
//   },
//   {
//     id: 2,
//     title: "Physics - Mechanics",
//     startTime: "March 2, 2025 00:41:00",
//     duration: 60,
//     questions: 25,
//     enrolled: 80,
//     capacity: 80,
//     createdBy: "examiner",
//     status: "Enrolled",
//     description:
//       "Explore Newton's laws, forces, energy conservation, and rotational dynamics.",
//   },
// ];

// const Exams = ({ userRole }) => {
//   const [filter, setFilter] = useState("All");
//   const [timeLeft, setTimeLeft] = useState({});

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const updatedTime = {};
//       examsData.forEach((exam) => {
//         const examTime = new Date(exam.startTime).getTime();
//         const now = new Date().getTime();
//         const diff = examTime - now;

//         if (diff > 0) {
//           const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//           const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//           const minutes = Math.floor((diff / 1000 / 60) % 60);
//           updatedTime[exam.id] = `${days}d ${hours}h ${minutes}m left ⏳`;
//         } else {
//           updatedTime[exam.id] = "Starting now! 🚀";
//         }
//       });
//       setTimeLeft(updatedTime);
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleEnroll = (exam) => {
//     if (userRole !== "student") {
//       toast.error("Only students can enroll in exams!");
//       return;
//     }
//     if (exam.enrolled >= exam.capacity) {
//       toast.error("This exam is full!");
//     } else {
//       toast.success(`You have successfully enrolled in ${exam.title}! ✅`);
//     }
//   };

//   const filteredExams =
//     filter === "All"
//       ? examsData
//       : examsData.filter((exam) => exam.status === filter);

//   return (
//     <div className="min-h-screen p-6 text-white">
//       <ToastContainer position="top-right" autoClose={3000} />
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold mb-6 text-center text-blue-400">
//           🚀 Exams Dashboard
//         </h2>

//         <div className="flex justify-center gap-4 mb-6">
//           {["All", "Upcoming", "Enrolled", "Completed"].map((category) => (
//             <button
//               key={category}
//               className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all bg-blue-500 hover:bg-blue-600 text-white ${
//                 filter === category
//                   ? "opacity-100"
//                   : "opacity-70 hover:opacity-100"
//               }`}
//               onClick={() => setFilter(category)}>
//               <FaFilter className="inline-block mr-2" /> {category}
//             </button>
//           ))}
//         </div>

//         <div className="grid md:grid-cols-2 gap-6">
//           {filteredExams.map((exam) => (
//             <motion.div
//               key={exam.id}
//               className="bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700 backdrop-blur-lg bg-opacity-80"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}>
//               <h3 className="text-xl font-bold flex items-center gap-2 mb-2 text-blue-400">
//                 <FaBook /> {exam.title}
//               </h3>
//               <p className="text-gray-300 flex items-center gap-2">
//                 <FaClock className="text-yellow-400" /> {exam.startTime}
//               </p>
//               <p className="text-gray-300 mt-2">{exam.description}</p>
//               <p className="text-gray-300 flex items-center gap-2">
//                 <FaUsers className="text-pink-400" /> {exam.enrolled}/
//                 {exam.capacity} Enrolled
//               </p>
//               <p className="text-sm text-green-400 mt-2">
//                 {timeLeft[exam.id] || "Loading..."}
//               </p>
//               {exam.status === "Upcoming" && userRole === "student" && (
//                 <button
//                   className="mt-4 bg-green-500 px-4 py-2 rounded-lg font-semibold text-white hover:bg-green-600"
//                   onClick={() => handleEnroll(exam)}>
//                   Enroll Now
//                 </button>
//               )}
//               {timeLeft[exam.id] === "Starting now! 🚀" &&
//                 userRole === "student" && (
//                   <button className="mt-4 bg-orange-500 px-4 py-2 rounded-lg font-semibold text-white hover:bg-orange-600">
//                     <FaPlayCircle className="mr-2" /> Start Exam
//                   </button>
//                 )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Exams;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   FaBook,
//   FaClock,
//   FaUsers,
//   FaFilter,
//   FaPlayCircle,
// } from "react-icons/fa";

// const Exams = () => {
//   const [exams, setExams] = useState([]);
//   const [filter, setFilter] = useState("All");
//   const [timeLeft, setTimeLeft] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const userRole = localStorage.getItem("role");

//   // Fetch exams from backend
//   useEffect(() => {
//     const fetchExams = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/exam/allexams"); // Update URL if needed
//         if (!response.ok) throw new Error("Failed to fetch exams");
//         const data = await response.json();
//         setExams(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchExams();
//   }, []);

//   // Timer for countdown
//   useEffect(() => {
//     const timer = setInterval(() => {
//       const updatedTime = {};
//       exams.forEach((exam) => {
//         const examTime = new Date(exam.startTime).getTime();
//         const now = new Date().getTime();
//         const diff = examTime - now;

//         updatedTime[exam._id] =
//           diff > 0
//             ? `${Math.floor(diff / (1000 * 60 * 60 * 24))}d ${Math.floor(
//                 (diff / (1000 * 60 * 60)) % 24
//               )}h ${Math.floor((diff / 1000 / 60) % 60)}m left ⏳`
//             : "Starting now! 🚀";
//       });
//       setTimeLeft(updatedTime);
//     }, 1000);
//     return () => clearInterval(timer);
//   }, [exams]);

//   // Handle enrollment
//   const handleEnroll = async (exam) => {
//     if (userRole !== "student") {
//       toast.error("Only students can enroll in exams!");
//       return;
//     }
//     if (exam.enrolledStudents.length >= exam.capacity) {
//       toast.error("This exam is full!");
//       return;
//     }
//     try {
//       const response = await fetch("http://localhost:5000/api/exam/enroll", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify({ examId: exam._id }),
//       });

//       if (!response.ok) throw new Error("Enrollment failed!");
//       toast.success(`You have successfully enrolled in ${exam.title}! ✅`);
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   // Filter exams based on status
//   const filteredExams =
//     filter === "All" ? exams : exams.filter((exam) => exam.status === filter);

//   if (loading)
//     return <p className="text-center text-white">Loading exams...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   return (
//     <div className="min-h-screen p-6 text-white">
//       <ToastContainer position="top-right" autoClose={3000} />
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold mb-6 text-center text-blue-400">
//           🚀 Exams Dashboard
//         </h2>

//         <div className="flex justify-center gap-4 mb-6">
//           {["All", "Upcoming", "Enrolled", "Completed"].map((category) => (
//             <button
//               key={category}
//               className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all bg-blue-500 hover:bg-blue-600 text-white ${
//                 filter === category
//                   ? "opacity-100"
//                   : "opacity-70 hover:opacity-100"
//               }`}
//               onClick={() => setFilter(category)}>
//               <FaFilter className="inline-block mr-2" /> {category}
//             </button>
//           ))}
//         </div>

//         <div className="grid md:grid-cols-2 gap-6">
//           {filteredExams.map((exam) => (
//             console.log(exam);
//             <motion.div
//               key={exam._id}
//               className="bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700 backdrop-blur-lg bg-opacity-80"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}>
//               <h3 className="text-xl font-bold flex items-center gap-2 mb-2 text-blue-400">
//                 <FaBook /> {exam.title}
//               </h3>
//               <p className="text-gray-300 flex items-center gap-2">
//                 <FaClock className="text-yellow-400" />{" "}
//                 {new Date(exam.startTime).toLocaleString()}
//               </p>
//               <p className="text-gray-300 mt-2">{exam.description}</p>
//               <p className="text-gray-300 flex items-center gap-2">
//                 <FaUsers className="text-pink-400" />{" "}
//                 {exam.enrolledStudents.length}/{exam.capacity} Enrolled
//               </p>
//               <p className="text-sm text-green-400 mt-2">
//                 {timeLeft[exam._id] || "Loading..."}
//               </p>
//               {exam.status === "Upcoming" && userRole === "student" && (
//                 <button
//                   className="mt-4 bg-green-500 px-4 py-2 rounded-lg font-semibold text-white hover:bg-green-600"
//                   onClick={() => handleEnroll(exam)}>
//                   Enroll Now
//                 </button>
//               )}
//               {timeLeft[exam._id] === "Starting now! 🚀" &&
//                 userRole === "student" && (
//                   <button className="mt-4 bg-orange-500 px-4 py-2 rounded-lg font-semibold text-white hover:bg-orange-600">
//                     <FaPlayCircle className="mr-2" /> Start Exam
//                   </button>
//                 )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Exams;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaBook,
  FaClock,
  FaUsers,
  FaFilter,
  FaPlayCircle,
} from "react-icons/fa";
import {jwtDecode} from "jwt-decode";

const Exams = () => {
  const [exams, setExams] = useState([]);
  const [filter, setFilter] = useState("All");
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
      console.log("User ID:", userId); // ✅ Check if this is correctly fetched
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }


  // Fetch exams from backend
  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/exam/allexams");
        if (!response.ok) throw new Error("Failed to fetch exams");
        const data = await response.json();
        console.log("Fetched Exams:", data); // ✅ Check if exams include `enrolledStudents`
        setExams(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchExams();
  }, []);


  // Timer for countdown
  useEffect(() => {
    const updateCountdown = () => {
      const updatedTime = {};
      exams.forEach((exam) => {
        const examTime = new Date(exam.startTime).getTime();
        const now = new Date().getTime();
        const diff = examTime - now;

        updatedTime[exam._id] =
          diff > 0
            ? `${Math.floor(diff / (1000 * 60 * 60 * 24))}d ${Math.floor(
                (diff / (1000 * 60 * 60)) % 24
              )}h ${Math.floor((diff / 1000 / 60) % 60)}m left ⏳`
            : "Starting now! 🚀";
      });
      setTimeLeft(updatedTime);
    };

    updateCountdown(); // Initial call
    const timer = setInterval(updateCountdown, 60000); // Update every 60 sec

    return () => clearInterval(timer);
  }, [exams]);

  // Handle enrollment
  // const handleEnroll = async (exam) => {
  //   if (userRole !== "student") {
  //     toast.error("Only students can enroll in exams!");
  //     return;
  //   }
  //   // if (exam.enrolledStudents.length >= exam.capacity) {
  //   //   toast.error("This exam is full!");
  //   //   return;
  //   // }
  //   try {
  //     const response = await fetch("http://localhost:5000/api/exam/enroll", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //       body: JSON.stringify({ examId: exam._id }),
  //     });

  //     if (!response.ok) throw new Error("Enrollment failed!");
  //     toast.success(`You have successfully enrolled in ${exam.title}! ✅`);

  //     // ✅ Refetch updated exams
  //     const updatedExams = await fetch(
  //       "http://localhost:5000/api/exam/allexams"
  //     );
  //     const updatedData = await updatedExams.json();
  //     setExams(updatedData); // Update exams with the latest data
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };
// const handleEnroll = async (exam) => {
//   if (userRole !== "student") {
//     toast.error("Only students can enroll in exams!");
//     return;
//   }

//   try {
//     const response = await fetch("http://localhost:5000/api/exam/enroll", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//       body: JSON.stringify({ examId: exam._id }),
//     });

//     if (!response.ok) throw new Error("Enrollment failed!");
//     toast.success(`You have successfully enrolled in ${exam.title}! ✅`);

//     // ✅ Immediately update the state instead of waiting for a refetch
//     setExams((prevExams) =>
//       prevExams.map((e) =>
//         e._id === exam._id
//           ? { ...e, enrolledStudents: [...e.enrolledStudents, userId] }
//           : e
//       )
//     );
    
//     console.log(exams)
//   } catch (error) {
//     toast.error(error.message);
//   }
// };

const handleEnroll = async (exam) => {
  if (userRole !== "student") {
    toast.error("Only students can enroll in exams!");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/exam/enroll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ examId: exam._id }),
    });

    if (!response.ok) throw new Error("Enrollment failed!");
    toast.success(`You have successfully enrolled in ${exam.title}! ✅`);

    // ✅ Refetch exams after enrolling
    const updatedExamsResponse = await fetch(
      "http://localhost:5000/api/exam/allexams"
    );
    const updatedExams = await updatedExamsResponse.json();
    setExams(updatedExams); // Update exams with the latest data
  } catch (error) {
    toast.error(error.message);
  }
};

  // Filter exams based on status
  const filteredExams =
    filter === "All" ? exams : exams.filter((exam) => exam.status === filter);

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

        {/* <div className="flex justify-center gap-4 mb-6">
          {["All", "Upcoming", "Enrolled", "Completed"].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all bg-blue-500 hover:bg-blue-600 text-white ${
                filter === category
                  ? "opacity-100"
                  : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => setFilter(category)}>
              <FaFilter className="inline-block mr-2" /> {category}
            </button>
          ))}
        </div> */}

        <div className="grid md:grid-cols-2 mt-10  gap-6">
          {filteredExams.map((exam) => (
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
              {exam.status === "Upcoming" &&
                userRole === "student" &&
                userId &&
                !exam.enrolledStudents.some(
                  (s) => s?._id?.toString() === userId
                ) && ( // ✅ This should now update immediately
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
