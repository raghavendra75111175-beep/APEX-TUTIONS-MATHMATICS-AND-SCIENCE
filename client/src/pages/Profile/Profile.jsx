function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Admin Profile</h1>

      <div className="bg-white rounded-xl shadow p-6 max-w-xl">
        <div className="mb-4">
          <label className="font-semibold">Name</label>
          <input
            className="w-full border p-3 rounded mt-2"
            value="Admin"
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="font-semibold">Email</label>
          <input
            className="w-full border p-3 rounded mt-2"
            value="admin@gmail.com"
            readOnly
          />
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;