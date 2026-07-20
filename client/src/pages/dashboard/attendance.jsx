function Attendance() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-8">
        Attendance Management
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-8">

        <table className="w-full border">

          <thead className="bg-blue-700 text-white">

            <tr>

              <th className="p-4">Student Name</th>
              <th className="p-4">Class</th>
              <th className="p-4">Attendance</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td className="p-4">Rahul</td>

              <td className="p-4">10th</td>

              <td className="p-4">

                <button className="bg-green-600 text-white px-4 py-2 rounded mr-2">
                  Present
                </button>

                <button className="bg-red-600 text-white px-4 py-2 rounded">
                  Absent
                </button>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Attendance;