import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../../api/studentApi";

function Students() {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    class: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    fetchStudents();
  }, []);

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
      if (editingId) {
        await updateStudent(editingId, formData);
        alert("Student Updated Successfully");
      } else {
        await addStudent(formData);
        alert("Student Added Successfully");
      }

      setFormData({
        name: "",
        class: "",
        phone: "",
        address: "",
      });

      setEditingId(null);
      fetchStudents();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (student) => {
    setEditingId(student._id);

    setFormData({
      name: student.name,
      class: student.class,
      phone: student.phone,
      address: student.address,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this student?")) return;

    try {
      await deleteStudent(id);
      fetchStudents();
    } catch (err) {
      console.log(err);
    }
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        Student Management
      </h1>

      <input
        type="text"
        placeholder="Search Student..."
        className="border p-3 rounded-lg w-full mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 mb-8"
      >
        <div className="grid md:grid-cols-2 gap-4">

          <input
            type="text"
            name="name"
            placeholder="Student Name"
            className="border p-3 rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="class"
            placeholder="Class"
            className="border p-3 rounded"
            value={formData.class}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="border p-3 rounded"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            className="border p-3 rounded"
            value={formData.address}
            onChange={handleChange}
            required
          />

        </div>

        <button
          className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg mt-6"
        >
          {editingId ? "Update Student" : "Add Student"}
        </button>

      </form>

      <div className="bg-white shadow-lg rounded-xl overflow-x-auto">

        <table className="w-full">

          <thead className="bg-blue-700 text-white">

            <tr>
              <th className="p-3">Enrollment</th>
              <th className="p-3">Name</th>
              <th className="p-3">Class</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Address</th>
              <th className="p-3">Actions</th>
            </tr>

          </thead>

          <tbody>

            {filteredStudents.length === 0 ? (

              <tr>
                <td colSpan="6" className="text-center py-6">
                  No Students Found
                </td>
              </tr>

            ) : (

              filteredStudents.map((student) => (

                <tr
                  key={student._id}
                  className="border-b hover:bg-gray-100"
                >

                  <td className="p-3 font-semibold">
                    {student.enrollmentNumber || "-"}
                  </td>

                  <td className="p-3">
                    {student.name}
                  </td>

                  <td className="p-3">
                    {student.class}
                  </td>

                  <td className="p-3">
                    {student.phone}
                  </td>

                  <td className="p-3">
                    {student.address}
                  </td>

                  <td className="p-3 flex gap-2 flex-wrap">

                    <button
                      onClick={() =>
                        navigate("/dashboard/student-profile", {
                          state: { student },
                        })
                      }
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                      View
                    </button>

                    <button
                      onClick={() => handleEdit(student)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(student._id)}
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

export default Students;