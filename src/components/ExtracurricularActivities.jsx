// src/ExtracurricularActivities.js
import React from 'react';
import extra from '../assets/extra.png';

const ExtracurricularActivities = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-8 bg-white shadow-lg rounded-lg">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src={extra} // Replace with your image path
          alt="Extracurricular Activities"
          className="w-full md:w-96 h-auto rounded-lg object-cover mb-4 md:mb-0 md:mr-8"
        />
      </div>
      {/* Text Section */}
      <div className="mt-4 md:mt-0 md:ml-8">
        <h2 className="text-3xl font-bold mb-2">Our Extra-curricular Activities</h2>
        <div className="h-1 w-12 bg-green-500 mb-4"></div>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-green-600">⚫ Sports</h3>
            <p className="text-gray-700">Our students are passionate about sports and athletics and have the freedom to choose the one they like and wish to take up.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-600">⚫ Events</h3>
            <p className="text-gray-700">We have several writers who are encouraged to come up with creations that are regularly published in our in-house magazines.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-600">⚫ Performing Arts & Music</h3>
            <p className="text-gray-700">With professionals on board, we take pride in training our students in art forms like dance, drama, painting, and more.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtracurricularActivities;
