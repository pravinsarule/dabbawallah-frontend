import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPlay, FaChevronLeft, FaChevronRight, FaStar, FaBuilding, FaUtensils } from "react-icons/fa";
import { MdVerified, MdDeliveryDining } from "react-icons/md";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1400&auto=format&fit=crop&q=80",
    tag: "🏢 Trusted by 200+ Organizations",
    heading: "Fresh Home-Made",
    highlight: "Tiffins",
    subheading: "& Snacks",
    description:
      "Nutritious, hygienic, and delicious home-cooked meals delivered daily to your office cafeteria. Corporate tiffin subscriptions that your employees will love.",
    cta: "Explore Plans",
    ctaPath: "/services/packages",
  },
  {
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?w=1400&auto=compress&cs=tinysrgb",
    tag: "🥗 100% Home-Cooked Freshness",
    heading: "Healthy Snacks",
    highlight: "Delivered",
    subheading: "To Your Workplace",
    description:
      "From morning chai snacks to evening munchies — our hygienic snack boxes keep your team energized, happy, and productive throughout the day.",
    cta: "View Menu",
    ctaPath: "/menu",
  },
  {
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1400&auto=format&fit=crop&q=80",
    tag: "⚡ On-Time, Every Time",
    heading: "Customised Meal",
    highlight: "Subscriptions",
    subheading: "For Every Budget",
    description:
      "Choose from 10-day, 15-day or monthly plans — customised according to your company's headcount, dietary needs, and budget preference.",
    cta: "Get Started",
    ctaPath: "/contact",
  },
];

const stats = [
  { icon: <FaBuilding />, value: "200+", label: "Organizations Served" },
  { icon: <FaUtensils />, value: "5000+", label: "Meals Daily" },
  { icon: <MdVerified />, value: "FSSAI", label: "Certified & Safe" },
  { icon: <FaStar />, value: "4.9★", label: "Client Rating" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goToNext = useCallback(() => {
    if (!animating) {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((p) => (p + 1) % slides.length);
        setAnimating(false);
      }, 300);
    }
  }, [animating]);

  const goToPrev = () => {
    if (!animating) {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((p) => (p - 1 + slides.length) % slides.length);
        setAnimating(false);
      }, 300);
    }
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5500);
    return () => clearInterval(interval);
  }, [goToNext]);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          backgroundImage: `url('${slide.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: animating ? "brightness(0.4)" : "brightness(0.45)",
          transition: "background-image 0.8s ease, filter 0.3s ease",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Animated floating food dots */}
      <div className="absolute top-20 right-20 w-4 h-4 rounded-full bg-saffron-500 opacity-60 animate-float" />
      <div className="absolute top-40 right-40 w-2 h-2 rounded-full bg-turmeric-500 opacity-40 animate-float-delay" />
      <div className="absolute bottom-40 right-16 w-3 h-3 rounded-full bg-saffron-400 opacity-50 animate-float" style={{ animationDelay: "2s" }} />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen max-w-7xl mx-auto px-6 lg:px-12 pt-20">
        <div
          className={`max-w-3xl transition-all duration-500 ${
            animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          {/* Badge */}
          <div className="hero-badge animate-fadeInDown mb-6">
            <span>{slide.tag}</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 animate-fadeInUp">
            {slide.heading}{" "}
            <span className="shimmer-text">{slide.highlight}</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-orange-200/90">
              {slide.subheading}
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            {slide.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            <Link to={slide.ctaPath} className="btn-primary text-base">
              {slide.cta} <FaArrowRight className="text-sm" />
            </Link>
            <Link
              to="/menu"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/25 text-white px-6 py-3.5 rounded-full font-semibold text-base hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-saffron-500 flex items-center justify-center">
                <FaPlay className="text-xs ml-0.5" />
              </div>
              View Full Menu
            </Link>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 lg:mt-24 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-4 text-center group hover:bg-saffron-500/20 transition-all duration-300"
              >
                <div className="text-saffron-400 text-xl mb-1 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className="text-white font-black text-2xl">{stat.value}</div>
                <div className="text-gray-400 text-xs font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
        <button
          onClick={goToPrev}
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-saffron-500/50 transition-all duration-300"
        >
          <FaChevronLeft className="text-xs" />
        </button>
        <button
          onClick={goToNext}
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-saffron-500/50 transition-all duration-300"
        >
          <FaChevronRight className="text-xs" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? "w-8 h-2 bg-saffron-500" : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-6 z-20 flex flex-col items-center gap-1 opacity-60">
        <div className="w-px h-12 bg-white/40 animate-pulse" />
        <span className="text-white/60 text-xs font-medium tracking-wider rotate-90 origin-left translate-y-6" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
