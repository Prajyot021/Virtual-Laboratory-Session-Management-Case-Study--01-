const Session = require("../models/Session");

exports.createSession = async (req, res) => {
  try {
    const session = await Session.create(req.body);
    res.json({ message: "Session created successfully", session });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getSession = async (req, res) => {
  try {
    const session = await Session.findOne({
      sessionId: req.params.sessionId,
      studentId: req.params.studentId
    });

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    res.json(session);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSession = async (req, res) => {
  try {
    const session = await Session.findOne({
      sessionId: req.params.sessionId,
      studentId: req.params.studentId
    });

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    if (session.status !== "scheduled") {
      return res.status(400).json({
        message: "Update not allowed. Session is not scheduled."
      });
    }

    const { labModule, experimentSlot } = req.body;

    if (!labModule && !experimentSlot) {
      return res.status(400).json({
        message: "Provide new labModule or experimentSlot"
      });
    }

    if (labModule) session.labModule = labModule;
    if (experimentSlot) session.experimentSlot = experimentSlot;

    await session.save();

    res.json({
      message: "Session updated successfully",
      session
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};