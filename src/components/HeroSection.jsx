import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-blue-500 text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Welcome to EaseWrite
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Your ultimate text editing solution. Craft documents effortlessly
          with our MS Word-like editor. Customize alignment, add images, videos,
          and links seamlessly. When your masterpiece is ready, export it as a
          .doc file with just a click. Experience simplicity, power, and
          convenience with EaseWrite.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
