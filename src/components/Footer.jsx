import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left mb-8">
          <div className="md:col-span-2 flex flex-col items-center md:items-start md:pl-32 pt-4">
            <h2 className="text-lg text-gray-800 font-semibold mb-2">School Name or Academy Name</h2>
            <p className='text-gray-700'>Location of the school</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">Opening Hours</h2>
            <p className='text-gray-700'>Mon - Fri: 8:00 AM - 5:00 PM</p>
            <p className='text-gray-700'>Sat - Sun: Closed</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">Contact Us</h2>
            <p className='text-gray-700'>Phone: (123) 456-7890</p>
            <p className='text-gray-700'>Email: info@schoolname.com</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="hidden md:flex flex-col items-center md:items-center pt-2 hover:cursor-pointer">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">School Logo</h2>
            <p className='text-gray-700'>Insert your logo here</p>
          </div>
          <div className="flex flex-col items-center md:items-center">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">Some Useful Navigations</h2>
            <div className="grid grid-cols-2 gap-8">
              <ul className="space-y-1">
                <li><a href="/School/" className="hover:text-yellow-400 text-gray-700">Home</a></li>
                <li><a href="/School/about" className="hover:text-yellow-400 text-gray-700">About Us</a></li>
                <li><a href="/School/news" className="hover:text-yellow-400 text-gray-700">News</a></li>
              </ul>
              <ul className="space-y-1">
                <li><a href="/School/learning" className="hover:text-yellow-400 text-gray-700">Courses</a></li>
                <li><a href="/School/support" className="hover:text-yellow-400 text-gray-700">Support</a></li>
                <li><a href="/School/parent" className="hover:text-yellow-400 text-gray-700">Parents</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-center pt-4">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">Follow Us</h2>
            <div className="flex space-x-8 mt-2 text-2xl md:text-lg">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 text-gray-700"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 text-gray-700"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 text-gray-700"><FaInstagram /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 text-gray-700"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-800">
          <p>School Name &copy; 2024 - Friends and Co.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
