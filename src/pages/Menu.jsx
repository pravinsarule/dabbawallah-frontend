import React, { useState } from "react";
import { FaSearch, FaFilter, FaStar, FaMapMarkerAlt, FaWhatsapp, FaArrowRight, FaSortAmountDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const providers = [
  {
    id: 1,
    name: "Sunita Devi's Kitchen",
    location: "Garkheda, Aurangabad",
    specialty: "Maharashtrian Thali",
    rating: 4.9,
    reviews: 312,
    price: 70,
    deliveries: 5200,
    badge: "⭐ Top Rated",
    emoji: "👩‍🍳",
    tags: ["Veg", "Jain Option"],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Ramesh Tiffin Corner",
    location: "CIDCO, Aurangabad",
    specialty: "North Indian Dal-Roti",
    rating: 4.8,
    reviews: 247,
    price: 60,
    deliveries: 4100,
    badge: "🏠 Home Cook",
    emoji: "👨‍🍳",
    tags: ["Veg", "Non-Veg"],
    image: "https://images.unsplash.com/photo-1589187151032-573a91317445?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Priya's Healthy Bites",
    location: "Osmanpura, Aurangabad",
    specialty: "Diet & Diabetic Meals",
    rating: 4.9,
    reviews: 189,
    price: 80,
    deliveries: 2900,
    badge: "🥗 Diet Specialist",
    emoji: "👩‍🍳",
    tags: ["Diabetic", "Weight Loss"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Mama's Dabba",
    location: "Prozone Area, Aurangabad",
    specialty: "Gujarati Thali",
    rating: 4.7,
    reviews: 403,
    price: 55,
    deliveries: 7200,
    badge: "🔥 Most Popular",
    emoji: "👩‍🍳",
    tags: ["Veg", "Budget"],
    image: "https://images.unsplash.com/photo-1626777552726-4a6b547b4e5d?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Royal Mughlai Tiffin",
    location: "Aurangpura, Aurangabad",
    specialty: "Hyderabadi & Mughlai",
    rating: 4.6,
    reviews: 156,
    price: 90,
    deliveries: 1800,
    badge: "🍗 Non-Veg Specialist",
    emoji: "👨‍🍳",
    tags: ["Non-Veg", "Biryani"],
    image: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Student's First Choice",
    location: "Bajaj Nagar, Aurangabad",
    specialty: "Simple Roti Sabzi",
    rating: 4.8,
    reviews: 512,
    price: 50,
    deliveries: 9400,
    badge: "🎓 Student Deal",
    emoji: "👩‍🍳",
    tags: ["Veg", "Cheapest"],
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?w=600&auto=compress&cs=tinysrgb",
  },
];

const Menu = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProviders = providers.filter(p => {
    const matchesFilter = filter === "All" || p.tags.includes(filter);
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                          p.location.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-tiffin-warm pt-28 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center mb-10">
          <div className="section-tag">🍱 Tiffin Marketplace</div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Discover Home Cooks <br />
            <span className="shimmer-text">In Your Locality</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Browse through verified home tiffin providers. Freshly cooked, 
            nutritious meals delivered daily to your doorstep.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-[32px] shadow-xl border border-orange-50">
          <div className="flex-grow relative">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by kitchen name or area (e.g. Garkheda)..."
              className="w-full pl-14 pr-4 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-saffron-500/20 outline-none text-sm transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {["All", "Veg", "Non-Veg", "Diabetic", "Budget"].map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-6 py-2 rounded-2xl font-bold text-sm whitespace-nowrap transition-all ${
                  filter === tag 
                    ? "bg-saffron-500 text-white shadow-lg shadow-saffron-500/20" 
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <p className="text-gray-500 font-medium">
            Showing <span className="text-gray-900 font-black">{filteredProviders.length}</span> providers found
          </p>
          <button className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-saffron-600 transition-colors">
            <FaSortAmountDown /> Sort by: Recommended
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProviders.map((p) => (
            <div key={p.id} className="food-card flex flex-col h-full group">
              {/* Image side */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm text-xs font-black text-saffron-700">
                  {p.badge}
                </div>
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-bold flex items-center gap-1">
                  <FaStar className="text-amber-400" /> {p.rating}
                </div>
              </div>

              {/* Content side */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-lg font-black text-gray-900 mb-1 group-hover:text-saffron-600 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-gray-400 text-xs flex items-center gap-1 font-medium">
                    <FaMapMarkerAlt className="text-saffron-500" /> {p.location}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.tags.map((t, i) => (
                    <span key={i} className="bg-orange-50 text-saffron-700 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg border border-orange-100">
                      {t}
                    </span>
                  ))}
                  <span className="bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg border border-green-100">
                    {p.specialty}
                  </span>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div className="text-gray-400 text-[10px] uppercase font-black tracking-widest leading-none mb-1">Price Start</div>
                      <div className="text-2xl font-black text-saffron-600">₹{p.price} <span className="text-xs text-gray-400 font-medium">/meal</span></div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-400 text-[10px] uppercase font-black tracking-widest leading-none mb-1">Delivered</div>
                      <div className="text-sm font-bold text-gray-700">{p.deliveries.toLocaleString()}+</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-grow btn-primary py-3 text-sm justify-center rounded-2xl">
                      Order Now
                    </button>
                    <a 
                      href="https://wa.me/919559687898" 
                      className="w-12 h-12 flex items-center justify-center bg-green-50 text-green-600 rounded-2xl border border-green-100 hover:bg-green-600 hover:text-white transition-all shadow-sm"
                      title="Enquire on WhatsApp"
                    >
                      <FaWhatsapp className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProviders.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[40px] shadow-inner border border-dashed border-gray-200">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No Providers Found</h3>
            <p className="text-gray-500">Try searching for a different area or removing filters.</p>
            <button onClick={() => {setFilter("All"); setSearch("");}} className="mt-6 text-saffron-600 font-bold hover:underline">
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Info Slice */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="promo-banner rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              Get Quality Home Food <br />
              <span className="text-yellow-300">Delivered Weekly!</span>
            </h2>
            <p className="text-orange-100 font-medium opacity-90">
              Subscribe to a 10-day or 30-day plan and save up to 25% on your daily meals. 
              The most reliable tiffin service for students and office goers.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <Link to="/services/packages" className="btn-white">
              View Monthly Plans <FaArrowRight />
            </Link>
            <Link to="/contact" className="bg-black/20 backdrop-blur-md text-white border border-white/30 px-8 py-3.5 rounded-full font-bold hover:bg-black/30 transition-all flex items-center justify-center gap-2">
              Order in Bulk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
