const express = require("express");
const router = express.Router();

const Result = require("../models/Result");
const Student = require("../models/Student");

// =========================
// GET ALL RESULTS
// =========================
router.get("/", async (req, res) => {
  try {
    const results = await Result.find()
      .populate("studentId")
      .sort({ createdAt: -1 });

    res.json(results);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// =========================
// ADD RESULT
// =========================
router.post("/", async (req, res) => {
  try {
    const result = new Result({
      studentId: req.body.studentId,
      maths: req.body.maths,
      science: req.body.science,
      english: req.body.english,
      social: req.body.social,
    });

    await result.save();

    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

// =========================
// UPDATE RESULT
// =========================
router.put("/:id", async (req, res) => {
  try {
    const result = await Result.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json(result);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

// =========================
// DELETE RESULT
// =========================
router.delete("/:id", async (req, res) => {
  try {
    await Result.findByIdAndDelete(req.params.id);

    res.json({
      message: "Result Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;