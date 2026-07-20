const express = require("express");
const router = express.Router();

const Attendance = require("../models/Attendance");

// =======================
// GET ALL ATTENDANCE
// =======================
router.get("/", async (req, res) => {
  try {
    const attendance = await Attendance.find().populate("studentId");
    res.json(attendance);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// =======================
// ADD ATTENDANCE
// =======================
router.post("/", async (req, res) => {
  try {
    const attendance = new Attendance(req.body);

    await attendance.save();

    res.status(201).json(attendance);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

// =======================
// UPDATE ATTENDANCE
// =======================
router.put("/:id", async (req, res) => {
  try {
    const attendance = await Attendance.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json(attendance);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

// =======================
// DELETE ATTENDANCE
// =======================
router.delete("/:id", async (req, res) => {
  try {
    await Attendance.findByIdAndDelete(req.params.id);

    res.json({
      message: "Attendance Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;