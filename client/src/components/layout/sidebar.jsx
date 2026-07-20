import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  IndianRupee,
  FileText,
  BookOpen,
  Bell,
  Settings,
} from "lucide-react";

function Sidebar() {
  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      title: "Students",
      path: "/dashboard/students",
      icon: <Users size={20} />,
    },
    {
      title: "Attendance",
      path: "/dashboard/attendance",
      icon: <CalendarCheck size={20} />,
    },
    {
      title: "Fees",
      path: "/dashboard/fees",
      icon: <IndianRupee size={20} />,
    },
    {
      title: "Results",
      path: "/dashboard/results",
      icon: <FileText size={20} />,
    },
    {
      title: "Homework",
      path: "/dashboard/homework",
      icon: <BookOpen size={20} />,
    },
    {
      title: "Notices",
      path: "/dashboard/notices",
      icon: <Bell size={20} />,
    },
    {
      title: "Settings",
      path: "/dashboard/settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-blue-900 text-white shadow-xl">

      {/* Logo */}

      <div className="p-6 border-b border-blue-700">

        <h1 className="text-3xl font-bold">
          Apex Tuitions
        </h1>

        <p className="text-sm text-blue-200 mt-2">
          Tuition Management System
        </p>

      </div>

      {/* Navigation */}

      <nav className="mt-6 px-3">

        {menuItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            end={item.path === "/dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all duration-300 ${
                isActive
                  ? "bg-white text-blue-900 font-semibold shadow-md"
                  : "hover:bg-blue-800"
              }`
            }
          >
            {item.icon}
            <span>{item.title}</span>
          </NavLink>
        ))}

      </nav>

      {/* Footer */}

      <div className="absolute bottom-5 left-0 w-64 px-6">

        <div className="border-t border-blue-700 pt-4">

          <p className="text-center text-xs text-blue-200">
            Apex Tuitions
          </p>

          <p className="text-center text-xs text-blue-300 mt-1">
            Version 1.0
          </p>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;