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
    enhancedBackground: "linear-gradient(135deg, #000000 0%, #0a0a0a 25%, #1a1a1a 50%, #0a0a0a 75%, #000000 100%)",
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
        background: theme.gradients.enhancedBackground,
      }}
    >
      <div className="relative z-10 w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Left Content */}
          <div
            className={`text-center lg:text-left space-y-6 flex items-center justify-center lg:justify-center px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"
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

          {/* Right Content - Background Image */}
          <div
            className={`relative h-full animate-delay-300`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/cab_image.png"
                alt="Penta Cab - Premium Taxi Service"
                fill
                className="object-cover object-center opacity-80"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Enhanced Glow effect */}
            <div
              className="absolute inset-0 blur-3xl opacity-30 animate-pulse"
              style={{
                background: `radial-gradient(ellipse 90% 70% at 50% 50%, ${theme.colors.accent.gold}20 0%, ${theme.colors.secondary.amber}10 40%, transparent 80%)`,
                transform: "scale(1.2)",
                animationDuration: "5s",
              }}
            />
          </div>
        </div>
      </div>

      {/* Enhanced bottom decorative line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-60"
        style={{
          background: theme.gradients.gold,
          boxShadow: `0 0 10px ${theme.colors.accent.gold}40`,
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
