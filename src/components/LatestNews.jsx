import React from 'react';
import latestNewsImage from '../assets/latest_News_1.jpeg';
import latestNewsImage2 from '../assets/latest_News_2.jpg';
import latestNewsImage3 from '../assets/latestNewsImage3.webp';


const LatestNews = () => {
  return (
    <div className="p-8" style={{ backgroundColor: 'rgba(255, 232, 225, 1)' }}>
      <h2 className="text-3xl font-bold mb-4">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">


        <a href="/your-post-url" className="bg-white p-4 shadow-md rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <img src={latestNewsImage} alt="Latest School News" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold">School Is to Be Open in Fall</h3>
        </a>


        <a href="/your-post-url" className="bg-white p-4 shadow-md rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <img src={latestNewsImage2} alt="Online STEM Program" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold">New Online Stem Program for Grades 5-8 Open Now</h3>
        </a>

        <a href="/your-post-url" className="bg-white p-4 shadow-md rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <img src={latestNewsImage3} alt="Grants for Students" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold">Grants for Outstanding Students</h3>
        </a>
      </div>
      <a href="#" className="text-blue-600 mt-4 inline-block rounded hover:bg-blue-600 hover:text-white underline">Read all News</a>
    </div>
  );
};

export default LatestNews;
