import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";
// import ExamPage from "./pages/ExamPage";
// import ResultsPage from "./pages/ResultsPage";
import Navbar from "./components/Navbar";
import AuthPage from "./pages/AuthPage";
import DashboardLayout from "./pages/DashboardLayout";
import StudentDashBoardLayout from "./pages/dashboards/student/StudentDashBoardLayout";
import MyExams from "./pages/dashboards/student/MyExams";
import Progress from "./pages/dashboards/student/Progress";
import ExamHistory from "./pages/dashboards/student/ExamHistory";
import CreateExam from "./pages/dashboards/examiner/CreateExam";
import EvaluateAnswers from "./pages/dashboards/examiner/EvaluateAnswers";
import ExamAnalytics from "./pages/dashboards/examiner/ExamAnalytics";
import ExaminerDashBoardLayout from "./pages/dashboards/examiner/ExaminerDashBoardLayout";
import ManageQuestions from "./pages/dashboards/examiner/ManageQuestions";
import AdminDashBoardLayout from "./pages/dashboards/admin/AdminDashBoardLayout";
import SystemAnalytics from "./pages/dashboards/admin/SystemAnalytics";
import UserManagement from "./pages/dashboards/admin/UserManagement";
import UserLogs from "./pages/dashboards/admin/UserLogs";
import AdminSettings from "./pages/dashboards/admin/AdminSettings";
import ExamMonitoring from "./pages/dashboards/admin/ExamMonitoring";
import Notifications from "./pages/dashboards/admin/Notifications";
import ReportsFeedback from "./pages/dashboards/admin/ReportsFeedback";
import Exams from "./pages/Exams";
import Profile from "./pages/Profile";
import ExamPage from "./pages/ExamPage";


// import ThemeToggle from "./components/ThemeToggle";
// import Footer from "./components/Footer";

function App() {
  const [userRole, setUserRole] = useState(localStorage.getItem("role") || "");
  useEffect(() => {
    setUserRole(localStorage.getItem("role") || "");
  }, []);
   const getDashboard = () => {
     switch (userRole) {
       case "student":
         return <Navigate to="/dashboard/student/myexams" />;
       case "examiner":
         return <Navigate to="/dashboard/examiner/createexam" />;
       case "admin":
         return <Navigate to="/dashboard/admin/usermanagement" />;
       default:
         return <Navigate to="/auth" />;
     }
   };

  return (
    <div className="dark bg-gray-900 text-white">
      <Router>
        <Navbar />
        {/* <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} /> */}
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/exam" element={<Exams />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/exam/:attemptId" element={<ExamPage />} />
            <Route path="/dashboard" element={getDashboard()} />

            {/* Dashboard Layout with Sidebar */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route path="student" element={<StudentDashBoardLayout />}>
                <Route path="myexams" element={<MyExams />} />
                <Route path="progress" element={<Progress />} />
                <Route path="examhistory" element={<ExamHistory />} />
              </Route>
              <Route path="examiner" element={<ExaminerDashBoardLayout />}>
                <Route path="createexam" element={<CreateExam />} />
                <Route path="evaluateanswers" element={<EvaluateAnswers />} />
                <Route path="examanalytics" element={<ExamAnalytics />} />
                <Route path="managequestions" element={<ManageQuestions />} />
              </Route>
              <Route path="admin" element={<AdminDashBoardLayout />}>
                <Route path="systemanalytics" element={<SystemAnalytics />} />
                <Route path="usermanagement" element={<UserManagement />} />
                <Route path="userlogs" element={<UserLogs />} />
                <Route path="settings" element={<AdminSettings />} />
                <Route path="exammonitoring" element={<ExamMonitoring />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="reports" element={<ReportsFeedback />} />
              </Route>
            </Route>
          </Routes>
        </main>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
