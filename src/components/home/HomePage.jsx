"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import {
  FaArrowRight, FaStar, FaLeaf, FaMotorcycle, FaRupeeSign,
  FaHeart, FaWhatsapp, FaQuoteLeft, FaCheckCircle, FaTimesCircle
} from "react-icons/fa";
import { MdVerified, MdDeliveryDining, MdRestaurantMenu } from "react-icons/md";

/* ─── 3D HERO SECTION ───────────────────────────────────── */
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <style>{`
        @keyframes openLid {
          0%, 15%, 85%, 100% { transform: translateY(0) rotateX(0deg); }
          35%, 65% { transform: translateY(-180px) rotateX(25deg) rotateY(-10deg) scale(1.1); }
        }
        @keyframes openTier1 {
          0%, 20%, 80%, 100% { transform: translateY(0); }
          40%, 60% { transform: translateY(-100px) rotateY(15deg); }
        }
        @keyframes openTier2 {
          0%, 25%, 75%, 100% { transform: translateY(0); }
          45%, 55% { transform: translateY(-50px) rotateY(-5deg); }
        }
        @keyframes clampL {
          0%, 10%, 90%, 100% { transform: translateX(0) rotateZ(0deg); opacity: 1; }
          15%, 85% { transform: translateX(-60px) rotateZ(-30deg); opacity: 0; }
        }
        @keyframes clampR {
          0%, 10%, 90%, 100% { transform: translateX(0) rotateZ(0deg); opacity: 1; }
          15%, 85% { transform: translateX(60px) rotateZ(30deg); opacity: 0; }
        }
        @keyframes steamRise {
          0%, 30% { opacity: 0; transform: translateY(20px) scale(0.8); }
          45%, 55% { opacity: 0.9; transform: translateY(-120px) scale(2); filter: blur(3px); }
          70%, 100% { opacity: 0; transform: translateY(-180px) scale(3); filter: blur(6px); }
        }
        @keyframes rotateScene {
          0% { transform: rotateY(-15deg) rotateX(10deg) translateY(10px); }
          50% { transform: rotateY(15deg) rotateX(15deg) translateY(-10px); }
          100% { transform: rotateY(-15deg) rotateX(10deg) translateY(10px); }
        }
        @keyframes gradientWave {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes waveMove {
          0% { transform: translateX(0) translateZ(0) scaleY(1); }
          50% { transform: translateX(-25%) translateZ(0) scaleY(0.85); }
          100% { transform: translateX(-50%) translateZ(0) scaleY(1); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .bg-animated-theme {
          background: linear-gradient(-45deg, #FF8A00, #E52E71, #FF6B35, #F5A623);
          background-size: 400% 400%;
          animation: gradientWave 15s ease infinite;
        }

        .tiffin-scene {
          perspective: 1200px;
          transform-style: preserve-3d;
        }
        .tiffin-wrapper {
          transform-style: preserve-3d;
          animation: rotateScene 10s ease-in-out infinite;
        }
        
        /* Photorealistic 3D Steel Material */
        .real-steel {
          background: linear-gradient(to right, 
            #8e9eab 0%, 
            #eef2f3 25%, 
            #8e9eab 50%, 
            #eef2f3 75%, 
            #8e9eab 100%
          );
          box-shadow: 
            inset -5px 0 15px rgba(0,0,0,0.2),
            inset 5px 0 15px rgba(255,255,255,0.8),
            0 15px 35px rgba(0,0,0,0.4);
          border: 1px solid #a0aab5;
          position: relative;
        }
        .steel-top {
          background: radial-gradient(ellipse at center, #ffffff 0%, #bdc3c7 70%, #95a5a6 100%);
          border: 1.5px solid #7f8c8d;
          box-shadow: inset 0 2px 5px rgba(0,0,0,0.1);
        }
        
        /* 3D Perspective Waves Container */
        .waves-perspective {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 250px;
          overflow: hidden;
          pointer-events: none;
          perspective: 1000px;
          z-index: 20;
        }
        .waves-3d-layer {
          transform: rotateX(55deg) scale(2);
          transform-origin: bottom;
          width: 200%;
          height: 100%;
          position: absolute;
          bottom: -120px;
          left: -50%;
        }
        .wave-item {
          position: absolute;
          bottom: 0;
          width: 200%;
          height: auto;
          animation: waveMove 12s linear infinite;
          transform-origin: bottom;
        }
        .wave-item-fast {
          position: absolute;
          bottom: 5px;
          width: 200%;
          height: auto;
          animation: waveMove 8s linear infinite reverse;
          transform-origin: bottom;
          opacity: 0.4;
        }
      `}</style>

      {/* Animated Rich Theme Background */}
      <div className="absolute inset-0 bg-animated-theme z-0" />
      
      {/* Glowing Light Spots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-300/30 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20 pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/40 mb-6 animate-fadeInUp shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <span className="text-white text-sm font-black tracking-widest uppercase">🍛 Pure 3D Delight</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 animate-fadeInUp drop-shadow-2xl" style={{ animationDelay: "0.1s" }}>
              The Real Taste of <br />
              <span className="text-yellow-200 drop-shadow-[0_0_20px_rgba(255,235,100,0.7)]">
                Authentic Dabba
              </span>
            </h1>

            <p className="text-white/95 text-xl leading-relaxed max-w-xl mb-10 animate-fadeInUp font-semibold drop-shadow-lg" style={{ animationDelay: "0.2s" }}>
              Witness your meals coming to life. Watch the fresh hot tiffin unbox automatically and discover delicious, hygienic home food waiting inside.
            </p>

            <div className="flex flex-wrap gap-5 animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
              <Link href="/menu" className="bg-white text-saffron-600 px-8 py-4 rounded-2xl font-black text-lg hover:scale-105 hover:shadow-2xl transition-all flex items-center gap-2 transform">
                🍱 Order Now <FaArrowRight />
              </Link>
              <Link href="/register?role=vendor" className="bg-orange-900/30 backdrop-blur-md border-2 border-white/60 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                Partner With Us
              </Link>
            </div>
          </div>

          {/* Right Visual: True 3D Cylinder Tiffin with Real Food */}
          <div className="h-[650px] flex items-center justify-center tiffin-scene relative mt-10 lg:mt-0 z-10">
            <div className="tiffin-wrapper flex flex-col items-center relative w-[320px]">
              
              {/* Magic Steam */}
              <div className="absolute top-[-120px] z-50 text-8xl drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] mix-blend-screen" style={{ animation: 'steamRise 8s infinite' }}>
                ♨️
              </div>

              {/* 3D Lid & Handle */}
              <div className="relative z-40 transform-gpu" style={{ animation: 'openLid 8s infinite' }}>
                <div className="w-[100px] h-[45px] border-[10px] border-[#bdc3c7] border-b-0 rounded-t-[50px] mx-auto shadow-md" />
                <div className="relative w-[260px] h-[35px] rounded-t-[80px] rounded-b-[15px] real-steel border-b-[6px] border-[#7f8c8d] shadow-2xl">
                   {/* Lid Top Rim */}
                   <div className="absolute top-[-8px] left-[10px] right-[10px] h-[16px] rounded-[50%] steel-top" />
                </div>
              </div>

              {/* Top Tier (Roti Compartment) */}
              <div className="relative z-30 mt-[-10px] transform-gpu" style={{ animation: 'openTier1 8s infinite' }}>
                <div className="relative w-[240px] h-[85px] rounded-[20px] real-steel border border-[#7f8c8d]">
                   {/* 3D Deep Bowl Opening */}
                   <div className="absolute top-[-25px] left-0 right-0 h-[50px] rounded-[50%] bg-gradient-to-b from-[#eef2f3] to-[#bdc3c7] border-2 border-[#7f8c8d] z-20 flex items-center justify-center shadow-md">
                      {/* Inner Deep Recess */}
                      <div className="w-[94%] h-[92%] rounded-[50%] overflow-hidden relative bg-[#bdc3c7] shadow-[inset_0_5px_15px_rgba(0,0,0,0.7)]">
                         <img 
                           src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&auto=format&fit=crop&q=80" 
                           alt="Rotis" 
                           className="w-full h-[140%] object-cover absolute top-[-10px] left-0 opacity-95 scale-110" 
                         />
                         <div className="absolute inset-0 shadow-[inset_0_3px_6px_rgba(0,0,0,0.5)]" />
                      </div>
                   </div>
                   <div className="absolute top-2 w-full h-[3px] bg-black/15" />
                   <div className="absolute bottom-2 w-full h-[3px] bg-black/15" />
                </div>
              </div>

              {/* Middle Tier (Yellow Dal Compartment) */}
              <div className="relative z-20 mt-[-15px] transform-gpu" style={{ animation: 'openTier2 8s infinite' }}>
                <div className="relative w-[240px] h-[85px] rounded-[20px] real-steel border border-[#7f8c8d]">
                   {/* 3D Deep Bowl Opening */}
                   <div className="absolute top-[-25px] left-0 right-0 h-[50px] rounded-[50%] bg-gradient-to-b from-[#eef2f3] to-[#bdc3c7] border-2 border-[#7f8c8d] z-20 flex items-center justify-center shadow-md">
                      {/* Inner Deep Recess */}
                      <div className="w-[94%] h-[92%] rounded-[50%] overflow-hidden relative bg-[#bdc3c7] shadow-[inset_0_5px_15px_rgba(0,0,0,0.7)]">
                         <img 
                           src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&auto=format&fit=crop&q=80" 
                           alt="Yellow Dal" 
                           className="w-full h-[140%] object-cover absolute top-[-10px] left-0 opacity-95 scale-110" 
                         />
                         <div className="absolute inset-0 shadow-[inset_0_3px_6px_rgba(0,0,0,0.5)]" />
                      </div>
                   </div>
                   <div className="absolute top-2 w-full h-[3px] bg-black/15" />
                   <div className="absolute bottom-2 w-full h-[3px] bg-black/15" />
                </div>
              </div>

              {/* Bottom Tier (Basmati Rice Compartment) */}
              <div className="relative z-10 mt-[-15px]">
                <div className="relative w-[240px] h-[95px] rounded-t-[20px] rounded-b-[45px] real-steel border border-[#7f8c8d] shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                   {/* 3D Deep Bowl Opening (Visible when middle tier lifts) */}
                   <div className="absolute top-[-25px] left-0 right-0 h-[50px] rounded-[50%] bg-gradient-to-b from-[#eef2f3] to-[#bdc3c7] border-2 border-[#7f8c8d] z-20 flex items-center justify-center shadow-md">
                      {/* Inner Deep Recess */}
                      <div className="w-[94%] h-[92%] rounded-[50%] overflow-hidden relative bg-[#bdc3c7] shadow-[inset_0_5px_15px_rgba(0,0,0,0.7)]">
                         <img 
                           src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&auto=format&fit=crop&q=80" 
                           alt="Rice" 
                           className="w-full h-[140%] object-cover absolute top-[-10px] left-0 opacity-95 scale-110" 
                         />
                         <div className="absolute inset-0 shadow-[inset_0_3px_6px_rgba(0,0,0,0.5)]" />
                      </div>
                   </div>
                   <div className="absolute top-2 w-full h-[3px] bg-black/15" />
                   <div className="absolute bottom-4 w-full h-[3px] bg-black/15" />
                </div>
              </div>
              
              {/* Side 3D Wire Clamps */}
              <div className="absolute left-[-25px] top-[55px] bottom-[35px] w-[16px] real-steel rounded-full z-50 shadow-xl border border-[#666]" style={{ animation: 'clampL 8s infinite' }} />
              <div className="absolute right-[-25px] top-[55px] bottom-[35px] w-[16px] real-steel rounded-full z-50 shadow-xl border border-[#666]" style={{ animation: 'clampR 8s infinite' }} />
            </div>
            
            {/* Real 3D Floating Shadow */}
            <div className="absolute bottom-0 w-[360px] h-[50px] bg-black/40 rounded-[50%] blur-2xl animate-pulse" />
          </div>
        </div>
      </div>

      {/* 3D Animated Depth Waves at bottom */}
      <div className="waves-perspective">
        <div className="waves-3d-layer">
          <svg className="wave-item-fast" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="0.5" d="M0,80 C320,160 420,0 720,80 C1020,160 1120,0 1440,80 L1440,160 L0,160 Z"></path>
            <path fill="#ffffff" fillOpacity="0.5" d="M1440,80 C1760,160 1860,0 2160,80 C2460,160 2560,0 2880,80 L2880,160 L1440,160 Z" transform="translate(-1440, 0)"></path>
          </svg>
          <svg className="wave-item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,80 C240,0 480,160 720,80 C960,0 1200,160 1440,80 L1440,160 L0,160 Z"></path>
            <path fill="#ffffff" d="M1440,80 C1680,0 1920,160 2160,80 C2400,0 2640,160 2880,80 L2880,160 L1440,160 Z" transform="translate(-1440, 0)"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

/* ─── VALUE PROPOSITION ─────────────────────────────────── */
const ValueProp = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const comparisons = [
    { feature: "Meal Cost", us: "₹50 – ₹80", restaurants: "₹150 – ₹300", apps: "₹120 – ₹250" },
    { feature: "Home-cooked taste", us: true, restaurants: false, apps: false },
    { feature: "Daily subscription", us: true, restaurants: false, apps: true },
    { feature: "Supports local cooks", us: true, restaurants: false, apps: false },
    { feature: "Customisable diet", us: true, restaurants: false, apps: false },
    { feature: "No hidden charges", us: true, restaurants: false, apps: false },
  ];

  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-tag">💡 Why Choose Us?</div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
            Stop Overpaying for{" "}
            <span className="shimmer-text">Mediocre Food</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Real home-cooked meals at a fraction of the cost of restaurants & delivery apps.
            Support local home cooks. Eat healthy. Save money.
          </p>
        </div>

        {/* Comparison Table */}
        <div ref={ref} className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="overflow-x-auto rounded-3xl shadow-2xl border border-orange-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-5 text-left font-semibold">Feature</th>
                  <th className="px-6 py-5 text-center">
                    <div className="bg-saffron-500 text-white px-4 py-2 rounded-xl font-bold text-base inline-block">
                      🍱 TheTiffins
                    </div>
                  </th>
                  <th className="px-6 py-5 text-center text-gray-400 font-medium">Restaurants</th>
                  <th className="px-6 py-5 text-center text-gray-400 font-medium">Delivery Apps</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-orange-50/40"}>
                    <td className="px-6 py-4 font-semibold text-gray-800">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.us === "boolean" ? (
                        row.us
                          ? <FaCheckCircle className="text-green-500 text-xl mx-auto" />
                          : <FaTimesCircle className="text-red-400 text-xl mx-auto" />
                      ) : (
                        <span className="font-bold text-saffron-600 text-base">{row.us}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.restaurants === "boolean" ? (
                        row.restaurants
                          ? <FaCheckCircle className="text-green-500 text-xl mx-auto" />
                          : <FaTimesCircle className="text-red-300 text-xl mx-auto" />
                      ) : (
                        <span className="text-gray-500">{row.restaurants}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.apps === "boolean" ? (
                        row.apps
                          ? <FaCheckCircle className="text-green-500 text-xl mx-auto" />
                          : <FaTimesCircle className="text-red-300 text-xl mx-auto" />
                      ) : (
                        <span className="text-gray-500">{row.apps}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10">
            <p className="text-gray-500 mb-4 text-lg">
              Save up to <strong className="text-green-600 text-2xl">₹3,000/month</strong> by switching to TheTiffins!
            </p>
            <Link href="/services/packages" className="btn-primary inline-flex">
              Start Saving Today <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── HOW IT WORKS ──────────────────────────────────────── */
const HowItWorks = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const steps = [
    {
      emoji: "🔍",
      num: "01",
      title: "Browse Tiffin Providers",
      desc: "Discover verified home cooks in your locality. Filter by cuisine, diet preference, price, and delivery area.",
      color: "from-orange-50 to-amber-50",
    },
    {
      emoji: "📱",
      num: "02",
      title: "Choose Your Plan",
      desc: "Pick a 10-day, 15-day, or monthly subscription. Customise your meal plan — veg, non-veg, jain, or diabetic.",
      color: "from-green-50 to-teal-50",
    },
    {
      emoji: "🚴",
      num: "03",
      title: "Receive & Enjoy!",
      desc: "Your hot, fresh tiffin arrives right before your mealtime. Brought by our verified delivery partners. Simple as that!",
      color: "from-blue-50 to-indigo-50",
    },
  ];

  return (
    <section className="py-24 px-4 overflow-hidden" style={{ background: "#FFF8F0" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-tag">⚡ How It Works</div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
            Simple as{" "}
            <span className="shimmer-text">Ordering Chai</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Three simple steps to never worry about lunch again.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting lines (desktop) */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-saffron-300 to-saffron-300 z-0" />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`step-card transition-all duration-700 relative z-10 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-50 rounded-3xl`} />
              <div className="relative z-10">
                <div className="text-5xl mb-4">{step.emoji}</div>
                <div className="step-number mb-4">{step.num}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Provider CTA strip */}
        <div className="mt-16 promo-banner rounded-3xl p-8 text-white text-center shadow-2xl">
          <div className="text-4xl mb-3">👩‍🍳</div>
          <h3 className="text-2xl font-black mb-2">Are You a Home Cook?</h3>
          <p className="text-orange-100 mb-6 text-lg">
            Turn your passion for cooking into a thriving income stream. Join 200+ home providers earning ₹15,000–₹50,000/month!
          </p>
          <Link href="/register" className="btn-white inline-flex">
            🍳 Register as a Tiffin Provider <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ─── FEATURED PROVIDERS ────────────────────────────────── */
const providers = [
  {
    name: "Sunita Devi's Kitchen",
    location: "Garkheda, Aurangabad",
    specialty: "Maharashtrian Thali",
    rating: 4.9,
    reviews: 312,
    price: 70,
    deliveries: 5200,
    badge: "⭐ Top Rated",
    emoji: "👩‍🍳",
    tags: ["Veg", "Jain Option", "Daily"],
    color: "from-orange-100 to-amber-50",
  },
  {
    name: "Ramesh Tiffin Corner",
    location: "CIDCO, Aurangabad",
    specialty: "North Indian Dal-Roti",
    rating: 4.8,
    reviews: 247,
    price: 60,
    deliveries: 4100,
    badge: "🏠 Home Cook",
    emoji: "👨‍🍳",
    tags: ["Veg", "Non-Veg", "Bulk Order"],
    color: "from-green-100 to-teal-50",
  },
  {
    name: "Priya's Healthy Bites",
    location: "Osmanpura, Aurangabad",
    specialty: "Diet & Diabetic Meals",
    rating: 4.9,
    reviews: 189,
    price: 80,
    deliveries: 2900,
    badge: "🥗 Diet Specialist",
    emoji: "👩‍🍳",
    tags: ["Diabetic", "Weight Loss", "No Oil"],
    color: "from-blue-100 to-indigo-50",
  },
  {
    name: "Mama's Dabba",
    location: "Prozone, Aurangabad",
    specialty: "Mixed Indian Thali",
    rating: 4.7,
    reviews: 403,
    price: 55,
    deliveries: 7200,
    badge: "🔥 Most Popular",
    emoji: "👩‍🍳",
    tags: ["Veg", "Budget", "Student Pack"],
    color: "from-rose-100 to-pink-50",
  },
];

const FeaturedProviders = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="section-tag">🏆 Verified Providers</div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2">
              Meet Our{" "}
              <span className="shimmer-text">Star Cooks</span>
            </h2>
          </div>
          <Link href="/menu" className="btn-outline self-start md:self-end">
            View All Providers <FaArrowRight />
          </Link>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {providers.map((p, i) => (
            <div
              key={i}
              className={`tiffin-provider-card transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Card header */}
              <div className={`bg-gradient-to-br ${p.color} p-6 text-center relative`}>
                <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-xs font-bold px-2 py-1 rounded-full text-gray-700">
                  {p.badge}
                </span>
                <div className="text-6xl mb-2">{p.emoji}</div>
                <h3 className="font-bold text-gray-900 text-base">{p.name}</h3>
                <p className="text-gray-500 text-xs flex items-center justify-center gap-1 mt-0.5">
                  📍 {p.location}
                </p>
              </div>

              {/* Card body */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700">{p.specialty}</span>
                  <div className="flex items-center gap-1 text-amber-500 text-sm font-bold">
                    <FaStar className="text-xs" /> {p.rating}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {p.tags.map((tag, j) => (
                    <span key={j} className="bg-orange-50 text-saffron-700 text-xs font-medium px-2 py-0.5 rounded-full border border-orange-100">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-black text-saffron-600">₹{p.price}</div>
                    <div className="text-xs text-gray-400">per tiffin</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-700">{p.deliveries.toLocaleString()}</div>
                    <div className="text-xs text-gray-400">tiffins delivered</div>
                  </div>
                </div>

                <button className="w-full btn-primary py-2.5 text-sm justify-center">
                  Subscribe Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── PRICING SECTION ───────────────────────────────────── */
const PricingSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [audience, setAudience] = useState("student");

  const plans = {
    student: [
      {
        name: "Starter",
        days: "10 Days",
        pricePerMeal: 55,
        total: 550,
        meals: 10,
        popular: false,
        features: ["1 meal/day", "Veg tiffin", "WhatsApp support", "Flexible timing"],
      },
      {
        name: "Monthly",
        days: "25 Days",
        pricePerMeal: 50,
        total: 1250,
        meals: 25,
        popular: true,
        features: ["1 meal/day", "Veg + Non-Veg", "Diet customization", "Priority delivery", "Save ₹375/month"],
      },
      {
        name: "Semester",
        days: "180 Days",
        pricePerMeal: 45,
        total: 8100,
        meals: 180,
        popular: false,
        features: ["1 meal/day", "All cuisines", "Full customization", "Free snacks (2x/week)"],
      },
    ],
    professional: [
      {
        name: "Trial",
        days: "10 Days",
        pricePerMeal: 70,
        total: 700,
        meals: 10,
        popular: false,
        features: ["Lunch tiffin", "Office delivery", "Veg or non-veg", "WhatsApp tracking"],
      },
      {
        name: "Monthly",
        days: "25 Days",
        pricePerMeal: 65,
        total: 1625,
        meals: 25,
        popular: true,
        features: ["Lunch + Snacks", "Office/home delivery", "Diet plan included", "Dedicated support", "Save ₹1,500/month"],
      },
      {
        name: "Corporate",
        days: "Team Plan",
        pricePerMeal: 60,
        total: null,
        meals: null,
        popular: false,
        features: ["Min 10 employees", "Bulk pricing", "Cafeteria delivery", "Monthly invoicing", "Dedicated coordinator"],
      },
    ],
  };

  const currentPlans = plans[audience];

  return (
    <section className="py-24 px-4 overflow-hidden" style={{ background: "#FFF8F0" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-tag">💰 Simple Pricing</div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
            Plans for Every{" "}
            <span className="shimmer-text">Budget & Need</span>
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            No hidden charges. No surprises. Just great food at honest prices.
          </p>

          {/* Audience toggle */}
          <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-md border border-orange-100 gap-1">
            <button
              onClick={() => setAudience("student")}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                audience === "student" ? "bg-saffron-500 text-white shadow-md" : "text-gray-600 hover:text-saffron-600"
              }`}
            >
              🎓 Students
            </button>
            <button
              onClick={() => setAudience("professional")}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                audience === "professional" ? "bg-saffron-500 text-white shadow-md" : "text-gray-600 hover:text-saffron-600"
              }`}
            >
              💼 Professionals
            </button>
          </div>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6 items-center">
          {currentPlans.map((plan, i) => (
            <div
              key={i}
              className={`price-card transition-all duration-700 ${plan.popular ? "highlight" : ""} ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                  ⭐ Most Popular
                </div>
              )}
              <div className={`text-sm font-semibold mb-1 ${plan.popular ? "text-orange-200" : "text-saffron-500"}`}>
                {plan.days}
              </div>
              <h3 className={`text-2xl font-black mb-4 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                {plan.name}
              </h3>

              {plan.total ? (
                <div className="mb-6">
                  <div className={`text-5xl font-black ${plan.popular ? "text-white" : "text-saffron-600"}`}>
                    ₹{plan.pricePerMeal}
                  </div>
                  <div className={`text-sm ${plan.popular ? "text-orange-200" : "text-gray-500"}`}>
                    per meal · ₹{plan.total} total
                  </div>
                </div>
              ) : (
                <div className="mb-6">
                  <div className={`text-3xl font-black ${plan.popular ? "text-white" : "text-saffron-600"}`}>
                    ₹{plan.pricePerMeal}
                  </div>
                  <div className={`text-sm ${plan.popular ? "text-orange-200" : "text-gray-500"}`}>
                    per meal (custom quote)
                  </div>
                </div>
              )}

              <ul className="space-y-3 mb-8">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className={`flex-shrink-0 ${plan.popular ? "text-green-300" : "text-green-500"}`} />
                    <span className={plan.popular ? "text-orange-100" : "text-gray-600"}>{feat}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block text-center py-3 px-6 rounded-2xl font-bold text-sm transition-all ${
                  plan.popular
                    ? "bg-white text-saffron-600 hover:bg-orange-50 hover:shadow-lg"
                    : "btn-primary justify-center"
                }`}
              >
                Get Started →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── TESTIMONIALS ──────────────────────────────────────── */
const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Engineering Student, MIT Aurangabad",
    emoji: "👨‍🎓",
    text: "I was spending ₹200+ daily on canteen food. Now with TheTiffins, I get fresh home-cooked dal-roti-sabzi for just ₹60. It genuinely tastes like my mom's cooking. Game changer!",
    rating: 5,
    saving: "₹4,200/month",
  },
  {
    name: "Priya Kulkarni",
    role: "Software Engineer, Aurangabad",
    emoji: "👩‍💻",
    text: "Working 10-hour days, I had zero time to cook. TheTiffins delivers a hot, nutritious lunch to my office every day. Healthy, affordable, and I've lost 4kg in 2 months!",
    rating: 5,
    saving: "₹3,500/month",
  },
  {
    name: "Sunita Devi",
    role: "Home Cook & Tiffin Provider",
    emoji: "👩‍🍳",
    text: "I started cooking tiffins during COVID to support my family. TheTiffins gave me a platform — now I have 45 subscribers and earn ₹35,000/month doing what I love most!",
    rating: 5,
    saving: "₹35K income",
  },
  {
    name: "Manish Agarwal",
    role: "HR Manager, Tech Company",
    emoji: "👨‍💼",
    text: "We enrolled our 80-person team on the corporate plan. Employee satisfaction scores went up by 30%! Fresh home food mid-day makes such a difference in productivity.",
    rating: 5,
    saving: "30% productivity boost",
  },
];

const TestimonialsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="section-tag">❤️ Real Stories</div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
            Loved by{" "}
            <span className="shimmer-text">Thousands</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Students, professionals, and home cooks — all thriving with TheTiffins.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`testimonial-card transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <FaQuoteLeft className="text-saffron-200 text-3xl mb-3" />
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <FaStar key={j} className="text-amber-400 text-xs" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="text-3xl">{t.emoji}</div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
              <div className="mt-3 inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                💚 {t.saving}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── FINAL CTA ─────────────────────────────────────────── */
const FinalCTA = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-24 px-4 overflow-hidden" style={{ background: "#FFF8F0" }}>
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          {/* Customer CTA */}
          <div className="promo-banner rounded-3xl p-12 text-white text-center mb-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-4 right-8 text-8xl opacity-10 animate-float">🍱</div>
            <div className="absolute bottom-4 left-8 text-6xl opacity-10 animate-float-box">🥘</div>
            <div className="relative z-10">
              <div className="text-5xl mb-4">🍱</div>
              <h2 className="text-3xl md:text-4xl font-black mb-3">
                Ready to Eat Like Home?
              </h2>
              <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
                Join <strong>10,000+ happy customers</strong> who get fresh, home-cooked tiffins every day.
                Your first tiffin is on us — use code <strong className="text-yellow-300">FIRSTTIFFIN</strong>!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/menu" className="btn-white">
                  🍱 Find My Tiffin Provider <FaArrowRight />
                </Link>
                <Link href="/services/packages" className="border-2 border-white/40 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 transition-all inline-flex items-center gap-2">
                  View All Plans
                </Link>
              </div>
            </div>
          </div>

          {/* Provider CTA */}
          <div className="bg-gray-900 rounded-3xl p-10 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-5">
              <div className="text-9xl absolute top-2 left-8">👩‍🍳</div>
              <div className="text-9xl absolute bottom-2 right-8">🍳</div>
            </div>
            <div className="relative z-10">
              <div className="text-4xl mb-4">👩‍🍳</div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                Do You Cook Amazing Food?
                <span className="text-saffron-400"> Earn from it!</span>
              </h3>
              <p className="text-gray-400 text-base mb-6 max-w-2xl mx-auto">
                Register as a tiffin provider today. No investment needed — just your kitchen and your recipes.
                We handle marketing, payments, and delivery partners.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/register" className="btn-primary">
                  🍳 Start Earning Today <FaArrowRight />
                </Link>
                <Link href="/about" className="border border-gray-600 text-gray-300 px-6 py-3 rounded-full font-semibold text-sm hover:border-saffron-500 hover:text-saffron-400 transition-all inline-flex items-center gap-2">
                  Learn How It Works
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-500">
                <span>✅ Free registration</span>
                <span>✅ ₹0 platform fee for first 3 months</span>
                <span>✅ Earn ₹15K–₹50K/month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── APP DOWNLOAD SECTION ──────────────────────────────── */
const AppDownloadSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-24 bg-white overflow-hidden relative section-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`} ref={ref}>
          {/* Left: Content */}
          <div className="relative z-10">
            <div className="section-tag mb-6">📱 The Tiffins App</div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Delicious Food, <br />
              <span className="shimmer-text">Now in Your Pocket!</span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Order meals, track your delivery, and manage your weekly 
              subscriptions on the go. Our mobile app makes eating healthy 
              as easy as sending a WhatsApp message.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                { icon: "📍", text: "Live GPS tracking for your lunch tiffin" },
                { icon: "📅", text: "Easily pause subscriptions when you're away" },
                { icon: "💳", text: "Secure one-click payments with UPI" },
                { icon: "💬", text: "Direct chat with your home cook" },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700 font-semibold group">
                  <span className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center group-hover:scale-110 transition-transform">{f.icon}</span>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#" className="transform hover:scale-105 transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-[48px]" />
              </a>
              <a href="#" className="transform hover:scale-105 transition-all">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-[48px]" />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 p-4 border border-orange-100 rounded-3xl bg-orange-50/50 max-w-sm">
                <div className="w-16 h-16 bg-white p-1 rounded-xl shadow-sm">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=TheTiffinsApp" alt="QR Code" className="w-full h-full" />
                </div>
                <div>
                    <div className="text-sm font-black text-gray-900">Scan to Download</div>
                    <div className="text-xs text-gray-500 font-medium">Point your camera to the screen!</div>
                </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            {/* Background Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-saffron-100/30 rounded-full blur-[80px] -z-10" />
            
            <div className="relative flex justify-center lg:justify-end gap-x-4">
                {/* Secondary Phone */}
                <div className="w-48 sm:w-64 mt-12 animate-float-box hidden sm:block">
                    <img 
                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80" 
                        alt="App Screenshot" 
                        className="rounded-[40px] shadow-2xl border-[8px] border-gray-900 aspect-[9/19.5] object-cover"
                    />
                </div>
                {/* Main Phone */}
                <div className="w-56 sm:w-72 animate-float">
                    <img 
                        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop&q=80" 
                        alt="App Screenshot" 
                        className="rounded-[48px] shadow-2xl border-[10px] border-gray-900 aspect-[9/19.5] object-cover"
                    />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── MAIN HOME PAGE ────────────────────────────────────── */
const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <ValueProp />
      <HowItWorks />
      <AppDownloadSection />
      <FeaturedProviders />
      <PricingSection />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
};

export default Home;