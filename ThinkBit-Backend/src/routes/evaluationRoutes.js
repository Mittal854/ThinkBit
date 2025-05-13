const express = require("express");
const { verifyToken, authorizeRole } = require("../middleware/authMiddleware");
const {
  getPendingEvaluations,
  submitEvaluation,
  getEvaluationStats,
} = require("../controllers/evaluationController");
const router = express.Router();

router.get(
  "/pending",
  verifyToken,
  authorizeRole(["examiner"]),
  getPendingEvaluations
);
router.post(
  "/submit",
  verifyToken,
  authorizeRole(["examiner"]),
  submitEvaluation
);
router.get(
  "/stats",
  verifyToken,
  authorizeRole(["examiner"]),
  getEvaluationStats
);
module.exports = router;
