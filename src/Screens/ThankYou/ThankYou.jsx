import React from 'react';

const ThankYouPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#03091d]">
      <div className="text-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-5xl font-bold  mb-6">Thank You!</h1>
        <p className="text-2xl  mb-8">Your submission has been received.</p>
        <a href="/" className="inline-block px-6 py-3 text-white  rounded-md bg-[#1a1f36] transition-colors duration-300">
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default ThankYouPage;
