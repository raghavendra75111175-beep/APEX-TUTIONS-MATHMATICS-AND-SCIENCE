import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../../api/studentApi";

function Enroll() {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    class: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addStudent(student);
      alert("🎉 Enrollment Successful!\n\nWelcome to Apex Tuitions.");
      navigate("/login");

      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex justify-center items-center p-10">

      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-xl">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Student Enrollment
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={student.name}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            required
          />

          <input
            type="text"
            name="class"
            placeholder="Class"
            value={student.class}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={student.phone}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            required
          />

          <textarea
            name="address"
            placeholder="Address"
            value={student.address}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            rows="4"
            required
          />

          <button
            type="submit"
            className="bg-blue-700 text-white w-full py-3 rounded-lg hover:bg-blue-800"
          >
            Enroll Now
          </button>

        </form>

      </div>

    </div>
  );
}

export default Enroll;