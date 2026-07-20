import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-bold">
          Apex Tuitions
        </h1>

        <div className="flex gap-8 text-lg">

          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>

          <Link to="/about" className="hover:text-yellow-300">
            About
          </Link>

          <Link to="/courses" className="hover:text-yellow-300">
            Courses
          </Link>

          <Link to="/gallery" className="hover:text-yellow-300">
            Gallery
          </Link>

          <Link to="/contact" className="hover:text-yellow-300">
            Contact
          </Link>

          <Link to="/login" className="hover:text-yellow-300">
            Login
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;