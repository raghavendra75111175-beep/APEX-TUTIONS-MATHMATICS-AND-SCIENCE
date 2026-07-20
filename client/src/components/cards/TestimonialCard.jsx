function TestimonialCard({ name, className, review }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">

      <div className="text-yellow-500 text-2xl">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="mt-4 text-gray-700 italic">
        "{review}"
      </p>

      <h3 className="mt-6 text-xl font-bold">
        {name}
      </h3>

      <p className="text-gray-500">
        {className}
      </p>

    </div>
  );
}

export default TestimonialCard;