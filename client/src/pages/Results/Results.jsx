import { useEffect, useState } from "react";
import axios from "axios";

function Results() {
  const [results, setResults] = useState([]);

  const [formData, setFormData] = useState({
    studentName: "",
    subject: "",
    marks: "",
    grade: "",
  });

  const [editingId, setEditingId] = useState(null);

  const API = axios.create({
    baseURL: "http://localhost:5000/api/results",
  });

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      const res = await API.get("/");
      setResults(res.data);
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
      if (editingId) {
        await API.put(`/${editingId}`, formData);
        alert("Result Updated Successfully");
      } else {
        await API.post("/", formData);
        alert("Result Added Successfully");
      }

      setFormData({
        studentName: "",
        subject: "",
        marks: "",
        grade: "",
      });

      setEditingId(null);

      fetchResults();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (result) => {
    setEditingId(result._id);

    setFormData({
      studentName: result.studentName,
      subject: result.subject,
      marks: result.marks,
      grade: result.grade,
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this result?")) return;

    try {
      await API.delete(`/${id}`);
      fetchResults();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-6">
        Student Results
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 mb-8"
      >
        <div className="grid md:grid-cols-2 gap-4">

          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={formData.studentName}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="number"
            name="marks"
            placeholder="Marks"
            value={formData.marks}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <select
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          >
            <option value="">Select Grade</option>
            <option>A+</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>F</option>
          </select>

        </div>

        <button
          type="submit"
          className="bg-blue-700 text-white px-8 py-3 rounded-lg mt-6"
        >
          {editingId ? "Update Result" : "Add Result"}
        </button>
      </form>

      <div className="bg-white rounded-xl shadow-lg overflow-x-auto">

        <table className="w-full">

          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="p-3">Student</th>
              <th className="p-3">Subject</th>
              <th className="p-3">Marks</th>
              <th className="p-3">Grade</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>

            {results.map((result) => (

              <tr
                key={result._id}
                className="border-b hover:bg-gray-100"
              >

                <td className="p-3">
                  {result.studentName}
                </td>

                <td className="p-3">
                  {result.subject}
                </td>

                <td className="p-3">
                  {result.marks}
                </td>

                <td className="p-3 font-bold">
                  {result.grade}
                </td>

                <td className="p-3 flex gap-2">

                  <button
                    onClick={() => handleEdit(result)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(result._id)}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Results;