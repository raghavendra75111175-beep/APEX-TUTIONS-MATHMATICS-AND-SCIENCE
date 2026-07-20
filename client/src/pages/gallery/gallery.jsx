import { FaImages } from "react-icons/fa";

function Gallery() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-6">
      <div className="bg-white shadow-xl rounded-xl p-12 text-center max-w-2xl">

        <div className="text-7xl text-blue-700 flex justify-center mb-6">
          <FaImages />
        </div>

        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Gallery
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Photos and classroom activities will be uploaded soon.
        </p>

        <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-5">
          <p className="text-lg font-semibold text-yellow-700">
            🚧 Gallery is under construction.
          </p>

          <p className="text-gray-700 mt-2">
            New images will be available soon.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Gallery;