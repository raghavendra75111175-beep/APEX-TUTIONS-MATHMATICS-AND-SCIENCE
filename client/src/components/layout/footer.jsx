function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-3xl font-bold">
            Apex Tuitions
          </h2>

          <p className="mt-4 text-gray-300">
            Building strong foundations in Mathematics, Science,
            English and Social Studies.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Quick Links
          </h2>

          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Contact
          </h2>

          <p>📞 +91 9701234524</p>
          <p className="mt-2">📧 rkreddy9i@gmail.com</p>
          <p className="mt-2">
            📍 Hyderabad, Badangpet
          </p>
        </div>

      </div>

      <div className="border-t border-blue-700 py-4 text-center">
        © 2026 Apex Tuitions. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;