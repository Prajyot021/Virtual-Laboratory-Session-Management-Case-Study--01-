const express = require("express");
const router = express.Router();

const {
  createSession,
  getSession,
  updateSession
} = require("../controllers/sessionController");

router.post("/", createSession);
router.get("/:sessionId/:studentId", getSession);
router.put("/:sessionId/:studentId", updateSession);

module.exports = router;