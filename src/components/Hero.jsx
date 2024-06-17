// src/components/Hero.js
import React, { useEffect, useState } from 'react';
import bgHome from '../assets/bg-home.png';
import './animation.css';
import LatestNews from './LatestNews';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <section className="h-auto md:h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="order-1 md:order-1 flex items-center justify-center md:justify-start h-full bg-yellow-400">
          <div className={`text-center md:text-left text-black p-4 md:p-8 md:max-w-xl md:ml-32 md:mt-[-8%] leading-relaxed ${isMobile ? 'animate-scale' : ''}`}>
            <p className="text-xl md:text-4xl mt-4 mb-4 ml-2 transform scale-100 md:scale-100 transition-transform duration-500 ease-in-out">
              Be a part of our journey to Success and enjoy the learning experience
            </p>
            <div className="flex justify-center md:justify-start items-center md:mt-[16%]">
              <button className="text-xl px-4 md:text-3xl md:px-8 sm:text-md bg-white text-gray-700 border-2 border-white hover:bg-indigo-700 hover:text-white hover:border-2 hover:border-indigo-700 transition duration-500 ease-in-out rounded-md p-2 mt-2 shadow-xl">
                Explore
              </button>
            </div>
          </div>
        </div>
        <div
          className="order-2 md:order-2 bg-yellow-400 bg-center bg-no-repeat h-96 md:h-auto mb-8 md:mb-0 overflow-hidden"
          style={{ backgroundImage: `url(${bgHome})`, backgroundSize: 'contain' }}
        ></div>
      </section>

      <section className="p-8 bg-gray-100">
        <h2 className="text-4xl font-bold mb-4 text-gray-800 justify-center text-center font-custom">Safety for Everybody</h2>
        <p className='text-md text-gray-400 justify-center text-center mb-8'>We put the safety of the student and our staff as our top priority</p>
        <div className="flex justify-center items-center mb-4 mt-4">
          <button className='p-2 rounded-sm border-2 border-gray-100 bg-indigo-500 text-gray-300 transition duration-500 ease-in-out hover:border-black hover:bg-white hover:text-indigo-500'>
            Safety Measures
          </button>
        </div>
        <div className="grid grid-cols-2">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-bold mb-2">Our History</h3>
            <p className="text-base">Learn about the rich history of our institution...</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-bold mb-2">Mission & Vision</h3>
            <p className="text-base">Our mission and vision guide our educational philosophy...</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-bold mb-2">Achievements</h3>
            <p className="text-base">Discover the achievements and milestones we have reached...</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-bold mb-2">Community</h3>
            <p className="text-base">We are deeply rooted in our community and value our partnerships...</p>
          </div>
        </div>
      </section>

      <div className="my-12">
        <LatestNews />
      </div>

      <section className="p-8 bg-white">
        <h2 className="text-3xl font-bold mb-4">Programs</h2>
        <p className="text-xl">We offer a variety of programs to meet the needs of all students, including advanced placement...</p>
      </section>
      <section className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-xl">Get in touch with us to learn more about our school, schedule a visit, or ask any questions...</p>
      </section>
    </div>
  );
}

export default Hero;
