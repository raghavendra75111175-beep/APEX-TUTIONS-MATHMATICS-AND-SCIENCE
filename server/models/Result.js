const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    maths: {
      type: Number,
      required: true,
    },

    science: {
      type: Number,
      required: true,
    },

    english: {
      type: Number,
      required: true,
    },

    social: {
      type: Number,
      required: true,
    },

    total: Number,
    percentage: Number,
    grade: String,
  },
  {
    timestamps: true,
  }
);

resultSchema.pre("save", function (next) {
  this.total =
    this.maths +
    this.science +
    this.english +
    this.social;

  this.percentage = this.total / 4;

  if (this.percentage >= 90) this.grade = "A+";
  else if (this.percentage >= 80) this.grade = "A";
  else if (this.percentage >= 70) this.grade = "B";
  else if (this.percentage >= 60) this.grade = "C";
  else if (this.percentage >= 50) this.grade = "D";
  else this.grade = "F";

  next();
});

module.exports = mongoose.model("Result", resultSchema);