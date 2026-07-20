import { useEffect, useState } from "react";
import { getStudents } from "../../api/studentApi";
import { addFee, updateFee } from "../../api/feeApi";

function FeeForm({ selectedFee, onFeeAdded, clearSelection }) {
  const [students, setStudents] = useState([]);

  const [formData, setFormData] = useState({
    student: "",
    amount: "",
    paymentMethod: "Cash",
    remarks: "",
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    if (selectedFee) {
      setFormData({
        student: selectedFee.student._id,
        amount: selectedFee.amount,
        paymentMethod: selectedFee.paymentMethod,
        remarks: selectedFee.remarks,
      });
    }
  }, [selectedFee]);

  const fetchStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedFee) {
      await updateFee(selectedFee._id, formData);
      alert("Fee Updated");
    } else {
      await addFee(formData);
      alert("Fee Added");
    }

    setFormData({
      student: "",
      amount: "",
      paymentMethod: "Cash",
      remarks: "",
    });

    onFeeAdded();

    if (clearSelection) clearSelection();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-6">
        {selectedFee ? "Edit Fee" : "Collect Fee"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-4"
      >
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
          type="number"
          placeholder="Amount"
          value={formData.amount}
          onChange={(e) =>
            setFormData({ ...formData, amount: e.target.value })
          }
          className="border p-3 rounded"
          required
        />

        <select
          value={formData.paymentMethod}
          onChange={(e) =>
            setFormData({
              ...formData,
              paymentMethod: e.target.value,
            })
          }
          className="border p-3 rounded"
        >
          <option>Cash</option>
          <option>UPI</option>
          <option>Card</option>
          <option>Bank Transfer</option>
        </select>

        <input
          type="text"
          placeholder="Remarks"
          value={formData.remarks}
          onChange={(e) =>
            setFormData({ ...formData, remarks: e.target.value })
          }
          className="border p-3 rounded"
        />

        <button className="bg-blue-700 text-white py-3 rounded md:col-span-2">
          {selectedFee ? "Update Fee" : "Collect Fee"}
        </button>
      </form>
    </div>
  );
}

export default FeeForm;