import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole") || "customer");

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
