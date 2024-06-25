import React, { useState, useEffect } from 'react';
import testimonials from './Testimonal.json';
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Testimonal = () => {
  const [randomTestimonial, setRandomTestimonial] = useState(null);

  useEffect(() => {
    const changeTestimonial = () => {
      const randomIndex = Math.floor(Math.random() * testimonials.length);
      setRandomTestimonial(testimonials[randomIndex]);
    };

    changeTestimonial(); 

    const intervalId = setInterval(changeTestimonial, 15000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (!randomTestimonial) return null;

  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <div className="mb-4">
        <div className="flex items-center justify-center mb-2">
          <ImQuotesLeft className="text-2xl text-green-600" />
          <p className="text-2xl italic font-serif text-gray-600 mx-2">{randomTestimonial.comment}</p>
          <ImQuotesRight className="text-2xl text-green-600" />
        </div>
        <p className="text-gray-800 text-lg">- {randomTestimonial.name}</p>
      </div>
    </div>
  );
}

export default Testimonal;
