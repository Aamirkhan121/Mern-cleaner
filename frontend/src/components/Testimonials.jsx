import React, { useState } from "react";

const testimonials = [
  {
    image: "path/to/image1.jpg", // Replace with actual image path
    quote:
      "Clean Office, Happy Team! We've received nothing but compliments from both staff and clients on how clean and organized our office. It’s made such a difference in our workplace morale.",
    name: "John Doe",
    designation: "Tech Global Co.",
  },
  {
    image: "path/to/image2.jpg", // Replace with actual image path
    quote:
      "Stress-Free and Sparkling Clean! I have never been more impressed with a cleaning service! It feels amazing to come home to a clean house without having to worry about it!",
    name: "Jane Peterson",
    designation: "Home Owner",
  },
  {
    image: "path/to/image3.jpg", // Replace with actual image path
    quote:
      "Professional and Detailed! Our office has never looked better! The cleaners are punctual, and their attention to high-traffic areas is exactly what we needed. Great value and service!",
    name: "Carlo Martinez",
    designation: "Innovate Group",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="flex flex-col items-center">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-6"
            />
            <p className="text-center text-lg md:text-xl text-gray-700 mb-4">
              "{testimonials[currentIndex].quote}"
            </p>
            <h3 className="text-lg font-bold">{testimonials[currentIndex].name}</h3>
            <p className="text-sm text-gray-500">{testimonials[currentIndex].designation}</p>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full p-2 shadow"
          >
            &#8249;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full p-2 shadow"
          >
            &#8250;
          </button>
        </div>

        {/* Dots for navigation */}
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex
                  ? "bg-gray-800"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

