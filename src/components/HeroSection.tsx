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
      className="relative h-96 lg:h-[500px] flex items-center justify-center overflow-hidden"
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

      <div className="relative z-10 w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Left Content */}
          <div
            className={`text-center lg:text-left space-y-6 flex items-center justify-center lg:justify-start px-4 sm:px-6 lg:px-8 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {/* Welcome Text */}
            <div className="space-y-3">
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-none"
                style={{
                  color: theme.colors.text.primary,
                  fontFamily: theme.typography.fontFamily.sans.join(", "),
                  textShadow: `0 4px 20px ${theme.colors.shadow.primary}`,
                }}
              >
                Welcome to
              </h1>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-none"
                style={{
                  color: theme.colors.accent.gold,
                  fontFamily: theme.typography.fontFamily.sans.join(", "),
                  textShadow: `0 4px 20px ${theme.colors.shadow.gold}`,
                }}
              >
                Penta Cab
              </h1>
            </div>
          </div>

          {/* Right Content - Car Image */}
          <div
            className={`relative h-full ${
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
            <div className="relative z-10 h-full w-full">
              <div
                className="relative w-full h-full overflow-hidden group transform hover:scale-[1.02] transition-all duration-700"
                style={{
                  boxShadow: `0 25px 80px ${theme.colors.shadow.elevated}`,
                }}
              >
                {/* Using Next.js optimized Image component */}
                <Image
                  src="/cab_image.png"
                  alt="Penta Cab - Premium Taxi Service"
                  fill
                  className="object-contain object-center group-hover:scale-105 transition-transform duration-700"
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
              </div>
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
