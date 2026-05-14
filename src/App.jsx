import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Teams from "./pages/Teams";
import Faqs from "./pages/Faqs";
import OurConnections from "./pages/OurConnections";
import Packages from "./pages/PackagesAndPlan";
import Corporate from "./pages/Corporate";
import Retail from "./pages/Retail";

// Auth
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { AuthProvider } from "./components/Auth/AuthContext";

// Dashboards
import CustomerDashboard from "./pages/Dashboard/CustomerDashboard";
import ProviderDashboard from "./pages/Dashboard/ProviderDashboard";
import UserProfilePage from "./pages/UserProfilePage";
import OrdersPage from "./pages/OrdersPage";

const AppContent = () => {
  const location = useLocation();
  const isVendorDash = location.pathname === "/dashboard/provider";

  return (
    <div className="flex flex-col min-h-screen bg-tiffin-warm">
      {!isVendorDash && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/OurConnections" element={<OurConnections />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/services/packages" element={<Packages />} />
          <Route path="/services/corporate" element={<Corporate />} />
          <Route path="/services/retail" element={<Retail />} />
          <Route path="/Faqs" element={<Faqs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/customer" element={<CustomerDashboard />} />
          <Route path="/dashboard/provider" element={<ProviderDashboard />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </main>
      {!isVendorDash && <Footer />}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        toastClassName="rounded-xl shadow-lg"
      />
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
