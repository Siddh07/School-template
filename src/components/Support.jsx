import React from 'react';

const Support = () => {
  return (
    <div className="mx-auto max-w-4xl py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Support</h1>
        <p className="text-gray-700">
          Welcome to our support page. Whether you need assistance, have a question, or want to
          provide feedback, we're here to help!
        </p>
      </div>

      {/* Contact Information */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-700 mb-2">For general inquiries:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Email: support@yourschool.edu</li>
              <li>Phone: +123 456 7890</li>
            </ul>
          </div>
          <div>
            <p className="text-gray-700 mb-2">For technical support:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Email: techsupport@yourschool.edu</li>
              <li>Phone: +123 456 7890 ext. 123</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="divide-y divide-gray-300">
          <div className="py-4">
            <h3 className="text-lg font-semibold">Where can I find the academic calendar?</h3>
            <p className="text-gray-700 mt-2">
              The academic calendar can be found in the <a href="/learning" className="text-blue-500 hover:underline">calendar section</a> of our website.
            </p>
          </div>
          <div className="py-4">
            <h3 className="text-lg font-semibold">
              What are the school policies regarding...?
            </h3>
            <p className="text-gray-700 mt-2">
              Detailed school policies are available in our <a href="/School-template/safety" className="text-blue-500 hover:underline">policies section</a>.
            </p>
          </div>
          <div className="py-4">
            <h3 className="text-lg font-semibold">How can I contact my child's teacher?</h3>
            <p className="text-gray-700 mt-2">
              Contact information for teachers is usually available on the <a href="/School-template/about" className="text-blue-500 hover:underline">teachers' page</a> of our website.
            </p>
          </div>
          <div className="py-4">
            <h3 className="text-lg font-semibold">What extracurricular activities are available?</h3>
            <p className="text-gray-700 mt-2">
              Information about extracurricular activities can be found in the <a href="/School-template/learning" className="text-blue-500 hover:underline">activities section</a> of our website.
            </p>
          </div>
          {/* Add more FAQ items as needed */}
        </div>
      </section>

      {/* Support Form */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Submit a Support Request</h2>
        <form className="bg-white shadow-md rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email address"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Support;
