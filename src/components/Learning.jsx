import React from 'react';
import learning from '../assets/learning-child.png';

const Learning = () => {
  return (
    <div className="flex flex-col lg:flex-row h-[60vh] w-[90vw] mx-auto">
      {/* Left Section */}
      <div className="w-full lg:w-1/6 bg-red-700 text-white p-4 flex items-center justify-center h-full">
        <h1 className="text-2xl font-bold">
          Online Classes<br />for All
        </h1>
      </div>

      {/* Middle Section */}
      <div className="w-full lg:w-1/3 h-full">
        <img 
          src={learning} 
          alt="Child with laptop" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 bg-red-100 p-4 flex items-center h-full">
        <div>
          <p className="text-base text-gray-700 mb-4">
            I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.
          </p>
          <p className="text-base text-gray-700">
            This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company.
          </p>
        </div>
      </div>


   
    </div>
    
  );
};

export default Learning;
