import { useEffect, useState } from "react";
import { getStudents } from "../../api/studentApi";
import { getFees, addFee } from "../../api/feeApi";

function Fees() {
  const [students, setStudents] = useState([]);
  const [fees, setFees] = useState([]);

  const [formData, setFormData] = useState({
    student: "",
    month: "",
    amount: "",
    status: "Paid",
  });

  useEffect(() => {
    loadStudents();
    loadFees();
  }, []);

  const loadStudents = async () => {
    try {
      const res = await getStudents();
      setStudents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadFees = async () => {
    try {
      const res = await getFees();
      setFees(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addFee(formData);

      alert("Fee Saved Successfully!");

      setFormData({
        student: "",
        month: "",
        amount: "",
        status: "Paid",
      });

      loadFees();
    } catch (err) {
      console.log(err);
      alert("Failed to save fee");
    }
  };

  return (
    <div className="p-6">

      <h1 className="text-4xl font-bold mb-8">
        Fee Management
      </h1>

      {/* Form */}

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">

        <h2 className="text-2xl font-bold mb-6">
          Record Fee Payment
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-4"
        >

          <select
            className="border p-3 rounded"
            value={formData.student}
            onChange={(e) =>
              setFormData({
                ...formData,
                student: e.target.value,
              })
            }
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

          <input
            type="text"
            placeholder="Month (Example: July)"
            className="border p-3 rounded"
            value={formData.month}
            onChange={(e) =>
              setFormData({
                ...formData,
                month: e.target.value,
              })
            }
            required
          />

          <input
            type="number"
            placeholder="Amount"
            className="border p-3 rounded"
            value={formData.amount}
            onChange={(e) =>
              setFormData({
                ...formData,
                amount: e.target.value,
              })
            }
            required
          />

          <select
            className="border p-3 rounded"
            value={formData.status}
            onChange={(e) =>
              setFormData({
                ...formData,
                status: e.target.value,
              })
            }
          >
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>

          <button
            type="submit"
            className="md:col-span-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded"
          >
            Save Fee Payment
          </button>

        </form>

      </div>

      {/* Fee History */}

      <div className="bg-white rounded-xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-6">
          Fee History
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full table-fixed">

            <thead>

              <tr className="bg-blue-700 text-white">

                <th className="w-1/4 p-4 text-center">
                  Student
                </th>

                <th className="w-1/4 p-4 text-center">
                  Month
                </th>

                <th className="w-1/4 p-4 text-center">
                  Amount
                </th>

                <th className="w-1/4 p-4 text-center">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {fees.length === 0 ? (

                <tr>

                  <td
                    colSpan="4"
                    className="text-center p-5"
                  >
                    No Fee Records Found
                  </td>

                </tr>

              ) : (

                fees.map((fee) => (

                  <tr
                    key={fee._id}
                    className="border-b hover:bg-gray-100"
                  >

                    <td className="p-4 text-center">
                      {fee.student?.name || "-"}
                    </td>

                    <td className="p-4 text-center">
                      {fee.month || "-"}
                    </td>

                    <td className="p-4 text-center">
                      ₹{fee.amount}
                    </td>

                    <td className="p-4 text-center">

                      <span
                        className={`px-3 py-1 rounded-full text-white text-sm ${
                          fee.status === "Paid"
                            ? "bg-green-600"
                            : "bg-red-600"
                        }`}
                      >
                        {fee.status || "-"}
                      </span>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Fees;