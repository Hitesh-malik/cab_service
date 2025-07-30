// src/app/popular_route_info/page.tsx
"use client";

import React from "react";
import { theme } from "@/styles/theme";
import { BsStar, BsClock, BsCarFront, BsArrowRight } from "react-icons/bs";

interface PopularRoute {
  id: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  description: string;

}

const popularRoutes: PopularRoute[] = [
  {
    id: "1",
    from: "Mumbai",
    to: "Pune",
    distance: "148 km",
    duration: "3-4 hours",
    description: "The most popular route connecting Maharashtra's financial capital to its cultural hub.",
  },
  {
    id: "2",
    from: "Delhi",
    to: "Agra",
    distance: "200 km",
    duration: "4-5 hours",
    description: "Historic route to the magnificent Taj Mahal and other UNESCO World Heritage sites.",
  },
  {
    id: "3",
    from: "Bangalore",
    to: "Mysore",
    distance: "150 km",
    duration: "3-4 hours",
    description: "Scenic route through Karnataka's beautiful landscapes and cultural heritage.",
  },
  {
    id: "4",
    from: "Chennai",
    to: "Pondicherry",
    distance: "160 km",
    duration: "3-4 hours",
    description: "Coastal route to the French colonial heritage and pristine beaches.",
  },
  {
    id: "5",
    from: "Hyderabad",
    to: "Warangal",
    distance: "140 km",
    duration: "2.5-3.5 hours",
    description: "Heritage route connecting Telangana's modern capital to its ancient glory.",
  },
  {
    id: "6",
    from: "Kolkata",
    to: "Digha",
    distance: "180 km",
    duration: "4-5 hours",
    description: "Coastal journey to West Bengal's popular beach destination.",
  }
];

const PopularRouteInfo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20" />
        <div className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <BsStar className="w-8 h-8 text-yellow-400 mr-3" />
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                style={{
                  color: theme.colors.text.primary,
                  fontFamily: theme.typography.fontFamily.sans.join(", "),
                }}
              >
                Popular Routes
              </h1>
              <BsStar className="w-8 h-8 text-yellow-400 ml-3" />
            </div>
            <p 
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              style={{
                fontFamily: theme.typography.fontFamily.sans.join(", "),
              }}
            >
              Discover our most booked and highly-rated travel routes across India. 
              Experience comfort, reliability, and excellent service on these popular journeys.
            </p>
          </div>
        </div>
      </div>

      {/* Routes Grid */}
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularRoutes.map((route) => (
              <div
                key={route.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm 
                         border border-gray-700/50 rounded-2xl p-6 hover:border-yellow-500/50 
                         transition-all duration-300 hover:transform hover:scale-105 
                         hover:shadow-2xl hover:shadow-yellow-500/20"
              >
                {/* Route Details */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span 
                        className="font-semibold text-lg"
                        style={{ color: theme.colors.text.primary }}
                      >
                        {route.from}
                      </span>
                    </div>
                    <BsArrowRight className="w-4 h-4 text-gray-400" />
                    <div className="flex items-center space-x-2">
                      <span 
                        className="font-semibold text-lg"
                        style={{ color: theme.colors.text.primary }}
                      >
                        {route.to}
                      </span>
                    </div>
                  </div>

                  <p 
                    className="text-sm leading-relaxed"
                    style={{ color: theme.colors.text.muted }}
                  >
                    {route.description}
                  </p>

                  {/* Route Stats */}
                  <div className="grid grid-cols-2 gap-3 py-3">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <BsCarFront className="w-4 h-4 text-blue-400 mr-1" />
                      </div>
                      <span 
                        className="text-xs font-medium"
                        style={{ color: theme.colors.text.secondary }}
                      >
                        Distance
                      </span>
                      <p 
                        className="text-sm font-semibold"
                        style={{ color: theme.colors.text.primary }}
                      >
                        {route.distance}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <BsClock className="w-4 h-4 text-green-400 mr-1" />
                      </div>
                      <span 
                        className="text-xs font-medium"
                        style={{ color: theme.colors.text.secondary }}
                      >
                        Duration
                      </span>
                      <p 
                        className="text-sm font-semibold"
                        style={{ color: theme.colors.text.primary }}
                      >
                        {route.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm 
                     border border-gray-700/50 rounded-2xl p-8"
          >
            <h2 
              className="text-2xl sm:text-3xl font-bold mb-4"
              style={{ color: theme.colors.text.primary }}
            >
              Ready to Book Your Journey?
            </h2>
            <p 
              className="text-lg mb-6"
              style={{ color: theme.colors.text.muted }}
            >
              Contact us for the best rates and personalized service on any of these popular routes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-8 py-3 rounded-xl font-semibold transition-all duration-300 
                         transform hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: theme.colors.accent.gold,
                  color: theme.colors.primary.black,
                }}
              >
                Call Now: +91 760 083 9900
              </button>
              <button
                className="px-8 py-3 rounded-xl font-semibold transition-all duration-300 
                         transform hover:scale-105 border-2"
                style={{
                  borderColor: theme.colors.accent.gold,
                  color: theme.colors.accent.gold,
                }}
              >
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularRouteInfo; 