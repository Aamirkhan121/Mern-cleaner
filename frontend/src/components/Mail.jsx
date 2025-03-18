import React, { useState } from 'react';
import axios from 'axios';

const Mail = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = async () => {
    if (email.trim() === '') {
      alert('Please enter your email');
      return;
    }

    try {
      const response = await axios.post('https://mern-cleaner.onrender.com/api/mail', { email });
      setMessage('Thanks for sending your email!');
      // sendEmail(response.data.email);
      setEmail("");
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage('Failed to send email. Please try again.');
    }
  };

  return (
    <div className="relative flex flex-col items-center w-full px-4 py-8">
      {/* Image Container */}
      <div className="relative w-full max-w-[60rem] h-[35rem] rounded-[4rem] md:rounded-[6rem] overflow-hidden">
        <img className="w-full h-full object-cover" src="/cleaner.webp" alt="Cleaner" />
        {/* Text and Input Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white px-4 text-center">
          <h1 className="font-normal text-3xl sm:text-5xl">
            Request a <span className="font-thin">Free Quote</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base">
            Find out how affordable clean can be — Request your free quote today!
          </p>
          <div className="flex items-center gap-2 mt-4 w-full max-w-[22rem]">
            <input
              className="flex-1 bg-white text-black p-3 rounded-l outline-none placeholder-gray-500"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
            />
            <button
              onClick={sendEmail}
              className="bg-elaichi text-white px-4 py-3 rounded-r hover:bg-opacity-90"
            >
              ➡️
            </button>
          </div>
          {message && (
            <p className="mt-4 bg-white text-black text-sm sm:text-base p-2 rounded">
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mail;

