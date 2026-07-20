function CourseCard({ icon, title, topics }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">

      <div className="text-6xl text-center">
        {icon}
      </div>

      <h2 className="text-3xl font-bold text-center mt-4">
        {title}
      </h2>

      <ul className="mt-8 space-y-3">

        {topics.map((topic, index) => (
          <li key={index} className="text-gray-700">
            ✅ {topic}
          </li>
        ))}

      </ul>

      <button className="mt-8 w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800">

        Enroll Now

      </button>

    </div>
  );
}

export default CourseCard;