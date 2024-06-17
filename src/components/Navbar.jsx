import React, { useState } from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false); // Close the mobile menu on navigation
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 h-16 items-center relative">
          {/* First grid: Logo */}
          <div className="flex items-center">
            <span className="md:text-3xl text-xl font-bold cursor-pointer" onClick={() => handleNavigation('/')}>
              School-Logo
            </span>
          </div>
          {/* Second grid: Navigation */}
          <div className="hidden sm:flex justify-center items-center">
            <div className="flex space-x-16">
              <span
                onClick={() => handleNavigation('/')}
                className="border-b-2 border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 text-lg font-medium cursor-pointer"
              >
                Home
              </span>
              <span
                onClick={() => handleNavigation('/about')}
                className="border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 transition duration-250 ease-in-out inline-flex items-center px-1 pt-1 text-lg font-medium cursor-pointer"
              >
                About
              </span>
              <span
                onClick={() => handleNavigation('/services')}
                className="border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 transition duration-250 ease-in-out inline-flex items-center px-1 pt-1 text-lg font-medium cursor-pointer"
              >
                Services
              </span>
              <span
                onClick={() => handleNavigation('/news')}
                className="border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 transition duration-250 ease-in-out inline-flex items-center px-1 pt-1 text-lg font-medium cursor-pointer"
              >
                News
              </span>
            </div>
          </div>
          {/* Third grid: Hamburger Menu */}
          <div className="flex justify-end items-center sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
              style={{
                position: 'absolute',
                top: 16,
                right: 8,
              }}
            >
              <svg className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Third grid: Log In Button (Visible on larger screens) */}
          <div className="hidden sm:flex justify-end items-center">
            <button
              onClick={() => handleNavigation('/login')}
              className="bg-indigo-600 text-white border-2 px-3 hover:bg-gray-100 hover:border-black hover:text-gray-700 transition duration-500 ease-in-out py-2 rounded-md text-lg font-medium flex items-center"
            >
              <IoPersonOutline className="mr-2" /> Log In
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden absolute top-16 left-0 right-0 z-50 bg-white shadow-lg">
            <div className="px-2 pt-5 pb-10 space-y-5 flex flex-col items-center">
              <span
                onClick={() => handleNavigation('/')}
                className="block px-3 py-2 rounded-md font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 text-xl cursor-pointer"
              >
                Home
              </span>
              <span
                onClick={() => handleNavigation('/about')}
                className="block px-3 py-2 rounded-md text-xl font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
              >
                About
              </span>
              <span
                onClick={() => handleNavigation('/services')}
                className="block px-3 py-2 rounded-md text-xl font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
              >
                Services
              </span>
              <span
                onClick={() => handleNavigation('/news')}
                className="block px-3 py-2 rounded-md text-xl font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
              >
                News
              </span>
              <span
                onClick={() => handleNavigation('/login')}
                className="block px-3 py-2 rounded-md text-xl font-medium bg-indigo-600 text-white border-2 hover:bg-gray-100 hover:border-black hover:text-gray-700 transition duration-500 ease-in-out cursor-pointer"
              >
                Log In
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
