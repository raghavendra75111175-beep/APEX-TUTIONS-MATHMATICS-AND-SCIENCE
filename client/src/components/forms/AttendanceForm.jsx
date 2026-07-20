import { useEffect, useState } from "react";
import { getStudents } from "../../api/studentApi";
import { addAttendance } from "../../api/attendanceApi";

function AttendanceForm({ onAttendanceAdded }) {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    student: "",
    date: new Date().toISOString().split("T")[0],
    status: "Present",
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await getStudents();
      setStudents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addAttendance(formData);
      alert("Attendance marked successfully!");

      setFormData({
        student: "",
        date: new Date().toISOString().split("T")[0],
        status: "Present",
      });

      onAttendanceAdded();
    } catch (err) {
      console.error(err);
      alert("Failed to mark attendance.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-6">Mark Attendance</h2>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-4">

        <select
          value={formData.student}
          onChange={(e) =>
            setFormData({ ...formData, student: e.target.value })
          }
          className="border p-3 rounded"
          required
        >
          <option value="">Select Student</option>

          {students.map((student) => (
            <option key={student._id} value={student._id}>
              {student.name}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: e.target.value })
          }
          className="border p-3 rounded"
        />

        <select
          value={formData.status}
          onChange={(e) =>
            setFormData({ ...formData, status: e.target.value })
          }
          className="border p-3 rounded"
        >
          <option>Present</option>
          <option>Absent</option>
        </select>

        <button
          className="bg-blue-700 text-white py-3 rounded md:col-span-3 hover:bg-blue-800"
        >
          Mark Attendance
        </button>

      </form>
    </div>
  );
}

export default AttendanceForm;