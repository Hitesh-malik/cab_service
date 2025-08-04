"use client";

import React, { useState, useEffect } from "react";
import { theme } from "@/styles/theme";
import AdminLogin from "./components/AdminLogin";
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./components/AdminDashboard";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("USERS");

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

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <AdminLayout
      activeTab={activeTab}
      onTabChange={handleTabChange}
      onLogout={handleLogout}
    >
      <div className="space-y-6">
        {/* Page Header */}
        <div className="mb-8">
          <h2 
            className="text-2xl font-bold mb-2"
            style={{
              color: theme.colors.accent.gold,
              fontFamily: theme.typography.fontFamily.sans.join(", "),
            }}
          >
            {activeTab.charAt(0) + activeTab.slice(1).toLowerCase()} Management
          </h2>
          <p 
            className="text-gray-400"
            style={{
              fontFamily: theme.typography.fontFamily.sans.join(", "),
            }}
          >
            Manage your {activeTab.toLowerCase()} data and configurations
          </p>
        </div>

        {/* Dashboard Content */}
        <AdminDashboard activeTab={activeTab} />
      </div>
    </AdminLayout>
  );
} 