import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaEnvelope, FaLock, FaGoogle, FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext";
import { loginUser } from "../../services/api";
import OTPVerification from "./OTPVerification";

const Login = () => {
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [unverifiedEmail, setUnverifiedEmail] = useState("");
  const navigate = useNavigate();
  const { handleLoginSuccess } = useContext(AuthContext);

  const handleOtpSuccess = (user, token) => {
    setShowOtp(false);
    handleLoginSuccess(user.name, user.role, token);
    toast.success(`Email verified! Welcome back, ${user.name}!`);
    const role = user.role;
    navigate(role === 'user' ? '/dashboard/customer' : '/dashboard/provider');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await loginUser(formData);
      const token = data.token;
      const user = data.data.user;
      
      handleLoginSuccess(user.name, user.role, token);
      toast.success(`Welcome back, ${user.name}!`);
      
      const role = user.role;
      navigate(role === 'user' ? '/dashboard/customer' : '/dashboard/provider');
    } catch (error) {
      if (error.message && error.message.includes("not verified")) {
        setUnverifiedEmail(formData.email);
        setShowOtp(true);
        toast.info("Please verify your email to continue.");
      } else {
        toast.error(error.message || "Login failed. Please check your credentials.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-tiffin-warm relative overflow-hidden pt-28 pb-12">
      {showOtp && (
        <OTPVerification 
          email={unverifiedEmail} 
          onSuccess={handleOtpSuccess} 
          onClose={() => setShowOtp(false)} 
        />
      )}

      {/* Decorative Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-saffron-100/50 rounded-full blur-[100px] animate-blob" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-turmeric-100/50 rounded-full blur-[100px] animate-blob delay-1000" />

      <div className="max-w-5xl w-full grid md:grid-cols-2 bg-white rounded-[32px] shadow-2xl overflow-hidden relative z-10 border border-orange-50">
        {/* Left Side: Visual/Branding */}
        <div className="hidden md:block relative overflow-hidden bg-masala-900">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&auto=format&fit=crop&q=80"
            alt="Delicious Home Food"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-masala-900 via-masala-900/40 to-transparent" />
          
          <div className="absolute bottom-12 left-10 right-10 text-white">
            <div className="w-12 h-12 rounded-2xl bg-saffron-500 flex items-center justify-center text-2xl mb-6 shadow-lg shadow-saffron-500/50">
              🍱
            </div>
            <h2 className="text-4xl font-black mb-4 leading-tight">
              Ghar ka khana, <br />
              <span className="text-saffron-400">aapke ke liye.</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Join thousands of students and professionals enjoying fresh, nutritious home-cooked meals daily.
            </p>
            
            <div className="mt-8 flex gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/men/${i+10}.jpg`}
                    className="w-10 h-10 rounded-full border-2 border-masala-900"
                    alt="user"
                  />
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-2">
                <span className="text-white font-bold">10k+</span> members served
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 md:p-14 flex flex-col justify-center">
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-3xl font-black text-gray-900 mb-2">Welcome Back!</h1>
            <p className="text-gray-500 text-sm mb-6">Sign in to manage your tiffin account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
              <div className="relative group">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-saffron-500 transition-colors" />
                <input
                  type="email"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-2xl block pl-12 p-4 focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 outline-none transition-all"
                  placeholder="name@company.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-bold text-gray-700">Password</label>
                <Link to="/forgot-password" title="Forgot Password" className="text-xs font-bold text-saffron-600 hover:text-saffron-700">
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-saffron-500 transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-2xl block pl-12 pr-12 p-4 focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 outline-none transition-all"
                  placeholder="••••••••"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className={`w-full btn-primary justify-center py-4 rounded-2xl text-base shadow-xl shadow-saffron-500/20 mt-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? "Signing In..." : "Sign In"} <FaArrowRight className="text-sm" />
            </button>
          </form>

          <div className="my-8 flex items-center before:flex-1 before:border-t before:border-gray-200 after:flex-1 after:border-t after:border-gray-200">
            <p className="mx-4 text-center text-xs font-semibold text-gray-400 uppercase tracking-widest">Or continue with</p>
          </div>

          <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 font-bold py-4 rounded-2xl hover:bg-gray-50 transition-all text-sm mb-8">
            <FaGoogle className="text-red-500" />
            Login with Google
          </button>

          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link 
              to="/register" 
              className="text-saffron-600 font-bold hover:underline"
            >
              Sign up free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
