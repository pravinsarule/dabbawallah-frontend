"use client";

import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../auth/AuthContext";
import Swal from "sweetalert2";
import api from "../../services/api";
import {
  FaHome, FaUtensils, FaClipboardList, FaChartBar,
  FaToggleOn, FaToggleOff, FaPlus, FaTrash, FaCheck, FaEdit, FaTimes, FaUpload,
  FaTruck, FaWallet, FaStar, FaStore, FaBars, FaRupeeSign
} from "react-icons/fa";

const NAV = [
  { id:"dashboard", label:"Dashboard",   icon:<FaHome /> },
  { id:"menu",      label:"Tiffin Menu", icon:<FaUtensils /> },
  { id:"orders",    label:"Orders",      icon:<FaClipboardList /> },
  { id:"analytics", label:"Analytics",  icon:<FaChartBar /> },
];

const MOCK_MENU = [
  { id:1, name:"Veg Thali",      price:75, category:"Veg",     available:true,  orders:34, desc:"Dal, Sabji, 3 Roti, Rice, Pickle" },
  { id:2, name:"Non-Veg Thali",  price:95, category:"Non-Veg", available:true,  orders:18, desc:"Chicken Curry, 3 Roti, Rice, Salad" },
  { id:3, name:"Jain Tiffin",    price:80, category:"Jain",    available:false, orders:9,  desc:"No onion/garlic sabji, 4 Roti, Dal" },
  { id:4, name:"Diet Tiffin",    price:90, category:"Diet",    available:true,  orders:12, desc:"Multigrain roti, Moong dal, Salad" },
];

const MOCK_ORDERS = [
  { id:"#1042", customer:"Rahul Sharma", item:"Veg Thali",     qty:2, time:"12:15 PM", status:"Preparing", amount:150 },
  { id:"#1043", customer:"Priya V.",     item:"Non-Veg Thali", qty:1, time:"12:30 PM", status:"Ready",     amount:95  },
  { id:"#1044", customer:"Deepak M.",    item:"Jain Tiffin",   qty:1, time:"12:45 PM", status:"New",       amount:80  },
  { id:"#1045", customer:"Sneha R.",     item:"Diet Tiffin",   qty:2, time:"1:00 PM",  status:"Delivered", amount:180 },
  { id:"#1046", customer:"Amit Joshi",   item:"Veg Thali",     qty:1, time:"1:15 PM",  status:"New",       amount:75  },
];

const STATUS_COLORS = {
  New:       "bg-blue-50 text-blue-700 border-blue-200",
  Preparing: "bg-yellow-50 text-yellow-700 border-yellow-200",
  Ready:     "bg-green-50 text-green-700 border-green-200",
  Delivered: "bg-gray-50 text-gray-500 border-gray-200",
};
const NEXT_STATUS = { New:"Preparing", Preparing:"Ready", Ready:"Delivered" };

const TH = ({ children, align="left" }) => (
  <th className={`text-${align} px-5 py-3.5 font-black text-gray-500 uppercase tracking-wider text-xs bg-gray-50`}>{children}</th>
);
const TD = ({ children, align="left", className="" }) => (
  <td className={`px-5 py-4 text-${align} text-sm ${className}`}>{children}</td>
);

// ─── DASHBOARD ───────────────────────────────────────────────
const DashboardView = ({ userName, kitchenOpen, setKitchenOpen }) => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-saffron-500 to-orange-600 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
      <div>
        <h2 className="text-2xl font-black">Namaste, {userName}! 👩‍🍳</h2>
        <p className="text-orange-100 text-sm mt-1">Kitchen is <span className="font-black">{kitchenOpen ? "LIVE ✅" : "CLOSED ❌"}</span></p>
      </div>
      <button onClick={() => setKitchenOpen(!kitchenOpen)}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-sm shadow ${kitchenOpen ? "bg-white text-green-600" : "bg-white/20 text-white border border-white/30"}`}>
        {kitchenOpen ? <FaToggleOn className="text-xl" /> : <FaToggleOff className="text-xl" />}
        {kitchenOpen ? "Accepting Orders" : "Take a Break"}
      </button>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { label:"Today's Orders",   value:"48",     icon:<FaClipboardList />, color:"text-blue-500",   bg:"bg-blue-50" },
        { label:"Today's Earnings", value:"₹3,840", icon:<FaRupeeSign />,    color:"text-green-600",  bg:"bg-green-50" },
        { label:"Subscribers",      value:"320",    icon:<FaStore />,        color:"text-purple-500", bg:"bg-purple-50" },
        { label:"Avg. Rating",      value:"4.9 ⭐", icon:<FaStar />,         color:"text-saffron-500",bg:"bg-orange-50" },
      ].map((s,i) => (
        <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <div className={`${s.bg} ${s.color} w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-3`}>{s.icon}</div>
          <div className="text-2xl font-black text-gray-900">{s.value}</div>
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">{s.label}</div>
        </div>
      ))}
    </div>

    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <h3 className="font-black text-gray-800 text-lg mb-4 flex items-center gap-2"><FaTruck className="text-saffron-500" /> Pending Preparations</h3>
      <div className="space-y-3">
        {MOCK_ORDERS.filter(o => o.status !== "Delivered").slice(0,3).map(o => (
          <div key={o.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
              <div className="font-bold text-gray-800 text-sm">{o.customer} — {o.item} ×{o.qty}</div>
              <div className="text-xs text-gray-400 mt-0.5">Dispatch by {o.time}</div>
            </div>
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${STATUS_COLORS[o.status]}`}>{o.status}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── MENU ────────────────────────────────────────────────────
const MenuView = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null); // null for adding, object for editing
  const [form, setForm] = useState({ name:"", price:"", category:"Veg", desc:"", available:true, previewImage: null, galleryImages: [] });
  
  // Local file queues for uploading
  const [previewFile, setPreviewFile] = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]);

  const fetchMenu = async () => {
    try {
      setLoading(true);
      const res = await api.get('/orders/menu/vendor');
      if (res.status === 200 && res.data.status === 'success') {
        const mapped = res.data.data.items.map(i => ({
          id: i.id,
          name: i.name,
          desc: i.description,
          category: i.category,
          price: Number(i.price),
          available: i.isAvailable,
          orders: i.totalOrders,
          previewImage: i.previewImage,
          galleryImages: i.galleryImages || []
        }));
        setMenu(mapped);
      }
    } catch (error) {
      console.error("Failed to load menu:", error);
      Swal.fire("Error", "Failed to load tiffin menu from database.", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const toggleAvail = async (id) => {
    try {
      const res = await api.patch(`/orders/menu/${id}/toggle`);
      if (res.data?.status === 'success') {
        setMenu(m => m.map(i => i.id === id ? { ...i, available: res.data.data.isAvailable } : i));
        Swal.fire({
          icon: 'success',
          title: 'Status Updated',
          timer: 1000,
          showConfirmButton: false,
          toast: true,
          position: 'top-end'
        });
      }
    } catch (error) {
      Swal.fire("Error", "Failed to update availability status in DB.", "error");
    }
  };

  const deleteItem = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "This item and its images will be deleted from database & Cloudinary!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f97316',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        await api.delete(`/orders/menu/${id}`);
        setMenu(m => m.filter(i => i.id!==id));
        Swal.fire(
          'Deleted!',
          'Your tiffin menu item has been permanently deleted.',
          'success'
        );
      } catch (error) {
        Swal.fire("Error", "Failed to delete item from database.", "error");
      }
    }
  };

  const openAddModal = () => {
    setEditingItem(null);
    setPreviewFile(null);
    setGalleryFiles([]);
    setForm({ name:"", price:"", category:"Veg", desc:"", available:true, previewImage: null, galleryImages: [] });
    setIsModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditingItem(item);
    setPreviewFile(null);
    setGalleryFiles([]);
    setForm({
      name: item.name,
      price: item.price,
      category: item.category,
      desc: item.desc,
      available: item.available,
      previewImage: item.previewImage || null,
      galleryImages: item.galleryImages || []
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    Swal.fire({
      title: editingItem ? 'Updating Tiffin...' : 'Creating Tiffin...',
      text: 'Uploading details and uploading assets to Cloudinary. Please wait.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('price', String(form.price));
      formData.append('category', form.category);
      formData.append('description', form.desc);
      formData.append('isAvailable', String(form.available));

      if (previewFile) {
        formData.append('preview', previewFile);
      }

      galleryFiles.forEach((file) => {
        formData.append('gallery', file);
      });

      let res;
      if (editingItem) {
        res = await api.put(`/orders/menu/${editingItem.id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      } else {
        res = await api.post('/orders/menu', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      }

      if (res.data && res.data.status === 'success') {
        Swal.fire({
          icon: 'success',
          title: editingItem ? 'Successfully Updated!' : 'Successfully Added!',
          text: editingItem ? 'Your database item is synced.' : 'New item added to database.',
          confirmButtonColor: '#f97316'
        });
        setIsModalOpen(false);
        fetchMenu(); // Reload fresh accurate state from the database
      }
    } catch (error) {
      console.error("Submission failed", error);
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: error.response?.data?.message || "Could not connect to the server orders backend."
      });
    }
  };

  const handlePreviewChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewFile(file);
      setForm({ ...form, previewImage: URL.createObjectURL(file) });
    }
  };

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    setGalleryFiles(prev => [...prev, ...files]);
    const newImages = files.map(file => URL.createObjectURL(file));
    setForm({ ...form, galleryImages: [...form.galleryImages, ...newImages] });
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-black text-gray-900">Tiffin Menu</h2>
        <button onClick={openAddModal}
          className="flex items-center gap-2 bg-saffron-500 text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow hover:bg-saffron-600 transition-all cursor-pointer">
          <FaPlus /> Add Item
        </button>
      </div>

      {/* ─── MODAL POPUP ────────────────────────────────────────── */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl transform transition-all scale-100 max-h-[90vh] overflow-y-auto flex flex-col">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
              <h3 className="text-xl font-black text-gray-900">
                {editingItem ? "Edit Tiffin Item ✏️" : "Add New Tiffin Item 🍱"}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-50 transition-all cursor-pointer">
                <FaTimes size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-gray-500 uppercase tracking-wider">Item Name</label>
                  <input required placeholder="e.g. Special Paneer Thali" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-saffron-500/30 focus:border-saffron-500 transition-all" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-gray-500 uppercase tracking-wider">Price (₹)</label>
                  <input required type="number" placeholder="Price" value={form.price} onChange={e=>setForm({...form,price:e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-saffron-500/30 focus:border-saffron-500 transition-all" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-gray-500 uppercase tracking-wider">Category</label>
                  <select value={form.category} onChange={e=>setForm({...form,category:e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:bg-white transition-all cursor-pointer">
                    {["Veg","Non-Veg","Jain","Diet","Special"].map(c=><option key={c}>{c}</option>)}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-gray-500 uppercase tracking-wider">Description</label>
                  <input required placeholder="Dal, Roti, Rice, Sabji" value={form.desc} onChange={e=>setForm({...form,desc:e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-saffron-500/30 focus:border-saffron-500 transition-all" />
                </div>
              </div>

              {/* Image Upload Sections */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-gray-100 pt-6">
                {/* Preview Image Upload */}
                <div className="space-y-3">
                  <label className="text-xs font-black text-gray-500 uppercase tracking-wider flex items-center gap-2">
                    <FaUpload /> Main Preview Image
                  </label>
                  <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl p-4 hover:bg-orange-50/30 transition-all relative min-h-[140px]">
                    {form.previewImage ? (
                      <div className="relative w-full h-32 rounded-xl overflow-hidden">
                        <img src={form.previewImage} alt="preview" className="w-full h-full object-cover" />
                        <button type="button" onClick={() => setForm({...form, previewImage: null})} className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600 cursor-pointer shadow-md">
                          <FaTimes size={12} />
                        </button>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center cursor-pointer w-full py-4">
                        <FaUpload className="text-gray-300 text-2xl mb-2" />
                        <span className="text-xs font-bold text-gray-500">Click to upload image</span>
                        <input type="file" accept="image/*" className="hidden" onChange={handlePreviewChange} />
                      </label>
                    )}
                  </div>
                </div>

                {/* Gallery Image Upload */}
                <div className="space-y-3">
                  <label className="text-xs font-black text-gray-500 uppercase tracking-wider flex items-center gap-2">
                    <FaUpload /> Gallery Images (Multiple)
                  </label>
                  <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl p-4 hover:bg-orange-50/30 transition-all min-h-[140px]">
                    <label className="flex flex-col items-center cursor-pointer w-full py-4">
                      <FaUpload className="text-gray-300 text-2xl mb-2" />
                      <span className="text-xs font-bold text-gray-500">Upload gallery images</span>
                      <input type="file" multiple accept="image/*" className="hidden" onChange={handleGalleryChange} />
                    </label>
                    {form.galleryImages.length > 0 && (
                      <div className="grid grid-cols-4 gap-2 mt-3 w-full">
                        {form.galleryImages.map((img, idx) => (
                          <div key={idx} className="relative w-full h-12 rounded-lg overflow-hidden border border-gray-100">
                            <img src={img} alt={`gallery-${idx}`} className="w-full h-full object-cover" />
                            <button type="button" onClick={() => setForm({...form, galleryImages: form.galleryImages.filter((_,i) => i !== idx)})} 
                              className="absolute top-0.5 right-0.5 bg-red-500 text-white p-0.5 rounded-full hover:bg-red-600 cursor-pointer">
                              <FaTimes size={8} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-100">
                <button type="submit" className="flex-1 bg-saffron-500 text-white py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-saffron-600 transition-all cursor-pointer hover:shadow-orange-500/20">
                  {editingItem ? "Update Tiffin" : "Save Tiffin"}
                </button>
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all cursor-pointer">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <TH>#</TH>
                <TH>Item Name</TH>
                <TH>Category</TH>
                <TH>Description</TH>
                <TH align="right">Price</TH>
                <TH align="right">Orders Today</TH>
                <TH align="center">Status</TH>
                <TH align="center">Actions</TH>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {loading ? (
                <tr>
                  <td colSpan="8" className="px-6 py-12 text-center text-sm font-black text-gray-400">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-6 h-6 border-2 border-saffron-500 border-t-transparent rounded-full animate-spin" />
                      <span>Fetching Menu Items from DB...</span>
                    </div>
                  </td>
                </tr>
              ) : menu.length === 0 ? (
                <tr>
                  <td colSpan="8" className="px-6 py-12 text-center text-sm text-gray-400 font-bold">
                    🚀 No items added yet. Add your first delicious tiffin!
                  </td>
                </tr>
              ) : (
                menu.map((item, idx) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <TD className="text-gray-400 font-bold">{idx+1}</TD>
                    <TD>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-50 overflow-hidden flex-shrink-0">
                          <img src={item.previewImage || `https://placehold.co/100x100?text=${item.name.charAt(0)}`} alt={item.name} className="w-full h-full object-cover" onError={(e) => {e.target.src = `https://placehold.co/100x100?text=${item.name.charAt(0)}`}} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${item.available ? "bg-green-500" : "bg-gray-300"}`} />
                            <span className="font-bold text-gray-900">{item.name}</span>
                          </div>
                        </div>
                      </div>
                    </TD>
                    <TD>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                        item.category==="Veg"    ?"bg-green-50 text-green-700":
                        item.category==="Non-Veg"?"bg-red-50 text-red-700":
                        item.category==="Diet"   ?"bg-blue-50 text-blue-700":
                        "bg-orange-50 text-orange-700"}`}>{item.category}</span>
                    </TD>
                    <TD className="text-gray-400 max-w-[200px] truncate">{item.desc}</TD>
                    <TD align="right" className="font-black text-gray-900">₹{item.price}</TD>
                    <TD align="right" className="font-bold text-gray-700">{item.orders}</TD>
                    <TD align="center">
                      <button onClick={()=>toggleAvail(item.id)}
                        className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                          item.available?"bg-green-50 text-green-600 border-green-200 hover:bg-green-100":"bg-gray-50 text-gray-400 border-gray-200 hover:bg-gray-100"}`}>
                        {item.available ? "✅ Available" : "❌ Hidden"}
                      </button>
                    </TD>
                    <TD align="center">
                      <div className="flex items-center justify-center gap-2">
                        <button onClick={()=>openEditModal(item)} className="text-saffron-500 hover:text-saffron-600 hover:bg-orange-50 p-2 rounded-lg transition-all cursor-pointer">
                          <FaEdit size={14} />
                        </button>
                        <button onClick={()=>deleteItem(item.id)} className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-all cursor-pointer">
                          <FaTrash size={13} />
                        </button>
                      </div>
                    </TD>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-gray-50 bg-gray-50/50">
          <span className="text-xs text-gray-400 font-bold">{menu.length} items in menu</span>
        </div>
      </div>
    </div>
  );
};

// ─── ORDERS ──────────────────────────────────────────────────
const OrdersView = () => {
  const [orders, setOrders] = useState(MOCK_ORDERS);
  const [filter, setFilter] = useState("All");

  const advance  = (id) => setOrders(o => o.map(x => x.id===id && NEXT_STATUS[x.status] ? {...x, status:NEXT_STATUS[x.status]} : x));
  const filtered = filter==="All" ? orders : orders.filter(o => o.status===filter);

  const summary = { New:0, Preparing:0, Ready:0, Delivered:0 };
  orders.forEach(o => { if (summary[o.status]!==undefined) summary[o.status]++; });

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-xl font-black text-gray-900">Manage Orders</h2>
          <div className="flex gap-2 mt-1 flex-wrap">
            {Object.entries(summary).map(([s,c]) => (
              <span key={s} className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${STATUS_COLORS[s]}`}>{s}: {c}</span>
            ))}
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          {["All","New","Preparing","Ready","Delivered"].map(s => (
            <button key={s} onClick={()=>setFilter(s)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${filter===s?"bg-saffron-500 text-white border-saffron-500":"bg-white text-gray-600 border-gray-200 hover:border-orange-300"}`}>
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <TH>Order ID</TH>
                <TH>Customer</TH>
                <TH>Item</TH>
                <TH align="center">Qty</TH>
                <TH align="right">Amount</TH>
                <TH align="center">Time</TH>
                <TH align="center">Status</TH>
                <TH align="center">Action</TH>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map(o => (
                <tr key={o.id} className="hover:bg-gray-50 transition-colors">
                  <TD className="font-black text-gray-400 text-xs">{o.id}</TD>
                  <TD className="font-bold text-gray-900">{o.customer}</TD>
                  <TD className="text-gray-600">{o.item}</TD>
                  <TD align="center" className="font-bold text-gray-700">{o.qty}</TD>
                  <TD align="right" className="font-black text-gray-900">₹{o.amount}</TD>
                  <TD align="center" className="text-gray-400 text-xs">{o.time}</TD>
                  <TD align="center">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${STATUS_COLORS[o.status]}`}>{o.status}</span>
                  </TD>
                  <TD align="center">
                    {NEXT_STATUS[o.status] ? (
                      <button onClick={()=>advance(o.id)}
                        className="inline-flex items-center gap-1 bg-saffron-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-saffron-600 transition-all">
                        <FaCheck size={10} /> {NEXT_STATUS[o.status]}
                      </button>
                    ) : <span className="text-gray-300 text-xs font-bold">—</span>}
                  </TD>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-gray-50 bg-gray-50/50">
          <span className="text-xs text-gray-400 font-bold">{filtered.length} orders</span>
        </div>
      </div>
    </div>
  );
};

// ─── ANALYTICS ───────────────────────────────────────────────
const AnalyticsView = () => {
  const bars = [
    { day:"Mon", orders:38 }, { day:"Tue", orders:45 }, { day:"Wed", orders:52 },
    { day:"Thu", orders:41 }, { day:"Fri", orders:60 }, { day:"Sat", orders:33 }, { day:"Sun", orders:20 },
  ];
  const maxO = Math.max(...bars.map(b=>b.orders));

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-black text-gray-900">Analytics Overview</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label:"Week Orders",   value:"289",     delta:"+12%", up:true  },
          { label:"Week Revenue",  value:"₹21,675", delta:"+8%",  up:true  },
          { label:"Avg Order",     value:"₹75",     delta:"+3%",  up:true  },
          { label:"Cancelled",     value:"4",       delta:"-2",   up:false },
        ].map((s,i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{s.label}</div>
            <div className="text-2xl font-black text-gray-900">{s.value}</div>
            <div className={`text-xs font-bold mt-1 ${s.up?"text-green-600":"text-red-500"}`}>{s.delta} vs last week</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="font-black text-gray-800 mb-5">Daily Orders — This Week</h3>
        <div className="flex items-end gap-3 h-40">
          {bars.map(b => (
            <div key={b.day} className="flex-1 flex flex-col items-center gap-1.5">
              <span className="text-xs font-bold text-gray-500">{b.orders}</span>
              <div className="w-full bg-saffron-500 rounded-t-lg hover:bg-orange-600 transition-colors"
                style={{ height:`${(b.orders/maxO)*100}%`, minHeight:"8px" }} />
              <span className="text-xs text-gray-400 font-bold">{b.day}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="font-black text-gray-800 mb-4">Top Selling Items</h3>
        <div className="space-y-3">
          {[
            { name:"Veg Thali",    pct:55, orders:34, color:"bg-green-400" },
            { name:"Non-Veg Thali",pct:30, orders:18, color:"bg-red-400"   },
            { name:"Diet Tiffin",  pct:20, orders:12, color:"bg-blue-400"  },
            { name:"Jain Tiffin",  pct:15, orders:9,  color:"bg-yellow-400"},
          ].map(item => (
            <div key={item.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-bold text-gray-700">{item.name}</span>
                <span className="text-gray-400">{item.orders} orders</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full ${item.color} rounded-full`} style={{ width:`${item.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── MAIN LAYOUT ─────────────────────────────────────────────
const ProviderDashboard = () => {
  const { userName } = useContext(AuthContext);
  const [active, setActive] = useState("dashboard");
  const [kitchenOpen, setKitchenOpen] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const VIEWS = {
    dashboard: <DashboardView userName={userName} kitchenOpen={kitchenOpen} setKitchenOpen={setKitchenOpen} />,
    menu:      <MenuView />,
    orders:    <OrdersView />,
    analytics: <AnalyticsView />,
  };

  return (
    <div className="min-h-screen bg-[#f7f6f3] flex">
      {sidebarOpen && <div className="fixed inset-0 bg-black/30 z-20 lg:hidden" onClick={()=>setSidebarOpen(false)} />}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-100 shadow-sm z-30 flex flex-col transition-transform duration-300 ${sidebarOpen?"translate-x-0":"-translate-x-full"} lg:translate-x-0`}>
        <div className="px-6 py-5 border-b border-gray-50">
          <div className="font-black text-gray-900 text-lg">🍱 Vendor Panel</div>
          <div className="text-xs text-gray-400 mt-0.5 truncate">{userName}</div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV.map(n => (
            <button key={n.id} onClick={()=>{ setActive(n.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${active===n.id?"bg-saffron-500 text-white shadow-md":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}>
              <span>{n.icon}</span> {n.label}
            </button>
          ))}
        </nav>
        <div className="px-4 py-4 border-t border-gray-50">
          <div className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-black ${kitchenOpen?"bg-green-50 text-green-700":"bg-red-50 text-red-600"}`}>
            <div className={`w-2 h-2 rounded-full ${kitchenOpen?"bg-green-500 animate-pulse":"bg-red-400"}`} />
            {kitchenOpen ? "Kitchen is LIVE" : "Kitchen CLOSED"}
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 lg:ml-64">
        <div className="lg:hidden flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-100 sticky top-0 z-10">
          <button onClick={()=>setSidebarOpen(!sidebarOpen)} className="text-gray-600 text-xl p-1">
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <span className="font-black text-gray-800 capitalize">{active}</span>
        </div>
        <main className="p-5 sm:p-8 w-full">
          {VIEWS[active]}
        </main>
      </div>
    </div>
  );
};

export default ProviderDashboard;
