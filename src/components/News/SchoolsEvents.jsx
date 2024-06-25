import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import events from './SchoolEvents.json';

const SchoolsEvents = () => {
  const [openEventIndex, setOpenEventIndex] = useState(null);
  const containerRef = useRef(null);

  const toggleEventDetails = (index) => {
    setOpenEventIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Function to handle clicks outside the event details box
  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setOpenEventIndex(null);
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white p-8" ref={containerRef}>
      <h2 className="text-3xl font-bold mb-4">Schools' Events</h2>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className={`bg-gray-300 p-4 shadow-md rounded-md ${openEventIndex === index ? 'border border-red-600' : ''}`}
          >
            <div
              className={`flex justify-between items-center ${event.isSpecial ? 'text-xl font-bold' : 'text-xl font-semibold'} cursor-pointer ${openEventIndex === index ? 'text-red-600' : 'text-black'}`}
              onClick={() => toggleEventDetails(index)}
            >
              {event.title}
              {openEventIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openEventIndex === index && (
              <div className="mt-2">
                {event.date && (
                  <div className="text-sm text-gray-600">
                    {event.date} {event.time && `, ${event.time}`}
                  </div>
                )}
                {event.isSpecial && event.location && (
                  <div className="text-sm text-gray-600">{event.location}</div>
                )}
                {event.description && (
                  <div className="text-sm text-gray-600 mt-2">{event.description}</div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolsEvents;
