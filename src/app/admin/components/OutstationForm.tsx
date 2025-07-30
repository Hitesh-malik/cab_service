"use client";

import React, { useState } from "react";
import { theme } from "@/styles/theme";
import { ThemedInput } from "@/components/UI/ThemedInput";
import { ThemedSelect } from "@/components/UI/ThemedSelect";
import { ThemedTextarea } from "@/components/UI/ThemedTextarea";

interface VehiclePricing {
  vehicleType: string;
  oneWayPrice: string;
  twoWayPrice: string;
}

interface OutstationData {
  from: string;
  to: string;
  distance: string;
  duration: string;
  vehicles: VehiclePricing[];
}

export default function OutstationForm() {
  const [formData, setFormData] = useState<OutstationData>({
    from: "",
    to: "",
    distance: "",
    duration: "",
    vehicles: [
      {
        vehicleType: "Innova",
        oneWayPrice: "",
        twoWayPrice: "",
      },
      {
        vehicleType: "Sedan",
        oneWayPrice: "",
        twoWayPrice: "",
      },
      {
        vehicleType: "SUV",
        oneWayPrice: "",
        twoWayPrice: "",
      },
      {
        vehicleType: "Inno Crystal",
        oneWayPrice: "",
        twoWayPrice: "",
      },
    ],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const vehicleOptions = [
    "Innova",
    "Sedan", 
    "SUV",
    "Inno Crystal",
  ];

  const handleInputChange = (field: keyof Omit<OutstationData, 'vehicles'>, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateVehicle = (index: number, field: keyof VehiclePricing, value: string) => {
    setFormData(prev => ({
      ...prev,
      vehicles: prev.vehicles.map((vehicle, i) => 
        i === index ? { ...vehicle, [field]: value } : vehicle
      )
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch('/api/admin/outstation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Outstation trip data saved successfully!");
        setFormData({
          from: "",
          to: "",
          distance: "",
          duration: "",
          vehicles: [
            {
              vehicleType: "Innova",
              oneWayPrice: "",
              twoWayPrice: "",
            },
            {
              vehicleType: "Sedan",
              oneWayPrice: "",
              twoWayPrice: "",
            },
            {
              vehicleType: "SUV",
              oneWayPrice: "",
              twoWayPrice: "",
            },
            {
              vehicleType: "Inno Crystal",
              oneWayPrice: "",
              twoWayPrice: "",
            },
          ],
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
          Add Outstation Trip
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Route Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                className="block text-sm font-medium"
                style={{
                  color: theme.colors.text.secondary,
                  fontFamily: theme.typography.fontFamily.sans.join(", "),
                }}
              >
                From Location
              </label>
              <ThemedInput
                placeholder="Enter departure city/location"
                value={formData.from}
                onChange={(e) => handleInputChange("from", e.target.value)}
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
                To Location
              </label>
              <ThemedInput
                placeholder="Enter destination city/location"
                value={formData.to}
                onChange={(e) => handleInputChange("to", e.target.value)}
              />
            </div>
          </div>

          {/* Trip Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>

          {/* Vehicle Pricing Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 
                className="text-lg font-semibold"
                style={{
                  color: theme.colors.text.primary,
                  fontFamily: theme.typography.fontFamily.sans.join(", "),
                }}
              >
                Vehicle Pricing
              </h3>
            </div>

            {formData.vehicles.map((vehicle, index) => (
              <div 
                key={index}
                className="p-4 border rounded-lg"
                style={{
                  borderColor: theme.colors.border.primary,
                  backgroundColor: theme.colors.background.secondary,
                }}
              >
                <div className="mb-4">
                  <h4 
                    className="text-md font-medium"
                    style={{
                      color: theme.colors.text.primary,
                      fontFamily: theme.typography.fontFamily.sans.join(", "),
                    }}
                  >
                    {vehicle.vehicleType}
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      className="block text-sm font-medium"
                      style={{
                        color: theme.colors.text.secondary,
                        fontFamily: theme.typography.fontFamily.sans.join(", "),
                      }}
                    >
                      One Way Price (₹)
                    </label>
                    <ThemedInput
                      type="number"
                      placeholder="Enter one way price"
                      value={vehicle.oneWayPrice}
                      onChange={(e) => updateVehicle(index, "oneWayPrice", e.target.value)}
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
                      Two Way Price (₹)
                    </label>
                    <ThemedInput
                      type="number"
                      placeholder="Enter two way price"
                      value={vehicle.twoWayPrice}
                      onChange={(e) => updateVehicle(index, "twoWayPrice", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))}
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
              {isSubmitting ? "Saving..." : "Save Outstation Trip"}
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