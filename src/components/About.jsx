import React, { useState, useEffect } from 'react';
import TeacherInfo from './TeacherInfo.json'; // Import JSON data
import ContactForm from './ContactForm';
import Location from './Location';

// Import images statically from assets folder
import PrincipalImage from '../assets/principal.jpg';
import About1Image from '../assets/about-1.jpg'; // Example image

// Import all teacher and staff images statically
import TeacherId1 from '../assets/TeacherId-1.jpg';
import TeacherId2 from '../assets/TeacherId-2.jpg';
import TeacherId3 from '../assets/TeacherId-3.jpg';
import TeacherId4 from '../assets/TeacherId-4.jpg';
// Import staff images similarly
import StaffId1 from '../assets/StaffId-1.jpg';
import StaffId2 from '../assets/StaffId-2.jpg';
import StaffId3 from '../assets/StaffId-3.jpg';
import StaffId4 from '../assets/StaffId-4.jpg';

// Map teacher and staff IDs to their respective imported images
const teacherImages = {
  1: TeacherId1,
  2: TeacherId2,
  3: TeacherId3,
  4: TeacherId4
};

const staffImages = {
  1: StaffId1,
  2: StaffId2,
  3: StaffId3,
  4: StaffId4
};

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
              <img src={PrincipalImage} alt="About-Principal" className="w-full h-auto rounded" />
            </div>
            <div className='border justify-content-center text-center items-center bg-indigo-900 py-16'>
              <h3 className='text-3xl text-gray-100 mb-4'>
                Principal's Message
              </h3>
              <p className='text-lg text-gray-100 px-24'>
                As your principal, my top priority is to ensure that you have a safe, supportive, and stimulating environment in which to learn and grow. Our dedicated teachers and staff are here to help you succeed, and I encourage you to take full advantage of the opportunities and resources available to you.
              </p>
            </div>
            <div className="border bg-indigo-900 text-white py-20">
              <h2 className='justify-content-center text-center items-center text-4xl'>Vision & Values</h2>
              <ul className="mt-8 text-md font-bold list-disc list-inside pl-[30%]">
                <li className="mb-2">Excellence in education</li>
                <li className="mb-2">Fostering creativity and innovation</li>
                <li className="mb-2">Respect and inclusivity</li>
                <li className="mb-2">Be Responsible</li>
                <li className="mb-2">Have Fun</li>
              </ul>
            </div>
            <div className=''>
              <img src={About1Image} alt="About-Vision" className="w-full h-auto rounded" />
            </div>
          </div>
        </div>
      </div>

       {/* Section 4 - Faculty and Staff */}
      <div id="staff-section" className="p-8 mt-16">
        <div className="ml-32 mb-8">
          <h2 className="text-4xl font-bold mb-4 text-gray-700 font-custom">Faculty and Staff</h2>
          <p className="text-lg text-gray-600">
            Our faculty and staff are dedicated to providing you with the best possible learning experience.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-0 md:ml-[16.5%] md:mr-[16.9%]"> {/* Remove gap between grid items */}
          {TeacherInfo.teachers.map((teacher) => (
            <div key={teacher.id} className="flex flex-col items-center">
              <div className="relative">
                <img
                  src={teacherImages[teacher.id]} // Static import based on teacher.id
                  alt={`About-Teacher-${teacher.id}`}
                  className="aspect-w-16 aspect-h-9" // Example of setting aspect ratio
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold text-white mt-4">{teacher.name}</h3>
                  <p className="text-gray-300">{teacher.position}</p>
                </div>
              </div>
            </div>
          ))}
          {TeacherInfo.staff.map((staff) => (
            <div key={staff.id} className="flex flex-col items-center">
              <div className="relative">
                <img
                  src={staffImages[staff.id]} // Static import based on staff.id
                  alt={`About-Staff-${staff.id}`}
                  className="aspect-w-16 aspect-h-9" // Example of setting aspect ratio
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold text-white mt-4">{staff.name}</h3>
                  <p className="text-gray-300">{staff.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Section 5 */}
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
