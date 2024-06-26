// src/PrincipalMessage.js
import React from 'react';
import PrincipalImage from '../assets/principal.png';

const PrincipalMessage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-8 bg-white shadow-lg rounded-lg">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
           src={PrincipalImage} // Replace with your image path
          alt="Principal"
          className="w-48 h-48 rounded-lg object-cover md:mr-8"
        />
      </div>
      {/* Text Section */}
      <div className="mt-4 md:mt-0 md:ml-8">
        <h2 className="text-3xl font-bold mb-2">Message From The Principal</h2>
        <div className="h-1 w-12 bg-green-500 mb-4"></div>
        <p className="text-gray-700 mb-4">
          Welcome to St. Joseph’s English Academy. We are serving in education sector at local level base since 1999. We are very pleased to be part of this community and enjoy the close relationships that we have with our locality in serving students.
        </p>
        <p className="text-gray-700 mb-4">
          Our school continues to garner for the individual work we are accomplishing with students daily with the many options we provide.
        </p>
        <a href="#" className="text-green-600 hover:text-green-800 font-medium underline">
          Know More About Us →
        </a>
      </div>
    </div>
  );
};

export default PrincipalMessage;
