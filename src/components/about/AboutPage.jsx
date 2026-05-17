import React from "react";
import { FaHeart, FaShieldAlt, FaLeaf, FaHandsHelping, FaUserGraduate, FaBriefcase, FaStore } from "react-icons/fa";
import Link from "next/link";

const About = () => {
  return (
    <div className="bg-tiffin-warm min-h-screen pt-28 pb-20">
      {/* Hero Mini */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <div className="section-tag">🌟 Our Story</div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
          Bringing the Warmth of <br />
          <span className="shimmer-text">Home-Cooked Meals</span> <br />
          to Every Doorstep
        </h1>
        <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
          TheTiffins started with a simple idea: everyone deserves the comfort, 
          nutrition, and love of a home-cooked meal, no matter how busy their life is. 
          We're a marketplace connecting passionate home cooks with those who miss 
          the taste of home.
        </p>
      </div>

      {/* Visual Split */}
      <div className="max-w-7xl mx-auto px-6 mb-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-saffron-500 rounded-[40px] rotate-3 opacity-10" />
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80" 
            alt="Cooking at home" 
            className="rounded-[40px] relative z-10 shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl z-20 border border-orange-50 max-w-[200px]">
            <div className="text-4xl mb-2">🍱</div>
            <div className="font-black text-gray-900">50,000+</div>
            <div className="text-xs text-gray-500">Meals delivered since we started</div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-black text-gray-900">Why We Exist</h2>
          <p className="text-gray-600">
            In today's fast-paced world, students and working professionals often 
            resort to unhealthy restaurant food or expensive delivery apps. 
            On the other hand, many talented home cooks have incredible recipes 
            but no way to share them with a wider audience.
          </p>
          <p className="text-gray-600 font-bold">
            TheTiffins bridges this gap. We provide a platform for cooks to 
            earn an income and for people to eat healthy, affordable food.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="bg-white p-4 rounded-2xl border border-orange-50">
              <FaHeart className="text-saffron-500 mb-2" />
              <div className="text-sm font-bold">Hygiene First</div>
              <div className="text-xs text-gray-500">Every kitchen is verified & certified</div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-orange-50">
              <FaShieldAlt className="text-saffron-500 mb-2" />
              <div className="text-sm font-bold">Reliable Delivery</div>
              <div className="text-xs text-gray-500">On-time lunch & dinner every day</div>
            </div>
          </div>
        </div>
      </div>

      {/* For Who Section */}
      <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <h2 className="text-3xl font-black text-gray-900 mb-12">Who We Serve</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaUserGraduate />,
              title: "For Students",
              desc: "Are you tired of PG mess food? Get authentic home-cooked meals for ₹50–₹80. Subscribe monthly and focus on your studies, not your hunger.",
              color: "hover:border-saffron-300"
            },
            {
              icon: <FaBriefcase />,
              title: "For Professionals",
              desc: "Long meetings and late nights shouldn't mean eating junk. Receive a hot, nutritious lunch tiffin at your office every afternoon.",
              color: "hover:border-blue-300"
            },
            {
              icon: <FaStore />,
              title: "For Home Cooks",
              desc: "Turn your passion for cooking into a business from the comfort of your kitchen. We handle the logistics; you just cook with love.",
              color: "hover:border-green-300"
            }
          ].map((item, i) => (
            <div key={i} className={`bg-white p-8 rounded-[32px] shadow-lg transition-all border-2 border-transparent ${item.color} group`}>
              <div className="text-4xl text-saffron-500 mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vision Strip */}
      <div className="bg-masala-900 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-saffron-500 opacity-5 rounded-full blur-[100px]" />
        <div className="max-w-5xl mx-auto px-6 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Our Vision for the Future</h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            We aim to empower 1,000+ local home cooks in Aurangabad by 2026, 
            creating a decentralized network of healthy food that 
            promotes local economy and community health.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Join Our Network</Link>
            <Link href="/menu" className="bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-full font-bold hover:bg-white/20 transition-all">Browse Tiffins</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
