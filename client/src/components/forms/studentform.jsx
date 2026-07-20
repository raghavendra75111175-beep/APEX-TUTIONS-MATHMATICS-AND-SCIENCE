import { useEffect, useState } from "react";
import { addStudent, updateStudent } from "../../api/studentApi";

function StudentForm({ selectedStudent, onStudentAdded, clearSelection }) {
  const [formData, setFormData] = useState({
    name: "",
    className: "",
    phone: "",
    fees: "",
  });

  useEffect(() => {
    if (selectedStudent) {
      setFormData({
        name: selectedStudent.name,
        className: selectedStudent.className,
        phone: selectedStudent.phone,
        fees: selectedStudent.fees,
      });
    } else {
      setFormData({
        name: "",
        className: "",
        phone: "",
        fees: "",
      });
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedStudent) {
        await updateStudent(selectedStudent._id, formData);
        alert("Student updated successfully");
      } else {
        await addStudent(formData);
        alert("Student added successfully");
      }

      setFormData({
        name: "",
        className: "",
        phone: "",
        fees: "",
      });

      onStudentAdded();

      if (clearSelection) {
        clearSelection();
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-6">
        {selectedStudent ? "Edit Student" : "Add Student"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="text"
          name="className"
          placeholder="Class"
          value={formData.className}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="number"
          name="fees"
          placeholder="Fees"
          value={formData.fees}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-700 text-white py-3 rounded md:col-span-2 hover:bg-blue-800"
        >
          {selectedStudent ? "Update Student" : "Add Student"}
        </button>
      </form>
    </div>
  );
}

export default StudentForm;