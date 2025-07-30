"use client";

import React, { useState } from "react";
import { theme } from "@/styles/theme";
import { ThemedInput } from "@/components/UI/ThemedInput";
import { ThemedSelect } from "@/components/UI/ThemedSelect";
import { ThemedTextarea } from "@/components/UI/ThemedTextarea";

interface LocalData {
  pickupLocation: string;
  dropLocation: string;
  distance: string;
  duration: string;
  basePrice: string;
  perKmPrice: string;
  vehicleType: string;
  description: string;
  serviceType: string;
}

export default function LocalForm() {
  const [formData, setFormData] = useState<LocalData>({
    pickupLocation: "",
    dropLocation: "",
    distance: "",
    duration: "",
    basePrice: "",
    perKmPrice: "",
    vehicleType: "",
    description: "",
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
    "Point to Point",
    "Hourly Rental",
    "Half Day",
    "Full Day",
    "City Tour",
  ];

  const handleInputChange = (field: keyof LocalData, value: string) => {
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
      const response = await fetch('/api/admin/local', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Local trip data saved successfully!");
        setFormData({
          pickupLocation: "",
          dropLocation: "",
          distance: "",
          duration: "",
          basePrice: "",
          perKmPrice: "",
          vehicleType: "",
          description: "",
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
          Add Local Trip
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Location Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                className="block text-sm font-medium"
                style={{
                  color: theme.colors.text.secondary,
                  fontFamily: theme.typography.fontFamily.sans.join(", "),
                }}
              >
                Pickup Location
              </label>
              <ThemedInput
                placeholder="Enter pickup location"
                value={formData.pickupLocation}
                onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
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
                Drop Location
              </label>
              <ThemedInput
                placeholder="Enter drop location"
                value={formData.dropLocation}
                onChange={(e) => handleInputChange("dropLocation", e.target.value)}
              />
            </div>
          </div>

          {/* Trip Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label
                className="block text-sm font-medium"
                style={{
                  color: theme.colors.text.secondary,
                  fontFamily: theme.typography.fontFamily.sans.join(", "),
                }}
              >
                Distance (km)
              </label>
              <ThemedInput
                type="number"
                placeholder="Enter distance"
                value={formData.distance}
                onChange={(e) => handleInputChange("distance", e.target.value)}
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
                Duration (hours)
              </label>
              <ThemedInput
                type="number"
                placeholder="Enter duration"
                value={formData.duration}
                onChange={(e) => handleInputChange("duration", e.target.value)}
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
                Service Type
              </label>
              <ThemedSelect
                value={formData.serviceType}
                onChange={(e) => handleInputChange("serviceType", e.target.value)}
                options={serviceTypeOptions}
                placeholder="Select service type"
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
                Base Price (₹)
              </label>
              <ThemedInput
                type="number"
                placeholder="Enter base price"
                value={formData.basePrice}
                onChange={(e) => handleInputChange("basePrice", e.target.value)}
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
                Price per KM (₹)
              </label>
              <ThemedInput
                type="number"
                placeholder="Enter price per km"
                value={formData.perKmPrice}
                onChange={(e) => handleInputChange("perKmPrice", e.target.value)}
              />
            </div>
          </div>

          {/* Vehicle Type */}
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
              placeholder="Enter trip description, highlights, or special notes"
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
              {isSubmitting ? "Saving..." : "Save Local Trip"}
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