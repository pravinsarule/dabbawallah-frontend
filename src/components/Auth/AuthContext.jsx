"use client";

import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

// Safe localStorage helper — returns null during SSR
const getLS = (key) => (typeof window !== "undefined" ? localStorage.getItem(key) : null);

export const AuthProvider = ({ children }) => {
  // Start with safe defaults; actual values are hydrated after mount
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("customer");

  // Hydrate from localStorage once on the client
  useEffect(() => {
    setIsLoggedIn(!!getLS("token"));
    setUserName(getLS("userName") || "");
    setUserRole(getLS("userRole") || "customer");
  }, []);

  const handleLoginSuccess = (name, role, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userName", name);
    localStorage.setItem("userRole", role);
    setIsLoggedIn(true);
    setUserName(name);
    setUserRole(role);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userRole");
    setIsLoggedIn(false);
    setUserName("");
    setUserRole("customer");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, userRole, handleLoginSuccess, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
