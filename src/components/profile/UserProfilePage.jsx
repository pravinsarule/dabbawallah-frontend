"use client";

import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import {
  FaUser, FaPhone, FaMapMarkerAlt, FaUtensils, FaBriefcase,
  FaEdit, FaSave, FaTimes, FaCamera, FaEnvelope, FaCalendarAlt,
  FaVenusMars, FaLeaf, FaFire, FaHeartbeat, FaClock, FaShieldAlt
} from "react-icons/fa";
import { getUserProfile, updateUserProfile } from "../../services/api";
import { AuthContext } from "../auth/AuthContext";

const SECTION = ({ icon, title, children }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
    <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-50 bg-gray-50/60">
      <span className="text-saffron-500 text-lg">{icon}</span>
      <h3 className="font-black text-gray-800 text-base">{title}</h3>
    </div>
    <div className="px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-5">{children}</div>
  </div>
);

const Field = ({ label, name, value, onChange, type = "text", options, disabled, placeholder }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{label}</label>
    {options ? (
      <select
        name={name}
        value={value || ""}
        onChange={onChange}
        disabled={disabled}
        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 font-medium outline-none focus:ring-2 focus:ring-saffron-500/30 focus:border-saffron-500 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <option value="">— Select —</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    ) : (
      <input
        type={type}
        name={name}
        value={value || ""}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder || label}
        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 font-medium outline-none focus:ring-2 focus:ring-saffron-500/30 focus:border-saffron-500 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      />
    )}
  </div>
);

const UserProfilePage = () => {
  const { userName } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [form, setForm] = useState({});
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await getUserProfile();
        setProfile(res.data.user);
        setForm(res.data.user);
      } catch (e) {
        toast.error("Failed to load profile.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await updateUserProfile(form);
      setProfile(res.data.user);
      setForm(res.data.user);
      setEditing(false);
      toast.success("Profile updated successfully! ✅");
    } catch (e) {
      toast.error(e.message || "Update failed.");
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setForm(profile);
    setEditing(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-[#faf9f6]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-saffron-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 font-semibold">Loading your profile...</p>
        </div>
      </div>
    );
  }

  const initials = (form.name || "U").split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);

  return (
    <div className="min-h-screen bg-[#faf9f6] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* ── Header Card ── */}
        <div className="bg-gradient-to-r from-saffron-500 to-orange-600 rounded-3xl p-6 sm:p-8 mb-6 text-white shadow-xl shadow-orange-300/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative flex flex-col sm:flex-row items-center sm:items-end gap-6">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-white/20 border-4 border-white/40 flex items-center justify-center text-3xl font-black text-white shadow-lg overflow-hidden">
                {form.avatarUrl ? (
                  <img src={form.avatarUrl} alt="avatar" className="w-full h-full object-cover" />
                ) : (
                  initials
                )}
              </div>
              {editing && (
                <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md text-saffron-500">
                  <FaCamera className="text-sm" />
                </button>
              )}
            </div>

            {/* Name & meta */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-black">{form.name || userName}</h1>
              <p className="text-orange-100 text-sm mt-1">{form.email}</p>
              <div className="flex items-center justify-center sm:justify-start gap-3 mt-3 flex-wrap">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold capitalize">
                  {form.role === "user" ? "🍱 Service Taker" : "👨‍🍳 Tiffin Provider"}
                </span>
                {form.occupation && (
                  <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold">
                    💼 {form.occupation}
                  </span>
                )}
                {form.isEmailVerified && (
                  <span className="bg-green-500/30 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold">
                    ✅ Verified
                  </span>
                )}
              </div>
            </div>

            {/* Edit / Save buttons */}
            <div className="flex gap-2 flex-shrink-0">
              {!editing ? (
                <button
                  onClick={() => setEditing(true)}
                  className="flex items-center gap-2 bg-white text-saffron-600 px-5 py-2.5 rounded-xl font-black text-sm shadow-lg hover:scale-105 transition-all"
                >
                  <FaEdit /> Edit Profile
                </button>
              ) : (
                <>
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex items-center gap-2 bg-white text-green-600 px-5 py-2.5 rounded-xl font-black text-sm shadow-lg hover:scale-105 transition-all disabled:opacity-70"
                  >
                    <FaSave /> {saving ? "Saving..." : "Save"}
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-2 bg-white/20 text-white px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-white/30 transition-all"
                  >
                    <FaTimes />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ── Sections ── */}
        <div className="space-y-5">

          {/* Personal Info */}
          <SECTION icon={<FaUser />} title="Personal Information">
            <Field label="Full Name"        name="name"           value={form.name}           onChange={handleChange} disabled={!editing} />
            <Field label="Email"            name="email"          value={form.email}          onChange={handleChange} disabled={true} />
            <Field label="Phone"            name="phone"          value={form.phone}          onChange={handleChange} disabled={!editing} placeholder="+91 9876543210" />
            <Field label="Alternate Phone"  name="alternatePhone" value={form.alternatePhone} onChange={handleChange} disabled={!editing} />
            <Field label="Gender" name="gender" value={form.gender} onChange={handleChange} disabled={!editing}
              options={["Male", "Female", "Other", "Prefer not to say"]} />
            <Field label="Date of Birth" name="dateOfBirth" value={form.dateOfBirth} onChange={handleChange} disabled={!editing} type="date" />
            <Field label="Occupation" name="occupation" value={form.occupation} onChange={handleChange} disabled={!editing}
              options={["Student", "Working Professional", "Homemaker", "Other"]} />
          </SECTION>

          {/* Delivery Address */}
          <SECTION icon={<FaMapMarkerAlt />} title="Delivery Address">
            <div className="sm:col-span-2">
              <Field label="Address Line 1" name="addressLine1" value={form.addressLine1} onChange={handleChange} disabled={!editing} placeholder="Flat no, Building name" />
            </div>
            <div className="sm:col-span-2">
              <Field label="Address Line 2" name="addressLine2" value={form.addressLine2} onChange={handleChange} disabled={!editing} placeholder="Street, Colony" />
            </div>
            <Field label="City"    name="city"    value={form.city}    onChange={handleChange} disabled={!editing} />
            <Field label="State"   name="state"   value={form.state}   onChange={handleChange} disabled={!editing} />
            <Field label="Pincode" name="pincode" value={form.pincode} onChange={handleChange} disabled={!editing} />
            <Field label="Landmark" name="landmark" value={form.landmark} onChange={handleChange} disabled={!editing} placeholder="Near school, hospital..." />
          </SECTION>

          {/* Office Address */}
          <SECTION icon={<FaBriefcase />} title="Office / College Address">
            <div className="sm:col-span-2">
              <Field label="Office / College Address" name="officeAddress" value={form.officeAddress} onChange={handleChange} disabled={!editing} placeholder="Full office address for lunch delivery" />
            </div>
          </SECTION>

          {/* Tiffin Preferences */}
          <SECTION icon={<FaUtensils />} title="Tiffin Preferences">
            <Field label="Dietary Preference" name="dietaryPreference" value={form.dietaryPreference} onChange={handleChange} disabled={!editing}
              options={["Veg", "Non-Veg", "Jain", "Vegan", "Eggetarian"]} />
            <Field label="Spice Level" name="spiceLevel" value={form.spiceLevel} onChange={handleChange} disabled={!editing}
              options={["Mild", "Medium", "Spicy", "Extra Spicy"]} />
            <Field label="Preferred Cuisine" name="preferredCuisine" value={form.preferredCuisine} onChange={handleChange} disabled={!editing} placeholder="e.g. North Indian, South Indian" />
            <Field label="Allergies / Restrictions" name="allergies" value={form.allergies} onChange={handleChange} disabled={!editing} placeholder="e.g. Peanuts, Dairy, Gluten" />
            <Field label="Lunch Delivery Time" name="mealTimingLunch" value={form.mealTimingLunch} onChange={handleChange} disabled={!editing} type="time" />
            <Field label="Dinner Delivery Time" name="mealTimingDinner" value={form.mealTimingDinner} onChange={handleChange} disabled={!editing} type="time" />
          </SECTION>

          {/* Emergency Contact */}
          <SECTION icon={<FaShieldAlt />} title="Emergency Contact">
            <Field label="Contact Name"  name="emergencyContactName"  value={form.emergencyContactName}  onChange={handleChange} disabled={!editing} />
            <Field label="Contact Phone" name="emergencyContactPhone" value={form.emergencyContactPhone} onChange={handleChange} disabled={!editing} placeholder="+91 9876543210" />
          </SECTION>

          {/* Account Info (read-only) */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-black text-gray-700 mb-4 flex items-center gap-2"><FaShieldAlt className="text-saffron-400" /> Account Info</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { label: "Member Since", value: form.createdAt ? new Date(form.createdAt).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' }) : "—" },
                { label: "Last Login",   value: form.lastLoginAt ? new Date(form.lastLoginAt).toLocaleDateString('en-IN') : "—" },
                { label: "Email Status", value: form.isEmailVerified ? "✅ Verified" : "❌ Not Verified" },
                { label: "Account",      value: form.isActive ? "🟢 Active" : "🔴 Inactive" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-gray-50 rounded-xl p-3">
                  <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">{label}</div>
                  <div className="text-sm font-black text-gray-800">{value}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
