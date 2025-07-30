"use client";

import React, { useState } from "react";
import { theme } from "@/styles/theme";
import { ThemedInput } from "@/components/UI/ThemedInput";
import { ThemedSelect } from "@/components/UI/ThemedSelect";
import { ThemedTextarea } from "@/components/UI/ThemedTextarea";

interface AirportData {
  airportName: string;
  airportCode: string;
  city: string;
  pickupPrice: string;
  dropPrice: string;
  vehicleType: string;
  description: string;
  amenities: string;
  serviceType: string;
}

export default function AirportForm() {
  const [formData, setFormData] = useState<AirportData>({
    airportName: "",
    airportCode: "",
    city: "",
    pickupPrice: "",
    dropPrice: "",
    vehicleType: "",
    description: "",
    amenities: "",
    serviceType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const vehicleOptions = [
    "Sedan",
    "SUV",
    "Luxury Sedan",
    "Luxury SUV",
    "Mini Bus",
    "Tempo Traveller",
  ];

  const serviceTypeOptions = [
    "Airport Pickup",
    "Airport Drop",
    "Round Trip",
    "Meet & Greet",
    "VIP Service",
  ];

  const handleInputChange = (field: keyof AirportData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch('/api/admin/airport', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Airport trip data saved successfully!");
        setFormData({
          airportName: "",
          airportCode: "",
          city: "",
          pickupPrice: "",
          dropPrice: "",
          vehicleType: "",
          description: "",
          amenities: "",
          serviceType: "",
        });
      } else {
        setMessage(result.error || "Error saving data. Please try again.");
      }
    } catch (error) {
      setMessage("Error saving data. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="max-w-4xl mx-auto"
      style={{
        backgroundColor: theme.colors.background.card,
        border: `1px solid ${theme.colors.border.primary}`,
        borderRadius: theme.borderRadius.lg,
      }}
    >
      <div className="p-6">
        <h2 
          className="text-2xl font-bold mb-6"
          style={{
            color: theme.colors.accent.gold,
            fontFamily: theme.typography.fontFamily.sans.join(", "),
          }}
        >
          Add Airport Trip
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Airport Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label
                className="block text-sm font-medium"
                style={{
                  color: theme.colors.text.secondary,
                  fontFamily: theme.typography.fontFamily.sans.join(", "),
                }}
              >
                Airport Name
              </label>
              <ThemedInput
                placeholder="Enter airport name"
                value={formData.airportName}
                onChange={(e) => handleInputChange("airportName", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label
                className="block text-sm font-medium"
                style={{
                  color: theme.colors.text.secondary,
                  fontFamily: theme.typography.fontFamily.sans.join(", "),
                }}
              >
                Airport Code
              </label>
              <ThemedInput
                placeholder="e.g., BOM, DEL, BLR"
                value={formData.airportCode}
                onChange={(e) => handleInputChange("airportCode", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label
                className="block text-sm font-medium"
                style={{
                  color: theme.colors.text.secondary,
                  fontFamily: theme.typography.fontFamily.sans.join(", "),
                }}
              >
                City
              </label>
              <ThemedInput
                placeholder="Enter city name"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
              />
            </div>
          </div>

          {/* Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                className="block text-sm font-medium"
                style={{
                  color: theme.colors.text.secondary,
                  fontFamily: theme.typography.fontFamily.sans.join(", "),
                }}
              >
                Pickup Price (₹)
              </label>
              <ThemedInput
                type="number"
                placeholder="Enter pickup price"
                value={formData.pickupPrice}
                onChange={(e) => handleInputChange("pickupPrice", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label
                className="block text-sm font-medium"
                style={{
                  color: theme.colors.text.secondary,
                  fontFamily: theme.typography.fontFamily.sans.join(", "),
                }}
              >
                Drop Price (₹)
              </label>
              <ThemedInput
                type="number"
                placeholder="Enter drop price"
                value={formData.dropPrice}
                onChange={(e) => handleInputChange("dropPrice", e.target.value)}
              />
            </div>
          </div>

          {/* Service and Vehicle */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                className="block text-sm font-medium"
                style={{
                  color: theme.colors.text.secondary,
                  fontFamily: theme.typography.fontFamily.sans.join(", "),
                }}
              >
                Service Type
              </label>
              <ThemedSelect
                value={formData.serviceType}
                onChange={(e) => handleInputChange("serviceType", e.target.value)}
                options={serviceTypeOptions}
                placeholder="Select service type"
              />
            </div>

            <div className="space-y-2">
              <label
                className="block text-sm font-medium"
                style={{
                  color: theme.colors.text.secondary,
                  fontFamily: theme.typography.fontFamily.sans.join(", "),
                }}
              >
                Vehicle Type
              </label>
              <ThemedSelect
                value={formData.vehicleType}
                onChange={(e) => handleInputChange("vehicleType", e.target.value)}
                options={vehicleOptions}
                placeholder="Select vehicle type"
              />
            </div>
          </div>

          {/* Amenities */}
          <div className="space-y-2">
            <label
              className="block text-sm font-medium"
              style={{
                color: theme.colors.text.secondary,
                fontFamily: theme.typography.fontFamily.sans.join(", "),
              }}
            >
              Amenities
            </label>
            <ThemedInput
              placeholder="AC, WiFi, Water, Flight Tracking, etc."
              value={formData.amenities}
              onChange={(e) => handleInputChange("amenities", e.target.value)}
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label
              className="block text-sm font-medium"
              style={{
                color: theme.colors.text.secondary,
                fontFamily: theme.typography.fontFamily.sans.join(", "),
              }}
            >
              Description
            </label>
            <ThemedTextarea
              placeholder="Enter airport service description, highlights, or special notes"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50"
              style={{
                backgroundColor: theme.colors.accent.gold,
                color: theme.colors.primary.black,
                fontFamily: theme.typography.fontFamily.sans.join(", "),
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.opacity = "0.8";
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.opacity = "1";
                }
              }}
            >
              {isSubmitting ? "Saving..." : "Save Airport Trip"}
            </button>
          </div>

          {/* Message */}
          {message && (
            <div 
              className="p-4 rounded-lg text-sm"
              style={{
                backgroundColor: message.includes("Error") 
                  ? theme.colors.status.error 
                  : theme.colors.status.success,
                color: theme.colors.text.primary,
              }}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
} 