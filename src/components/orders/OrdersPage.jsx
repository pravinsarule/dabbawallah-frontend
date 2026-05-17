"use client";

import React, { useState } from "react";
import { FaSearch, FaFilter, FaStar, FaRedo, FaChevronDown, FaChevronUp, FaMotorcycle, FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";

// ── Mock order data ──────────────────────────────────────────
const MOCK_ORDERS = [
  {
    id: "ORD-2024-001",
    date: "2026-05-13",
    time: "12:45 PM",
    status: "Delivered",
    provider: "Mrs. Deshpande's Kitchen",
    providerAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    items: ["Paneer Butter Masala", "3 Roti", "Dal Tadka", "Steamed Rice"],
    price: 85,
    rating: 5,
    deliveryTime: "35 mins",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "ORD-2024-002",
    date: "2026-05-12",
    time: "1:00 PM",
    status: "Delivered",
    provider: "Sharma Ji Tiffin Seva",
    providerAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    items: ["Aloo Gobi Sabji", "4 Roti", "Yellow Dal", "Rice", "Pickle"],
    price: 70,
    rating: 4,
    deliveryTime: "28 mins",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "ORD-2024-003",
    date: "2026-05-11",
    time: "12:30 PM",
    status: "Delivered",
    provider: "Annapurna Home Foods",
    providerAvatar: "https://randomuser.me/api/portraits/women/68.jpg",
    items: ["Sambar Rice", "Rasam", "Papad", "Curd"],
    price: 75,
    rating: 4,
    deliveryTime: "40 mins",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "ORD-2024-004",
    date: "2026-05-10",
    time: "1:15 PM",
    status: "Cancelled",
    provider: "Joshi Family Tiffins",
    providerAvatar: "https://randomuser.me/api/portraits/men/55.jpg",
    items: ["Khichdi", "Kadhi", "Roti"],
    price: 60,
    rating: null,
    deliveryTime: "—",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "ORD-2024-005",
    date: "2026-05-09",
    time: "12:50 PM",
    status: "Delivered",
    provider: "Sunita Tai's Tiffin",
    providerAvatar: "https://randomuser.me/api/portraits/women/12.jpg",
    items: ["Diet Salad Bowl", "Multigrain Roti", "Moong Dal Soup"],
    price: 90,
    rating: 5,
    deliveryTime: "32 mins",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "ORD-2024-006",
    date: "2026-05-08",
    time: "1:05 PM",
    status: "Delivered",
    provider: "Khan Bhai's Dabba",
    providerAvatar: "https://randomuser.me/api/portraits/men/21.jpg",
    items: ["Chicken Curry", "3 Roti", "Raita", "Salad"],
    price: 95,
    rating: 5,
    deliveryTime: "25 mins",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200&auto=format&fit=crop&q=80",
  },
];

const STATUS_CONFIG = {
  Delivered: { color: "text-green-700 bg-green-50 border-green-200", icon: <FaCheckCircle className="text-green-500" /> },
  Cancelled: { color: "text-red-700 bg-red-50 border-red-200",   icon: <FaTimesCircle className="text-red-500" /> },
  "On Its Way": { color: "text-blue-700 bg-blue-50 border-blue-200", icon: <FaMotorcycle className="text-blue-500" /> },
  Preparing:  { color: "text-orange-700 bg-orange-50 border-orange-200", icon: <FaClock className="text-orange-500" /> },
};

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {[1,2,3,4,5].map(s => (
      <FaStar key={s} className={s <= rating ? "text-yellow-400" : "text-gray-200"} size={12} />
    ))}
  </div>
);

const OrderCard = ({ order }) => {
  const [expanded, setExpanded] = useState(false);
  const cfg = STATUS_CONFIG[order.status] || STATUS_CONFIG["Delivered"];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden">
      {/* Main Row */}
      <div className="flex gap-4 p-5">
        {/* Food Image */}
        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-orange-50">
          <img src={order.image} alt={order.provider} className="w-full h-full object-cover" loading="lazy" />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div>
              <h3 className="font-black text-gray-900 text-base leading-tight">{order.provider}</h3>
              <p className="text-xs text-gray-400 mt-0.5">{order.date} • {order.time}</p>
            </div>
            <span className={`flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border ${cfg.color} flex-shrink-0`}>
              {cfg.icon} {order.status}
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-2 truncate">
            {order.items.slice(0, 2).join(", ")}{order.items.length > 2 ? ` +${order.items.length - 2} more` : ""}
          </p>

          <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
            <div className="flex items-center gap-4">
              <span className="font-black text-gray-900 text-base">₹{order.price}</span>
              {order.rating && <StarRating rating={order.rating} />}
              {order.deliveryTime !== "—" && (
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <FaMotorcycle className="text-gray-300" /> {order.deliveryTime}
                </span>
              )}
            </div>
            <div className="flex gap-2">
              {order.status === "Delivered" && (
                <button className="flex items-center gap-1.5 text-xs font-bold text-saffron-600 border border-saffron-200 bg-orange-50 hover:bg-saffron-500 hover:text-white px-3 py-1.5 rounded-xl transition-all">
                  <FaRedo size={10} /> Reorder
                </button>
              )}
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-gray-800 px-2 py-1.5 rounded-xl hover:bg-gray-50 transition-all"
              >
                Details {expanded ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      {expanded && (
        <div className="border-t border-gray-50 bg-gray-50/60 px-5 py-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2">Items Ordered</p>
              <ul className="space-y-1">
                {order.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2">Order Details</p>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Order ID</span><span className="font-bold text-gray-700">{order.id}</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Delivery Time</span><span className="font-bold text-gray-700">{order.deliveryTime}</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Total Paid</span><span className="font-black text-gray-900">₹{order.price}</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Payment</span><span className="font-bold text-green-600">Paid ✓</span></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ── Main Page ────────────────────────────────────────────────
const OrdersPage = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Delivered", "Cancelled", "On Its Way"];

  const filtered = MOCK_ORDERS.filter(o => {
    const matchFilter = activeFilter === "All" || o.status === activeFilter;
    const matchSearch = o.provider.toLowerCase().includes(search.toLowerCase()) ||
      o.items.some(i => i.toLowerCase().includes(search.toLowerCase()));
    return matchFilter && matchSearch;
  });

  const totalSpent  = MOCK_ORDERS.filter(o => o.status === "Delivered").reduce((s, o) => s + o.price, 0);
  const totalOrders = MOCK_ORDERS.length;
  const delivered   = MOCK_ORDERS.filter(o => o.status === "Delivered").length;

  return (
    <div className="min-h-screen bg-[#faf9f6] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <div className="mb-6">
          <h1 className="text-3xl font-black text-gray-900">My Orders 📦</h1>
          <p className="text-gray-500 mt-1">Your complete tiffin order history</p>
        </div>

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-3 gap-4 mb-7">
          {[
            { label: "Total Orders", value: totalOrders, color: "text-gray-900" },
            { label: "Delivered",    value: delivered,   color: "text-green-600" },
            { label: "Total Spent",  value: `₹${totalSpent}`, color: "text-saffron-600" },
          ].map(({ label, value, color }) => (
            <div key={label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
              <div className={`text-2xl font-black ${color}`}>{value}</div>
              <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* ── Search + Filters ── */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <div className="relative flex-1">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search by provider or dish..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-gray-200 bg-white text-sm text-gray-800 outline-none focus:ring-2 focus:ring-saffron-500/30 focus:border-saffron-500 transition-all"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2.5 rounded-2xl text-sm font-bold border transition-all ${
                  activeFilter === f
                    ? "bg-saffron-500 text-white border-saffron-500 shadow-md"
                    : "bg-white text-gray-600 border-gray-200 hover:border-orange-300"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* ── Orders List ── */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-xl font-black text-gray-700">No orders found</h3>
            <p className="text-gray-400 mt-2">Try a different filter or search term</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map(order => <OrderCard key={order.id} order={order} />)}
          </div>
        )}

      </div>
    </div>
  );
};

export default OrdersPage;
