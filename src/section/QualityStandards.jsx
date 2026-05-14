// import React from 'react';
// import { FaLeaf, FaPepperHot, FaBalanceScale, FaBox, FaTruck, FaReact } from 'react-icons/fa';

// const QualityStandards = () => {
//   return (
//     <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvay02My0zLTUzNTc1NDY0M18xLmpwZw.jpg')" }}>
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="relative z-10 max-w-6xl mx-auto py-20 px-10">
//         <h2 className="text-4xl font-extrabold text-white text-center flex items-center justify-center gap-4">
//            Our Quality Standards
//         </h2>
//         <p className="mt-6 text-lg text-white text-center">
//           Quality being among one of our core principles we, at The FoOods, bring forth a state of the art 5-Step quality management process to ensure that we produce nothing but the foremost of quality and taste. Here is how we consistently deliver satisfying wholesome meals:
//         </p>
//         <div className="mt-16 bg-white p-16 rounded-xl shadow-xl">
//           <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
//             {[
//               { icon: <FaLeaf />, title: "Picking the Freshest Ingredients", description: "Our team sets out early each day to find the best picks of all ingredients they use. We try to pick fresh produce so that you only get nature’s best." },
//               { icon: <FaPepperHot />, title: "Making Masaledar Additions", description: "Our chefs are well-trained to use a host of savoury spices from the Indian kitchen. We make our food without any additives or preservatives and include the use of our signature spices to ensure that we deliver only the yummiest dishes." },
//               { icon: <FaBalanceScale />, title: "Integrating a Balance of all Food Groups", description: "Our in-house nutritionist and a team of researchers construct a diet plan that ensures that with every meal, you receive a host of different nutrients. Our meals are rich in nutrients as much as flavour." },
//               { icon: <FaBox />, title: "Packaging in Certified Food-grade Meal Boxes", description: "We carefully pack your meal to ensure no spilling. Let’s have the delicious curries maintain their unique flavours. Our company is an ISO and FSSAI certified entity, so you know you are getting the best." },
//               { icon: <FaTruck />, title: "Delivering on-time, Every Time", description: "As a subscriber, you can be sure that your meal will reach you within time. We cater to employees keeping in mind short lunch hours. We deliver quickly so that you can slow down and take the time to savour the mouth-watering desserts." },
//             ].map((standard, index) => (
//               <div key={index} className="text-center">
//                 <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-500 text-white text-3xl mx-auto">
//                   {standard.icon}
//                 </div>
//                 <h3 className="mt-6 text-2xl font-semibold text-gray-900">{standard.title}</h3>
//                 <p className="mt-4 text-lg text-gray-700">{standard.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QualityStandards;


import React from 'react';
import { FaLeaf, FaPepperHot, FaBalanceScale, FaBox, FaTruck } from 'react-icons/fa';

const QualityStandards = () => {
  const standards = [
    {
      icon: <FaLeaf />,
      title: 'Picking the Freshest Ingredients',
      description:
        'Our team sets out early each day to find the best picks of all ingredients they use. We try to pick fresh produce so that you only get nature’s best.',
    },
    {
      icon: <FaPepperHot />,
      title: 'Making Masaledar Additions',
      description:
        'Our chefs are well-trained to use a host of savoury spices from the Indian kitchen. We make our food without any additives or preservatives and include the use of our signature spices to ensure that we deliver only the yummiest dishes.',
    },
    {
      icon: <FaBalanceScale />,
      title: 'Integrating a Balance of all Food Groups',
      description:
        'Our in-house nutritionist and a team of researchers construct a diet plan that ensures that with every meal, you receive a host of different nutrients. Our meals are rich in nutrients as much as flavour.',
    },
    {
      icon: <FaBox />,
      title: 'Packaging in Certified Food-grade Meal Boxes',
      description:
        'We carefully pack your meal to ensure no spilling. Let’s have the delicious curries maintain their unique flavours. Our company is an ISO and FSSAI certified entity, so you know you are getting the best.',
    },
    {
      icon: <FaTruck />,
      title: 'Delivering on-time, Every Time',
      description:
        'As a subscriber, you can be sure that your meal will reach you within time. We cater to employees keeping in mind short lunch hours. We deliver quickly so that you can slow down and take the time to savour the mouth-watering desserts.',
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center font-poppins"
      style={{
        backgroundImage:
          "url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvay02My0zLTUzNTc1NDY0M18xLmpwZw.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center hover:text-[#800000] transition-colors duration-300">
          Our Quality Standards
        </h2>
        <p className="mt-6 text-lg text-white text-center">
          Quality being among one of our core principles we, at The FoOods, bring forth a state of the art 5-Step
          quality management process to ensure that we produce nothing but the foremost of quality and taste.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((standard, index) => (
            <div
              key={index}
              className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-500 text-white text-3xl mx-auto mb-4">
                {standard.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{standard.title}</h3>
              <p className="text-gray-700 text-base">{standard.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QualityStandards;
