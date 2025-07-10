
import { useState } from "react";

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&q=80",
      alt: "Living Room",
      title: "Spacious Living Area"
    },
    {
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&q=80",
      alt: "Bedroom",
      title: "Comfortable Bedroom"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      alt: "Work Space",
      title: "Modern Work Space"
    },
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&q=80",
      alt: "Kitchen",
      title: "Fully Equipped Kitchen"
    },
    {
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&q=80",
      alt: "Bathroom",
      title: "Clean Bathroom"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      alt: "Exterior",
      title: "Beautiful Exterior"
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
          <p className="text-xl text-gray-600">
            Take a virtual tour of our beautiful BnB
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
