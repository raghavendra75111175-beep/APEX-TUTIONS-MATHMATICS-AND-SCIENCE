const express = require("express");
const router = express.Router();

const Homework = require("../models/Homework");

// GET
router.get("/", async (req, res) => {
  try {
    const homework = await Homework.find().sort({ createdAt: -1 });
    res.json(homework);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ADD
router.post("/", async (req, res) => {
  try {
    const hw = await Homework.create(req.body);
    res.status(201).json(hw);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Homework.findByIdAndDelete(req.params.id);
    res.json({ message: "Homework deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;