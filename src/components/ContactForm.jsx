import React, { useState } from 'react';

const ContactForm = () => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting || isSubmitted) {
      return;
    }

    setIsSubmitting(true);

    fetch('https://formspree.io/f/mpzvvebg', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setIsSubmitted(true);
      setFormData(initialFormData);
      setIsSubmitting(false);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 60000);
    })
    .catch((error) => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Contact Us</h2>
        <div className="mb-4 flex">
          <div className="w-1/2 mr-1">
            <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="shadow appearance-none text-lg border-b border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-1/2 ml-1">
            <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="shadow appearance-none text-lg border-b border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-4 flex">
          <div className="w-1/2 mr-1">
            <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none text-lg border-b border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-1/2 ml-1">
            <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              className="shadow appearance-none text-lg border-b border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Optional"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none text-lg border-b border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Something to chat about."
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className={`border-2 bg-indigo-700 hover:bg-white hover:border-indigo-700 hover:text-indigo-700 text-lg text-white font-bold py-2 px-5 rounded transition duration-500 focus:outline-none focus:shadow-outline ${isSubmitting || isSubmitted ? 'opacity-50 cursor-not-allowed' : ''}`}
            type="submit"
            disabled={isSubmitting || isSubmitted}
          >
            {isSubmitting ? 'Submitting...' : (isSubmitted ? 'Submitted' : 'Submit')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;