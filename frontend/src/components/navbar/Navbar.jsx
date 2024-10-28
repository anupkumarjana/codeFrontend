// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Dashboard", path: "/dashboard/challenges/react" },
    { name: "Blog", path: "/blog" },
    { name: "Contribute", path: "/contribute" },
  ];

  return (
    <nav className="bg-primary border-b-2 border-[#1d1d1d] sticky top-0 z-10 ">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          {/* Left Section: Logo and Nav Links */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link to="/">
              <span className="text-xl font-bold logo ">codeFrontend</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              {navLinks.map(({ name, path }) => (
                <Link
                  key={name}
                  to={path}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section: Sign In Button */}
          <div className="hidden md:block">
            <button className="button-61">Sign In</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
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
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
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
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(({ name, path }) => (
              <Link
                onClick={() => setIsOpen(!isOpen)}
                key={name}
                to={path}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="pl-5 px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button className="button-61">Sign In</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
