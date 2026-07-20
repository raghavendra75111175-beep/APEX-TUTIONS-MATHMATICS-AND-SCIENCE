import { Routes, Route } from "react-router-dom";

// Website Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Courses from "./pages/Courses/Courses";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Enroll from "./pages/Enroll/Enroll";

// Dashboard Layout
import DashboardLayout from "./components/layout/Dashboardlayout";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";

// Dashboard Pages
import DashboardHome from "./pages/Dashboard/DashboardHome";
import Students from "./pages/Students/Students";
import Attendance from "./pages/Attendance/Attendance";
import Fees from "./pages/Fees/Fees";
import Results from "./pages/Results/Results";
import Homework from "./pages/Homework/Homework";
import Notices from "./pages/Notices/Notices";
import Settings from "./pages/Settings/Settings";
import StudentProfile from "./pages/Dashboard/StudentProfile";

function App() {
  return (
    <Routes>

      {/* Website */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/enroll" element={<Enroll />} />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="students" element={<Students />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="fees" element={<Fees />} />
        <Route path="results" element={<Results />} />
        <Route path="homework" element={<Homework />} />
        <Route path="notices" element={<Notices />} />
        <Route path="settings" element={<Settings />} />
        <Route
  path="/dashboard/student-profile"
  element={<StudentProfile />}
/>
      </Route>

      {/* 404 */}
      <Route
        path="*"
        element={
          <div className="flex justify-center items-center h-screen text-3xl font-bold">
            404 - Page Not Found
          </div>
        }
      />

    </Routes>
  );
}

export default App;