import { useLocation, useNavigate } from "react-router-dom";

function StudentProfile() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const student = state?.student;

  if (!student) {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold">Student Not Found</h1>

        <button
          onClick={() => navigate("/dashboard/students")}
          className="bg-blue-700 text-white px-6 py-3 rounded-lg mt-6"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">

      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-2xl">

        <div className="flex flex-col items-center">

          <div className="w-32 h-32 rounded-full bg-blue-700 text-white flex items-center justify-center text-5xl font-bold">

            {student.name.charAt(0).toUpperCase()}

          </div>

          <h1 className="text-4xl font-bold mt-5">
            {student.name}
          </h1>

          <p className="text-gray-500 mt-2">
            Apex Tuitions Student
          </p>

        </div>

        <div className="mt-10 space-y-4 text-lg">

          <div className="flex justify-between border-b pb-3">
            <strong>Enrollment No</strong>
            <span>{student.enrollmentNumber}</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <strong>Class</strong>
            <span>{student.class}</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <strong>Phone</strong>
            <span>{student.phone}</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <strong>Address</strong>
            <span>{student.address}</span>
          </div>

        </div>

        <button
          onClick={() => navigate("/dashboard/students")}
          className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg mt-10 w-full"
        >
          Back
        </button>

      </div>

    </div>
  );
}

export default StudentProfile;