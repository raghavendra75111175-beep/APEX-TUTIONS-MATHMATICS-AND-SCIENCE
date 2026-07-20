import { useEffect, useState } from "react";
import {
  getAttendance,
  addAttendance,
  deleteAttendance,
} from "../../api/attendanceApi";

import { getStudents } from "../../api/studentApi";

function Attendance() {
  const [attendance, setAttendance] = useState([]);
  const [students, setStudents] = useState([]);

  const [formData, setFormData] = useState({
    studentId: "",
    status: "Present",
    date: "",
  });

  useEffect(() => {
    fetchAttendance();
    fetchStudents();
  }, []);

  const fetchAttendance = async () => {
    try {
      const res = await getAttendance();
      setAttendance(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchStudents = async () => {
    try {
      const res = await getStudents();
      setStudents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addAttendance(formData);

      alert("Attendance Added Successfully");

      setFormData({
        studentId: "",
        status: "Present",
        date: "",
      });

      fetchAttendance();
    } catch (err) {
      console.log(err);
      alert("Failed to save attendance");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this attendance?"
    );

    if (!confirmDelete) return;

    try {
      await deleteAttendance(id);
      fetchAttendance();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Attendance Management
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-6 mb-8"
      >
        <div className="grid md:grid-cols-3 gap-4">

          {/* Student Dropdown */}

          <select
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          >
            <option value="">Select Student</option>

            {students.map((student) => (
              <option
                key={student._id}
                value={student._id}
              >
                {student.name}
              </option>
            ))}

          </select>

          {/* Status */}

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          >
            <option>Present</option>
            <option>Absent</option>
          </select>

          {/* Date */}

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

        </div>

        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg mt-6"
        >
          Save Attendance
        </button>

      </form>

      <div className="bg-white shadow-xl rounded-xl overflow-x-auto">

        <table className="w-full">

          <thead className="bg-blue-700 text-white">

            <tr>

              <th className="p-4">Student</th>

              <th className="p-4">Status</th>

              <th className="p-4">Date</th>

              <th className="p-4">Action</th>

            </tr>

          </thead>

          <tbody>

            {attendance.length === 0 ? (

              <tr>

                <td
                  colSpan="4"
                  className="text-center py-6"
                >
                  No Attendance Found
                </td>

              </tr>

            ) : (

              attendance.map((item) => (

                <tr
                  key={item._id}
                  className="border-b hover:bg-gray-100"
                >

                  <td className="p-4">
                    {item.studentId?.name || "Unknown Student"}
                  </td>

                  <td
                    className={`p-4 font-semibold ${
                      item.status === "Present"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.status}
                  </td>

                  <td className="p-4">
                    {new Date(item.date).toLocaleDateString()}
                  </td>

                  <td className="p-4">

                    <button
                      onClick={() =>
                        handleDelete(item._id)
                      }
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Attendance;