function SubjectCard({ icon, title }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-64 text-center hover:shadow-2xl transition duration-300">

      <div className="text-5xl">
        {icon}
      </div>

      <h2 className="text-2xl font-bold mt-4">
        {title}
      </h2>

    </div>
  );
}

export default SubjectCard;