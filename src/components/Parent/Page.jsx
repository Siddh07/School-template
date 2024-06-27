import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Page.css';

// Images from the assets folder  
import Uniform from '../../assets/Parent/school_uniform.jpg';
import Holiday from '../../assets/Parent/Holiday.jpg';

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
            <div className='text-center mt-[-35%] md:mt-[-10%]'>
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
            <div className='text-center mt-[-40%] md:mt-[-5%] md:px-[25%]'>
                <span className="text-4xl text-gray-500">
                    <h1 className='font-bold text-blue-500 mb-6'>Uniform</h1>
                </span>
                <p className="text-lg font-serif leading-relaxed text-gray-700 mb-4 px-16">
                Students are required to wear the designated school uniform every day, 
                    which includes a navy blue blazer with the school emblem, a white dress shirt, gray trousers and black dress shoes.
                </p>
                <img src={Uniform} alt="School Uniform" className="rounded-md mx-auto mt-4 px-6 mb-8" />
            </div>
            <h2 className="text-2xl font-serif font-semibold">Page 2</h2>
            <div className="flex justify-between mt-2">
                <FontAwesomeIcon icon={faArrowLeft} className="border-2 text-white bg-indigo-600 rounded-full p-2 cursor-pointer hover:border-indigo-600 hover:text-indigo-600 hover:bg-gray-100 mr-2" onClick={prevPage} />
                <FontAwesomeIcon icon={faArrowRight} className="border-2 text-white bg-indigo-600 rounded-full p-2 cursor-pointer hover:border-indigo-600 hover:text-indigo-600 hover:bg-gray-100 ml-2" onClick={nextPage} />
            </div>
        </div>
      );
      break;
    case 3:
      pageContent = (
        <div className={`page page3 ${animationDirection === 'next' ? 'page-next' : ''} ${animationDirection === 'prev' ? 'page-prev' : ''}`}>
          <div className='text-center mt-[-40%] md:mt-[-5%] md:px-[15%]'>
                <span className="text-4xl text-gray-500">
                    <h1 className='font-bold text-green-500 mb-6'>Holiday & Absence</h1>
                </span>
                <p className="text-lg font-serif leading-relaxed text-gray-700 mb-4 px-8 md:px-64">
                Students are expected to attend school regularly and on time. If your child will be absent due to illness or other reasons, 
                please inform the school office as soon as possible. Planned absences, such as for family vacations, 
                should be communicated to the school well in advance. 
                Note that extended absences during term time are discouraged as they can impact your child's learning. 
                </p>
                <img src={Holiday} alt="Holiday" className="rounded-md mx-auto mt-4 px-6 mb-4" />
            </div>
        <h2 className="text-2xl font-serif font-semibold">Page 3</h2>
          <div className="flex justify-between">
                <FontAwesomeIcon icon={faArrowLeft} className="border-2 text-white bg-indigo-600 rounded-full p-2 cursor-pointer hover:border-indigo-600 hover:text-indigo-600 hover:bg-gray-100 mr-2" onClick={prevPage} />
                <FontAwesomeIcon icon={faArrowRight} className="border-2 text-white bg-indigo-600 rounded-full p-2 cursor-pointer hover:border-indigo-600 hover:text-indigo-600 hover:bg-gray-100 ml-2" onClick={nextPage} />
            </div>
        </div>
      );
      break;
    case 4:
    pageContent = (
      <div className={`page page3 ${animationDirection === 'next' ? 'page-next' : ''} ${animationDirection === 'prev' ? 'page-prev' : ''}`}>
        <div className='text-center mt-[-55%] md:mt-[-5%] md:px-[25%]'>
          <span className="text-4xl text-gray-500">
            <h1 className='font-bold text-red-600 mb-6'>Safety First</h1>
          </span>
          <p className="text-lg font-serif leading-relaxed text-gray-700 mb-4 px-16">
            All students must follow school rules and guidelines to ensure a secure and safe environment for everyone on school grounds.
          </p>
          <Link to="/safety" className="border-2 bg-red-600 p-2 md:text-sm text-white rounded-md hover:border-red-600 hover:text-red-600 hover:bg-gray-100 shadow-xl transition duration-1000 ease-in-out">
            Safety Measures
          </Link>
        </div>
        <h2 className="text-2xl font-serif font-semibold mt-8">Page 4</h2>
        <div className="text-left mt-2">
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
