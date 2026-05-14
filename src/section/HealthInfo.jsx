// import React from 'react';

// const HealthInfo = () => {
//   return (
//     <section className="w-full bg-gray-50 py-10 px-8 font-sans" style={{ fontFamily: "'Poppins', sans-serif" }}>
//       <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
//         {/* Left Column: Two stacked cards */}
//         <div className="space-y-6 w-full">
//           {/* Card 1 */}
//           <div className="bg-white p-5 rounded-xl shadow-md w-full">
//             <h2 className="text-xl font-semibold text-gray-800 mb-2">
//               Worried About Your Health?
//             </h2>
//             <p className="text-sm text-gray-700 leading-relaxed">
//               Although we are indeed foodies, through and through here at <strong>The FoOods</strong>, we do value nutrition. For the health freaks out there, we give you an opportunity to customise your meals as per your heart’s content. Cut out the carbs, or try veganism. It’s all possible! Our in-house nutritionist helps us ensure that we deliver to you meals that are carefully curated so as to give you a varied and balanced diet.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white p-5 rounded-xl shadow-md w-full">
//             <h2 className="text-xl font-semibold text-gray-800 mb-2">
//               Worried About the Dreaded Coronavirus?
//             </h2>
//             <p className="text-sm text-gray-700 leading-relaxed">
//               Our team ensures that sanitation guidelines are adhered to at all levels, from buying ingredients to delivery. Our kitchens and cooking utensils are sterilised before each use. Our chefs and staff maintain good hygiene and follow all safety protocols to protect your health.
//               <br /><br />
//               <strong>The FoOods</strong> adds a special safety protocol where customers can know who cooked and assisted in preparing the meal. Our system even lets you view their COVID-negative reports. We are committed to providing safe meals, so your food is one less thing to worry about.
//             </p>
//           </div>
//         </div>

//         {/* Right Column: One card */}
//         <div className="bg-white p-5 rounded-xl shadow-md w-full h-full">
//           <h2 className="text-xl font-semibold text-gray-800 mb-2">
//             The Importance of a Nutritious Meal
//           </h2>
//           <p className="text-sm text-gray-700 leading-relaxed">
//             The dreaded afternoon slump is a definitive problem for young minds at work. While hard-workers rely on coffee to fuel their engines, no one can deny that a nutritious meal is essential for you to be up and running.
//             <br /><br />
//             Instead of relying on takeout to get you through lunch, our nutritious meals can provide you with ample energy. With our carefully hand-picked vegetables, we ensure that our food is packed with vitamins and minerals that reverse the negative health effects of spending long hours sitting at a desk.
//             <br /><br />
//             With a complete meal, you get the goodness of salad, the yumminess of main courses, and the sweetness of dessert. Try one now!
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HealthInfo;

import React from 'react';

const HealthInfo = () => {
  return (
    <section
      className="w-full bg-gray-50 py-10 px-2 sm:px-6 font-sans"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
        
        {/* Left Column: Two stacked cards */}
        <div className="space-y-6 w-full">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md w-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Worried About Your Health?
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Although we are indeed foodies, through and through here at <strong>The FoOods</strong>, we do value nutrition. For the health freaks out there, we give you an opportunity to customise your meals as per your heart’s content. Cut out the carbs, or try veganism. It’s all possible! Our in-house nutritionist helps us ensure that we deliver to you meals that are carefully curated so as to give you a varied and balanced diet.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md w-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Worried About the Dreaded Coronavirus?
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Our team ensures that sanitation guidelines are adhered to at all levels, from buying ingredients to delivery. Our kitchens and cooking utensils are sterilised before each use. Our chefs and staff maintain good hygiene and follow all safety protocols to protect your health.
              <br /><br />
              <strong>The FoOods</strong> adds a special safety protocol where customers can know who cooked and assisted in preparing the meal. Our system even lets you view their COVID-negative reports. We are committed to providing safe meals, so your food is one less thing to worry about.
            </p>
          </div>
        </div>

        {/* Right Column: One card */}
        <div className="bg-white p-6 rounded-xl shadow-md w-full h-full">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            The Importance of a Nutritious Meal
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            The dreaded afternoon slump is a definitive problem for young minds at work. While hard-workers rely on coffee to fuel their engines, no one can deny that a nutritious meal is essential for you to be up and running.
            <br /><br />
            Instead of relying on takeout to get you through lunch, our nutritious meals can provide you with ample energy. With our carefully hand-picked vegetables, we ensure that our food is packed with vitamins and minerals that reverse the negative health effects of spending long hours sitting at a desk.
            <br /><br />
            With a complete meal, you get the goodness of salad, the yumminess of main courses, and the sweetness of dessert. Try one now!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HealthInfo;
