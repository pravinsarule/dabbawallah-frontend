import React from "react";
import { FaStore, FaTruck, FaClock, FaHeart, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Retail = () => {
  return (
    <div className="bg-tiffin-warm min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-40 right-[-10%] w-[30%] h-[30%] bg-orange-100/40 organic-radius blur-3xl animate-blob" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="section-tag">🛒 Retail Solutions</div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Energy for the <br />
            <span className="shimmer-text">Retail Hustle</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            Standing all day, attending to customers, and managing shifts is hard work. 
            We provide the healthy, home-cooked fuel you need to stay smiling and energized.
          </p>
        </div>

        {/* Two-Column split for Retail Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
            {[
                {
                    title: "Why Food Subscription?",
                    icon: <FaTruck className="text-saffron-500" />,
                    text: "Retail schedules are unpredictable. Our subscription service ensures your hot meal reaches your shop or counter exactly when your break starts. No more running to nearby food stalls or settling for cold snacks."
                },
                {
                    title: "The Importance of Diet",
                    icon: <FaHeart className="text-saffron-500" />,
                    text: "A balanced diet is the secret to sustained productivity and happiness. Our nutrient-rich, 'Ghar Ka Khana' prevents that post-lunch sugar crash, keeping you rejuvenated throughout your long retail shift."
                }
            ].map((card, i) => (
                <div key={i} className="bg-white p-10 rounded-[48px] shadow-xl border border-orange-50 card-artisan group">
                    <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-saffron-500 group-hover:text-white transition-all shadow-sm">
                        {card.icon}
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 mb-4">{card.title}</h2>
                    <p className="text-gray-600 leading-relaxed font-medium">
                        {card.text}
                    </p>
                </div>
            ))}
        </div>

        {/* Feature Banner */}
        <div className="bg-white p-12 md:p-20 rounded-[60px] shadow-2xl border border-orange-50 relative section-paper overflow-hidden">
            <div className="absolute -top-10 -right-10 text-9xl opacity-5">🛒</div>
            <div className="relative z-10 flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">Redefining Everyday <span className="hand-underline">Retail Meals</span></h2>
                <div className="grid sm:grid-cols-3 gap-8 w-full max-w-4xl opacity-10">
                    <div className="h-0.5 bg-gray-200 mt-4 hidden sm:block"></div>
                    <div className="text-saffron-500 font-bold text-lg">Delicious • On-Time • Healthy</div>
                    <div className="h-0.5 bg-gray-200 mt-4 hidden sm:block"></div>
                </div>
                <p className="text-gray-500 max-w-3xl mt-8 text-lg font-medium leading-relaxed">
                    "From busy showroom staff to fitness enthusiasts working in retail, our 
                    customizable plans cater to every dietary need. Say goodbye to greasy 
                    fast food and hello to convenience with care."
                </p>
                <div className="mt-10 pt-10 border-t border-gray-100 w-full flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="flex items-center gap-3">
                        <FaClock className="text-saffron-500" />
                        <span className="font-bold text-gray-900">Custom Delivery Slots</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaStore className="text-saffron-500" />
                        <span className="font-bold text-gray-900">Direct-to-Counter Service</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Human Touch Final Note */}
        <div className="mt-20 text-center">
            <p className="font-kalam text-2xl font-bold text-saffron-600 mb-8 rotate-[-1deg]">
                "Bulk orders for your retail team? We offer special corporate pricing."
            </p>
            <Link to="/contact" className="btn-primary inline-flex gap-2">
                Talk to our Retail Lead <FaArrowRight />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Retail;