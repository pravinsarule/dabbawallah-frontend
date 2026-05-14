import React from 'react';
import { useInView } from 'react-intersection-observer';

const ContactDetails = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section className="min-h-screen bg-white font-poppins flex items-center justify-center overflow-hidden px-4 md:px-10 py-12">
      <div className="flex flex-col md:flex-row items-center justify-center ml-0 md:ml-6 relative max-w-6xl w-full">
        
        {/* Left Image Stack */}
        <div
          ref={imageRef}
          className={`relative flex mb-8 md:mb-0 md:mr-6 transition-all duration-1000 ${
            imageInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <img
            src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg"
            alt="Food 2"
            className="w-28 h-44 sm:w-36 sm:h-56 md:w-[230px] md:h-[360px] object-cover rounded-xl shadow-md relative z-20 sm:left-0 md:left-[20px] translate-y-8 sm:translate-y-10 md:translate-y-16 ml-2"
          />
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Food 1"
            className="w-28 h-40 sm:w-32 sm:h-48 md:w-[350px] md:h-[450px] object-cover rounded-lg shadow-md absolute sm:relative top-0 left-[-20px] sm:left-[-50px] md:left-[70px] z-10"
          />
        </div>

        {/* Right Contact Box */}
        <div
          ref={textRef}
          className={`bg-white shadow-md p-6 md:p-[45px] rounded-lg max-w-[500px] w-full text-center md:text-left transition-all duration-1000 relative z-30 ${
            textInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
          style={{ fontSize: '0.95rem' }}
        >
          <h3 className="text-lg text-[#b50d4e] mb-4 font-light italic">Get in Touch</h3>
          <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">Contact Details</h1>

          <div className="mb-5 flex items-start space-x-3">
            {/* Address Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#b50d4e] flex-shrink-0 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4-4-6-8-6-11a6 6 0 1112 0c0 3-2 7-6 11z" />
            </svg>
            <p>
              DIGITAL CAFETERIA SOLUTIONS PVT. LTD.<br />
              604 C-Wing Space Olympia, Sut Girni Rd,<br />
              Garkheda, Aurangabad, Maharashtra 431005.
            </p>
          </div>

          <div className="mb-2 flex items-center space-x-3">
            {/* Email Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#b50d4e] flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4-4-4 4m0 0l4 4 4-4m-4-4v8" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6" />
            </svg>
            <p>support@thefooods.com</p>
          </div>

          <div className="flex items-center space-x-3 mt-4">
            {/* Phone Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#b50d4e] flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.13 3.4a1 1 0 01-.21.97l-1.7 1.7a16.001 16.001 0 006.59 6.59l1.7-1.7a1 1 0 01.97-.21l3.4 1.13a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V6a1 1 0 011-1z" />
            </svg>
            <p>9559687898</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
