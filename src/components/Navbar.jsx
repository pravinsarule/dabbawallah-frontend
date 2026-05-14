import { useState, useEffect, useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaBars, FaTimes, FaSignOutAlt, FaUtensils, FaChevronDown, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { AuthContext } from "./Auth/AuthContext";

const Navbar = () => {
  const { isLoggedIn, userName, userRole, handleLogout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({ services: false, thefoods: false });
  const [userLocation, setUserLocation] = useState(localStorage.getItem("userLocation") || "");
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationSearch, setLocationSearch] = useState("");
  const locationRef = useRef(null);

  const location = useLocation();
  const currentPath = location.pathname;
  const dropdownRef = useRef(null);
  const submenuTimers = useRef({ services: null, thefoods: null });

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      key: "services",
      submenu: [
        { name: "📦 Packages & Plans", path: "/services/packages" },
        { name: "🏢 Corporate Tiffin", path: "/services/corporate" },
        { name: "🛍️ Retail Orders", path: "/services/retail" },
      ],
    },
    {
      name: "About",
      key: "thefoods",
      submenu: [
        { name: "🌟 Our Story", path: "/about" },
        { name: "🤝 Our Network", path: "/OurConnections" },
        { name: "👨‍🍳 Meet the Team", path: "/Teams" },
      ],
    },
    { name: "Menu", path: "/menu" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ's", path: "/Faqs" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
      if (locationRef.current && !locationRef.current.contains(e.target)) {
        setLocationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleGPS = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    setLocationLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();
          const addr = data.address;
          const label = [
            addr.neighbourhood || addr.suburb || addr.village,
            addr.city || addr.town || addr.county,
            addr.state
          ].filter(Boolean).join(", ");
          setUserLocation(label || `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
          localStorage.setItem("userLocation", label || `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
        } catch {
          setUserLocation(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
        } finally {
          setLocationLoading(false);
          setLocationOpen(false);
        }
      },
      () => {
        setLocationLoading(false);
        alert("Unable to retrieve your location. Please allow location access.");
      }
    );
  };

  const handleSubmenuMouseEnter = (menu) => {
    clearTimeout(submenuTimers.current[menu]);
    setSubmenuOpen((prev) => ({ ...prev, [menu]: true }));
  };

  const handleSubmenuMouseLeave = (menu) => {
    submenuTimers.current[menu] = setTimeout(() => {
      setSubmenuOpen((prev) => ({ ...prev, [menu]: false }));
    }, 200);
  };

  const toggleSubmenuMobile = (menu) => {
    setSubmenuOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  // Backend returns role as 'user'; support both 'user' and 'customer' values
  const isCustomer = isLoggedIn && (userRole === "user" || userRole === "customer");

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          isCustomer
            ? "bg-white shadow-md shadow-orange-100/60 border-b border-orange-50"
            : isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-orange-100/50"
            : "bg-transparent"
        }`}
        style={{ minHeight: "72px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-[72px] flex items-center">
          {isCustomer ? (
            /* Specialized Header for Customers (Student/Office Worker) */
            <div className="flex items-center w-full gap-3 sm:gap-5">

              {/* LEFT: Location Picker */}
              <div className="relative flex-shrink-0" ref={locationRef}>
                <button
                  onClick={() => setLocationOpen(!locationOpen)}
                  className="flex items-center gap-2 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-saffron-500 to-saffron-700 flex items-center justify-center shadow-md flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-base" />
                  </div>
                  <div className="flex flex-col justify-center leading-tight text-left hidden sm:flex">
                    <span className="text-[9px] font-black tracking-widest uppercase text-saffron-600">Deliver To</span>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-bold truncate max-w-[130px] text-gray-900">
                        {userLocation || "Set Location"}
                      </span>
                      <FaChevronDown className={`text-[9px] text-gray-400 transition-transform ${locationOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </button>

                {/* Location Dropdown */}
                {locationOpen && (
                  <div className="absolute left-0 top-[calc(100%+12px)] w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
                    {/* Search area input */}
                    <div className="p-3 border-b border-gray-100">
                      <div className="relative">
                        <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                        <input
                          autoFocus
                          type="text"
                          placeholder="Search for area, street name..."
                          value={locationSearch}
                          onChange={e => setLocationSearch(e.target.value)}
                          className="w-full pl-9 pr-4 py-2.5 text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-saffron-500/30 focus:border-saffron-500 transition-all"
                        />
                      </div>
                    </div>
                    {/* GPS Option */}
                    <button
                      onClick={handleGPS}
                      disabled={locationLoading}
                      className="w-full flex items-center gap-3 px-4 py-3.5 text-saffron-600 font-bold text-sm hover:bg-orange-50 transition-all"
                    >
                      <FaMapMarkerAlt className="text-saffron-500 text-base flex-shrink-0" />
                      <span>{locationLoading ? "Detecting location..." : "Locate me using GPS"}</span>
                      {locationLoading && (
                        <div className="ml-auto w-4 h-4 border-2 border-saffron-500 border-t-transparent rounded-full animate-spin" />
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="hidden sm:block h-8 w-px bg-gray-200 flex-shrink-0" />

              {/* CENTER: Food Search */}
              <div className="flex-1 relative">
                <div className="relative flex items-center w-full">
                  <FaSearch className="absolute left-4 text-sm text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for tiffin, dishes, providers..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-2xl text-sm font-medium border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-saffron-500/30 focus:border-saffron-500 transition-all"
                  />
                </div>
              </div>

              {/* RIGHT: Profile */}
              <div className="relative flex-shrink-0" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 bg-gradient-to-r from-saffron-500 to-saffron-700 text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-lg hover:shadow-orange-300/50 transition-all"
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <FaUser className="text-[10px]" />
                  </div>
                  <span className="hidden sm:inline">{userName || "Profile"}</span>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-2xl border border-orange-100 overflow-hidden z-50">
                    <div className="px-4 py-4 bg-orange-50 border-b border-orange-100">
                      <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Signed in as</p>
                      <p className="font-bold text-gray-900 text-sm truncate">{userName}</p>
                      <p className="text-[10px] text-saffron-600 font-bold uppercase mt-1">Service Taker</p>
                    </div>
                    <div className="p-1">
                      <Link
                        to="/profile"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 w-full px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-saffron-600 rounded-xl transition-all font-bold"
                      >
                        👤 My Profile
                      </Link>
                      <Link
                        to="/orders"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 w-full px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-saffron-600 rounded-xl transition-all font-bold"
                      >
                        📦 My Orders
                      </Link>
                      <Link
                        to="/dashboard/customer"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 w-full px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-saffron-600 rounded-xl transition-all font-bold"
                      >
                       🏠 My Dashboard
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 rounded-xl transition-all font-bold"
                      >
                        <FaSignOutAlt /> Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Standard Header for Non-Logged In / Vendor users */
            <div className="flex justify-between items-center w-full">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group" onClick={() => setMenuOpen(false)}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron-500 to-saffron-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaUtensils className="text-white text-lg" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className={`text-xl font-black tracking-tight ${isScrolled ? "text-saffron-700" : "text-white"}`}>
                    The<span className="text-saffron-500">Tiffins</span>
                  </span>
                  <span className={`text-[10px] font-medium tracking-widest uppercase ${isScrolled ? "text-gray-500" : "text-orange-200"}`}>
                    Home · Made · Fresh
                  </span>
                </div>
              </Link>

              {/* Hamburger Mobile */}
              <button
                className={`lg:hidden text-2xl p-2 rounded-lg transition-all duration-300 ${
                  isScrolled ? "text-saffron-700 hover:bg-orange-50" : "text-white hover:bg-white/10"
                }`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>

              {/* Desktop Nav Links */}
              <ul className="hidden lg:flex items-center gap-1">
                {navItems.map((item, idx) => {
                  const key = item.key || item.name.toLowerCase().replace(/\s/g, "");

                  if (item.submenu) {
                    return (
                      <li
                        key={idx}
                        className="relative"
                        onMouseEnter={() => handleSubmenuMouseEnter(key)}
                        onMouseLeave={() => handleSubmenuMouseLeave(key)}
                      >
                        <button
                          className={`flex items-center gap-1 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                            isScrolled
                              ? "text-gray-700 hover:text-saffron-600 hover:bg-orange-50"
                              : "text-white/90 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          {item.name}
                          <FaChevronDown
                            className={`text-xs transition-transform duration-300 ${submenuOpen[key] ? "rotate-180" : ""}`}
                          />
                        </button>
                        <div
                          className={`absolute left-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-2xl shadow-orange-100 border border-orange-100 overflow-hidden transition-all duration-300 ${
                            submenuOpen[key]
                              ? "opacity-100 translate-y-0 pointer-events-auto"
                              : "opacity-0 -translate-y-3 pointer-events-none"
                          }`}
                        >
                          {item.submenu.map((sub, si) => (
                            <Link
                              key={si}
                              to={sub.path}
                              onClick={() => { setMenuOpen(false); setSubmenuOpen({ services: false, thefoods: false }); }}
                              className="flex items-center gap-3 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-saffron-600 transition-all duration-200"
                            >
                              <span>{sub.name}</span>
                            </Link>
                          ))}
                        </div>
                      </li>
                    );
                  }

                  return (
                    <li key={idx}>
                      <Link
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className={`relative px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 group ${
                          currentPath === item.path
                            ? isScrolled
                              ? "text-saffron-600 bg-orange-50"
                              : "text-white bg-white/20"
                            : isScrolled
                            ? "text-gray-700 hover:text-saffron-600 hover:bg-orange-50"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Desktop Auth */}
              <div className="hidden lg:flex items-center gap-3" ref={dropdownRef}>
                {!isLoggedIn ? (
                  <>
                    <Link
                      to="/register"
                      state={{ role: 'vendor' }}
                      className="px-6 py-2.5 text-sm font-bold text-saffron-600 border-2 border-saffron-600 rounded-full hover:bg-saffron-50 transition-all"
                    >
                      Partner with us
                    </Link>
                    <Link
                      to="/login"
                      className="btn-primary text-sm px-6 py-2.5"
                    >
                      Sign In
                    </Link>
                  </>
                ) : (
                  <div className="relative">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center gap-2 bg-gradient-to-r from-saffron-500 to-saffron-700 text-white px-4 py-2.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-orange-300/50 transition-all"
                    >
                      <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                        <FaUser className="text-xs" />
                      </div>
                      {userName || "Profile"}
                    </button>
                    {dropdownOpen && (
                      <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-orange-100 overflow-hidden z-50">
                        <div className="px-4 py-4 bg-orange-50 border-b border-orange-100">
                          <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Signed in as</p>
                          <p className="font-bold text-gray-900 text-sm">{userName}</p>
                          <p className="text-[10px] text-saffron-600 font-bold uppercase mt-1">{userRole === 'customer' ? 'Service Taker' : 'Tiffin Provider'}</p>
                        </div>
                        <div className="p-1">
                          <Link
                            to={userRole === 'customer' ? "/dashboard/customer" : "/dashboard/provider"}
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-3 w-full px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-saffron-600 rounded-xl transition-all font-bold"
                          >
                           🏠 My Dashboard
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 rounded-xl transition-all font-bold"
                          >
                            <FaSignOutAlt /> Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu for non-customers only */}
        {!isCustomer && (
          <div
            className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
              menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } ${isScrolled ? "bg-white" : "bg-gray-900/95 backdrop-blur-xl"}`}
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item, idx) => {
                const key = item.key || item.name.toLowerCase().replace(/\s/g, "");
                if (item.submenu) {
                  return (
                    <div key={idx}>
                      <button
                        onClick={() => toggleSubmenuMobile(key)}
                        className={`flex items-center justify-between w-full px-4 py-3 rounded-xl font-semibold text-sm ${
                          isScrolled ? "text-gray-700" : "text-white/90"
                        }`}
                      >
                        {item.name}
                        <FaChevronDown className={`text-xs transition-transform ${submenuOpen[key] ? "rotate-180" : ""}`} />
                      </button>
                      {submenuOpen[key] && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.submenu.map((sub, si) => (
                            <Link
                              key={si}
                              to={sub.path}
                              onClick={() => setMenuOpen(false)}
                              className={`block px-4 py-2.5 rounded-xl text-sm ${
                                isScrolled ? "text-gray-600 hover:text-saffron-600 hover:bg-orange-50" : "text-white/70 hover:text-white hover:bg-white/10"
                              }`}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                      currentPath === item.path
                        ? "bg-saffron-500 text-white"
                        : isScrolled
                        ? "text-gray-700 hover:bg-orange-50 hover:text-saffron-600"
                        : "text-white/90 hover:text-white/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-2 border-t border-gray-200/20">
                {isLoggedIn ? (
                  <button
                    onClick={() => { handleLogout(); setMenuOpen(false); }}
                    className="flex items-center gap-2 w-full px-4 py-3 rounded-xl text-red-400 text-sm font-semibold"
                  >
                    <FaSignOutAlt /> Logout ({userName})
                  </button>
                ) : (
                  <div className="flex flex-col gap-2 mt-2">
                    <Link
                      to="/register"
                      state={{ role: 'vendor' }}
                      onClick={() => setMenuOpen(false)}
                      className="w-full flex justify-center px-4 py-3 rounded-xl font-bold text-sm text-saffron-600 border border-saffron-500 bg-saffron-50/50"
                    >
                      Partner with us
                    </Link>
                    <Link
                      to="/login"
                      onClick={() => setMenuOpen(false)}
                      className="w-full btn-primary justify-center flex items-center"
                    >
                      Sign In
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

    </>
  );
};

export default Navbar;
