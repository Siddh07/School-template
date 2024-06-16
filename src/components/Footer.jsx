// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 p-4">
      <div className="container mx-auto text-center text-white">
        <p>&copy; 2024 School Name. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-gray-300"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
