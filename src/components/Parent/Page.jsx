// src/Page.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
import './Page.css'; // Import CSS file for animations

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [animationDirection, setAnimationDirection] = useState(null);

  const nextPage = () => {
    setAnimationDirection('next');
    setTimeout(() => {
      setCurrentPage(currentPage + 1);
      setAnimationDirection(null);
    }, 500); // Adjust timing to match your animation duration
  };

  const prevPage = () => {
    setAnimationDirection('prev');
    setTimeout(() => {
      setCurrentPage(currentPage - 1);
      setAnimationDirection(null);
    }, 500); // Adjust timing to match your animation duration
  };

  let pageContent;
  switch (currentPage) {
    case 1:
      pageContent = (
        <div className={`page page1 ${animationDirection === 'next' ? 'page-next' : ''} ${animationDirection === 'prev' ? 'page-prev' : ''}`}>
            <div className='text-center mt-[-15%] md:mt-[-10%]'>
                <span className="text-4xl text-gray-500">For the
                    <h1 className='font-bold text-yellow-400 mb-6'>PARENTS</h1>
                </span>
                <p className="text-lg font-serif leading-relaxed text-gray-700 mb-4 px-16">
                    Dear parents, we are excited to share with you the achievements and growth of your children at our school.
                </p>
                <p className="text-lg font-serif leading-relaxed text-gray-700 mb-8 px-16 md:px-[30%]">
                    Our school is a place where your childrens can learn and grow.
                </p>
            </div>
            <h2 className="text-2xl font-serif font-semibold">Page 1</h2>
            <div className="text-right mt-2">
                <FontAwesomeIcon icon={faArrowRight} className="border-2 text-white bg-indigo-600 rounded-full p-2 cursor-pointer hover:border-indigo-600 hover:text-indigo-600 hover:bg-gray-100 ml-2" onClick={nextPage} />
            </div>
        </div>
      );
      break;
    case 2:
      pageContent = (
        <div className={`page page2 ${animationDirection === 'next' ? 'page-next' : ''} ${animationDirection === 'prev' ? 'page-prev' : ''}`}>
          <h1 className="text-4xl font-serif font-bold text-center mb-6">Book Title</h1>
          <h2 className="text-2xl font-serif font-semibold text-center mb-4">Page 2</h2>
          <p className="text-lg font-serif leading-relaxed text-gray-700 mb-6">
            This is page 2 content.
          </p>
          <div className="flex justify-between mt-8">
            <FontAwesomeIcon icon={faArrowLeft} className="border-2 text-white bg-indigo-600 rounded-full p-2 cursor-pointer hover:border-indigo-600 hover:text-indigo-600 hover:bg-gray-100 mr-2" onClick={prevPage} />
            <FontAwesomeIcon icon={faArrowRight} className="border-2 text-white bg-indigo-600 rounded-full p-2 cursor-pointer hover:border-indigo-600 hover:text-indigo-600 hover:bg-gray-100 ml-2" onClick={nextPage} />
          </div>
        </div>
      );
      break;
    case 3:
      pageContent = (
        <div className={`page page3 ${animationDirection === 'next' ? 'page-next' : ''} ${animationDirection === 'prev' ? 'page-prev' : ''}`}>
          <h1 className="text-4xl font-serif font-bold text-center mb-6">Book Title</h1>
          <h2 className="text-2xl font-serif font-semibold text-center mb-4">Page 3</h2>
          <p className="text-lg font-serif leading-relaxed text-gray-700 mb-6">
            This is page 3 content.
          </p>
          <div className="text-left mt-8">
            <FontAwesomeIcon icon={faArrowLeft} className="border-2 text-white bg-indigo-600 rounded-full p-2 cursor-pointer hover:border-indigo-600 hover:text-indigo-600 hover:bg-gray-100 mr-2" onClick={prevPage} />
          </div>
        </div>
      );
      break;
    default:
      pageContent = (
        <div className={`page page1 ${animationDirection === 'next' ? 'page-next' : ''} ${animationDirection === 'prev' ? 'page-prev' : ''}`}>
            <div className='text-center mt-[-15%] md:mt-[-10%]'>
                <span className="text-4xl text-gray-500">For the
                    <h1 className='font-bold text-yellow-400 mb-6'>PARENTS</h1>
                </span>
                <p className="text-lg font-serif leading-relaxed text-gray-700 mb-4 px-16">
                    Dear parents, we are excited to share with you the achievements and growth of your children at our school.
                </p>
                <p className="text-lg font-serif leading-relaxed text-gray-700 mb-8 px-16 md:px-[30%]">
                    Our school is a place where your childrens can learn and grow.
                </p>
            </div>
            <h2 className="text-2xl font-serif font-semibold">Page 1</h2>
            <div className="text-right mt-2">
                <FontAwesomeIcon icon={faArrowRight} className="border-2 text-white bg-indigo-600 rounded-full p-2 cursor-pointer hover:border-indigo-600 hover:text-indigo-600 hover:bg-gray-100 ml-2" onClick={nextPage} />
            </div>
        </div>
      );
  }

  return (
    <div className="App">
      {pageContent}
    </div>
  );
};

export default Page;
