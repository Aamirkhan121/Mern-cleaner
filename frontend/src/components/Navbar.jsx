import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdCleaningServices } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="flex text-4xl font-normal">
            CLEAN
            <MdCleaningServices className="ml-2 text-5xl" />
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className="text-bold text-xl text-gray-600 hover:text-gray-800"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-bold text-xl text-gray-600 hover:text-gray-800"
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className="text-bold text-xl text-gray-600 hover:text-gray-800"
          >
            Services
          </NavLink>
          <NavLink
            to="/blogs"
            className="text-bold text-xl text-gray-600 hover:text-gray-800"
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contact"
            className="text-bold text-xl text-gray-600 hover:text-gray-800"
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none focus:text-gray-800"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "h-60" : "h-0"
        }`}
      >
        <NavLink
          to="/"
          className="block text-gray-600 hover:text-gray-800 py-2 px-4"
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="block text-gray-600 hover:text-gray-800 py-2 px-4"
          onClick={closeMenu}
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className="block text-gray-600 hover:text-gray-800 py-2 px-4"
          onClick={closeMenu}
        >
          Services
        </NavLink>
        <NavLink
          to="/blogs"
          className="block text-gray-600 hover:text-gray-800 py-2 px-4"
          onClick={closeMenu}
        >
          Blogs
        </NavLink>
        <NavLink
          to="/contact"
          className="block text-gray-600 hover:text-gray-800 py-2 px-4"
          onClick={closeMenu}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
