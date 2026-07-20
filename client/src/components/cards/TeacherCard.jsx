function TeacherCard() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://placehold.co/350x350"
            alt="Teacher"
            className="rounded-2xl shadow-xl"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Meet Our Teacher
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            Our experienced faculty is dedicated to helping students
            achieve academic excellence through personalized guidance
            and structured learning.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✅ 20+ Years of Teaching Experience</li>
            <li>✅ Expert Mathematics Faculty</li>
            <li>✅ Small Batch Size</li>
            <li>✅ Weekly Tests & Progress Reports</li>
          </ul>

          <button className="mt-8 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
            Know More
          </button>
        </div>

      </div>
    </section>
  );
}

export default TeacherCard;