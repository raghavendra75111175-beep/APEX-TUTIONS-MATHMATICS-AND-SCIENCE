const express = require("express");
const router = express.Router();

const Student = require("../models/Student");
const Attendance = require("../models/Attendance");
const Fee = require("../models/Fee");
const Notice = require("../models/Notice");

router.get("/", async (req, res) => {
  try {
    const totalStudents = await Student.countDocuments();

    const totalNotices = await Notice.countDocuments();

    const totalAttendance = await Attendance.countDocuments({
      date: {
        $gte: new Date(new Date().setHours(0,0,0,0)),
        $lt: new Date(new Date().setHours(23,59,59,999)),
      },
    });

    const fees = await Fee.find();

    const totalFees = fees.reduce(
      (sum, fee) => sum + Number(fee.amount),
      0
    );

    res.json({
      totalStudents,
      totalAttendance,
      totalFees,
      totalNotices,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;