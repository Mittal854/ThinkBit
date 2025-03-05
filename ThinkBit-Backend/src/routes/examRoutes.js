// const express = require("express");
// const { verifyToken, authorizeRole } = require("../middleware/authMiddleware");
// const {
//   startExam,
//   createExam,
//   getAllExams,
//   submitExam,
//   getExamResult,
// } = require("../controllers/examController");

// const router = express.Router();

// router.post("/start", verifyToken, authorizeRole(["student"]), startExam);
// router.post("/create", verifyToken, authorizeRole(["examiner"]), createExam);
// router.get("/all", verifyToken, authorizeRole(["admin"]), getAllExams);
// router.post("/submit", verifyToken, submitExam);
// router.get("/exam-result/:attemptId", verifyToken, getExamResult);

// module.exports = router;


const express = require("express");
const { verifyToken, authorizeRole } = require("../middleware/authMiddleware");
const {
  startExam,
  createExam,

  submitExam,
  getExamResult,
  getMyExams,
  getUserExamResults,
  getUserExamHistory,
  getExamAnalytics,
  allexams,
  enroll,
  attempt,
} = require("../controllers/examController");

const router = express.Router();

router.post("/start", verifyToken, authorizeRole(["student"]), startExam);
router.post("/create", verifyToken, authorizeRole(["examiner"]), createExam);
// router.get("/all", verifyToken, authorizeRole(["admin"]), getAllExams);
router.post("/submit", verifyToken, authorizeRole(["student"]), submitExam);
router.get(
  "/exam-result/:attemptId",
  verifyToken,
  authorizeRole(["student"]),
  getExamResult
);
router.get("/my-exams", verifyToken, authorizeRole(["student"]), getMyExams);
router.get("/my-results", verifyToken, getUserExamResults);
router.get("/my-history", verifyToken, getUserExamHistory);
router.get("/analytics/:examinerId", getExamAnalytics);
router.get("/allexams",allexams);
router.post("/enroll",verifyToken,enroll);
router.get("/attempt/:attemptId",attempt);

module.exports = router;
