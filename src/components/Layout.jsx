// src/Layout.js
import React from 'react';

const Layout = () => {
    return (
        <div className="grid grid-cols-4 gap-4 p-4">
            <div className="col-span-2 row-span-2 bg-cover bg-center" style={{ backgroundImage: `url('./src/assets/bg-home.png')` }}>
                <div className="p-8 text-white bg-black bg-opacity-50">
                    <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
                    <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                    <a href="#" className="mt-4 inline-block text-sm underline">Learn More</a>
                </div>
            </div>
            <div className="col-span-2 bg-red-700 p-8 text-white flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">Admission</h2>
                <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                <a href="#" className="mt-4 inline-block text-sm underline">Enroll Today</a>
            </div>
            <div className="bg-cover bg-center" style={{ backgroundImage: `url('./src/assets/bg-home.png')` }}>
                <div className="p-8 text-white bg-black bg-opacity-50">
                    <h2 className="text-3xl font-bold mb-4">Enhance Learning</h2>
                    <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                    <a href="#" className="mt-4 inline-block text-sm underline">View Programs</a>
                </div>
            </div>
            <div className="bg-red-700 p-8 text-white flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">Latest News & Events</h2>
                <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                <a href="#" className="mt-4 inline-block text-sm underline">View All</a>
            </div>
            <div className="col-span-2 bg-cover bg-center" style={{ backgroundImage: `url('./src/assets/bg-home.png')` }}>
                <div className="p-8 text-white bg-black bg-opacity-50">
                    <h2 className="text-3xl font-bold mb-4">Subtitle Here</h2>
                    <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row bg-red-800 p-8 text-white">
                <div className="flex-1 flex flex-col justify-center items-start">
                    <h1 className="text-3xl font-bold mb-4">For the Parents</h1>
                    <p className="mb-4">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                    <a href="#" className="text-lg underline">Get Informed</a>
                </div>
                <div className="flex-1 mt-8 md:mt-0 md:ml-8 flex justify-center items-center">
                    <img src="/path-to-your-image.png" alt="Students with tablets" className="rounded-lg" />
                </div>
            </div>
        </div>




    );
};

export default Layout;
