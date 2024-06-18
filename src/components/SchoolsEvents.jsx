// src/SchoolsEvents.js
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const events = [
  {
    date: 'Apr 17, 2035',
    time: '4:00 PM',
    title: 'Board of Education Special Meeting',
    location: '500 Terry A Francois Blvd, San Francisco, CA 94158, USA',
    description: "I'm an event headline. Group your events under me.",
    isSpecial: true,
  },
  {
    date: 'Tue, May 29',
    title: 'Reading Olympics',
    location: '500 Terry A Francois Blvd',
    description: "An exciting event where students compete in reading challenges.",
  },
  {
    date: 'Tue, Aug 21',
    title: 'New Teacher Workshop',
    location: '500 Terry A Francois Blvd',
    description: "A workshop to help new teachers get acquainted with the school and its policies.",
  },
  {
    date: 'Wed, Sep 05',
    title: 'Labor Day - Schools Closed',
    location: '500 Terry A Francois Blvd',
    description: "School will be closed in observance of Labor Day.",
  },
];

const SchoolsEvents = () => {
  const [openEventIndex, setOpenEventIndex] = useState(null);

  const toggleEventDetails = (index) => {
    setOpenEventIndex(openEventIndex === index ? null : index);
  };

  return (
    <div className="bg-blue-100 p-8">
      <h2 className="text-3xl font-bold mb-4">Schools' Events</h2>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className={`bg-white p-4 shadow-md rounded-md ${openEventIndex === index ? 'border border-600' : ''}`}>
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
                {event.location && (
                  <div className="text-sm text-gray-600">{event.location}</div>
                )}
                {event.description && (
                  <div className="text-sm text-gray-600 mt-2">{event.description}</div>
                )}
              </div>
            )}
            {/* {index === 0 && <hr className="border-t border-red-600 my-4" />} */}
            {openEventIndex === index && (
              <button className="mt-2 bg-red-600 text-white py-1 px-2 rounded-md">
                Details
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export default SchoolsEvents;
