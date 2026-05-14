import React, { useContext, useState } from "react";
import { AuthContext } from "../../components/Auth/AuthContext";
import { FaStar, FaClock, FaLeaf, FaFire } from "react-icons/fa";

const tiffins = [
  {
    id: 1,
    name: "Mrs. Deshpande's Kitchen",
    tag: "Best Seller",
    tagColor: "bg-green-500",
    price: "₹65",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80",
    rating: 4.8,
    time: "30–40 mins",
    cuisine: "Veg Thali, Roti, Dal, Rice",
    area: "Shivaji Nagar",
    veg: true,
  },
  {
    id: 2,
    name: "Sharma Ji Tiffin Seva",
    tag: "Items at ₹60",
    tagColor: "bg-orange-500",
    price: "₹60",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format&fit=crop&q=80",
    rating: 4.6,
    time: "25–35 mins",
    cuisine: "North Indian, Paneer, Sabji",
    area: "Kothrud",
    veg: true,
  },
  {
    id: 3,
    name: "Annapurna Home Foods",
    tag: "Free Delivery",
    tagColor: "bg-blue-500",
    price: "₹70",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=500&auto=format&fit=crop&q=80",
    rating: 4.5,
    time: "35–45 mins",
    cuisine: "South Indian, Sambar, Rice",
    area: "Deccan",
    veg: true,
  },
  {
    id: 4,
    name: "Khan Bhai's Dabba",
    tag: "Items at ₹75",
    tagColor: "bg-red-500",
    price: "₹75",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop&q=80",
    rating: 4.7,
    time: "20–30 mins",
    cuisine: "Non-Veg, Chicken Curry, Roti",
    area: "Camp",
    veg: false,
  },
  {
    id: 5,
    name: "Sunita Tai's Tiffin",
    tag: "Diet Friendly",
    tagColor: "bg-teal-500",
    price: "₹80",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=80",
    rating: 4.9,
    time: "30–40 mins",
    cuisine: "Diet, Salad, Khichdi, Soup",
    area: "Aundh",
    veg: true,
  },
  {
    id: 6,
    name: "Joshi Family Tiffins",
    tag: "Items at ₹55",
    tagColor: "bg-yellow-500",
    price: "₹55",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop&q=80",
    rating: 4.4,
    time: "40–50 mins",
    cuisine: "Khichdi, Kadhi, Roti",
    area: "Hadapsar",
    veg: true,
  },
  {
    id: 7,
    name: "Biryani by Ruksha",
    tag: "Trending 🔥",
    tagColor: "bg-orange-600",
    price: "₹90",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80",
    rating: 4.8,
    time: "25–35 mins",
    cuisine: "Biryani Box, Raita, Pickle",
    area: "Viman Nagar",
    veg: false,
  },
  {
    id: 8,
    name: "Pure Jain Tiffin Co.",
    tag: "Jain Friendly",
    tagColor: "bg-green-600",
    price: "₹85",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&auto=format&fit=crop&q=80",
    rating: 4.6,
    time: "35–45 mins",
    cuisine: "Jain, No Onion No Garlic",
    area: "Bavdhan",
    veg: true,
  },
];

const sortOptions = ["Relevance", "Rating", "Delivery Time", "Price: Low to High"];

const CustomerDashboard = () => {
  const { userName } = useContext(AuthContext);
  const [activeSort, setActiveSort] = useState("Relevance");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Veg Only", "Non-Veg", "Diet", "Jain", "Under ₹70"];

  const filtered = tiffins.filter(t => {
    if (activeFilter === "Veg Only") return t.veg;
    if (activeFilter === "Non-Veg") return !t.veg;
    if (activeFilter === "Under ₹70") return parseInt(t.price.replace("₹", "")) < 70;
    return true;
  });

  return (
    <div className="bg-[#faf9f6] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Tiffin Categories ── */}
        <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 px-6 py-6 mb-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-black text-gray-900">What are you craving?</h2>
            <div className="flex gap-2">
              <button onClick={() => document.getElementById('cat-scroll').scrollBy({ left: -260, behavior: 'smooth' })}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-orange-500 hover:text-white transition-all font-bold text-base">‹</button>
              <button onClick={() => document.getElementById('cat-scroll').scrollBy({ left: 260, behavior: 'smooth' })}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-orange-500 hover:text-white transition-all font-bold text-base">›</button>
            </div>
          </div>
          <div id="cat-scroll" className="flex gap-6 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
            {[
              { label: "Veg Thali",       img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200&auto=format&fit=crop&q=80" },
              { label: "North Indian",    img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&auto=format&fit=crop&q=80" },
              { label: "South Indian",    img: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=200&auto=format&fit=crop&q=80" },
              { label: "Dal Rice",        img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=200&auto=format&fit=crop&q=80" },
              { label: "Roti Sabji",      img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200&auto=format&fit=crop&q=80" },
              { label: "Khichdi",         img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=200&auto=format&fit=crop&q=80" },
              { label: "Paneer Special",  img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&auto=format&fit=crop&q=80" },
              { label: "Biryani Box",     img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&auto=format&fit=crop&q=80" },
              { label: "Diet Tiffin",     img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&auto=format&fit=crop&q=80" },
              { label: "Jain Tiffin",     img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&auto=format&fit=crop&q=80" },
              { label: "Non-Veg Box",     img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200&auto=format&fit=crop&q=80" },
              { label: "Weekend Special", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&auto=format&fit=crop&q=80" },
            ].map((cat, i) => (
              <button key={i} className="flex flex-col items-center gap-2 flex-shrink-0 group focus:outline-none">
                <div className="w-20 h-20 rounded-full overflow-hidden border-[3px] border-transparent group-hover:border-orange-400 transition-all shadow group-hover:shadow-lg group-hover:scale-110 duration-200 bg-orange-50">
                  <img src={cat.img} alt={cat.label} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <span className="text-xs font-bold text-gray-700 group-hover:text-orange-500 transition-colors whitespace-nowrap">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Tiffin Listings ── */}
        <div>
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div>
              <h2 className="text-2xl font-black text-gray-900">
                Homemade Tiffins near you
              </h2>
              <p className="text-sm text-gray-500 mt-1">{filtered.length} tiffin providers available</p>
            </div>
            {/* Sort */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-bold text-gray-500">Sort:</span>
              {sortOptions.map(s => (
                <button
                  key={s}
                  onClick={() => setActiveSort(s)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
                    activeSort === s
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex gap-2 flex-wrap mb-6">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-bold border transition-all ${
                  activeFilter === f
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-600 border-gray-200 hover:border-orange-300"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Tag overlay */}
                  <div className={`absolute bottom-3 left-3 ${t.tagColor} text-white text-[11px] font-black px-2.5 py-1 rounded-lg shadow-md uppercase tracking-wide`}>
                    {t.tag}
                  </div>
                  {/* Veg / Non-veg badge */}
                  <div className={`absolute top-3 right-3 w-5 h-5 rounded border-2 flex items-center justify-center ${t.veg ? 'border-green-600 bg-white' : 'border-red-600 bg-white'}`}>
                    <div className={`w-2.5 h-2.5 rounded-full ${t.veg ? 'bg-green-600' : 'bg-red-600'}`} />
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-black text-gray-900 text-base leading-tight mb-1 truncate">{t.name}</h3>

                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="flex items-center gap-1 text-xs font-bold text-white bg-green-600 px-1.5 py-0.5 rounded">
                      <FaStar className="text-[9px]" /> {t.rating}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-semibold">
                      <FaClock className="text-gray-400 text-[10px]" /> {t.time}
                    </span>
                    <span className="text-xs font-black text-orange-500">{t.price}/meal</span>
                  </div>

                  <p className="text-xs text-gray-400 truncate">{t.cuisine}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{t.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CustomerDashboard;
