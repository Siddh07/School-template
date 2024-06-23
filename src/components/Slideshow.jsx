import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import GridImg1 from '../assets/GridImg-1.jpg'; 
import GridImg2 from '../assets/GridImg-2.jpg'; 
import Visit from '../assets/visit.jpg'; 
import Events from '../assets/events.jpg';
import Festival from '../assets/festival.jpg'; 
import Holi from '../assets/Holi.jpg'; 
import HoliChildren from '../assets/Holi-Children.jpg'; 
import Football from '../assets/Football.jpg'; 
import Basketball from '../assets/Basketball.jpg'; 
import Vollyball from '../assets/Vollyball.jpg'; 

const Slideshow = () => {
  const images = [
    GridImg1, GridImg2, Visit, Events, Festival, 
    Holi, HoliChildren, Football, Basketball, Vollyball
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedImages, setDisplayedImages] = useState(6); // Default to show 6 images on mobile

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setDisplayedImages(6); // Show 6 images on mobile
      } else {
        setDisplayedImages(8); // Show 8 images on desktop
      }
    };

    handleResize(); // Initial setup based on window width

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      const intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds

      return () => {
        clearInterval(intervalId);
        document.body.style.overflow = 'auto';
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const openSlideshow = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeSlideshow = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleViewMore = () => {
    setDisplayedImages(displayedImages + 6); // Increase displayed images by 6
  };

  return (
    <div className="container mx-auto py-2">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.slice(0, displayedImages).map((image, index) => (
          <div key={index} className="cursor-pointer" onClick={() => openSlideshow(index)}>
            <img src={image} alt={`Grid ${index}`} className="rounded-lg shadow-lg w-full h-64 object-cover" />
          </div>
        ))}
      </div>

      {images.length > displayedImages && (
        <div className="flex justify-center mt-4">
          <button onClick={handleViewMore} className="mt-8  text-lg text-indigo-800 hover:text-indigo-500 hover:underline transition duration-100">
            View More
          </button>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-full sm:max-w-3xl">
            <button 
              className="absolute top-[130%] md:top-[-20px] right-[45%] md:right-0 text-white bg-red-500 rounded-full p-2" 
              onClick={closeSlideshow}
            >
              <FaTimes size={20} />
            </button>
            <button 
              className="absolute top-[120%] left-[10%] md:left-[-10px] md:top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2"
              onClick={prevImage}
            >
              <FaArrowLeft size={20} />
            </button>
            <button 
              className="absolute top-[120%] right-[10%] md:right-[-10px] md:top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2"
              onClick={nextImage}
            >
              <FaArrowRight size={20} />
            </button>
            <div className="px-4">
              <img src={images[activeIndex]} alt={`Slide ${activeIndex}`} className="rounded-lg shadow-lg w-full max-h-full sm:max-h-96 object-cover" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slideshow;
