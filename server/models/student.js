const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    enrollmentNumber: {
      type: String,
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },

    class: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Auto Generate Enrollment Number
studentSchema.pre("save", async function () {
  if (!this.enrollmentNumber) {
    const count = await mongoose.models.Student.countDocuments();

    this.enrollmentNumber =
      "APX" + String(count + 1).padStart(4, "0");
  }
});

module.exports = mongoose.model("Student", studentSchema);