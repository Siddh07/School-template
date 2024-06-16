// src/components/Hero.js
import React from 'react';
import bgHome from '../assets/bg-home.jpg';

const Hero = () => {
  return (
    <div>
      <section
        className="h-screen flex flex-col md:flex-row bg-cover bg-center"
        style={{ backgroundImage: `url(${bgHome})` }}
      >
        <div className="order-2 md:order-1 flex items-center justify-start h-full bg-gray-900 bg-opacity-10 md:bg-opacity-0">
          <div className="text-left text-white p-8 max-w-lg bg-indigo-700 bg-opacity-90 ml-4 sm:ml-8 md:ml-16 border-2 border-gray-400">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-custom">Highschool</h1>
            <p className="text-xl sm:text-2xl mt-4 mb-4 ml-2">A Great Place to Learn while enjoying</p>
            <button className="text-sm sm:text-md bg-gray-600 text-gray-100 border-2 border-indigo-400 hover:bg-gray-200 hover:text-indigo-700 hover:border-2 hover:border-gray-400 transition duration-500 ease-in-out rounded p-2 mt-2">
              Discover the school
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex-grow md:flex-none bg-cover bg-bottom md:bg-center h-full md:h-auto">
          <div className="h-full bg-gray-900 bg-opacity-10 md:hidden"></div>
        </div>
      </section>

      <section className="p-8 bg-gray-100">
        <h2 className="text-4xl font-bold mb-4 text-gray-800 justify-center text-center font-custom">Safety for Everybody</h2>
        <p className='text-md text-gray-400 justify-center text-center mb-8'>We put the safety of the student and our staff as our top priority</p>
        <div className="flex justify-center items-center mb-4 mt-4">
          <button className='p-2 rounded-sm border-2 border-gray-100 bg-indigo-500 text-gray-300 transition duration-500 ease-in-out hover:border-black hover:bg-white hover:text-indigo-500'>
            Safety Measures
          </button>
        </div>
        <div className="grid grid-cols-2 ">
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
