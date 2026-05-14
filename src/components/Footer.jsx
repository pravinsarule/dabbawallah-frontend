import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const Footer = () => {
  return (
    <footer style={{ background: "#1A0A00" }} className="text-gray-300">
      {/* Top CTA Strip */}
      <div style={{ background: "linear-gradient(135deg, #FF6B35, #C9420A)" }} className="py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-black text-xl">Ready to start eating healthy?</h3>
            <p className="text-orange-100 text-sm">Get your first tiffin at 50% off with code FIRSTTIFFIN</p>
          </div>
          <Link to="/menu" className="btn-white whitespace-nowrap text-sm">
            Find Tiffin Near You <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron-500 to-saffron-700 flex items-center justify-center text-xl">
                🍱
              </div>
              <div>
                <div className="text-white font-black text-xl">TheTiffins</div>
                <div className="text-xs text-orange-400">Home · Made · Fresh</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              India's community tiffin marketplace connecting home cooks with students 
              and working professionals who crave ghar ka khana at affordable prices.
            </p>
            <div className="flex items-center gap-2 mb-3">
              <MdVerified className="text-green-400 text-lg" />
              <span className="text-xs text-gray-400">FSSAI Certified · ISO 9001</span>
            </div>
            <div className="flex gap-3 mt-4">
              {[
                { icon: <FaFacebook />, href: "https://facebook.com", color: "hover:text-blue-400" },
                { icon: <FaInstagram />, href: "https://instagram.com", color: "hover:text-pink-400" },
                { icon: <FaWhatsapp />, href: "https://wa.me/919559687898", color: "hover:text-green-400" },
                { icon: <FaTwitter />, href: "https://twitter.com", color: "hover:text-sky-400" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 ${s.color} transition-all hover:bg-white/20`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "🏠 Home", path: "/" },
                { name: "🍱 Browse Tiffins", path: "/menu" },
                { name: "📦 Packages & Plans", path: "/services/packages" },
                { name: "🏢 Corporate Tiffin", path: "/services/corporate" },
                { name: "👥 About Us", path: "/about" },
                { name: "❓ FAQs", path: "/Faqs" },
              ].map((l, i) => (
                <li key={i}>
                  <Link
                    to={l.path}
                    className="text-gray-400 hover:text-saffron-400 text-sm transition-colors flex items-center gap-2"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Providers */}
          <div>
            <h4 className="text-white font-bold text-base mb-5">For Tiffin Providers</h4>
            <ul className="space-y-3">
              {[
                { name: "👩‍🍳 Register as Cook", path: "/register" },
                { name: "💰 How Earnings Work", path: "/about" },
                { name: "📋 Quality Standards", path: "/about" },
                { name: "🤝 Our Network", path: "/OurConnections" },
                { name: "👥 Meet Our Team", path: "/Teams" },
                { name: "📞 Contact Support", path: "/contact" },
              ].map((l, i) => (
                <li key={i}>
                  <Link to={l.path} className="text-gray-400 hover:text-saffron-400 text-sm transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919559687898"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-500/30 transition-all"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>

          {/* Download App & Contact */}
          <div className="space-y-8">
            <div>
              <h4 className="text-white font-bold text-base mb-5">Get the Mobile App</h4>
              <p className="text-gray-500 text-xs mb-4">Track your lunch live! Download for the best experience.</p>
              <div className="flex flex-col gap-3">
                <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
                </a>
                <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                  <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-base mb-5">Contact Us</h4>
              <div className="space-y-4">
                <a href="tel:+919559687898" className="flex items-center gap-3 text-gray-400 hover:text-saffron-400 transition-colors text-sm">
                  <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><FaPhone className="text-xs text-saffron-500" /></span>
                  +91 95596 87898
                </a>
                <a href="mailto:support@thetiffins.in" className="flex items-center gap-3 text-gray-400 hover:text-saffron-400 transition-colors text-sm">
                  <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><FaEnvelope className="text-xs text-saffron-500" /></span>
                  support@thetiffins.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} TheTiffins (Digital Cafeteria Solutions Pvt. Ltd.).
            </p>
            <div className="flex gap-4 text-[10px] text-gray-700 uppercase font-black tracking-widest">
              <span>FSSAI ✓ 1121934000032</span>
              <span className="hidden md:inline">•</span>
              <span>Made with ❤️ in India</span>
            </div>
          </div>
          <div className="flex gap-6 text-[11px] text-gray-500 font-bold">
            <Link to="/Faqs" className="hover:text-saffron-400 transition-colors">Privacy</Link>
            <Link to="/Faqs" className="hover:text-saffron-400 transition-colors">Terms</Link>
            <Link to="/Faqs" className="hover:text-saffron-400 transition-colors">Refunds</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
