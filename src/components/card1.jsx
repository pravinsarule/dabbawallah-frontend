// import React, { useState, useEffect, useCallback } from "react";
// import "@fontsource/poppins"; // Poppins font

// const HeroSection = ({
//   images = [],
//   heading = "Great food makes good times even better",
//   subheading = "Elevate your meals with premium private chefs near you.",
//   intervalTime = 3000,
// }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = useCallback(() => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   }, [images.length]);

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextImage, intervalTime);
//     return () => clearInterval(interval);
//   }, [nextImage, intervalTime]);

//   if (!images.length) return null; // Prevent component rendering without images

//   return (
//     <section
//       className="min-h-[70vh] lg:h-screen flex items-center justify-center bg-cover bg-center text-center relative font-poppins"
//       style={{
//   backgroundImage: `url('${images[currentImageIndex]}')`,
//   backgroundColor: "rgba(0, 0, 0, 0.5)",
//   backgroundBlendMode: "overlay",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   transition: "background-image 0.5s ease-in-out",
//   height: imageHeight || "300px", // <-- Add this line
// }}
//     >
//       {/* Navigation buttons */}
//       <button
//         onClick={prevImage}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition duration-300"
//         aria-label="Previous Slide"
//       >
//         &lt;
//       </button>
//       <button
//         onClick={nextImage}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition duration-300"
//         aria-label="Next Slide"
//       >
//         &gt;
//       </button>

//       {/* Text Content */}
//       <div className="max-w-2xl px-4 sm:px-6 lg:px-8 z-10">
//         <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
//           {heading.split(" ").map((word, i) =>
//             i === 1 ? (
//               <span
//                 key={i}
//                 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 italic"
//               >
//                 {word + " "}
//               </span>
//             ) : (
//               word + " "
//             )
//           )}
//         </h1>
//         <p className="mt-4 text-base sm:text-lg lg:text-xl text-white drop-shadow-md">{subheading}</p>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useState, useEffect, useCallback } from "react";
import "@fontsource/poppins"; // Poppins font

const HeroSection = ({
  images = [],
  heading = "Great food makes good times even better",
  subheading = "Elevate your meals with premium private chefs near you.",
  intervalTime = 3000,
  imageHeight = "70vh", // ✅ Default height
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, intervalTime);
    return () => clearInterval(interval);
  }, [nextImage, intervalTime]);

  if (!images.length) return null; // Prevent component rendering without images

  return (
    <section
      className="w-full flex items-center justify-center text-center relative font-poppins"
      style={{
        backgroundImage: `url('${images[currentImageIndex]}')`,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
        height: imageHeight, // ✅ Use passed height
      }}
    >
      {/* Navigation buttons */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition duration-300"
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition duration-300"
        aria-label="Next Slide"
      >
        &gt;
      </button>

      {/* Text Content */}
      <div className="max-w-2xl px-4 sm:px-6 lg:px-8 z-10">
        <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
          {heading.split(" ").map((word, i) =>
            i === 1 ? (
              <span
                key={i}
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 italic"
              >
                {word + " "}
              </span>
            ) : (
              word + " "
            )
          )}
        </h1>
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-white drop-shadow-md">
          {subheading}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
