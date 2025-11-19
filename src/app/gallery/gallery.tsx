import { useState } from "react";

const images = [
  "/assets/pizza1.jpg",
  "/assets/pizza2.jpg",
  "/assets/pizza3.jpg",
  "/assets/pizza4.jpg",
  "public/assets/pizza5.jpg",
  "public/assets/interior-saborReal.png",
  "public/assets/Espaço-saborReal.png",
];

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      {/* Título */}
      <h1 className="text-6xl font-bold text-red-600 text-center mb-12">
        Galeria
      </h1>

      {/* Grid de imagens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, idx) => (
          <div key={idx} className="cursor-pointer">
            <img
              src={img}
              alt={`Galeria ${idx + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
              onClick={() => openModal(idx)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            onClick={closeModal}
          >
            &times;
          </button>

          <button
            className="absolute left-5 text-white text-3xl font-bold"
            onClick={prevImage}
          >
            &#10094;
          </button>

          <img
            src={images[currentIndex]}
            alt={`Galeria ${currentIndex + 1}`}
            className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          />

          <button
            className="absolute right-5 text-white text-3xl font-bold"
            onClick={nextImage}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
