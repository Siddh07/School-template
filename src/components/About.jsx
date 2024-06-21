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
    const checkIsMobile = () => {
      return /Mobi|Android/i.test(navigator.userAgent);
    };

    setIsMobile(checkIsMobile());

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
    <div className='container-fluid bg-gray-200'>
      {/* Section 1 */}
      <div className='row justify-content-center'>
        <div className='col-lg-8 col-md-10 col-sm-12'>
          <div className='text-center'>
            <h1 className='text-6xl text-gray-700 py-12 font-bold'>Our School</h1>
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
      <div className='row justify-content-center mt-16'>
        <div className='col-lg-8 col-md-10 col-sm-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 md:ml-64 md:mr-64'>
            <div className=''>
              <img src={PrincipalImage} alt="About-Principal" className="w-full h-auto rounded" />
            </div>
            <div className='border justify-content-center text-center items-center bg-indigo-600 py-16'>
              <h3 className='text-3xl text-gray-100 mb-4'>
                Principal's Message
              </h3>
              <p className='text-lg text-gray-100 px-6 md:px-24'>
                As your principal, my top priority is to ensure that you have a safe, supportive, and stimulating environment in which to learn and grow. Our dedicated teachers and staff are here to help you succeed, and I encourage you to take full advantage of the opportunities and resources available to you.
              </p>
            </div>
            <div className="border bg-indigo-600 text-white py-16 md:py-20">
              <h2 className='justify-content-center text-center items-center text-4xl'>Vision & Values</h2>
              <ul className="mt-8 text-md font-bold list-disc list-inside pl-16 md:pl-[30%]">
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

      {/* New Section for Teachers and Staff */}
      <div className='row justify-content-center mt-16 md:mt-32'>
        <div className='col-lg-8 col-md-10 col-sm-12'>
          <div className='md:ml-[10%] md:mr-[10%]'>
            <h2 className='text-center text-4xl font-bold text-gray-500'>Our Staffs</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-8'>
              {TeacherInfo.staff.map((staff) => (
                <div key={staff.id} className='relative text-center group'>
                  <img src={staffImages[staff.id]} alt={staff.name} className="w-full h-auto rounded-lg" />
                  <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg'>
                    <h3 className='md:text-2xl text-xl'>{staff.name}</h3>
                    <p className='md:text-lg text-md'>{staff.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='mt-16 md:ml-[10%] md:mr-[10%]'>
            <h2 className='text-center text-4xl font-bold text-gray-500 mb-8'>Our Teacher</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
              {TeacherInfo.teachers.map((teacher) => (
                <div key={teacher.id} className='relative text-center group'>
                  <img src={teacherImages[teacher.id]} alt={teacher.name} className="w-full h-auto rounded-lg" />
                  <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg'>
                    <h3 className='md:text-2xl text-xl'>{teacher.name}</h3>
                    <p className='text-md:text-lg text-md'>{teacher.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="col-span-1 md:col-span-1 md:ml-[15%]">
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
