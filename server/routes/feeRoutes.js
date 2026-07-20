const express = require("express");
const router = express.Router();

const Fee = require("../models/Fee");

// Get all fee records
router.get("/", async (req, res) => {
  try {
    const fees = await Fee.find().populate("student");
    res.json(fees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add fee payment
router.post("/", async (req, res) => {
  try {
    const fee = await Fee.create(req.body);
    res.status(201).json(fee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update fee
router.put("/:id", async (req, res) => {
  try {
    const fee = await Fee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(fee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete fee
router.delete("/:id", async (req, res) => {
  try {
    await Fee.findByIdAndDelete(req.params.id);

    res.json({
      message: "Fee record deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;