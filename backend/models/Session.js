const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, unique: true },
  studentId: { type: String, required: true },
  labModule: { type: String },
  experimentSlot: { type: String },
  status: {
    type: String,
    enum: ["scheduled", "completed", "cancelled"],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Session", sessionSchema);