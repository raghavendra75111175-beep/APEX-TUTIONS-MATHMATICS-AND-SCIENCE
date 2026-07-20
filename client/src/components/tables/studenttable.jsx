function StudentTable({ students, onDelete, onEdit }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mt-10 overflow-x-auto">

      <h2 className="text-3xl font-bold mb-6">
        Students List
      </h2>

      <table className="min-w-full border">

        <thead className="bg-blue-700 text-white">

          <tr>

            <th className="p-4">Name</th>

            <th className="p-4">Class</th>

            <th className="p-4">School</th>

            <th className="p-4">Phone</th>

            <th className="p-4">Fees</th>

            <th className="p-4">Actions</th>

          </tr>

        </thead>

        <tbody>

          {students.length === 0 ? (

            <tr>

              <td
                colSpan="6"
                className="text-center p-8"
              >
                No Students Found
              </td>

            </tr>

          ) : (

            students.map((student) => (

              <tr
                key={student.id}
                className="border-b hover:bg-gray-100"
              >

                <td className="p-4">{student.name}</td>

                <td className="p-4">{student.className}</td>

                <td className="p-4">{student.school}</td>

                <td className="p-4">{student.phone}</td>

                <td className="p-4">₹{student.fees}</td>

                <td className="p-4">

                  <button
                    onClick={() => onEdit(student.id)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-3 hover:bg-yellow-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(student.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
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
  );
}

export default StudentTable;