import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import policiesData from './SafetyPolicies.json';

const Safety = () => {
  const [openSection, setOpenSection] = useState(null);
  const [showAllPolicies, setShowAllPolicies] = useState(false);
  const [policies, setPolicies] = useState([]);
  const [email, setEmail] = useState('');
  const [popupMessage, setPopupMessage] = useState(null); // State for popup message
  const [showRemoveButton, setShowRemoveButton] = useState(false); // State to control remove button visibility

  useEffect(() => {
    setPolicies(policiesData);
  }, []);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleSubscribe = () => {
    if (email) {
      setPopupMessage(`Subscribed with ${email}`);
      setShowRemoveButton(true);
      // Simulate delay for 3 seconds (adjust as needed)
      setTimeout(() => {
        setPopupMessage(null);
        setShowRemoveButton(false);
      }, 3000);
      // Add further subscription handling logic here
    } else {
      setPopupMessage('Please enter a valid email address');
      setShowRemoveButton(false);
    }
    setEmail(''); // Clear email field after handling
  };

  const closePopup = () => {
    setPopupMessage(null);
    setShowRemoveButton(false);
  };

  const removeEmail = () => {
    setEmail('');
    setPopupMessage(null);
    setShowRemoveButton(false);
  };

  const toggleShowAll = () => {
    setShowAllPolicies(!showAllPolicies);
  };

  const displayedPolicies = showAllPolicies ? policies : policies.slice(0, 4);

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center hover:cursor-context-menu">School Safety Policies</h1>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-2 px-32">
        {displayedPolicies.map((policy) => (
          <div 
            key={policy.key} 
            className="bg-white p-4 rounded-lg shadow-md mb-6 cursor-pointer"
          >
            <div 
              className="flex justify-between items-center"
              onClick={() => toggleSection(policy.key)}
            >
              <h2 className="text-xl font-semibold">{policy.title}</h2>
              {openSection === policy.key ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <div 
              className={`policy-content overflow-hidden transition-height duration-300 ${openSection === policy.key ? 'h-auto' : 'h-0'}`}
            >
              <p className="mt-4">
                {policy.content}
              </p>
            </div>
          </div>
        ))}
        
        {!showAllPolicies && (
          <div className="text-center">
            <button 
              onClick={toggleShowAll}
              className="text-indigo-600 hover:underline hover:text-indigo-400 cursor-pointer focus:outline-none"
            >
              View All
            </button>
          </div>
        )}
        
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2 text-center">Subscribe to Email Updates</h2>
          <div className="flex justify-center items-center">
            <div className="mb-2">
              <input 
                type="email"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-800 transition duration-300"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button 
              className="border-2 text-white bg-indigo-600 border-indigo-600 py-2 px-4 rounded-md hover:bg-gray-100 hover:text-yellow-600 hover:border-yellow-600 transition duration-300"
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Popup for validation message */}
      {popupMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <p className="text-lg">{popupMessage}</p>
            {showRemoveButton && (
              <button className="mt-4 mr-4 py-2 px-4 bg-yellow-400 text-white rounded-md hover:bg-gray-100 hover:text-yellow-600 transition duration-300" onClick={removeEmail}>
                Remove
              </button>
            )}
            <button className="mt-4 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-gray-100 hover:text-indigo-600 transition duration-300" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Safety;
