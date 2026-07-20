import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStudents } from "../../api/studentApi";

import {
  Users,
  UserPlus,
  CalendarCheck,
  IndianRupee,
  FileText,
  BookOpen,
  Bell,
  Settings,
} from "lucide-react";

function DashboardHome() {
  const [students, setStudents] = useState([]);

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

  const cards = [
    {
      title: "Add Student",
      icon: <UserPlus size={35} />,
      color: "bg-blue-600",
      link: "/dashboard/students",
    },
    {
      title: "Students",
      icon: <Users size={35} />,
      color: "bg-green-600",
      link: "/dashboard/students",
    },
    {
      title: "Attendance",
      icon: <CalendarCheck size={35} />,
      color: "bg-orange-500",
      link: "/dashboard/attendance",
    },
    {
      title: "Fees",
      icon: <IndianRupee size={35} />,
      color: "bg-purple-600",
      link: "/dashboard/fees",
    },
    {
      title: "Results",
      icon: <FileText size={35} />,
      color: "bg-pink-600",
      link: "/dashboard/results",
    },
    {
      title: "Homework",
      icon: <BookOpen size={35} />,
      color: "bg-indigo-600",
      link: "/dashboard/homework",
    },
    {
      title: "Notices",
      icon: <Bell size={35} />,
      color: "bg-red-600",
      link: "/dashboard/notices",
    },
    {
      title: "Settings",
      icon: <Settings size={35} />,
      color: "bg-gray-700",
      link: "/dashboard/settings",
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h1 className="text-4xl font-bold text-blue-700">
          Welcome to Apex Tuitions
        </h1>

        <p className="text-gray-600 mt-3">
          Tuition Management System
        </p>

        <div className="mt-4 text-gray-500">
          <p>Date : {new Date().toLocaleDateString()}</p>
          <p>Time : {new Date().toLocaleTimeString()}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-blue-600 text-white rounded-xl p-6 shadow-lg">
          <h2>Total Students</h2>
          <p className="text-5xl font-bold mt-4">
            {students.length}
          </p>
        </div>

        <div className="bg-green-600 text-white rounded-xl p-6 shadow-lg">
          <h2>Today's Attendance</h2>
          <p className="text-5xl font-bold mt-4">
            0
          </p>
        </div>

        <div className="bg-orange-500 text-white rounded-xl p-6 shadow-lg">
          <h2>Pending Fees</h2>
          <p className="text-5xl font-bold mt-4">
            0
          </p>
        </div>

        <div className="bg-purple-600 text-white rounded-xl p-6 shadow-lg">
          <h2>Homework</h2>
          <p className="text-5xl font-bold mt-4">
            0
          </p>
        </div>

      </div>

      <h2 className="text-3xl font-bold mb-6">
        Quick Access
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {cards.map((card, index) => (

          <Link key={index} to={card.link}>

            <div
              className={`${card.color} text-white rounded-xl p-8 shadow-lg hover:scale-105 transition duration-300`}
            >

              <div className="mb-4">
                {card.icon}
              </div>

              <h2 className="text-xl font-semibold">
                {card.title}
              </h2>

            </div>

          </Link>

        ))}

      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-10">

        <div className="bg-white rounded-xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-4">
            Today's Schedule
          </h2>

          <ul className="space-y-3">
            <li>📘 Mathematics - 9:00 AM</li>
            <li>🧪 Science - 11:00 AM</li>
            <li>📖 English - 2:00 PM</li>
            <li>🌍 Social - 4:00 PM</li>
          </ul>

        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-4">
            Recent Activities
          </h2>

          <ul className="space-y-3">
            <li>✅ Student Registration</li>
            <li>📅 Attendance Updated</li>
            <li>💰 Fee Collection</li>
            <li>📝 Homework Added</li>
          </ul>

        </div>

      </div>

    </div>
  );
}

export default DashboardHome;