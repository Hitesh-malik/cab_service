"use client";
import React, { useState, useEffect } from "react";

// Theme configuration (matching cab-detail page)
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
      teal: "#20B2AA",
      darkTeal: "#008B8B",
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
      lightTeal: "#E0F7FA",
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
    teal: "linear-gradient(135deg, #20B2AA 0%, #008B8B 100%)",
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

export const AboutStory = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const timelineData = [
    {
      year: "2015",
      event: "STARTING AS A DRIVER",
      description: "Began journey as a driver",
      story:
        "Our journey began with a simple idea – to make transportation safer, more convenient, and more accessible for everyone. Starting as a driver, we learned the industry from the ground up.",
      icon: "🚗",
      color: "#FFD700",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      year: "2016",
      event: "CREATE DRIVER NETWORK",
      description: "Built network of drivers",
      story:
        "We expanded our vision by building a network of trusted drivers. This marked the beginning of our commitment to creating a reliable transportation community.",
      icon: "🤝",
      color: "#FF6B35",
      gradient: "from-orange-400 to-red-500",
    },
    {
      year: "2017",
      event: "BUY OWN CABS",
      description: "Invested in own fleet",
      story:
        "Taking control of our destiny, we invested in our own fleet. This strategic move allowed us to ensure quality, maintain standards, and provide consistent service.",
      icon: "🚖",
      color: "#4ECDC4",
      gradient: "from-teal-400 to-cyan-500",
    },
    {
      year: "2018",
      event: "BECOME AN AGENT",
      description: "Expanded to agency model",
      story:
        "We evolved into an agency model, expanding our reach and impact. This transformation enabled us to serve more customers while maintaining our high standards.",
      icon: "💼",
      color: "#45B7D1",
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      year: "2019",
      event: "CREATE AGENT NETWORK",
      description: "Built agent partnerships",
      story:
        "Building on our success, we created a network of agents and partnerships. This collaborative approach strengthened our market presence and service capabilities.",
      icon: "🌐",
      color: "#96CEB4",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      year: "2020",
      event: "START OWN COMPANY",
      description: "Launched Penta Cab",
      story:
        "The culmination of our journey – we launched Penta Cab as a comprehensive transportation solution. Today, we serve thousands of satisfied customers daily.",
      icon: "🏢",
      color: "#FECA57",
      gradient: "from-amber-400 to-yellow-500",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % timelineData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Story Content - Left Side */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="sticky top-8">
              <div className="relative">
                <h2
                  className="text-3xl lg:text-4xl font-bold mb-6"
                  style={{
                    color: theme.colors.accent.gold,
                    textShadow: `0 4px 20px ${theme.colors.shadow.gold}`,
                    fontWeight: theme.typography.fontWeight.bold,
                  }}
                >
                  Our Story
                </h2>
              </div>

              {/* Dynamic Story Content */}
              <div
                className="rounded-2xl p-6 backdrop-blur-sm border transition-all duration-500"
                style={{
                  background: theme.gradients.cardGradient,
                  border: `2px solid ${theme.colors.accent.gold}`,
                  boxShadow: `0 20px 60px ${theme.colors.shadow.elevated}, 0 0 0 1px ${theme.colors.accent.gold}30`,
                }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`text-3xl animate-bounce`}>
                    {timelineData[activeStep].icon}
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: theme.colors.accent.gold }}
                    >
                      {timelineData[activeStep].year}
                    </h3>
                    <p
                      className="text-lg font-semibold"
                      style={{ color: theme.colors.text.primary }}
                    >
                      {timelineData[activeStep].event}
                    </p>
                  </div>
                </div>

                <p
                  className="leading-relaxed text-lg"
                  style={{ color: theme.colors.text.secondary }}
                >
                  {timelineData[activeStep].story}
                </p>

                {/* Progress Indicator */}
                <div className="flex justify-center mt-6 space-x-2">
                  {timelineData.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                        activeStep === index
                          ? "bg-white shadow-lg scale-125"
                          : "bg-gray-600 hover:bg-gray-400"
                      }`}
                      onClick={() => setActiveStep(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center space-x-4 mt-6">
                <button
                  onClick={() =>
                    setActiveStep(
                      (prev) =>
                        (prev - 1 + timelineData.length) % timelineData.length
                    )
                  }
                  className="px-4 py-2 text-white rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg"
                  style={{
                    background: theme.gradients.gold,
                  }}
                >
                  Previous
                </button>
                <button
                  onClick={() =>
                    setActiveStep((prev) => (prev + 1) % timelineData.length)
                  }
                  className="px-4 py-2 text-white rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg"
                  style={{
                    background: theme.gradients.teal,
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Journey Timeline - Right Side */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              <div
                className="relative p-8 rounded-3xl backdrop-blur-xl border shadow-2xl"
                style={{
                  background: theme.gradients.cardGradient,
                  border: `2px solid ${theme.colors.accent.gold}`,
                  boxShadow: `0 20px 60px ${theme.colors.shadow.elevated}, 0 0 0 1px ${theme.colors.accent.gold}30`,
                }}
              >
                <div className="relative space-y-6">
                  {timelineData.map((item, index) => (
                    <div
                      key={index}
                      className={`group flex items-center transition-all duration-500 cursor-pointer ${
                        activeStep === index ? "scale-105" : "hover:scale-102"
                      }`}
                      onClick={() => setActiveStep(index)}
                      onMouseEnter={() => setActiveStep(index)}
                    >
                      {/* Interactive Year Circle */}
                      <div
                        className={`relative flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                          activeStep === index
                            ? `bg-gradient-to-r ${item.gradient} border-white shadow-lg shadow-${item.color}/50 animate-pulse`
                            : "border-slate-600 group-hover:border-white/50"
                        }`}
                        style={{
                          background:
                            activeStep === index
                              ? undefined
                              : theme.colors.background.dark,
                        }}
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent"></div>
                        <span
                          className={`text-sm font-bold z-10 transition-colors duration-300 ${
                            activeStep === index
                              ? "text-white"
                              : "text-gray-400 group-hover:text-white"
                          }`}
                        >
                          {item.year}
                        </span>
                        {/* Floating Icon */}
                        <div
                          className={`absolute -top-2 -right-2 text-xl transition-transform duration-300 ${
                            activeStep === index
                              ? "scale-110 animate-bounce"
                              : "scale-75 group-hover:scale-90"
                          }`}
                        >
                          {item.icon}
                        </div>
                      </div>

                      {/* Content Card */}
                      <div
                        className={`flex-1 ml-4 p-3 rounded-xl transition-all duration-500 ${
                          activeStep === index
                            ? "bg-white/10 shadow-lg"
                            : "group-hover:bg-white/5"
                        }`}
                      >
                        <div
                          className={`text-lg font-bold mb-1 transition-colors duration-300 ${
                            activeStep === index
                              ? "text-white"
                              : "text-gray-300 group-hover:text-white"
                          }`}
                        >
                          {item.event}
                        </div>
                        <div
                          className={`text-sm transition-colors duration-300 ${
                            activeStep === index
                              ? "text-gray-200"
                              : "text-gray-400 group-hover:text-gray-300"
                          }`}
                        >
                          {item.description}
                        </div>
                      </div>

                      {/* Connecting Line */}
                      {index < timelineData.length - 1 && (
                        <div
                          className={`absolute left-8 w-px h-6 mt-16 transition-all duration-500 ${
                            activeStep >= index
                              ? `bg-gradient-to-b ${item.gradient}`
                              : "bg-slate-600"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="block lg:hidden">
              <div
                className="relative p-6 rounded-2xl backdrop-blur-xl border shadow-2xl"
                style={{
                  background: theme.gradients.cardGradient,
                  border: `2px solid ${theme.colors.accent.gold}`,
                  boxShadow: `0 20px 60px ${theme.colors.shadow.elevated}, 0 0 0 1px ${theme.colors.accent.gold}30`,
                }}
              >
                <div className="space-y-4">
                  {timelineData.map((item, index) => (
                    <div
                      key={index}
                      className={`group flex items-center transition-all duration-500 cursor-pointer ${
                        activeStep === index ? "scale-105" : ""
                      }`}
                      onClick={() => setActiveStep(index)}
                    >
                      {/* Mobile Year Circle */}
                      <div
                        className={`relative flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                          activeStep === index
                            ? `bg-gradient-to-r ${item.gradient} border-white shadow-lg animate-pulse`
                            : "border-slate-600"
                        }`}
                        style={{
                          background:
                            activeStep === index
                              ? undefined
                              : theme.colors.background.dark,
                        }}
                      >
                        <span
                          className={`text-xs font-bold transition-colors duration-300 ${
                            activeStep === index
                              ? "text-white"
                              : "text-gray-400"
                          }`}
                        >
                          {item.year}
                        </span>
                        <div
                          className={`absolute -top-1 -right-1 text-base transition-transform duration-300 ${
                            activeStep === index ? "animate-bounce" : ""
                          }`}
                        >
                          {item.icon}
                        </div>
                      </div>

                      {/* Mobile Content */}
                      <div
                        className={`flex-1 ml-3 p-2 rounded-lg transition-all duration-500 ${
                          activeStep === index ? "bg-white/10" : ""
                        }`}
                      >
                        <div
                          className={`text-sm font-bold mb-1 transition-colors duration-300 ${
                            activeStep === index
                              ? "text-white"
                              : "text-gray-300"
                          }`}
                        >
                          {item.event}
                        </div>
                        <div
                          className={`text-xs transition-colors duration-300 ${
                            activeStep === index
                              ? "text-gray-200"
                              : "text-gray-400"
                          }`}
                        >
                          {item.description}
                        </div>
                      </div>

                      {/* Mobile Connecting Line */}
                      {index < timelineData.length - 1 && (
                        <div
                          className={`absolute left-7 w-px h-4 mt-14 transition-all duration-500 ${
                            activeStep >= index
                              ? `bg-gradient-to-b ${item.gradient}`
                              : "bg-slate-600"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Achievement Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "2015", label: "Founded", icon: "🎯" },
            { number: "1000+", label: "Happy Customers", icon: "😊" },
            { number: "50+", label: "Drivers", icon: "👥" },
            { number: "24/7", label: "Service", icon: "⏰" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-3 rounded-xl backdrop-blur-sm border hover:scale-105 transition-all duration-300 group cursor-pointer"
              style={{
                background: theme.gradients.cardGradient,
                border: `1px solid ${theme.colors.border.light}`,
              }}
            >
              <div className="text-2xl mb-1 group-hover:animate-bounce">
                {stat.icon}
              </div>
              <div
                className="text-xl font-bold mb-1"
                style={{ color: theme.colors.accent.gold }}
              >
                {stat.number}
              </div>
              <div
                className="text-xs group-hover:text-white transition-colors"
                style={{ color: theme.colors.text.muted }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
