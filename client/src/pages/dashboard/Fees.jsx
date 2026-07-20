import { useState } from "react";

function Fees() {
  const [fees, setFees] = useState([
    { id: 1, name: "Rahul", amount: 3000, status: "Paid" },
    { id: 2, name: "Priya", amount: 3000, status: "Pending" },
  ]);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Fees Management</h1>

      <table className="w-full bg-white shadow rounded-xl overflow-hidden">
        <thead className="bg-blue-700 text-white">
          <tr>
            <th className="p-4">Student</th>
            <th className="p-4">Amount</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {fees.map((fee) => (
            <tr key={fee.id} className="border-b">
              <td className="p-4">{fee.name}</td>
              <td className="p-4">₹{fee.amount}</td>
              <td
                className={`p-4 font-bold ${
                  fee.status === "Paid"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {fee.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Fees;