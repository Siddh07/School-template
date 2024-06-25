import React, { useEffect, useState } from 'react';
import useCountUp from './useCountUp';
import bgHome from '../assets/bg-home.png';
import GridImg1 from '../assets/GridImg-1.jpg';
import GridImg2 from '../assets/GridImg-2.jpg';
import './animation.css';
import LatestNews from './LatestNews';
import Slideshow from './Slideshow';
import Testimonal from './Testimonial/Testimonal';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const startValues = [0, 0, 0, 0]; // Initial start values for each count-up number
  const endValues = [91, 83, 50, 2134]; // End values for each count-up number
  const duration = 10; // Duration for each count-up animation in seconds

  useCountUp(startValues, endValues, duration);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    console.log('Component mounted or isMobile state updated.');

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('Cleanup: Removed resize event listener.');
    };
  }, []);

  const handleScrollToGallery = () => {
    const gallerySection = document.getElementById('gallery-section');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
      console.log('Scrolled to gallery section.');
    }
  };

  const truncateText = (text) => {
    const words = text.split(' ');
    if (words.length > 11) {
      console.log('Text truncated.');
      return words.slice(0, 11).join(' ') + '...';
    }
    return text;
  };

  return (
    <div>
      <section className="h-auto md:h-[55vh] grid grid-cols-1 md:grid-cols-2">
        <div className="order-2 md:order-1 flex items-center justify-center md:justify-start h-full bg-yellow-400 md:pb-0 pb-2 px-8">
          <div className={`text-center md:text-left text-black p-4 md:p-8 md:max-w-xl md:ml-32 md:mt-[1%] leading-relaxed ${isMobile ? 'animate-scale' : ''}`}>
            <p className="text-lg md:text-2xl lg:text-4xl mb-4 ml-2 transform transition-transform duration-500 ease-in-out">
              Be a part of our journey to Success and enjoy the learning experience
            </p>
            <div className="flex justify-center md:justify-start items-center md:mt-8">
              <button onClick={handleScrollToGallery} className="text-xl px-4 md:text-xl md:px-8 sm:text-md bg-white text-gray-700 border-2 hover:bg-indigo-700 hover:text-white hover:border-2 hover:border-gray-300 transition duration-1000 ease-in-out rounded-md p-2 mt-2 shadow-xl">
                Explore
              </button>
            </div>
          </div>
        </div>
        <div
          className="order-1 md:order-2 bg-yellow-400 bg-center bg-no-repeat h-80 md:h-auto md:mb-0 overflow-hidden p-2"
          style={{ backgroundImage: `url(${bgHome})`, backgroundSize: 'contain' }}
        ></div>
      </section>

      <section className="px-8 py-4 sm:mt-4 md:mt-4">
        <h3 className='text-center mb-4 text-xl text-gray-800 font-bold font-serif'>Academy at a Glance</h3>
        <div className="grid grid-cols-4 md:px-64 md:grid-cols-4 text-center">
          {[
            { title: 'SEE Toppers', count: 91 },
            { title: 'Qualified Staffs', count: 83 },
            { title: 'Courses', count: 50 },
            { title: 'Current Enrollment', count: 2034 }
          ].map((item, index) => (
            <div className="px-2 py-4" key={index}>
              <h3 id={index.toString()} className='mb-4 text-2xl md:text-6xl font-bold text-indigo-800'>{item.count}</h3>
              <p className='md:text-md text-sm font-bold'>{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 md:mt-16 mb-8 md:mr-32 md:ml-32">
          <div className="bg-white rounded">
            <img src={GridImg1} alt="Our History" className="w-full h-auto rounded" />
          </div>
          <div className="group bg-white text-indigo-900 transition duration-1000 ease-in-out justify-center text-center p-6 md:px-6 md:py-2">
            <h3 className="relative md:text-4xl text-4xl font-bold mb-2 md:mb-2 after:content-[''] after:block after:w-full after:h-1 after:bg-current after:mt-2 after:transition-transform after:duration-500 after:ease-in-out after:scale-x-0 group-hover:after:scale-x-100">
              Mission & Vision
            </h3>
            <p className="md:text-2xl  text-lg">
              {isMobile ? truncateText('Our mission is to provide a nurturing and inclusive learning environment where every student is empowered to reach their full potential.') : 'Our mission is to provide a nurturing and inclusive learning environment where every student is empowered to reach their full potential..'}
            </p>
          </div>
          <div className="group bg-white text-indigo-900 transition duration-1000 ease-in-out justify-center text-center p-6 md:px-6 md:py-6">
            <h3 className="relative md:text-4xl text-4xl font-bold md:mb-2 after:content-[''] after:block after:w-full after:h-1 after:bg-current after:mt-2 after:transition-transform after:duration-500 after:ease-in-out after:scale-x-0 group-hover:after:scale-x-100">
              Achievements
            </h3>
            <p className="md:text-2xl text-lg">
              {isMobile ? truncateText('Our students consistently achieve outstanding results in sports, arts, and community service, garnering accolades at regional and national levels.') : 'Renowned for our commitment to innovative teaching practices and rigorous academic standards, our students consistently achieve outstanding results in sports, arts, and community service, garnering accolades at regional and national levels.'}
            </p>
          </div>
          <div className="bg-white rounded shadow">
            <img src={GridImg2} alt="Community" className="w-full h-auto rounded" />
          </div>
        </div>
      </section>

      <div className="bg-white">
        <LatestNews />
      </div>

      <section id="gallery-section" className="p-8 mt-6 bg-white">
        <div className="justify-center text-center mb-4">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 font-custom">Moments saved in school</h2>
          <p className="text-lg text-gray-600">Take a glimpse into our vibrant community.</p>
        </div>
        <Slideshow />
      </section>

      <section>
        <div className='mb-8'>
          <Testimonal />
        </div>
      </section>
    </div>
  );
}

export default Hero;
