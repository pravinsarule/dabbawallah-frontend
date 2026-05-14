
import React from 'react';
import HealthInfo from "./HealthInfo";
const AboutFood = () => {
  return (
    <div className="bg-white py-16 px-6 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side: Image + Paragraph */}
        <div className="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Delicious Food"
            className="rounded-xl shadow-md w-62 h-52 sm:w-32 sm:h-52 md:w-[500px] md:h-[450px] max-w-md object-cover"
          />
          <p className="mt-4 text-xs text-center text-gray-600 font-[Poppins] leading-relaxed">
            <strong className="text-yellow-600 font-semibold">Being a pioneer in food management systems and cafeteria management systems</strong>, here’s a quick refresher on all the things we bring to the table, apart from delicious food!
          </p>
        </div>

        {/* Right Side: Features List */}
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 font-[Poppins]">
            What’s Special About <span className="text-yellow-600">The FoOods?</span>
          </h2>
          <ul className="space-y-2 text-gray-700 text-xs lg:text-sm font-[Poppins]">
            {[
              "App-based interface to help fulfill the needs of your tummy.",
              "Comprehensive reports of consumed calories, carbs, proteins, and other essential information.",
              "Offered a free consultation with our in-house dietician.",
              "Customisable meal plans for all diets.",
              "Made with carefully selected ingredients.",
              "Order from your desk.",
              "Delicious home-style food cooked to perfection.",
              "Fresh, hot food served without delays.",
              "Multiple payment options.",
              "A balanced diet in a box.",
              "Exquisite flavours that never disappoint.",
            ].map((item, index) => (
              <li
                key={index}
                className="hover:text-yellow-600 transition-colors duration-300"
              >
                ● {item}
              </li>
            ))}
          </ul>
        </div>
        
      </div>
      <HealthInfo />
    </div>
  );
};

export default AboutFood;
