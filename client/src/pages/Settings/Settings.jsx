function Settings() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Settings</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-6">
          Apex Tuitions
        </h2>

        <div className="space-y-4">

          <input
            className="border p-3 rounded w-full"
            placeholder="Institute Name"
            defaultValue="Apex Tuitions"
          />

          <input
            className="border p-3 rounded w-full"
            placeholder="Phone Number"
          />

          <input
            className="border p-3 rounded w-full"
            placeholder="Email"
          />

          <button className="bg-blue-700 text-white px-6 py-3 rounded">
            Save Settings
          </button>

        </div>
      </div>
    </div>
  );
}

export default Settings;