import { FaTools } from "react-icons/fa";

function Courses() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-6">
      <div className="bg-white shadow-xl rounded-xl p-12 text-center max-w-2xl">

        <div className="text-7xl text-blue-700 flex justify-center mb-6">
          <FaTools />
        </div>

        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Courses Page
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          We're currently updating our courses with complete information.
        </p>

        <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-5">
          <p className="text-lg font-semibold text-yellow-700">
            🚧 This page is under construction.
          </p>

          <p className="text-gray-700 mt-2">
            Please check back soon.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Courses;