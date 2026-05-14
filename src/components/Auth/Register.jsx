import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaStore, FaMapMarkerAlt, FaArrowRight, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { registerUser } from "../../services/api";

const Register = () => {
  const location = useLocation();
  const [role, setRole] = useState(location.state?.role || "customer"); // 'customer' or 'vendor'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.role) {
      setRole(location.state.role);
    }
  }, [location.state]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Map frontend roles to backend roles
      const backendRole = role === 'customer' ? 'user' : 'tiffin-vendor';
      
      const data = await registerUser({
        ...formData,
        role: backendRole
      });
      
      toast.success(`Account created successfully! Welcome to TheTiffins.`);
      navigate("/login");
    } catch (error) {
      toast.error(error.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-tiffin-warm relative overflow-hidden pt-28 pb-12">
      {/* Decorative Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-saffron-100/50 rounded-full blur-[100px] animate-blob" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-turmeric-100/50 rounded-full blur-[100px] animate-blob delay-1000" />

      <div className="max-w-5xl w-full grid md:grid-cols-2 bg-white rounded-[32px] shadow-2xl overflow-hidden relative z-10 border border-orange-50">
        {/* Left Side: Dynamic Content based on Role */}
        <div className={`hidden md:block relative overflow-hidden transition-colors duration-500 ${role === 'vendor' ? 'bg-green-900' : 'bg-masala-900'}`}>
          <img
            src={role === 'vendor' 
              ? "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&auto=format&fit=crop&q=80" 
              : "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=1200&auto=format&fit=crop&q=80"}
            alt="Handmade Food"
            className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-12 left-10 right-10 text-white">
            <h2 className="text-4xl font-black mb-4 leading-tight">
              {role === 'vendor' ? "Grow your kitchen business." : "Eat healthy, eat home-made."}
            </h2>
            <p className="text-gray-200 text-lg">
              {role === 'vendor' 
                ? "Join 200+ home cooks earning ₹15k–50k/month by sharing their authentic recipes with the community."
                : "The best local tiffin providers from Aurangabad area, delivering directly to your door at student-friendly prices."}
            </p>
            
            <div className="mt-8 flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="text-3xl">{role === 'vendor' ? "🍳" : "🍱"}</div>
              <div>
                <div className="text-sm font-bold">{role === 'vendor' ? "Register in 2 minutes" : "Starting ₹50/meal"}</div>
                <div className="text-xs text-gray-300">{role === 'vendor' ? "Set your own prices & menu" : "Daily freshly cooked delivery"}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-3xl font-black text-gray-900 mb-2">Create Account</h1>
            <p className="text-gray-500">Join the most trusted tiffin community</p>
          </div>



          <form onSubmit={handleRegister} className="space-y-5">
            <div className="grid grid-cols-1 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-wider ml-1">Full Name</label>
                <div className="relative group">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-saffron-500 transition-colors" />
                  <input
                    type="text"
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-2xl block pl-12 p-3.5 focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 outline-none transition-all"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-wider ml-1">Email</label>
                <div className="relative group">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-saffron-500 transition-colors" />
                  <input
                    type="email"
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-2xl block pl-12 p-3.5 focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 outline-none transition-all"
                    placeholder="name@email.com"
                    required
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {role === "vendor" && (
                <>
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-wider ml-1">Kitchen Name</label>
                    <div className="relative group">
                      <FaStore className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                      <input
                        type="text"
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-2xl block pl-12 p-3.5 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                        placeholder="e.g. Grandma's Kitchen"
                        required
                        onChange={(e) => setFormData({ ...formData, kitchenName: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-wider ml-1">Area / Location</label>
                    <div className="relative group">
                      <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                      <input
                        type="text"
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-2xl block pl-12 p-3.5 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                        placeholder="e.g. Garkheda, Aurangabad"
                        required
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-wider ml-1">Password</label>
                <div className="relative group">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-saffron-500 transition-colors" />
                  <input
                    type="password"
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-2xl block pl-12 p-3.5 focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 outline-none transition-all"
                    placeholder="••••••••"
                    required
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className={`w-full py-4 rounded-2xl text-base font-bold text-white shadow-xl transition-all flex items-center justify-center gap-3 mt-4 ${
                role === 'vendor' 
                  ? 'bg-gradient-to-r from-green-500 to-green-700 shadow-green-500/20' 
                  : 'bg-gradient-to-r from-saffron-500 to-saffron-700 shadow-saffron-500/20'
              } ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-100'}`}
            >
              {loading ? "Creating Account..." : (role === 'vendor' ? "Register Kitchen House" : "Join The Community")} 
              <FaArrowRight className="text-xs" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link 
                to="/login" 
                className="text-saffron-600 font-bold hover:underline"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
