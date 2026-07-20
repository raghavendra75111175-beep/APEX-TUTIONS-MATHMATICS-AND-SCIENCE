function StatsCard({ title, value, color }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-gray-500 text-lg">{title}</h2>

      <h1 className={`text-4xl font-bold mt-3 ${color}`}>
        {value}
      </h1>
    </div>
  );
}

export default StatsCard;