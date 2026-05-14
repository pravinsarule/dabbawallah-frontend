import React from "react";
import { useInView } from "react-intersection-observer";
import { FaLeaf, FaHeart, FaClock, FaBuilding, FaUsers, FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const features = [
  {
    icon: <FaLeaf />,
    title: "100% Home-Cooked",
    desc: "Every meal is freshly prepared in our certified home kitchen — no preservatives, no frozen food, ever.",
    color: "bg-green-50 text-green-600",
    border: "border-green-200",
  },
  {
    icon: <FaHeart />,
    title: "Made With Love",
    desc: "Our cooks are experienced homemakers who bring the warmth of home food to your workplace every single day.",
    color: "bg-rose-50 text-rose-600",
    border: "border-rose-200",
  },
  {
    icon: <FaClock />,
    title: "On-Time Delivery",
    desc: "Your lunch is delivered hot and fresh, right before your lunch break — no delays, no excuses.",
    color: "bg-blue-50 text-blue-600",
    border: "border-blue-200",
  },
  {
    icon: <FaBuilding />,
    title: "Corporate Solutions",
    desc: "Scalable tiffin subscription plans designed specifically for teams of 10 to 1000+ employees.",
    color: "bg-purple-50 text-purple-600",
    border: "border-purple-200",
  },
  {
    icon: <MdVerified />,
    title: "FSSAI Certified",
    desc: "We're ISO and FSSAI certified, ensuring the highest standards of food safety and hygiene.",
    color: "bg-amber-50 text-amber-600",
    border: "border-amber-200",
  },
  {
    icon: <FaUsers />,
    title: "200+ Organizations",
    desc: "From IT companies to manufacturing units — we proudly serve 200+ organizations across Aurangabad.",
    color: "bg-teal-50 text-teal-600",
    border: "border-teal-200",
  },
];

const WhoAreWe = () => {
  const { ref: headRef, inView: headVisible } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: featRef, inView: featVisible } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-4 bg-tiffin-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="section-tag mb-4">🍱 Who Are We?</div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            Aurangabad's{" "}
            <span className="shimmer-text">Most Loved</span>
            <br />
            Tiffin Service
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We're <strong className="text-saffron-600">Digital Cafeteria Solutions</strong> — a team of passionate food lovers dedicated to bringing 
            the warmth and nutrition of home-cooked meals to offices, IT parks, and organizations across Maharashtra. 
            Forget expensive restaurant food or unhealthy junk — we deliver wholesome, pocket-friendly tiffins daily.
          </p>
        </div>

        {/* Stats Row */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transition-all duration-1000 delay-200 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { value: "5+", label: "Years Experience", icon: "🏆" },
            { value: "5,000+", label: "Meals Per Day", icon: "🍱" },
            { value: "200+", label: "Companies Served", icon: "🏢" },
            { value: "98%", label: "Satisfaction Rate", icon: "⭐" },
          ].map((stat, i) => (
            <div key={i} className="stat-card group">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-3xl font-black text-saffron-600">{stat.value}</div>
              <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div
          ref={featRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feat, i) => (
            <div
              key={i}
              className={`food-card p-6 transition-all duration-700 ${
                featVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl ${feat.color} border ${feat.border} flex items-center justify-center text-xl mb-4`}>
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feat.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
