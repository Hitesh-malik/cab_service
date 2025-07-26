// ============================================================================
// HeroSection.tsx - Enhanced Penta Cab Hero Section
// ============================================================================

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Theme configuration
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

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: theme.gradients.heroGradient,
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Radial gradient overlay */}
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
        <div
          className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full blur-2xl animate-pulse"
          style={{
            backgroundColor: theme.colors.secondary.warmYellow,
            opacity: 0.12,
            animationDelay: "2s",
            animationDuration: "3.5s",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-12">
          {/* Left Content */}
          <div
            className={`text-center lg:text-left space-y-8 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {/* Brand Name */}
            <div className="space-y-2">
              <h1
                className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-none"
                style={{
                  color: theme.colors.text.primary,
                  fontFamily: theme.typography.fontFamily.sans.join(", "),
                  textShadow: `0 4px 20px ${theme.colors.shadow.primary}`,
                }}
              >
                PENTA
              </h1>
              <h1
                className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-none -mt-4"
                style={{
                  color: theme.colors.accent.gold,
                  fontFamily: theme.typography.fontFamily.sans.join(", "),
                  textShadow: `0 4px 20px ${theme.colors.shadow.gold}`,
                }}
              >
                CAB
              </h1>
            </div>

            {/* Service Types */}
            <div className="space-y-4 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium">
              <p
                style={{
                  color: theme.colors.text.secondary,
                  fontFamily: theme.typography.fontFamily.sans.join(", "),
                  textShadow: `0 2px 10px ${theme.colors.shadow.primary}`,
                }}
              >
                One Way Location
              </p>
              <p
                style={{
                  color: theme.colors.text.muted,
                  fontFamily: theme.typography.fontFamily.sans.join(", "),
                  textShadow: `0 2px 10px ${theme.colors.shadow.primary}`,
                }}
              >
                One Way / Round Trip
              </p>
            </div>

            {/* Service Options Grid */}
            <div className="grid grid-cols-2 gap-6 py-8">
              <div className="text-center lg:text-left space-y-2">
                <p
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: theme.colors.text.muted }}
                >
                  Pickup Way
                </p>
                <p
                  className="text-lg lg:text-xl font-bold"
                  style={{ color: theme.colors.text.secondary }}
                >
                  Local Location
                </p>
              </div>
              <div className="text-center lg:text-left space-y-2">
                <p
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: theme.colors.text.muted }}
                >
                  Pickup
                </p>
                <p
                  className="text-lg lg:text-xl font-bold"
                  style={{ color: theme.colors.text.secondary }}
                >
                  Drop In
                </p>
              </div>
              <div className="text-center lg:text-left space-y-2">
                <p
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: theme.colors.text.muted }}
                >
                  Drop Way
                </p>
                <p
                  className="text-lg lg:text-xl font-bold"
                  style={{ color: theme.colors.text.secondary }}
                >
                  Drop
                </p>
              </div>
              <div className="text-center lg:text-left space-y-2">
                <p
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: theme.colors.text.muted }}
                >
                  One Way
                </p>
                <p
                  className="text-lg lg:text-xl font-bold"
                  style={{ color: theme.colors.text.secondary }}
                >
                  Round Trip
                </p>
              </div>
            </div>

         
          </div>

          {/* Right Content - Car Image */}
          <div
            className={`relative ${
              isVisible ? "animate-fade-in-right" : "opacity-0"
            } animate-delay-300`}
          >
            {/* Enhanced Glow effect */}
            <div
              className="absolute inset-0 blur-3xl opacity-50 animate-pulse"
              style={{
                background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${theme.colors.accent.gold}40 0%, ${theme.colors.secondary.amber}20 40%, transparent 70%)`,
                transform: "scale(1.3)",
                animationDuration: "4s",
              }}
            />

            {/* Car Image Container */}
            <div className="relative z-10">
              <div
                className="relative w-full h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] rounded-2xl overflow-hidden group transform hover:scale-[1.02] transition-all duration-700"
                style={{
                  border: `3px solid ${theme.colors.border.gold}`,
                  boxShadow: `
                    0 25px 80px ${theme.colors.shadow.elevated}, 
                    0 0 0 1px ${theme.colors.accent.gold}30,
                    inset 0 1px 0 ${theme.colors.border.light}
                  `,
                }}
              >
                {/* Using Next.js optimized Image component */}
                <Image
                  src="/raw.png"
                  alt="Penta Cab - Premium Taxi Service"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Dark overlay for premium effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-40 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors.primary.black}20 0%, transparent 50%, ${theme.colors.primary.black}20 100%)`,
                  }}
                />

                {/* Premium Service Badge */}
                <div
                  className="absolute top-4 right-4 px-4 py-2 rounded-full backdrop-blur-lg transform hover:scale-110 transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors.accent.gold}95 0%, ${theme.colors.secondary.amber}90 100%)`,
                    color: theme.colors.primary.black,
                    fontSize: "0.875rem",
                    fontWeight: theme.typography.fontWeight.bold,
                    boxShadow: `0 8px 25px ${theme.colors.shadow.gold}`,
                    border: `1px solid ${theme.colors.accent.lightGold}50`,
                  }}
                >
                  ✨ PREMIUM
                </div>
              </div>

              {/* Floating Service Badges */}
              <div className="absolute -top-6 -right-6 space-y-3 hidden lg:block">
                <div
                  className="px-5 py-3 rounded-full text-sm font-bold backdrop-blur-xl shadow-2xl transform hover:scale-110 transition-all duration-300 cursor-pointer animate-bounce"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors.accent.gold} 0%, ${theme.colors.secondary.amber} 100%)`,
                    color: theme.colors.primary.black,
                    border: `2px solid ${theme.colors.accent.lightGold}50`,
                    boxShadow: `0 12px 40px ${theme.colors.shadow.gold}`,
                    animationDelay: "0s",
                    animationDuration: "3s",
                  }}
                >
                  🚗 24/7 Available
                </div>
              
              </div>

              {/* Floating decorative elements */}
              <div
                className="absolute top-1/4 -left-8 w-6 h-6 rounded-full animate-bounce opacity-80 hidden lg:block"
                style={{
                  background: `linear-gradient(45deg, ${theme.colors.accent.gold}, ${theme.colors.secondary.amber})`,
                  animationDelay: "1.5s",
                  animationDuration: "2.5s",
                  boxShadow: `0 4px 15px ${theme.colors.shadow.gold}`,
                }}
              />
              <div
                className="absolute bottom-1/3 -right-6 w-4 h-4 rounded-full animate-bounce opacity-90 hidden lg:block"
                style={{
                  background: `linear-gradient(45deg, ${theme.colors.secondary.warmYellow}, ${theme.colors.secondary.lightAmber})`,
                  animationDelay: "2.5s",
                  animationDuration: "2s",
                  boxShadow: `0 4px 15px rgba(255, 184, 77, 0.4)`,
                }}
              />
            </div>
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

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out forwards;
        }

        .animate-delay-300 {
          animation-delay: 300ms;
        }

        /* Enhanced hover effects */
        @media (min-width: 1024px) {
          .group:hover .car-image {
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
