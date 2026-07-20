function Reports() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Reports</h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-bold">Students Report</h2>
          <button className="bg-blue-600 text-white mt-4 px-4 py-2 rounded">
            Download
          </button>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-bold">Attendance Report</h2>
          <button className="bg-green-600 text-white mt-4 px-4 py-2 rounded">
            Download
          </button>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-bold">Fee Report</h2>
          <button className="bg-purple-600 text-white mt-4 px-4 py-2 rounded">
            Download
          </button>
        </div>

      </div>
    </div>
  );
}

export default Reports;