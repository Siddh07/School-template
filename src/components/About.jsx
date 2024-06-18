import React, { useState, useEffect } from 'react';
import Principal from '../assets/principal.jpg';
import About1 from '../assets/about-1.jpg';
import ContactForm from './ContactForm';
import Location from './Location';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if device is mobile
    const checkIsMobile = () => {
      return /Mobi|Android/i.test(navigator.userAgent);
    };

    // Set initial state
    setIsMobile(checkIsMobile());

    // Add resize event listener to update state when window size changes
    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Original text content
  const originalText =
    'Welcome to Our School, where we prioritize holistic education that fosters both academic achievement and personal growth. Our commitment extends beyond classrooms; we emphasize character development and community involvement.';

  return (
    <div className='container-fluid'>
      {/* Section 1 */}
      <div className='row justify-content-center'>
        <div className='col-lg-8 col-md-10 col-sm-12'>
          <div className='text-center'>
            <h1 className='text-6xl text-gray-700 mb-10 mt-16 font-bold'>Our School</h1>
          </div>
          {isMobile ? (
            <p className='justify--center text-center text-gray-400 text-md md:px-[35%]'>
              {`${originalText.split(' ').slice(0, 17).join(' ')}...`}
            </p>
          ) : (
            <p className='justify--center text-center text-gray-400 text-md md:px-[35%]'>
              {originalText}
            </p>
          )}
        </div>
      </div>

      {/* Section 2 */}
      <div className='row justify-content-center md:mt-16'>
        <div className='col-lg-8 col-md-10 col-sm-12'>
          <div className='grid grid-cols-2 md:ml-64 md:mr-64'>
            <div className=''>
              <img src={Principal} alt="About-Principal" className="w-full h-auto rounded" />
            </div>
            <div className='border justify-content-center text-center items-center bg-indigo-900 py-20'>
              <h3 className='text-3xl text-gray-100'>
                Principal's Message
              </h3>
            </div>
            <div className='border justify-content-center text-center items-center text-3xl bg-indigo-900 text-gray-100 py-20'>
              Vision & Values
            </div>
            <div className=''>
              <img src={About1} alt="About-Vision" className="w-full h-auto rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className='row justify-content-center mt-8'>
        <div className='col-lg-8 col-md-10 col-sm-12'>
          <div className='text-center'>
            <h2 className='text-3xl mb-4 font-bold'>Mission Statement</h2>
          </div>
          <p className='justify--center text-center text-gray-400 text-md md:px-[35%]'>
            Our mission is to provide a nurturing environment where every student can reach their full potential.
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="col-span-1 md:col-span-1 md:ml-[25%]">
            <Location />
          </div>
          <div className="col-span-1 md:col-span-1 md:mr-[25%]">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
