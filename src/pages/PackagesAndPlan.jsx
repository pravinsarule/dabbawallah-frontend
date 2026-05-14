import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/card1";

const imagesUrl = [
  "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const Packages = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        images={imagesUrl}
        heading="Packages & Plans"
        subheading=""
        intervalTime={4000}
        gradientFrom="from-[#4b0f0f]"
        gradientTo="to-[#7a1f1f]"
        headingTextColor="text-white"
        highlightTextGradient="bg-gradient-to-r from-red-300 to-yellow-100"
        imageHeight="85vh"
      />

      {/* Existing Packages Section */}
      <section
        className="bg-white py-16 px-6 md:px-20 text-center font-sans mt-20"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="max-w-5xl mx-auto">
          <h3 className="text-lg text-[#b50d4e] mb-4 font-bold italic">
            Taste The Best
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            A Dive Into The FoOods And Its Meal Plans
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto mb-12">
            One size doesn’t fit all. Everyone has their own dietary needs, as
            well as their wishes and fancies. Hence, The FoOods allows users to
            select meal plans accordingly. But before you start tapping through
            the options here is a little insight into our meal plans:
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Mini</h4>
              <p className="text-sm text-gray-600 border-b pb-4">
                Gentle portions that are ideal for those who seek a light meal
                in an effort to rejuvenate themselves with a quick bite.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Weight Gain</h4>
              <p className="text-sm text-gray-600 border-b pb-4">
                A diet designed to promote muscle and weight gain, in a healthy
                yet delicious manner through the provision of some eccentric
                cuisine.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Regular</h4>
              <p className="text-sm text-gray-600 border-b pb-4">
                Fair portions that are ideal for those seeking to indulge a
                little more on some yummy delicacies and are fond of good tastes.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Weight Loss</h4>
              <p className="text-sm text-gray-600 border-b pb-4">
                A diet designed to help cut back on some extra belly fat or
                excess fat throughout the body in a healthy yet effective way.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Large</h4>
              <p className="text-sm text-gray-600 border-b pb-4">
                Generous portions offering a full meal for the foodies out there
                who seek pride in feasting on mouth-watering delicacies to their
                stomachs’ content.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Snacks</h4>
              <p className="text-sm text-gray-600 border-b pb-4">
                It is time to satiate your snack attack! Click away your cravings
                with The FoOods as we give you an all-round holistic yet healthy
                mix of snacks delivered to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Hero Section */}
      <section
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white font-sans z-10">
          <h3 className="text-pink-400 text-2xl font-cursive mb-4">
            Test The Best
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold uppercase">
            The Packages Offered To Our Retail Customers
          </h2>
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section
        className="bg-white py-16 px-4 md:px-10 lg:px-20 text-center font-sans"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            The FoOods strives to provide a little something for anyone and
            everyone — this means those who are looking just to try out
            something new to those who are looking to commit to something in the
            long-run. Hence, we bring you three different subscription food
            packages to help you click away your cravings!
          </p>
          <div className="w-24 h-0.5 bg-gray-300 mx-auto"></div>
        </div>

        {/* Grid for Subscription Plans */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* Left Column: Two stacked plans */}
          <div className="col-span-2 flex flex-col space-y-6">
            {/* 10 Days Plan */}
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2"
                alt="10 Days Plan"
                className="w-[250px] h-[160px] object-cover rounded-lg"
              />
              <div className="text-left">
                <h4 className="text-lg font-bold text-gray-900 mb-1">10 DAYS</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A starter pack to help people spread their wings and <br />
                  explore the world of food subscription services. <br />
                  It is a step for those who want to help themselves <br />
                  put the food they love into their belly.
                </p>
              </div>
            </div>

            {/* 15 Days Plan */}
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
              <img
                src="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2"
                alt="15 Days Plan"
                className="w-[250px] h-[160px] object-cover rounded-lg"
              />
              <div className="text-left">
                <h4 className="text-lg font-bold text-gray-900 mb-1">15 DAYS</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A master pack for the users out there who are <br />
                  committed to their stomachs and care to <br />
                  dabble in the best food whenever they desire.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Image + Text horizontally aligned */}
          <div className="flex flex-row items-start -ml-16">
            <img
              src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2"
              alt="25 Days Plan"
              className="w-[250px] h-[160px] object-cover rounded-lg"
            />
            <div className="pl-2 text-left flex flex-col justify-center">
              <h4 className="text-lg font-bold text-gray-900 mb-1">25 DAYS</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                A mid-sized pack for those who are looking to stick to it for a
                little while as they work to build a habit of indulging
                themselves with the choice food
              </p>
            </div>
          </div>
        </div>
      </section>

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
                Custom Food Packages
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Although we are indeed foodies, through and through here at{" "}
                <strong>The FoOods</strong>,Had a look at the above and decided
                this isn’t exactly what you are looking for? Then worry-not as
                The FoOods is equipped to provide you with custom food packages
                that match your specific individual needs.
                <br />
                <br />
                This can work no matter what you are going for. Perhaps you are
                taking a crack at a specific new diet or maybe you are trying
                your hand at veganism.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md w-full">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Corporate Food Packages
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                The FoOods have come to the aid of the bustling corporate world
                through their provision of corporate food packages for the
                employees. <br />
                <br />
                These food packages are customized according to the
                organization’s requirements and are perfect for any corporate
                setup to indulge their employees.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full hidden lg:block">
            <img
              src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Food Spread"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
