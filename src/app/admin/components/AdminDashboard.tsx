"use client";

import React from "react";
import OutstationForm from "./OutstationForm";
import LocalForm from "./LocalForm";
import AirportForm from "./AirportForm";

interface AdminDashboardProps {
  activeTab: string;
}

export default function AdminDashboard({ activeTab }: AdminDashboardProps) {
  const renderForm = () => {
    switch (activeTab) {
      case "OUTSTATION":
        return <OutstationForm />;
      case "LOCAL":
        return <LocalForm />;
      case "AIRPORT":
        return <AirportForm />;
      default:
        return <OutstationForm />;
    }
  };

  return (
    <div className="space-y-6">
      {renderForm()}
    </div>
  );
} 