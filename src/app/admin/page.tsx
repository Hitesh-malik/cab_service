"use client";

import React, { useState, useEffect } from "react";
import { theme } from "@/styles/theme";
import { TabGroup } from "@/components/UI/TabGroup";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("OUTSTATION");

  // Check if user is already authenticated (from localStorage)
  useEffect(() => {
    const authStatus = localStorage.getItem("adminAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (success: boolean) => {
    if (success) {
      setIsAuthenticated(true);
      localStorage.setItem("adminAuthenticated", "true");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("adminAuthenticated");
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div 
      className="min-h-screen"
      style={{
        background: theme.gradients.primary,
        color: theme.colors.text.primary,
      }}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 
            className="text-3xl font-bold"
            style={{
              color: theme.colors.accent.gold,
              fontFamily: theme.typography.fontFamily.sans.join(", "),
            }}
          >
            Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="px-6 py-2 rounded-lg font-semibold transition-all duration-300"
            style={{
              backgroundColor: theme.colors.status.error,
              color: theme.colors.text.primary,
              fontFamily: theme.typography.fontFamily.sans.join(", "),
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            Logout
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <TabGroup
            options={["OUTSTATION", "LOCAL", "AIRPORT"]}
            activeOption={activeTab}
            onOptionChange={setActiveTab}
          />
        </div>

        {/* Dashboard Content */}
        <AdminDashboard activeTab={activeTab} />
      </div>
    </div>
  );
} 