"use client";

import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { AuthProvider } from "../components/auth/AuthContext";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isVendorDash = pathname === "/dashboard/provider";

  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen bg-tiffin-warm">
        {!isVendorDash && <Navbar />}
        <main className="flex-grow">{children}</main>
        {!isVendorDash && <Footer />}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          toastClassName="rounded-xl shadow-lg"
        />
      </div>
    </AuthProvider>
  );
}
