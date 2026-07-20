import { useState } from "react";

function Homework() {
  const [homeworks] = useState([
    {
      id: 1,
      subject: "Mathematics",
      homework: "Complete Exercise 5",
      due: "20-07-2026",
    },
    {
      id: 2,
      subject: "Science",
      homework: "Read Chapter 3",
      due: "21-07-2026",
    },
  ]);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Homework</h1>

      {homeworks.map((hw) => (
        <div key={hw.id} className="bg-white shadow rounded-xl p-6 mb-4">
          <h2 className="text-xl font-bold">{hw.subject}</h2>
          <p>{hw.homework}</p>
          <p className="text-red-500 mt-2">Due: {hw.due}</p>
        </div>
      ))}
    </div>
  );
}

export default Homework;