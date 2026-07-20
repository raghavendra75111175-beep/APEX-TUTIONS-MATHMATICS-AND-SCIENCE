const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const Admin = require("../models/Admin");

// ========================
// Register Admin
// ========================
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const adminExists = await Admin.findOne({ email });

    if (adminExists) {
      return res.status(400).json({
        message: "Admin already exists",
      });
    }

    const admin = await Admin.create({
      name,
      email,
      password,
    });

    res.status(201).json({
  message: "Admin registered successfully",
  admin: {
    id: admin._id,
    name: admin.name,
    email: admin.email,
  },
});

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ========================
// Login Admin
// ========================
router.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({
        message: "Invalid Email",
      });
    }

    const isMatch = await admin.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: admin._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.json({
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;