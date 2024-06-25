import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('/');
  const [scrollY, setScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  const handleNavigation = (path) => {
    navigate(path);
    setActivePath(path);
    setMenuOpen(false); // Close the mobile menu on navigation

    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // Smooth scrolling behavior
    });
  };

  const getNavClass = (path) => (
    path === activePath
      ? 'border-b-2 border-indigo-600 text-gray-900 inline-flex items-center px-1 pt-1 text-md font-bold cursor-pointer'
      : 'border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 transition duration-250 ease-in-out inline-flex items-center px-1 pt-1 text-md font-medium cursor-pointer'
  );

  return (
    <header className={`bg-white shadow ${showNav ? 'sticky' : '-top-16'} top-0 z-50 transition-transform duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 h-14 items-center relative">
          {/* First grid: Logo */}
          <div className="flex items-center">
            <span className="md:text-xl text-xl font-bold cursor-pointer" onClick={() => handleNavigation('/')}>
              School-Logo
            </span>
          </div>
          {/* Second grid: Navigation */}
          <nav className="hidden sm:flex justify-center items-center">
            <div className="flex space-x-16">
              <span
                onClick={() => handleNavigation('/')}
                className={getNavClass('/')}
              >
                Home
              </span>
              <span
                onClick={() => handleNavigation('/about')}
                className={getNavClass('/about')}
              >
                About
              </span>
              <span
                onClick={() => handleNavigation('/learning')}
                className={getNavClass('/learning')}
              >
                Learning
              </span>
              <span
                onClick={() => handleNavigation('/news')}
                className={getNavClass('/news')}
              >
                News
              </span>
              <span
                onClick={() => handleNavigation('/parent')}
                className={getNavClass('/parent')} 
                style={{zIndex: '10',}}
              >
                Parent
              </span>
            </div>
          </nav>
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
          <div className="hidden sm:flex justify-end items-center space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-gray-700">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:text-gray-700">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700">
              <FaGithub className="h-6 w-6" />
            </a>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="sm:hidden absolute top-12 left-0 right-0 z-50 bg-white shadow-xl">
            <div className="px-2 pt-8 pb-12 space-y-5 flex flex-col items-center">
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
                onClick={() => handleNavigation('/learning')}
                className="block px-3 py-2 rounded-md text-xl font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
              >
                Learning
              </span>
              <span
                onClick={() => handleNavigation('/news')}
                className="block px-3 py-2 rounded-md text-xl font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
              >
                News
              </span>
              <span
                onClick={() => handleNavigation('/parent')}
                className="block px-3 pt-2 pb-4 rounded-md text-xl font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
              >
                Parent
              </span>
              <div className="flex space-x-8">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-gray-700 text-lg">
                  <FaFacebook className="h-8 w-8" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:text-gray-700">
                  <FaInstagram className="h-8 w-8" />
                </a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700">
                  <FaGithub className="h-8 w-8" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
