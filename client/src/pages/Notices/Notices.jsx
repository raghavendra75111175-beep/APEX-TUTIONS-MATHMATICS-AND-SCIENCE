import { useState } from "react";

function Notices() {
  const [notices] = useState([
    "Monthly Test on Monday",
    "Fees should be paid before 10th.",
    "Holiday on Independence Day",
  ]);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Notices</h1>

      {notices.map((notice, index) => (
        <div
          key={index}
          className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4 rounded"
        >
          {notice}
        </div>
      ))}
    </div>
  );
}

export default Notices;