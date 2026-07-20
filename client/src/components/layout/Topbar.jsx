import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin");

    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

      <div>

        <h1 className="text-3xl font-bold text-blue-700">
          Apex Tuitions
        </h1>

        <p className="text-gray-500">
          Tuition Management System
        </p>

      </div>

      <div className="flex items-center gap-6">

        <div className="text-right">

          <h2 className="font-semibold">
            Welcome Admin
          </h2>

          <p className="text-sm text-gray-500">
            {new Date().toLocaleDateString()}
          </p>

        </div>

        <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold">
          A
        </div>

        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

    </header>
  );
}

export default Topbar;