"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus, FaQuestionCircle, FaWhatsapp } from "react-icons/fa";

const faqs = [
  {
    question: "Is the food really home-cooked?",
    answer: "Yes! Every single provider on our platform is a verified home cook making meals in their own kitchen. It's not a commercial factory; it's someone's home, just like yours.",
  },
  {
    question: "Do you deliver on Sundays?",
    answer: "Most of our providers take a break on Sundays to spend time with family (just like you!). However, some do offer special Sunday 'brunch' tiffins. Check the provider's schedule on their profile.",
  },
  {
    question: "Can I pause my subscription if I'm going away?",
    answer: "Absolutely! Just log in and 'Pause' your subscription before 8:00 PM the previous day. Your days will be added back to your balance automatically.",
  },
  {
    question: "What if I don't like the taste?",
    answer: "We know taste is personal. You can start with a 1-day or 3-day 'Trial Pack' before committing to a full month. You can also switch providers anytime if you want to try something new.",
  },
  {
    question: "Is the packaging eco-friendly?",
    answer: "We encourage our providers to use reusable steel tiffins or biodegradable containers. Many of our providers use the traditional 'dabbawala' style steel containers which we collect & sanitize daily.",
  },
  {
    question: "How do you check for hygiene?",
    answer: "Every kitchen must pass a 20-point hygiene check by our team and possess a valid FSSAI registration. We also do unannounced 'Surprise Kitchen Visits' to ensure standards stay high.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-tiffin-warm min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-tag">💡 Help Center</div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Curious about <br />
            <span className="shimmer-text">Our Kitchens?</span>
          </h1>
          <p className="text-gray-500 text-lg">
            Everything you need to know about subscribing, 
            safety, and our home-cooking community.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-[32px] overflow-hidden border transition-all duration-300 ${
                openIndex === index ? "border-saffron-300 shadow-xl" : "border-orange-50 shadow-sm"
              } card-artisan`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex justify-between items-center text-left"
              >
                <div className="flex items-center gap-4">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    openIndex === index ? "bg-saffron-500 text-white" : "bg-orange-50 text-saffron-600"
                  }`}>
                    {index + 1}
                  </span>
                  <span className="text-lg font-bold text-gray-800">{faq.question}</span>
                </div>
                <div className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                  {openIndex === index ? <FaMinus className="text-saffron-500" /> : <FaPlus className="text-gray-400" />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-8 pl-20 text-gray-600 leading-relaxed border-t border-orange-50 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-20 flex flex-col items-center">
            <div className="relative group grayscale hover:grayscale-0 transition-all cursor-pointer">
                <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-orange-50 max-w-lg text-center relative z-10 section-paper">
                    <FaQuestionCircle className="text-4xl text-saffron-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-black text-gray-900 mb-2">Still have a question?</h3>
                    <p className="text-gray-500 mb-6">If your question didn't make the list, don't worry! We're real humans and we love to help.</p>
                    <a href="https://wa.me/917499303475" className="btn-primary inline-flex gap-2 mx-auto">
                        <FaWhatsapp className="text-xl" /> Ask us on WhatsApp
                    </a>
                </div>
                {/* Hand-drawn note */}
                <div className="absolute -bottom-10 -right-20 hidden md:block w-48 font-kalam text-saffron-600 font-bold rotate-6 animate-wiggle">
                    <svg className="w-10 h-10 mb-2" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5C5 5 15 25 35 35M35 35L25 35M35 35L35 25" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    We're very friendly!
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
