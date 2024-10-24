import React, { useState } from "react";


const images = [
  {
    src: "https://img.freepik.com/premium-photo/book-with-bookmark-purple-color-orange-background-3d-rendering-isometric_1294533-3834.jpg",
    title: "Explore the World of Books",
    text: "Dive into a vast collection of literature and knowledge.",
  },
  {
    src: "https://wowslider.com/sliders/demo-76/data1/images/bookshelf349946_1280.jpg",
    title: "Your Next Great Read Awaits",
    text: "Discover new authors and genres tailored for you.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6UIkcMhgPFh0lyaRjiaZFNPXCNqMg7s_cv-NpLOxEEGF7YK_qhDuNDKpHMb-UBQr_n6A&usqp=CAU",
    title: "Unleash Your Imagination",
    text: "Books transport you to different worlds and adventures.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-t25EHnz-6-RWXdse0PUrHzrgchmMZXvOAY2Jth4btfp_UiKpIDju6_ZHcQbrTvdSzBA&usqp=CAU",
    title: "Join Our Reading Community",
    text: "Connect with fellow book lovers and share your thoughts.",
  },
  {
    src: "https://img.freepik.com/premium-photo/book-with-bookmark-purple-color-orange-background-3d-rendering-isometric_1294533-3834.jpg",
    title: "Enhance Your Knowledge",
    text: "Read and grow in every aspect of life.",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative overflow-hidden h-64 mt-6">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full relative">
            <img
              src={image.src}
              alt={`slide-${index}`}
              className="object-cover h-64 w-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4">
              <h2 className="text-xl font-bold mb-2">{image.title}</h2>
              <p className="text-base mb-4">{image.text}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded"
        style={{ opacity: 0.5 }}
      >
        &#10094; 
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded"
        style={{ opacity: 0.5 }} 
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
