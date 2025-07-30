"use client";

import React, { useState } from "react";
import { theme } from "@/styles/theme";
import { ThemedInput } from "@/components/UI/ThemedInput";
import { ThemedSelect } from "@/components/UI/ThemedSelect";
import { ThemedTextarea } from "@/components/UI/ThemedTextarea";

interface PackagePricing {
  packageName: string;
  price: string;
}

interface VehiclePricing {
  vehicleType: string;
  packages: PackagePricing[];
}

interface LocalData {
  pickupLocation: string;
  distance: string;
  vehicles: VehiclePricing[];
}

export default function LocalForm() {
  const [formData, setFormData] = useState<LocalData>({
    pickupLocation: "",
    distance: "",
    vehicles: [
      {
        vehicleType: "Innova",
        packages: [
          {
            packageName: "4 Hours / 40 KM",
            price: "",
          },
          {
            packageName: "8 Hours / 80 KM",
            price: "",
          },
          {
            packageName: "12 Hours / 120 KM",
            price: "",
          },
          {
            packageName: "Full Day",
            price: "",
          },
        ],
      },
      {
        vehicleType: "Sedan",
        packages: [
          {
            packageName: "4 Hours / 40 KM",
            price: "",
          },
          {
            packageName: "8 Hours / 80 KM",
            price: "",
          },
          {
            packageName: "12 Hours / 120 KM",
            price: "",
          },
          {
            packageName: "Full Day",
            price: "",
          },
        ],
      },
      {
        vehicleType: "SUV",
        packages: [
          {
            packageName: "4 Hours / 40 KM",
            price: "",
          },
          {
            packageName: "8 Hours / 80 KM",
            price: "",
          },
          {
            packageName: "12 Hours / 120 KM",
            price: "",
          },
          {
            packageName: "Full Day",
            price: "",
          },
        ],
      },
      {
        vehicleType: "Inno Crystal",
        packages: [
          {
            packageName: "4 Hours / 40 KM",
            price: "",
          },
          {
            packageName: "8 Hours / 80 KM",
            price: "",
          },
          {
            packageName: "12 Hours / 120 KM",
            price: "",
          },
          {
            packageName: "Full Day",
            price: "",
          },
        ],
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

  const handleInputChange = (field: keyof Omit<LocalData, 'packages'>, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateVehicle = (vehicleIndex: number, packageIndex: number, field: keyof PackagePricing, value: string) => {
    setFormData(prev => ({
      ...prev,
      vehicles: prev.vehicles.map((vehicle, i) => 
        i === vehicleIndex ? {
          ...vehicle,
          packages: vehicle.packages.map((pkg, j) => 
            j === packageIndex ? { ...pkg, [field]: value } : pkg
          )
        } : vehicle
      )
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
          distance: "",
          vehicles: [
            {
              vehicleType: "Innova",
              packages: [
                {
                  packageName: "4 Hours / 40 KM",
                  price: "",
                },
                {
                  packageName: "8 Hours / 80 KM",
                  price: "",
                },
                {
                  packageName: "12 Hours / 120 KM",
                  price: "",
                },
                {
                  packageName: "Full Day",
                  price: "",
                },
              ],
            },
            {
              vehicleType: "Sedan",
              packages: [
                {
                  packageName: "4 Hours / 40 KM",
                  price: "",
                },
                {
                  packageName: "8 Hours / 80 KM",
                  price: "",
                },
                {
                  packageName: "12 Hours / 120 KM",
                  price: "",
                },
                {
                  packageName: "Full Day",
                  price: "",
                },
              ],
            },
            {
              vehicleType: "SUV",
              packages: [
                {
                  packageName: "4 Hours / 40 KM",
                  price: "",
                },
                {
                  packageName: "8 Hours / 80 KM",
                  price: "",
                },
                {
                  packageName: "12 Hours / 120 KM",
                  price: "",
                },
                {
                  packageName: "Full Day",
                  price: "",
                },
              ],
            },
            {
              vehicleType: "Inno Crystal",
              packages: [
                {
                  packageName: "4 Hours / 40 KM",
                  price: "",
                },
                {
                  packageName: "8 Hours / 80 KM",
                  price: "",
                },
                {
                  packageName: "12 Hours / 120 KM",
                  price: "",
                },
                {
                  packageName: "Full Day",
                  price: "",
                },
              ],
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
          Add Local Trip
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Location Information */}
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

          {/* Trip Details */}
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

            {formData.vehicles.map((vehicle, vehicleIndex) => (
              <div 
                key={vehicleIndex}
                className="p-4 border rounded-lg"
                style={{
                  borderColor: theme.colors.border.primary,
                  backgroundColor: theme.colors.background.secondary,
                }}
              >
                <div className="mb-4">
                  <h4 
                    className="text-lg font-medium"
                    style={{
                      color: theme.colors.text.primary,
                      fontFamily: theme.typography.fontFamily.sans.join(", "),
                    }}
                  >
                    {vehicle.vehicleType}
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {vehicle.packages.map((pkg, packageIndex) => (
                    <div 
                      key={packageIndex}
                      className="p-3 border rounded-lg"
                      style={{
                        borderColor: theme.colors.border.primary,
                        backgroundColor: theme.colors.background.card,
                      }}
                    >
                      <div className="mb-2">
                        <h5 
                          className="text-sm font-medium"
                          style={{
                            color: theme.colors.text.primary,
                            fontFamily: theme.typography.fontFamily.sans.join(", "),
                          }}
                        >
                          {pkg.packageName}
                        </h5>
                      </div>

                      <div className="space-y-2">
                        <label
                          className="block text-xs font-medium"
                          style={{
                            color: theme.colors.text.secondary,
                            fontFamily: theme.typography.fontFamily.sans.join(", "),
                          }}
                        >
                          Price (₹)
                        </label>
                        <ThemedInput
                          type="number"
                          placeholder="Enter price"
                          value={pkg.price}
                          onChange={(e) => updateVehicle(vehicleIndex, packageIndex, "price", e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
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