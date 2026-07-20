function StatCard({ number, title }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300">

      <h1 className="text-5xl font-bold text-blue-700">
        {number}
      </h1>

      <p className="text-lg mt-3 text-gray-700">
        {title}
      </p>

    </div>
  );
}

export default StatCard;