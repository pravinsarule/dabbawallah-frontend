import React from "react";
import { FaLaptopCode, FaChartBar, FaAppleAlt, FaUsersCog, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Corporate = () => {
  return (
    <div className="bg-tiffin-warm min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-20 right-[-5%] w-80 h-80 bg-blue-100/40 organic-radius blur-3xl animate-blob" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="section-tag">🏢 Corporate Solutions</div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Fuel Your Team with <br />
            <span className="shimmer-text">Ghar Jaisa Khana</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            Boost office morale and productivity with nutritious, 
            home-cooked tiffins. Say goodbye to greasy canteen food 
            and expensive delivery apps.
          </p>
        </div>

        {/* Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative">
                <div className="absolute inset-0 bg-saffron-500 rounded-[48px] -rotate-2 opacity-5" />
                <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80" 
                    alt="Team Eating" 
                    className="rounded-[48px] shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl z-20 border border-orange-50 font-kalam text-saffron-600 font-bold rotate-2">
                    "Happy Tummy = Productive Team!"
                </div>
            </div>
            <div className="space-y-8">
                <h2 className="text-3xl font-black text-gray-900">Why Food Matters in the Office</h2>
                <p className="text-gray-600 leading-relaxed">
                    Studies show that employee happiness is directly proportional to 
                    their nutritional intake. A proper meal at 1:30 PM can prevent 
                    the 'afternoon slump' and keep your team rejuvenated.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                    {[
                        { icon: <FaLaptopCode />, title: "Tech Driven", desc: "Easy bulk ordering apps" },
                        { icon: <FaChartBar />, title: "Health Reports", desc: "Track calories & macros" },
                        { icon: <FaAppleAlt />, title: "Dietitian Led", desc: "Consult our in-house experts" },
                        { icon: <FaUsersCog />, title: "Eco-Friendly", desc: "Zero-waste tiffin systems" }
                    ].map((f, i) => (
                        <div key={i} className="bg-white p-5 rounded-3xl shadow-sm border border-orange-50 card-artisan">
                            <div className="text-saffron-500 mb-2 text-xl">{f.icon}</div>
                            <div className="font-bold text-gray-900 text-sm mb-1">{f.title}</div>
                            <div className="text-xs text-gray-500">{f.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* The "Human" Difference */}
        <div className="bg-masala-900 rounded-[60px] p-8 md:p-16 text-white relative overflow-hidden section-paper">
            <div className="absolute top-0 right-0 w-64 h-64 bg-saffron-500/10 rounded-full blur-[80px]" />
            <div className="relative z-10 grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-1">
                    <h2 className="text-3xl font-black mb-4">What Sets <br /> <span className="text-saffron-400">TheTiffins</span> Apart?</h2>
                    <p className="text-gray-400 mb-8">We combine the warmth of home cooking with the precision of corporate logistics.</p>
                    <Link href="/contact" className="btn-primary inline-flex gap-2">
                        Get a Corporate Quote <FaArrowRight />
                    </Link>
                </div>
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                    {[
                        { 
                            title: "Hygiene Certified", 
                            text: "Every home kitchen undergoes rigorous 20-point quality audits regularly." 
                        },
                        { 
                            title: "Flexible Subscriptions", 
                            text: "No long-term contracts. Pause or resume based on team office days." 
                        },
                        { 
                            title: "Localized Taste", 
                            text: "Our cooks are locals who understand the authentic flavors of Aurangabad." 
                        },
                        { 
                            title: "Budget Friendly", 
                            text: "Premium home-cooked meals starting at just ₹80 per plate." 
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-[32px] hover:bg-white/10 transition-all">
                            <h4 className="text-lg font-black mb-2 text-saffron-400">0{i+1}. {item.title}</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-20 text-center">
            <p className="text-gray-500 font-bold mb-4 uppercase tracking-[0.2em] text-xs">Trusted by 20+ Local Offices</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all">
                {/* Mock Logos */}
                <div className="font-black text-2xl text-gray-900">INFOSYS</div>
                <div className="font-black text-2xl text-gray-900">WIPRO</div>
                <div className="font-black text-2xl text-gray-900">TCS</div>
                <div className="font-black text-2xl text-gray-900">HDFC BANK</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Corporate;
