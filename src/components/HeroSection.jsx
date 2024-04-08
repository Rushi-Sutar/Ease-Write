import React from "react";


const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:h-[90vh] md:mx-20 mx-10">
      <div className="left md:w-[50%] flex justify-center items-center">
        <div className="text-center md:text-start">
          <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl mb-6">Ease <span className="text-blue-500 font-extrabold">Write</span></h1>
          <p className="text-sm md:text-lg font-normal text-gray-400 leading-relaxed">Your ultimate text editing solution. Craft documents effortlessly with our MS Word-like editor. Customize alignment, add images, videos, and links seamlessly. When your masterpiece is ready, export it as a .doc file with just a click. Experience simplicity, power, and convenience with EaseWrite.</p>
        </div>
      </div>
      <div className="right md:w-[50%] flex justify-center items-center">
        <img src="src/assets/paper.png" alt="" width={'50%'} />
      </div>
   </div>
  );
};

export default HeroSection;
