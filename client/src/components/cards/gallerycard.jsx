function GalleryCard({ image, title }) {
  return (
    <div className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />

      <div className="p-4 bg-white">
        <h3 className="text-xl font-semibold text-center">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default GalleryCard;