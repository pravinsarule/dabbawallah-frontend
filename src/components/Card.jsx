import React from 'react';
import { useInView } from 'react-intersection-observer';

const Card = ({
  subtitle = 'Who Are We?',
  title = 'Welcome To The Fo0ods',
  emoji = '🍴',
  description = '',
  image1 = '',
  image2 = '',
}) => {
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
        
        {/* Left Content */}
        <div
          ref={textRef}
          className={`bg-white shadow-md p-6 md:p-10 rounded-lg max-w-lg text-center md:text-left transition-all duration-1000 relative z-30 ${
            textInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
          style={{ fontSize: '0.9rem' }}
        >
          <h3 className="text-lg text-[#b50d4e] mb-2 font-light italic">{subtitle}</h3>
          <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-900">{title}</h1>
          <div className="text-xl text-[#b50d4e] mb-4">{emoji}</div>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Right Images */}
        <div
          ref={imageRef}
          className={`relative flex mt-8 md:mt-0 md:ml-6 transition-all duration-1000 ${
            imageInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
          style={{ minWidth: '0' }}
        >
          {/* Food 1 - overlapping content */}
          <img
            src={image1}
            alt="Food 1"
            className="w-28 h-40 sm:w-32 sm:h-48 md:w-[350px] md:h-[450px] object-cover rounded-lg shadow-md absolute sm:relative top-0 left-[-60px] sm:left-[-50px] md:left-[-80px] z-10"
          />

          {/* Food 2 - left back image */}
          <img
            src={image2}
            alt="Food 2"
            className="w-28 h-44 sm:w-36 sm:h-56 md:w-[230px] md:h-[360px] object-cover rounded-xl shadow-md relative z-0 sm:left-0 md:left-[-30px] translate-y-8 sm:translate-y-10 md:translate-y-16 ml-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Card;

