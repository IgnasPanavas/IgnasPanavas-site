import React from "react";

const PersonalityGallery = () => {
  // Array of image data
  const images = [
    {
      src: "/resources/podium.jpg",
      alt: "Lithuanian Senate",
      caption: "Proud to be Lithuanian",
    },
    {
      src: "/resources/sunrise.jpeg",
      alt: "Sunrise",
      caption: "Sunrises are so blissful",
    },
    {
      src: "/resources/friends.jpeg",
      alt: "Friends at Buc-ee's",
      caption: "Friends make life fun",
    },
    {
      src: "/resources/switzerland.jpeg",
      alt: "Biking",
      caption: "No place like the Swiss Alps",
    },
    {
        src: "/resources/coffee.jpeg",
        alt: "Coffee",
        caption: "I love a great cup of coffee",
      },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen py-10">
      <h1 className="text-4xl font-bold mb-6">A Peek Into My Life</h1>
      <p className="text-gray-700 mb-8 text-center">
        Some of my favorite: moments, activities, and people!
      </p>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl px-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            {/* Image */}
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
            />
            {/* Caption Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <p className="text-white text-center px-4">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalityGallery;
