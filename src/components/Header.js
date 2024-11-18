import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full bg-gradient-to-r from-green-500 to-green-700 shadow-md hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white hover:text-green-200 transition-all">
          Health App
        </h1>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          <ul className="flex gap-4 text-white text-lg">
            <li className="hover:text-green-200 transition-all cursor-pointer">
              Home
            </li>
            <li className="hover:text-green-200 transition-all cursor-pointer">
              Services
            </li>
            <li className="hover:text-green-200 transition-all cursor-pointer">
              Contact
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gradient-to-r from-green-500 to-green-700 shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4 text-white text-lg">
            <li
              className="hover:text-green-200 transition-all cursor-pointer"
              onClick={toggleMenu}
            >
              Home
            </li>
            <li
              className="hover:text-green-200 transition-all cursor-pointer"
              onClick={toggleMenu}
            >
              Services
            </li>
            <li
              className="hover:text-green-200 transition-all cursor-pointer"
              onClick={toggleMenu}
            >
              Contact
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
