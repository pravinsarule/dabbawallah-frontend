"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { AuthProvider, AuthContext } from "../components/auth/AuthContext";

// Inner component so it can access AuthContext
function LayoutInner({ children }) {
  const pathname = usePathname();
  const router   = useRouter();
  const { isLoggedIn, userRole } = useContext(AuthContext);

  const isDashboard = pathname === "/dashboard/provider";
  const isAdminDash = pathname === "/dashboard/admin";
  const hideChromeRoutes = isDashboard || isAdminDash;

  // Redirect super-admin away from provider dashboard and to admin panel
  useEffect(() => {
    if (isLoggedIn && userRole === "super-admin" && pathname === "/dashboard/provider") {
      router.replace("/dashboard/admin");
    }
  }, [isLoggedIn, userRole, pathname, router]);

  return (
    <div className="flex flex-col min-h-screen bg-tiffin-warm">
      {!hideChromeRoutes && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!hideChromeRoutes && <Footer />}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        toastClassName="rounded-xl shadow-lg"
      />
    </div>
  );
}

export default function ClientLayout({ children }) {
  return (
    <AuthProvider>
      <LayoutInner>{children}</LayoutInner>
    </AuthProvider>
  );
}
