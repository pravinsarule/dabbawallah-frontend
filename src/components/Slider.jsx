// // components/Slider.jsx
// import React, { useEffect, useState } from "react";

// // Import images from src/assests folder
// import birthdayImg from "../assests/birthday.jpg";
// import corporateEventImg from "../assests/corporate-event.jpg";
// import wedding from "../assests/wedding.jpg";

// const images = [birthdayImg, corporateEventImg, wedding];

// const Slider = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="w-full h-[80vh] relative overflow-hidden">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//             index === current ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//         >
//           {/* Use the current image from the map */}
//           <img
//             src={image}
//             alt={`slide-${index}`}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-center">
//             <div className="px-4">
//               <h1 className="text-4xl md:text-5xl font-bold font-poppins animate-fadeIn">
//                 Welcome to Epic Foods
//               </h1>
//               <p className="mt-4 text-lg md:text-xl font-light animate-fadeIn">
//                 Experience the best catering for your special moments.
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}

//       <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-3 h-3 rounded-full cursor-pointer ${
//               index === current ? "bg-maroon-700" : "bg-white/50"
//             }`}
//             aria-label={`Slide ${index + 1}`}
//           ></button>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Slider;
