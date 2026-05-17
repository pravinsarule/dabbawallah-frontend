"use client";

import React, { createContext, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

// Safe localStorage helper — returns null during SSR
const getLS = (key) => (typeof window !== "undefined" ? localStorage.getItem(key) : null);

export const AuthProvider = ({ children }) => {
  const router = useRouter();

  // Start with safe defaults; actual values are hydrated after mount
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("customer");

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userRole");
    localStorage.removeItem("loginTime");
    setIsLoggedIn(false);
    setUserName("");
    setUserRole("customer");
  }, []);

  // Hydrate from localStorage once on the client
  useEffect(() => {
    const token = getLS("token");
    const loginTime = getLS("loginTime");
    
    if (token) {
      const now = Date.now();
      const twentyFourHours = 24 * 60 * 60 * 1000;

      // Check if 24 hours have passed since login
      if (loginTime && (now - parseInt(loginTime, 10) > twentyFourHours)) {
        handleLogout();
        router.push("/");
      } else {
        setIsLoggedIn(true);
        setUserName(getLS("userName") || "");
        setUserRole(getLS("userRole") || "customer");
        
        // Auto logout when 24 hours is reached if the user stays on the page
        if (loginTime) {
          const timeRemaining = twentyFourHours - (now - parseInt(loginTime, 10));
          const timeoutId = setTimeout(() => {
            handleLogout();
            router.push("/");
          }, timeRemaining);
          
          return () => clearTimeout(timeoutId);
        }
      }
    }
  }, [handleLogout, router]);

  const handleLoginSuccess = (name, role, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userName", name);
    localStorage.setItem("userRole", role);
    localStorage.setItem("loginTime", Date.now().toString());
    setIsLoggedIn(true);
    setUserName(name);
    setUserRole(role);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, userRole, handleLoginSuccess, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
