"use client";

import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../auth/AuthContext";
import Swal from "sweetalert2";
import {
  getLocationHierarchy,
  createCountry, createState, createDistrict, createTaluka, createArea,
  deleteCountry, deleteState, deleteDistrict, deleteTaluka, deleteArea,
} from "../../services/api";
import {
  FaGlobe, FaMapMarkedAlt, FaCity, FaMapPin, FaMap,
  FaPlus, FaTrash, FaBars, FaTimes, FaSearch,
  FaShieldAlt, FaSignOutAlt, FaFilter, FaCompass
} from "react-icons/fa";

// ─── Reusable form input ───────────────────────────────────────
const Field = ({ label, value, onChange, placeholder, type = "text" }) => (
  <div className="space-y-1.5">
    <label className="text-xs font-black text-gray-500 uppercase tracking-wider block ml-1">{label}</label>
    <input
      type={type} required value={value} placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
      className="w-full px-4 py-2.5 rounded-xl border border-orange-100 bg-gray-50 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 transition-all text-gray-800"
    />
  </div>
);

// ─── Select dropdown ───────────────────────────────────────────
const Select = ({ label, value, onChange, options, placeholder }) => (
  <div className="space-y-1.5">
    <label className="text-xs font-black text-gray-500 uppercase tracking-wider block ml-1">{label}</label>
    <select value={value} onChange={e => onChange(e.target.value)} required
      className="w-full px-4 py-2.5 rounded-xl border border-orange-100 bg-gray-50 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 transition-all cursor-pointer text-gray-800">
      <option value="">{placeholder || "Select..."}</option>
      {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  </div>
);

// ─── TH Helper ────────────────────────────────────────────────
const TH = ({ children, align="left" }) => (
  <th className={`text-${align} px-5 py-3.5 font-black text-saffron-800 uppercase tracking-wider text-xs bg-orange-50/70 border-b border-orange-100/50`}>
    {children}
  </th>
);

// ─── TD Helper ────────────────────────────────────────────────
const TD = ({ children, align="left", className="" }) => (
  <td className={`px-5 py-4 text-${align} text-sm text-gray-700 border-b border-orange-50/30 ${className}`}>
    {children}
  </td>
);

// ─── MAIN SUPER ADMIN DASHBOARD ───────────────────────────────
const SuperAdminDashboard = () => {
  const { userName, handleLogout } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hierarchy, setHierarchy]  = useState([]);
  const [loading, setLoading]      = useState(true);

  // Unified UI States
  const [activeTab, setActiveTab]  = useState("grid"); // "grid", "countries", "states", "districts", "talukas", "areas"
  const [searchQuery, setSearchQuery] = useState("");
  const [addType, setAddType]      = useState("country"); // "country", "state", "district", "taluka", "area"
  const [showAddModal, setShowAddModal] = useState(false);

  // Form states
  const [countryName, setCountryName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [countryId, setCountryId]     = useState("");
  const [stateName, setStateName]     = useState("");
  const [stateCode, setStateCode]     = useState("");
  const [stateId, setStateId]         = useState("");
  const [districtName, setDistrictName] = useState("");
  const [districtId, setDistrictId]   = useState("");
  const [talukaName, setTalukaName]   = useState("");
  const [talukaId, setTalukaId]       = useState("");
  const [areaName, setAreaName]       = useState("");
  const [areaPincode, setAreaPincode] = useState("");
  
  const [saving, setSaving]           = useState(false);

  const refreshData = async () => {
    try {
      const res = await getLocationHierarchy();
      setHierarchy(res?.data || []);
    } catch (e) {
      console.error(e);
      Swal.fire("Error", "Could not fetch updated location hierarchy.", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { refreshData(); }, []);

  // Mapped/Flat Lists for Tabular Views
  const countries = hierarchy;
  const states    = hierarchy.flatMap(c => (c.States || c.states || []).map(s => ({ ...s, countryName: c.name })));
  const districts = states.flatMap(s => (s.Districts || s.districts || []).map(d => ({ ...d, stateName: s.name, countryName: s.countryName })));
  const talukas   = districts.flatMap(d => (d.Talukas || d.talukas || []).map(t => ({ ...t, districtName: d.name, stateName: d.stateName, countryName: d.countryName })));
  const areas     = talukas.flatMap(t => (t.Areas || t.areas || []).map(a => ({ 
    ...a, 
    talukaName: t.name, 
    districtName: t.districtName, 
    stateName: t.stateName, 
    countryName: t.countryName 
  })));

  // Handle Add Submission
  const handleAddLocation = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (addType === "country") {
        await createCountry({ name: countryName, code: countryCode });
        setCountryName(""); setCountryCode("");
      } else if (addType === "state") {
        await createState({ countryId, name: stateName, code: stateCode });
        setStateName(""); setStateCode(""); setCountryId("");
      } else if (addType === "district") {
        await createDistrict({ stateId, name: districtName });
        setDistrictName(""); setStateId("");
      } else if (addType === "taluka") {
        await createTaluka({ districtId, name: talukaName });
        setTalukaName(""); setDistrictId("");
      } else if (addType === "area") {
        await createArea({ talukaId, name: areaName, pincode: areaPincode });
        setAreaName(""); setAreaPincode(""); setTalukaId("");
      }
      
      Swal.fire({ icon: "success", title: "Saved Successfully!", timer: 1200, showConfirmButton: false });
      refreshData();
      setShowAddModal(false);
    } catch (err) {
      Swal.fire("Error", err?.response?.data?.message || "Failed to add location master data.", "error");
    } finally {
      setSaving(false);
    }
  };

  // Handle Delete Actions
  const handleDeleteItem = async (type, id, name) => {
    const confirm = await Swal.fire({
      title: `Delete "${name}"?`,
      text: "Warning: Deleting this item will also delete all of its nested child locations!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF6B35",
      cancelButtonColor: "#9ca3af",
      confirmButtonText: "Yes, delete permanently"
    });

    if (!confirm.isConfirmed) return;

    try {
      if (type === "country")  await deleteCountry(id);
      if (type === "state")    await deleteState(id);
      if (type === "district") await deleteDistrict(id);
      if (type === "taluka")   await deleteTaluka(id);
      if (type === "area")     await deleteArea(id);

      Swal.fire({ icon: "success", title: "Deleted!", timer: 1000, showConfirmButton: false });
      refreshData();
    } catch (err) {
      Swal.fire("Error", err?.response?.data?.message || "Could not delete location item.", "error");
    }
  };

  // Instant filters based on Search Bar and Active Tab
  const filterList = (list, keys) => {
    if (!searchQuery.trim()) return list;
    const query = searchQuery.toLowerCase();
    return list.filter(item => 
      keys.some(key => String(item[key] || "").toLowerCase().includes(query))
    );
  };

  const filteredCountries = filterList(countries, ["name", "code"]);
  const filteredStates    = filterList(states, ["name", "code", "countryName"]);
  const filteredDistricts = filterList(districts, ["name", "stateName", "countryName"]);
  const filteredTalukas   = filterList(talukas, ["name", "districtName", "stateName", "countryName"]);
  const filteredAreas     = filterList(areas, ["name", "pincode", "talukaName", "districtName", "stateName", "countryName"]);

  return (
    <div className="min-h-screen bg-[#FFFBF5] flex">
      {sidebarOpen && <div className="fixed inset-0 bg-black/30 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* ─── SIDEBAR (MATCHES PROVIDER/WEBSITE WHITE-SAFFRON LOOK) ─── */}
      <aside className={`fixed top-0 left-0 h-screen w-64 bg-white border-r border-orange-100 shadow-sm z-30 flex flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        <div className="px-6 py-5 border-b border-orange-50 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron-500 to-saffron-700 flex items-center justify-center shadow-lg shadow-saffron-500/20">
            <FaShieldAlt className="text-white text-lg" />
          </div>
          <div>
            <div className="font-black text-gray-900 text-base">Super Admin</div>
            <div className="text-[10px] text-saffron-600 font-bold uppercase tracking-wider">{userName || "Administrator"}</div>
          </div>
        </div>

        <nav className="flex-grow px-3 py-4 space-y-1">
          <button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold bg-saffron-500 text-white shadow-md shadow-orange-500/20 transition-all"
          >
            <FaMapMarkedAlt className="text-lg" /> Location Master
          </button>
        </nav>

        <div className="p-4 border-t border-orange-50">
          <button onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 py-3 rounded-xl text-sm font-black transition-all cursor-pointer">
            <FaSignOutAlt /> Logout Panel
          </button>
        </div>
      </aside>

      {/* ─── MAIN CONTENT ─── */}
      <div className="flex-grow lg:ml-64 flex flex-col min-h-screen">
        
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-orange-100 sticky top-0 z-10">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-600 text-xl p-1">
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <span className="font-black text-gray-900">Location Master</span>
          <div className="w-8 h-8 rounded-full bg-saffron-100 flex items-center justify-center text-xs font-black text-saffron-700">A</div>
        </div>

        <main className="p-5 sm:p-8 space-y-8 flex-grow">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black text-gray-900 flex items-center gap-2">
                <FaCompass className="text-saffron-500" /> Location Master Console
              </h1>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-black">Centralized Geographic Database Panel</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowAddModal(true)}
                className="bg-saffron-500 text-white font-black text-sm px-5 py-3 rounded-xl shadow-lg shadow-orange-500/20 hover:bg-saffron-600 hover:shadow-orange-500/35 transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-100"
              >
                <FaPlus /> Add Geographic Node
              </button>
              <div className="hidden sm:flex items-center gap-2 px-4 py-3 bg-white rounded-xl border border-orange-100 text-xs font-bold text-gray-600 shadow-sm h-[46px]">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Live DB Sync
              </div>
            </div>
          </div>

          {/* ─── ADD NEW LOCATION PANEL POP-UP MODAL ─── */}
          {showAddModal && (
            <div className="fixed inset-0 bg-black/45 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-fadeIn">
              {/* Clicking backdrop closes modal */}
              <div className="absolute inset-0 cursor-default" onClick={() => setShowAddModal(false)} />
              
              {/* Modal Box */}
              <div className="bg-white rounded-3xl border border-orange-100/50 shadow-2xl max-w-2xl w-full p-6 space-y-6 relative z-10 animate-scaleIn">
                {/* Close Button */}
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="absolute right-5 top-5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-xl transition-all cursor-pointer"
                >
                  <FaTimes size={16} />
                </button>

                <div>
                  <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
                    <FaPlus className="text-saffron-500" /> Create Location Resource
                  </h2>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-black">Add nodes to platform geographical tree</p>
                </div>

                <form onSubmit={handleAddLocation} className="space-y-6">
                  {/* Type Switcher */}
                  <div className="grid grid-cols-5 gap-1.5 p-1.5 bg-orange-50/50 rounded-2xl border border-orange-100/30">
                    {[
                      { id: "country",  label: "🌍 Country" },
                      { id: "state",     label: "🗺️ State" },
                      { id: "district",  label: "🏙️ District" },
                      { id: "taluka",    label: "📍 Taluka" },
                      { id: "area",      label: "📌 Area" },
                    ].map(opt => (
                      <button
                        key={opt.id} type="button" onClick={() => setAddType(opt.id)}
                        className={`py-2.5 rounded-xl text-[10px] sm:text-xs font-black transition-all cursor-pointer text-center ${
                          addType === opt.id 
                            ? "bg-saffron-500 text-white shadow-md shadow-orange-500/20" 
                            : "text-gray-600 hover:bg-white hover:text-gray-900"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>

                  {/* Dynamic Inputs based on type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {addType === "country" && (
                      <>
                        <Field label="Country Name" value={countryName} onChange={setCountryName} placeholder="e.g. India" />
                        <Field label="Country Code" value={countryCode} onChange={setCountryCode} placeholder="e.g. IN" />
                      </>
                    )}

                    {addType === "state" && (
                      <>
                        <Select label="Select Country" value={countryId} onChange={setCountryId} placeholder="Choose parent country..."
                          options={countries.map(c => ({ value: c.id, label: c.name }))} />
                        <div className="grid grid-cols-2 gap-2">
                          <Field label="State Name" value={stateName} onChange={setStateName} placeholder="e.g. Maharashtra" />
                          <Field label="State Code" value={stateCode} onChange={setStateCode} placeholder="e.g. MH" />
                        </div>
                      </>
                    )}

                    {addType === "district" && (
                      <>
                        <Select label="Select State" value={stateId} onChange={setStateId} placeholder="Choose parent state..."
                          options={states.map(s => ({ value: s.id, label: `${s.name} (${s.countryName})` }))} />
                        <Field label="District Name" value={districtName} onChange={setDistrictName} placeholder="e.g. Pune" />
                      </>
                    )}

                    {addType === "taluka" && (
                      <>
                        <Select label="Select District" value={districtId} onChange={setDistrictId} placeholder="Choose parent district..."
                          options={districts.map(d => ({ value: d.id, label: `${d.name} (${d.stateName})` }))} />
                        <Field label="Taluka Name" value={talukaName} onChange={setTalukaName} placeholder="e.g. Pune City" />
                      </>
                    )}

                    {addType === "area" && (
                      <>
                        <Select label="Select Taluka" value={talukaId} onChange={setTalukaId} placeholder="Choose parent taluka..."
                          options={talukas.map(t => ({ value: t.id, label: `${t.name} (${t.districtName}, ${t.stateName})` }))} />
                        <div className="grid grid-cols-2 gap-2">
                          <Field label="Area Name" value={areaName} onChange={setAreaName} placeholder="e.g. Kothrud" />
                          <Field label="Pincode" value={areaPincode} onChange={setAreaPincode} placeholder="e.g. 411038" />
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex justify-end gap-3 pt-2 border-t border-orange-50/50">
                    <button
                      type="button" onClick={() => setShowAddModal(false)}
                      className="bg-gray-50 text-gray-500 font-black text-sm px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-gray-700 transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit" disabled={saving}
                      className="bg-saffron-500 text-white font-black text-sm px-6 py-3 rounded-xl shadow-lg shadow-orange-500/10 hover:bg-saffron-600 hover:shadow-orange-500/25 transition-all cursor-pointer flex items-center gap-2"
                    >
                      {saving ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : <FaPlus />}
                      Add Geographic Node
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* ─── TABULAR GEOGRAPHY LISTS SECTION (COMBINED TABS PANEL) ─── */}
          <div className="bg-white rounded-3xl border border-orange-100/50 shadow-md shadow-orange-100/20 overflow-hidden">
            
            {/* Header + Tabs + Search */}
            <div className="p-6 border-b border-orange-100/50 space-y-4">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <h2 className="text-base font-black text-gray-800 flex items-center gap-2">
                  <FaFilter className="text-saffron-500" /> Geographic Registries
                </h2>
                {/* Unified Search Input */}
                <div className="relative w-full lg:max-w-xs">
                  <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 text-xs" />
                  <input
                    type="text"
                    placeholder="Search locations..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 rounded-xl border border-orange-100 bg-gray-50/50 text-xs outline-none focus:bg-white focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 transition-all"
                  />
                </div>
              </div>

              {/* Tab Pills */}
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {[
                  { id: "grid",      label: "📋 Master Grid", count: areas.length },
                  { id: "countries", label: "🌍 Countries",   count: countries.length },
                  { id: "states",    label: "🗺️ States",      count: states.length },
                  { id: "districts", label: "🏙️ Districts",   count: districts.length },
                  { id: "talukas",   label: "📍 Talukas",     count: talukas.length },
                  { id: "areas",     label: "📌 Areas",       count: areas.length },
                ].map(tab => (
                  <button
                    key={tab.id} onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-saffron-500 text-white shadow-md shadow-orange-500/25"
                        : "bg-orange-50/50 text-gray-600 border border-orange-100/30 hover:bg-orange-50 hover:text-gray-900"
                    }`}
                  >
                    {tab.label}
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      activeTab === tab.id ? "bg-white/20 text-white" : "bg-orange-100 text-saffron-700"
                    }`}>{tab.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Grid & Tables Body */}
            <div className="overflow-x-auto">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20 gap-3">
                  <div className="w-8 h-8 border-3 border-saffron-500 border-t-transparent rounded-full animate-spin" />
                  <span className="text-xs font-bold text-gray-400">Loading master database...</span>
                </div>
              ) : (
                <table className="w-full text-left border-collapse">
                  
                  {/* DYNAMIC HEADER ROWS */}
                  <thead>
                    <tr>
                      {activeTab === "grid" && (
                        <>
                          <TH>#</TH>
                          <TH>Area / Locality</TH>
                          <TH>Pincode</TH>
                          <TH>Taluka</TH>
                          <TH>District</TH>
                          <TH>State</TH>
                          <TH>Country</TH>
                          <TH align="center">Action</TH>
                        </>
                      )}
                      {activeTab === "countries" && (
                        <>
                          <TH>#</TH>
                          <TH>Country Name</TH>
                          <TH>ISO Code</TH>
                          <TH>Mapped States</TH>
                          <TH align="center">Action</TH>
                        </>
                      )}
                      {activeTab === "states" && (
                        <>
                          <TH>#</TH>
                          <TH>State Name</TH>
                          <TH>State Code</TH>
                          <TH>Country</TH>
                          <TH>Mapped Districts</TH>
                          <TH align="center">Action</TH>
                        </>
                      )}
                      {activeTab === "districts" && (
                        <>
                          <TH>#</TH>
                          <TH>District Name</TH>
                          <TH>State</TH>
                          <TH>Country</TH>
                          <TH>Mapped Talukas</TH>
                          <TH align="center">Action</TH>
                        </>
                      )}
                      {activeTab === "talukas" && (
                        <>
                          <TH>#</TH>
                          <TH>Taluka Name</TH>
                          <TH>District</TH>
                          <TH>State</TH>
                          <TH>Country</TH>
                          <TH>Mapped Areas</TH>
                          <TH align="center">Action</TH>
                        </>
                      )}
                      {activeTab === "areas" && (
                        <>
                          <TH>#</TH>
                          <TH>Area Name</TH>
                          <TH>Pincode</TH>
                          <TH>Taluka</TH>
                          <TH>District</TH>
                          <TH>State</TH>
                          <TH>Country</TH>
                          <TH align="center">Action</TH>
                        </>
                      )}
                    </tr>
                  </thead>

                  {/* DYNAMIC DATA ROWS */}
                  <tbody>
                    
                    {/* MASTER GRID TABLE */}
                    {activeTab === "grid" && (
                      filteredAreas.length === 0 ? (
                        <tr><td colSpan="8" className="text-center py-10 text-gray-400 font-bold">No geography mappings found.</td></tr>
                      ) : (
                        filteredAreas.map((a, idx) => (
                          <tr key={a.id} className="hover:bg-orange-50/10 transition-colors">
                            <TD className="font-mono text-gray-400 text-xs">{idx + 1}</TD>
                            <TD className="font-bold text-gray-900">{a.name}</TD>
                            <TD className="font-mono text-xs text-saffron-600 bg-orange-50 px-2 py-0.5 rounded inline-block mt-3">{a.pincode || "N/A"}</TD>
                            <TD>{a.talukaName}</TD>
                            <TD>{a.districtName}</TD>
                            <TD>{a.stateName}</TD>
                            <TD className="font-semibold text-gray-900">{a.countryName}</TD>
                            <TD align="center">
                              <button onClick={() => handleDeleteItem("area", a.id, a.name)}
                                className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-xl transition-all cursor-pointer">
                                <FaTrash size={12} />
                              </button>
                            </TD>
                          </tr>
                        ))
                      )
                    )}

                    {/* COUNTRIES TABLE */}
                    {activeTab === "countries" && (
                      filteredCountries.length === 0 ? (
                        <tr><td colSpan="5" className="text-center py-10 text-gray-400 font-bold">No countries listed.</td></tr>
                      ) : (
                        filteredCountries.map((c, idx) => (
                          <tr key={c.id} className="hover:bg-orange-50/10 transition-colors">
                            <TD className="font-mono text-gray-400 text-xs">{idx + 1}</TD>
                            <TD className="font-bold text-gray-900">{c.name}</TD>
                            <TD className="font-mono text-xs text-saffron-600 bg-orange-50 px-2 py-0.5 rounded inline-block mt-3">{c.code}</TD>
                            <TD className="font-bold text-gray-600">{(c.States || c.states || []).length} states</TD>
                            <TD align="center">
                              <button onClick={() => handleDeleteItem("country", c.id, c.name)}
                                className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-xl transition-all cursor-pointer">
                                <FaTrash size={12} />
                              </button>
                            </TD>
                          </tr>
                        ))
                      )
                    )}

                    {/* STATES TABLE */}
                    {activeTab === "states" && (
                      filteredStates.length === 0 ? (
                        <tr><td colSpan="6" className="text-center py-10 text-gray-400 font-bold">No states listed.</td></tr>
                      ) : (
                        filteredStates.map((s, idx) => (
                          <tr key={s.id} className="hover:bg-orange-50/10 transition-colors">
                            <TD className="font-mono text-gray-400 text-xs">{idx + 1}</TD>
                            <TD className="font-bold text-gray-900">{s.name}</TD>
                            <TD className="font-mono text-xs text-saffron-600 bg-orange-50 px-2 py-0.5 rounded inline-block mt-3">{s.code}</TD>
                            <TD className="font-semibold text-gray-900">{s.countryName}</TD>
                            <TD className="font-bold text-gray-600">{(s.Districts || s.districts || []).length} districts</TD>
                            <TD align="center">
                              <button onClick={() => handleDeleteItem("state", s.id, s.name)}
                                className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-xl transition-all cursor-pointer">
                                <FaTrash size={12} />
                              </button>
                            </TD>
                          </tr>
                        ))
                      )
                    )}

                    {/* DISTRICTS TABLE */}
                    {activeTab === "districts" && (
                      filteredDistricts.length === 0 ? (
                        <tr><td colSpan="6" className="text-center py-10 text-gray-400 font-bold">No districts listed.</td></tr>
                      ) : (
                        filteredDistricts.map((d, idx) => (
                          <tr key={d.id} className="hover:bg-orange-50/10 transition-colors">
                            <TD className="font-mono text-gray-400 text-xs">{idx + 1}</TD>
                            <TD className="font-bold text-gray-900">{d.name}</TD>
                            <TD>{d.stateName}</TD>
                            <TD className="font-semibold text-gray-900">{d.countryName}</TD>
                            <TD className="font-bold text-gray-600">{(d.Talukas || d.talukas || []).length} talukas</TD>
                            <TD align="center">
                              <button onClick={() => handleDeleteItem("district", d.id, d.name)}
                                className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-xl transition-all cursor-pointer">
                                <FaTrash size={12} />
                              </button>
                            </TD>
                          </tr>
                        ))
                      )
                    )}

                    {/* TALUKAS TABLE */}
                    {activeTab === "talukas" && (
                      filteredTalukas.length === 0 ? (
                        <tr><td colSpan="7" className="text-center py-10 text-gray-400 font-bold">No talukas listed.</td></tr>
                      ) : (
                        filteredTalukas.map((t, idx) => (
                          <tr key={t.id} className="hover:bg-orange-50/10 transition-colors">
                            <TD className="font-mono text-gray-400 text-xs">{idx + 1}</TD>
                            <TD className="font-bold text-gray-900">{t.name}</TD>
                            <TD>{t.districtName}</TD>
                            <TD>{t.stateName}</TD>
                            <TD className="font-semibold text-gray-900">{t.countryName}</TD>
                            <TD className="font-bold text-gray-600">{(t.Areas || t.areas || []).length} areas</TD>
                            <TD align="center">
                              <button onClick={() => handleDeleteItem("taluka", t.id, t.name)}
                                className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-xl transition-all cursor-pointer">
                                <FaTrash size={12} />
                              </button>
                            </TD>
                          </tr>
                        ))
                      )
                    )}

                    {/* AREAS TABLE */}
                    {activeTab === "areas" && (
                      filteredAreas.length === 0 ? (
                        <tr><td colSpan="8" className="text-center py-10 text-gray-400 font-bold">No areas listed.</td></tr>
                      ) : (
                        filteredAreas.map((a, idx) => (
                          <tr key={a.id} className="hover:bg-orange-50/10 transition-colors">
                            <TD className="font-mono text-gray-400 text-xs">{idx + 1}</TD>
                            <TD className="font-bold text-gray-900">{a.name}</TD>
                            <TD className="font-mono text-xs text-saffron-600 bg-orange-50 px-2 py-0.5 rounded inline-block mt-3">{a.pincode || "N/A"}</TD>
                            <TD>{a.talukaName}</TD>
                            <TD>{a.districtName}</TD>
                            <TD>{a.stateName}</TD>
                            <TD className="font-semibold text-gray-900">{a.countryName}</TD>
                            <TD align="center">
                              <button onClick={() => handleDeleteItem("area", a.id, a.name)}
                                className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-xl transition-all cursor-pointer">
                                <FaTrash size={12} />
                              </button>
                            </TD>
                          </tr>
                        ))
                      )
                    )}

                  </tbody>
                </table>
              )}
            </div>

            {/* Table Footer Summary */}
            <div className="px-6 py-4 border-t border-orange-50 bg-orange-50/10 flex items-center justify-between text-xs text-gray-400 font-black">
              <span>DATABASE REGISTRY STATUS: ONLINE</span>
              <span>SYNCHRONIZED MASTER DATA</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
