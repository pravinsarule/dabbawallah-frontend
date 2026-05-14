import React from "react";
import { FaHeart, FaUtensils, FaHandsHelping, FaLinkedin, FaTwitter } from "react-icons/fa";

const teammates = [
  {
    name: "Mrs. Meera Deshpande",
    role: "Lead Home Cook",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&auto=format&fit=crop&q=80",
    bio: "With over 30 years of cooking experience, Meera ensures every recipe has the authentic 'Grandma' touch. She leads our network of 200+ home providers.",
    badge: "🍱 Taste Maker"
  },
  {
    name: "Pravin Sarule",
    role: "Founder & Operations",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Pravin started TheTiffins to help fellow students find affordable food. He handles the technology that connects your hunger to the right kitchen.",
    badge: "🚀 Visionary"
  },
  {
    name: "Sunita Reddy",
    role: "Quality Assurance",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Sunita personally visits every home kitchen to ensure hygiene and safety standards. She's the reason we're FSSAI compliant and trusted by thousands.",
    badge: "✅ Safety First"
  },
  {
    name: "Rahul Kulkarni",
    role: "Logistics Lead",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    bio: "Rahul manages our fleet of 50+ delivery partners, ensuring your tiffin reaches you hot and on time, every single day.",
    badge: "🚴 On-Time King"
  }
];

const Teams = () => {
  return (
    <div className="bg-tiffin-warm min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-40 left-[-10%] w-[40%] h-[40%] bg-saffron-100/50 rounded-full blur-[100px] animate-blob" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="section-tag">🤝 Meat the Humans</div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            The Hearts Behind <br />
            <span className="shimmer-text">Your Daily Tiffin</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            We aren't a corporate machine. We're a team of cooks, students, 
            and dreamers working together to bring you the taste of home.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teammates.map((member, i) => (
            <div key={i} className="group">
              <div className="bg-white p-6 rounded-[40px] shadow-xl border border-orange-50 card-artisan h-full flex flex-col items-center text-center relative overflow-hidden">
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-saffron-50 rounded-bl-[60px] -z-10 group-hover:bg-saffron-100 transition-colors" />
                
                <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-32 h-32 rounded-[32px] object-cover ring-4 ring-orange-50 group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute -bottom-3 -right-3 bg-saffron-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg">
                      {member.badge}
                    </div>
                </div>

                <h3 className="text-xl font-black text-gray-900 mb-1">{member.name}</h3>
                <div className="text-xs font-black text-saffron-600 uppercase tracking-widest mb-4">
                    {member.role}
                </div>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {member.bio}
                </p>

                <div className="flex gap-3">
                    <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-all">
                        <FaLinkedin className="text-sm" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-sky-50 hover:text-sky-400 transition-all">
                        <FaTwitter className="text-sm" />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Culture Strip */}
        <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className="text-3xl font-black text-gray-900">Our Culture: <span className="hand-underline">Food is Family</span></h2>
                <p className="text-gray-600 text-lg">
                    We believe that food cooked with love tastes differently than food 
                    produced by a factory. That's why we prioritize the health and 
                    happiness of our home cooks.
                </p>
                <div className="space-y-4">
                    {[
                        { title: "Empowering Local Talent", text: "Providing income to home-based experts." },
                        { title: "Zero Food Waste", text: "Subscriptions help us predict exactly how much to cook." },
                        { title: "Personal Connection", text: "You can leave feedback directly for your cook." }
                    ].map((f, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="w-6 h-6 rounded bg-saffron-500 text-white flex items-center justify-center mt-1">
                                <FaHeart className="text-xs" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800">{f.title}</h4>
                                <p className="text-sm text-gray-500">{f.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative">
                <img 
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80" 
                    alt="Team work" 
                    className="rounded-[48px] shadow-2xl skew-y-1"
                />
                <div className="absolute -bottom-6 -left-6 glass-warm p-6 rounded-3xl shadow-xl max-w-[240px] font-kalam text-saffron-700 font-bold rotate-[-3deg]">
                    "We don't just deliver food; we deliver the feeling of home."
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
