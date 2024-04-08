import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-black font-bold text-lg">Ease <span className='text-blue-500'>Write</span></span>
        </div>
        <div className="hidden md:block">
          <a href="#" className="text-black px-6 py-2 font-bold">Home</a>
          <a href="#" className="text-gray-500 px-6 py-2 font-bold">About</a>
          <a href="#" className="text-gray-500 px-6 py-2 font-bold">Services</a>
          <a href="#" className="text-gray-500 px-6 py-2 font-bold">Contact</a>
        </div>
        <button className='hidden md:block bg-blue-500 px-7 py-2 rounded-full text-white font-bold'>Login</button>
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-16 right-0 bg-gray-800 w-48 py-2 rounded shadow-lg">
              <a href="#" className="block text-white px-4 py-2">Home</a>
              <a href="#" className="block text-white px-4 py-2">About</a>
              <a href="#" className="block text-white px-4 py-2">Services</a>
              <a href="#" className="block text-white px-4 py-2">Contact</a>
              <button className='block text-white px-4 py-2'>Login</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
