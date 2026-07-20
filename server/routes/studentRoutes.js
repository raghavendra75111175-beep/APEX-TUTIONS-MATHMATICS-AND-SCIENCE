const express = require("express");
const router = express.Router();

const Student = require("../models/Student");

// ===================================
// GET ALL STUDENTS
// ===================================
router.get("/", async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });

    res.status(200).json(students);
  } catch (error) {
    console.error("GET STUDENTS ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// ===================================
// ADD STUDENT
// ===================================
router.post("/", async (req, res) => {
  try {
    console.log("Incoming Data:", req.body);

    const student = new Student({
      name: req.body.name,
      class: req.body.class,
      phone: req.body.phone,
      address: req.body.address,
    });

    const savedStudent = await student.save();

    console.log("Student Saved Successfully");

    res.status(201).json(savedStudent);
  } catch (error) {
    console.error("ADD STUDENT ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// ===================================
// UPDATE STUDENT
// ===================================
router.put("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        class: req.body.class,
        phone: req.body.phone,
        address: req.body.address,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json(student);
  } catch (error) {
    console.error("UPDATE ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// ===================================
// DELETE STUDENT
// ===================================
router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json({
      message: "Student deleted successfully",
    });
  } catch (error) {
    console.error("DELETE ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;