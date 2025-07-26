// src/app/cab-lists/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import type { Vehicle } from "@/types/index";

// Theme configuration (matching HeroSection)
const theme = {
  colors: {
    primary: {
      black: "#000000",
      darkGray: "#1a1a1a",
    },
    accent: {
      gold: "#FFD700",
      lightGold: "#FFF700",
    },
    secondary: {
      amber: "#FFA500",
      warmYellow: "#FFB84D",
      lightAmber: "#FFCC80",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#E5E5E5",
      muted: "#B0B0B0",
    },
    background: {
      primary: "#000000",
      dark: "#0a0a0a",
      gradient:
        "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
    },
    border: {
      gold: "#FFD700",
      goldLight: "#FFF700",
      light: "rgba(255, 255, 255, 0.1)",
    },
    shadow: {
      gold: "rgba(255, 215, 0, 0.4)",
      primary: "rgba(0, 0, 0, 0.8)",
      elevated: "rgba(0, 0, 0, 0.6)",
    },
  },
  gradients: {
    heroGradient:
      "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2a2a2a 100%)",
    gold: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
    cardGradient: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
  },
  typography: {
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
    },
    fontWeight: {
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
};

const cabList: Vehicle[] = [
  {
    id: "1",
    name: "Innova",
    type: "innova",
    capacity: 4,
    features: ["AC"],
    pricePerKm: 12,
    basePrice: 7679,
    images: ["/innova.png"],
    available: true,
    fuelType: "petrol",
    airConditioned: true,
    luggage: 2,
  },
  {
    id: "2",
    name: "SEDAN",
    type: "sedan",
    capacity: 4,
    features: ["AC"],
    pricePerKm: 15,
    basePrice: 8442,
    images: ["/sendan.png"],
    available: true,
    fuelType: "petrol",
    airConditioned: true,
    luggage: 3,
  },
  {
    id: "3",
    name: "SUV",
    type: "suv",
    capacity: 6,
    features: ["AC"],
    pricePerKm: 18,
    basePrice: 10130,
    images: ["/suv.png"],
    available: true,
    fuelType: "diesel",
    airConditioned: true,
    luggage: 4,
  },
  {
    id: "4",
    name: "INNOVA CRYSTAL",
    type: "innovacrystal",
    capacity: 4,
    features: ["AC"],
    pricePerKm: 25,
    basePrice: 19757,
    images: ["/innovacrystal.png"],
    available: true,
    fuelType: "petrol",
    airConditioned: true,
    luggage: 3,
  },
];

const CabListsPage: React.FC = () => {
  const [selectedCab, setSelectedCab] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: theme.gradients.heroGradient,
        fontFamily: theme.typography.fontFamily.sans.join(", "),
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.5) 70%, #000000 100%)`,
          }}
        />

        {/* Animated background particles */}
        <div
          className="absolute top-1/4 left-1/6 w-24 h-24 rounded-full blur-2xl animate-pulse"
          style={{
            backgroundColor: theme.colors.accent.gold,
            opacity: 0.1,
            animationDuration: "3s",
          }}
        />
        <div
          className="absolute top-2/3 right-1/4 w-32 h-32 rounded-full blur-3xl animate-pulse"
          style={{
            backgroundColor: theme.colors.secondary.amber,
            opacity: 0.08,
            animationDelay: "1.5s",
            animationDuration: "4s",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Text */}
        <div
          className={`text-center mb-12 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h1
            className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4"
            style={{
              color: theme.colors.accent.gold,
              textShadow: `0 4px 20px ${theme.colors.shadow.gold}`,
              fontWeight: theme.typography.fontWeight.bold,
            }}
          >
            Book Comfortable Rides
          </h1>
          <p
            className="text-xl lg:text-2xl font-medium"
            style={{
              color: theme.colors.text.secondary,
              textShadow: `0 2px 10px ${theme.colors.shadow.primary}`,
            }}
          >
            And Select Your Comfort
          </p>
        </div>

        {/* Cab Selection Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 ${
            isVisible ? "animate-fade-in-up animate-delay-300" : "opacity-0"
          }`}
        >
          {cabList.map((cab, index) => (
            <div
              key={cab.id}
              className={`relative rounded-xl p-6 cursor-pointer transition-all duration-500 hover:scale-105 group ${
                selectedCab === cab.id
                  ? "ring-2 ring-opacity-80"
                  : "hover:ring-1 hover:ring-opacity-50"
              }`}
              style={{
                background:
                  selectedCab === cab.id
                    ? `linear-gradient(135deg, ${theme.colors.primary.darkGray} 0%, ${theme.colors.primary.black} 100%)`
                    : theme.gradients.cardGradient,
                border:
                  selectedCab === cab.id
                    ? `2px solid ${theme.colors.accent.gold}`
                    : `1px solid ${theme.colors.border.light}`,
                boxShadow:
                  selectedCab === cab.id
                    ? `0 20px 60px ${theme.colors.shadow.gold}, 0 0 0 1px ${theme.colors.accent.gold}30`
                    : `0 10px 30px ${theme.colors.shadow.elevated}`,
                ringColor: theme.colors.accent.gold,
                animationDelay: `${index * 100}ms`,
              }}
              onClick={() => setSelectedCab(cab.id)}
            >
              {/* Glow effect for selected card */}
              {selectedCab === cab.id && (
                <div
                  className="absolute inset-0 blur-xl opacity-30 animate-pulse rounded-xl"
                  style={{
                    background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${theme.colors.accent.gold}60 0%, transparent 70%)`,
                    transform: "scale(1.2)",
                    animationDuration: "3s",
                  }}
                />
              )}

              <div className="relative z-10 text-center">
                {/* Car Image */}
                <div
                  className="w-20 h-16 mx-auto mb-4 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300 relative"
                  style={{
                    background:
                      selectedCab === cab.id
                        ? theme.gradients.gold
                        : `linear-gradient(135deg, ${theme.colors.border.light} 0%, rgba(255, 255, 255, 0.05) 100%)`,
                    padding: "4px",
                  }}
                >
                  <img
                    src={cab.images[0]}
                    alt={cab.name}
                    className="w-full h-full object-contain rounded"
                    style={{
                      filter:
                        selectedCab === cab.id
                          ? "brightness(1.1)"
                          : "brightness(0.9)",
                    }}
                  />
                </div>

                {/* Cab Name */}
                <h3
                  className="font-semibold text-lg mb-2"
                  style={{
                    color:
                      selectedCab === cab.id
                        ? theme.colors.accent.gold
                        : theme.colors.text.primary,
                    fontWeight: theme.typography.fontWeight.semibold,
                  }}
                >
                  {cab.name}
                </h3>

                {/* Price */}
                <p
                  className="text-2xl font-bold"
                  style={{
                    color:
                      selectedCab === cab.id
                        ? theme.colors.text.primary
                        : theme.colors.text.secondary,
                    fontWeight: theme.typography.fontWeight.bold,
                  }}
                >
                  ₹ {cab.basePrice}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Cab Details */}
        {selectedCab && (
          <div
            className={`rounded-2xl p-8 mb-8 ${
              isVisible ? "animate-fade-in-up animate-delay-600" : "opacity-0"
            }`}
            style={{
              background: theme.gradients.cardGradient,
              border: `2px solid ${theme.colors.accent.gold}`,
              boxShadow: `0 25px 80px ${theme.colors.shadow.elevated}, 0 0 0 1px ${theme.colors.accent.gold}30`,
            }}
          >
            {(() => {
              const cab = cabList.find((c) => c.id === selectedCab);
              if (!cab) return null;

              return (
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Car Image */}
                  <div className="w-full lg:w-1/3">
                    <div
                      className="rounded-xl p-6 h-56 flex items-center justify-center group relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${theme.colors.primary.darkGray} 0%, ${theme.colors.primary.black} 100%)`,
                        border: `2px solid ${theme.colors.accent.gold}`,
                      }}
                    >
                      {/* Glow effect */}
                      <div
                        className="absolute inset-0 blur-2xl opacity-30 animate-pulse"
                        style={{
                          background: `radial-gradient(ellipse 70% 50% at 50% 50%, ${theme.colors.accent.gold}40 0%, transparent 70%)`,
                        }}
                      />

                      <div className="relative w-full h-full flex items-center justify-center">
                        <img
                          src={cab.images[0]}
                          alt={cab.name}
                          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                          style={{
                            filter:
                              "drop-shadow(0 8px 25px rgba(255, 215, 0, 0.3))",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Car Features */}
                  <div className="w-full lg:w-1/3 space-y-6">
                    {[
                      { icon: "✓", text: "Verified Driver" },
                      { icon: "🕐", text: "On Time Cab" },
                      { icon: "📄", text: "GST Invoice" },
                      { icon: "🔒", text: "No Hidden Charges" },
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300"
                      >
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                          style={{
                            background: theme.gradients.gold,
                            color: theme.colors.primary.black,
                          }}
                        >
                          {feature.icon}
                        </div>
                        <span
                          className="font-medium text-lg"
                          style={{
                            color: theme.colors.text.secondary,
                            fontWeight: theme.typography.fontWeight.medium,
                          }}
                        >
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Section */}
                  <div className="w-full lg:w-1/3 text-center lg:text-right">
                    {/* Discount Badge */}
                    <div
                      className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-4"
                      style={{
                        background: `linear-gradient(135deg, #FF4444 0%, #CC0000 100%)`,
                        color: theme.colors.text.primary,
                        fontWeight: theme.typography.fontWeight.bold,
                      }}
                    >
                      18% Off
                    </div>

                    {/* Car Model */}
                    <div className="mb-4">
                      <span
                        className="text-sm"
                        style={{ color: theme.colors.text.muted }}
                      >
                        Etios or Similar
                      </span>
                    </div>

                    {/* Capacity Icons */}
                    <div className="flex items-center justify-center lg:justify-end gap-4 mb-4">
                      {[
                        { icon: "👤", value: cab.capacity },
                        { icon: "🧳", value: cab.luggage },
                        { icon: "❄️", value: "AC" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-1">
                          <span>{item.icon}</span>
                          <span
                            className="text-sm font-medium"
                            style={{ color: theme.colors.text.secondary }}
                          >
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Price Display */}
                    <div
                      className="text-4xl lg:text-5xl font-bold mb-2"
                      style={{
                        color: theme.colors.accent.gold,
                        fontWeight: theme.typography.fontWeight.bold,
                        textShadow: `0 4px 20px ${theme.colors.shadow.gold}`,
                      }}
                    >
                      ₹{cab.basePrice}
                    </div>

                    {/* Original Price */}
                    <div
                      className="text-lg line-through mb-4"
                      style={{ color: theme.colors.text.muted }}
                    >
                      ₹{Math.floor(cab.basePrice * 1.18)}
                    </div>

                  
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Select Cab Button */}
        {selectedCab && (
          <div
            className={`text-center mb-8 ${
              isVisible ? "animate-fade-in-up animate-delay-900" : "opacity-0"
            }`}
          >
            <button
              className="font-bold py-4 px-12 rounded-xl text-lg transition-all duration-500 hover:scale-105 transform relative overflow-hidden group"
              style={{
                background: theme.gradients.gold,
                color: theme.colors.primary.black,
                fontWeight: theme.typography.fontWeight.bold,
                boxShadow: `0 20px 60px ${theme.colors.shadow.gold}`,
                border: `2px solid ${theme.colors.accent.lightGold}`,
              }}
            >
              {/* Button glow effect */}
              <div
                className="absolute inset-0 blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                style={{
                  background: theme.gradients.gold,
                  transform: "scale(1.2)",
                }}
              />
              <span className="relative z-10">Select Cab</span>
            </button>
          </div>
        )}

        {/* Trip Details */}
        <div
          className={`rounded-xl p-6 ${
            isVisible ? "animate-fade-in-up animate-delay-1200" : "opacity-0"
          }`}
          style={{
            background: theme.colors.primary.darkGray,
            border: `1px solid ${theme.colors.border.light}`,
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <span
              className="px-4 py-2 rounded-full font-medium"
              style={{
                backgroundColor: theme.colors.primary.black,
                color: theme.colors.text.secondary,
                border: `1px solid ${theme.colors.border.light}`,
              }}
            >
              ONEWAY TRIP
            </span>

            <span
              className="text-center flex-1"
              style={{ color: theme.colors.text.secondary }}
            >
              From Swarghat To Dweeppura | 535 Km | On 26-07-25 at 02:30 PM
            </span>

            <button
              className="px-4 py-2 rounded-full font-medium hover:scale-105 transition-transform duration-300"
              style={{
                background: theme.gradients.gold,
                color: theme.colors.primary.black,
                fontWeight: theme.typography.fontWeight.medium,
              }}
            >
              Modify
            </button>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-60"
        style={{
          background: theme.gradients.gold,
        }}
      />

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-delay-300 {
          animation-delay: 300ms;
        }

        .animate-delay-600 {
          animation-delay: 600ms;
        }

        .animate-delay-900 {
          animation-delay: 900ms;
        }

        .animate-delay-1200 {
          animation-delay: 1200ms;
        }
      `}</style>
    </div>
  );
};

export default CabListsPage;
