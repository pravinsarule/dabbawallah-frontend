import React from "react";
import { FaStore, FaBuilding, FaCheckCircle, FaUsers, FaLeaf } from "react-icons/fa";

const OurConnection = () => {
  return (
    <div className="bg-tiffin-warm min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-[-10%] w-96 h-96 bg-saffron-100/40 organic-radius blur-3xl animate-blob" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="section-tag">🤝 Our Network</div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Empowering <span className="shimmer-text">Communities</span> <br />
            Through Every Plate
          </h1>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto font-medium">
            We don't just deliver food; we build bridges. From local organic 
            farmers to corporate offices, we're creating an ecosystem where 
            everyone benefits from healthy, home-cooked food.
          </p>
        </div>

        {/* Feature Split */}
        <div className="bg-white p-8 md:p-16 rounded-[60px] shadow-2xl border border-orange-50 relative section-paper mb-24 overflow-hidden">
             {/* Subtle hand-drawn arrow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block opacity-10">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 20C120 60 180 100 100 180" stroke="#FF6B35" strokeWidth="2" strokeDasharray="10 10" />
                </svg>
             </div>

             <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                {/* Retail Pillar */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-orange-100 rounded-[24px] flex items-center justify-center text-3xl text-saffron-600 shadow-inner">
                            <FaStore />
                        </div>
                        <h2 className="text-3xl font-black text-gray-900 leading-tight">For Local <br /><span className="text-saffron-500">Retail Heroes</span></h2>
                    </div>
                    <p className="text-gray-500 leading-relaxed font-medium">
                        Retail workers spend hours on their feet. We deliver high-energy, 
                        home-style meals that keep them going without the heavy 'junk-food' 
                        laziness.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Consistent on-time delivery for optimized breaks",
                            "Sturdy, spill-proof packaging built for busy counters",
                            "Pocket-friendly prices for daily subscribers",
                            "Flexible pause/edit options for changing shifts"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 items-start group">
                                <FaCheckCircle className="text-saffron-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-semibold text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Corporate Pillar */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-blue-100 rounded-[24px] flex items-center justify-center text-3xl text-blue-600 shadow-inner">
                            <FaBuilding />
                        </div>
                        <h2 className="text-3xl font-black text-gray-900 leading-tight">For Modern <br /><span className="text-blue-500">Corporate Offices</span></h2>
                    </div>
                    <p className="text-gray-500 leading-relaxed font-medium">
                        Ditch the boring cafeteria food. We bring tech-driven, 
                        nutritious meal systems to employees that care about their health.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Tech-enabled ordering & density tracking",
                            "Bulk subscriptions for small to mid-size teams",
                            "Employee wellness programs through healthy eating",
                            "Minimized food waste through predictive ordering"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 items-start group">
                                <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-semibold text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
             </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
                { icon: <FaUsers />, value: "200+", label: "Home Cooks" },
                { icon: <FaBuilding />, value: "45+", label: "Offices Served" },
                { icon: <FaLeaf />, value: "100%", label: "Fresh Food" },
                { icon: <FaStore />, value: "Aurangabad", label: "Market Leader" }
            ].map((s, i) => (
                <div key={i} className="bg-white p-8 rounded-[32px] text-center shadow-lg border border-orange-50 card-artisan">
                    <div className="text-2xl text-saffron-500 mb-2 flex justify-center">{s.icon}</div>
                    <div className="text-2xl font-black text-gray-900">{s.value}</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{s.label}</div>
                </div>
            ))}
        </div>

        {/* Human Touch Note */}
        <div className="mt-24 text-center">
            <div className="font-kalam text-3xl font-bold text-saffron-600 mb-4 animate-wiggle">
                Join our growing family!
            </div>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
                We're always looking for new partners — whether you're a cook, 
                a farmer, or a business owner. Let's grow together.
            </p>
            <button className="btn-primary">
                Get in Touch For Partnership
            </button>
        </div>
      </div>
    </div>
  );
};

export default OurConnection;