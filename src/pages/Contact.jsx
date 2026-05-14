import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-tiffin-warm min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Human Touch: Decorative Elements */}
      <div className="absolute top-20 right-[-5%] w-64 h-64 bg-saffron-200/20 organic-radius blur-3xl animate-blob" />
      <div className="absolute bottom-20 left-[-5%] w-80 h-80 bg-saffron-100/30 organic-radius blur-3xl animate-blob delay-1000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="section-tag">💌 Reach Out</div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Hungry or Have a <span className="shimmer-text">Question?</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            We're just a few taps away. Whether you want to customize your meal 
            or partner with us as a cook, we'd love to hear from you.
          </p>
          <div className="mt-4">
            <span className="font-kalam text-saffron-600 text-xl font-bold rotate-[-2deg] inline-block">
              "Ghar jaisa khana is just a message away!"
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details Detail */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[40px] shadow-xl border border-orange-50 card-artisan">
              <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                <span className="text-3xl">🏠</span> Our Home Base
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-saffron-600 group-hover:bg-saffron-500 group-hover:text-white transition-all shadow-sm">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Call or WhatsApp</div>
                    <div className="text-lg font-bold text-gray-800">+91 74993 03475</div>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-saffron-600 group-hover:bg-saffron-500 group-hover:text-white transition-all shadow-sm">
                    <FaEnvelope />
                  </div>
                  <div>
                    <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Email Us</div>
                    <div className="text-lg font-bold text-gray-800">hello@thefoods.in</div>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-saffron-600 group-hover:bg-saffron-500 group-hover:text-white transition-all shadow-sm">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Visit Us</div>
                    <div className="text-lg font-bold text-gray-800 leading-snug">
                      Space Olympia, Wing C-604, <br />
                      Sutgirni Chowk, Aurangabad
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <p className="text-sm font-bold text-gray-500 mb-4">Follow our kitchen journey:</p>
                <div className="flex gap-4">
                  {[
                    { icon: <FaInstagram />, color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600" },
                    { icon: <FaFacebook />, color: "bg-blue-600" },
                    { icon: <FaWhatsapp />, color: "bg-green-500" }
                  ].map((s, i) => (
                    <button key={i} className={`w-10 h-10 ${s.color} text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}>
                      {s.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick WhatsApp CTA */}
            <div className="bg-green-50 p-8 rounded-[40px] border border-green-100 flex items-center justify-between shadow-lg card-artisan">
              <div>
                <h3 className="text-xl font-black text-green-800">Quick Query?</h3>
                <p className="text-green-600 text-sm">Message us on WhatsApp now!</p>
              </div>
              <a href="https://wa.me/917499303475" className="bg-green-500 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-green-500/20 hover:bg-green-600 transition-all">
                <FaWhatsapp className="text-xl" /> Chat Now
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[48px] shadow-2xl border border-orange-50 relative section-paper">
            <h2 className="text-2xl font-black text-gray-900 mb-2 font-poppins">Send a Note</h2>
            <p className="text-gray-500 text-sm mb-8">We'll get back to you within 2 hours!</p>
            
            <form className="space-y-5 relative z-20">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Rahul Sharma" 
                    className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl focus:ring-2 focus:ring-saffron-500/20 focus:bg-white transition-all outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000" 
                    className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl focus:ring-2 focus:ring-saffron-500/20 focus:bg-white transition-all outline-none"
                  />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="rahul@example.com" 
                  className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl focus:ring-2 focus:ring-saffron-500/20 focus:bg-white transition-all outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                <textarea 
                  rows="4" 
                  placeholder="I want to start a monthly tiffin subscription for my office..." 
                  className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl focus:ring-2 focus:ring-saffron-500/20 focus:bg-white transition-all outline-none resize-none"
                />
              </div>

              <button className="w-full btn-primary justify-center py-4 rounded-2xl text-base shadow-xl shadow-saffron-500/20">
                Send Your Message <span className="text-xs opacity-70">🚀</span>
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-24">
          <div className="bg-white p-4 rounded-[40px] shadow-2xl border border-orange-50 overflow-hidden relative group">
            <div className="absolute top-8 left-8 z-10 glass-warm px-4 py-2 rounded-full shadow-lg border border-white/50 text-gray-800 font-bold text-sm">
              📍 Visit our Corporate Office
            </div>
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.5540339044596!2d75.34269667564526!3d19.858814126930827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba27e4ed4701d%3A0x6a3f089978edef2!2sOlumpus%2C%20Sut%20Girni%20Rd%2C%20Gadia%20Vihar%2C%20Chhatrapati%20Sambhaji%20Nagar%2C%20Maharashtra%20431005!5e0!3m2!1sen!2sin!4v1745644742033!5m2!1sen!2sin"
              width="100%"
              height="450"
              className="rounded-[32px] grayscale-[0.2] contrast-[1.1] transition-all duration-500 group-hover:grayscale-0"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
