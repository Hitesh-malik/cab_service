// src/components/BookingCTASection.tsx
"use client";

import React from "react";
import Link from "next/link";
import { theme } from "@/styles/theme";
import Image from "next/image";

const BookingCTASection: React.FC = () => {
  const trustIndicators = [
    { icon: "🛡️", label: "Secure Booking", desc: "SSL Protected" },
    { icon: "💳", label: "Easy Payment", desc: "Multiple Options" },
    { icon: "📞", label: "24/7 Support", desc: "Always Available" },
    { icon: "⭐", label: "5-Star Rated", desc: "Customer Choice" },
  ];

  return (
    <section
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{
        background: theme.gradients.blackToCharcoal,
      }}
    >
      {/* Background decoration using theme colors */}
      <div className="absolute inset-0" style={{ opacity: 0.1 }}>
        <div
          className="absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl animate-pulse"
          style={{
            backgroundColor: theme.colors.secondary.warmYellow,
          }}
        />
        <div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{
            backgroundColor: theme.colors.accent.gold,
            animationDelay: "1000ms",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="animate-slide-in-left flex flex-col justify-between h-full">
            <div>
              <h2
                className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6"
                style={{
                  fontFamily: theme.typography.fontFamily.display.join(", "),
                  color: theme.colors.text.primary,
                  fontSize: theme.typography.fontSize["5xl"],
                  fontWeight: theme.typography.fontWeight.bold,
                }}
              >
                Book with us for a{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    background: theme.gradients.goldToAmber,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  stress-free journey!
                </span>
              </h2>

              <div
                className="space-y-4 leading-relaxed"
                style={{
                  color: theme.colors.text.secondary,
                  lineHeight: theme.typography.lineHeight.relaxed,
                }}
              >
                <p>
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm mr-3"
                    style={{
                      background: theme.gradients.gold,
                      color: theme.colors.primary.black,
                    }}
                  >
                    P
                  </span>
                  one-stop solution in Ahmedabad for one-way and round-trip
                  journeys, efficient airport pickups and drops, and convenient
                  local car rentals.{" "}
                  <span
                    className="px-2 py-1 rounded font-semibold"
                    style={{
                      backgroundColor: theme.colors.status.error,
                      color: theme.colors.text.primary,
                    }}
                  >
                    Penta Cab
                  </span>{" "}
                  a trusted car rental company in Ahmedabad, has been serving
                  customers for over a decade. We offer a{" "}
                  <span
                    className="font-semibold"
                    style={{ color: theme.colors.accent.gold }}
                  >
                    hassle-free booking process
                  </span>
                  , letting you provide the flexibility to select from a diverse
                  range of cars, including Premium options, all within your
                  budget. Our helpful representatives assist in planning your
                  trip. Popular services include{" "}
                  <span
                    className="font-semibold"
                    style={{ color: theme.colors.accent.gold }}
                  >
                    corporate car rentals
                  </span>{" "}
                  and{" "}
                  <span
                    className="font-semibold"
                    style={{ color: theme.colors.accent.gold }}
                  >
                    outstation cabs
                  </span>
                  . Book with us for a stress-free journey!
                </p>
              </div>
            </div>

            {/* Book Now Button */}
            <div className="mt-8">
              <Link
                href="/book"
                className="group inline-flex items-center space-x-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105"
                style={{
                  background: theme.gradients.gold,
                  color: theme.colors.primary.black,
                  fontFamily: theme.typography.fontFamily.sans.join(", "),
                  fontWeight: theme.typography.fontWeight.bold,
                  boxShadow: `0 4px 20px ${theme.colors.shadow.gold}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 8px 32px ${theme.colors.shadow.gold}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 20px ${theme.colors.shadow.gold}`;
                }}
              >
                <span>Book now</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Illustration - Cab Image */}
          <div className="animate-slide-in-right lg:order-2">
            <div className="relative w-full h-96 lg:h-[500px]">
              <Image
                src="/cab_image.png"
                alt="Cab Service"
                fill
                className="object-contain rounded-3xl"
                style={{
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators - themed */}
        <div
          className="mt-16 pt-12 border-t"
          style={{
            borderColor: `${theme.colors.accent.gold}20`,
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustIndicators.map((item, index) => (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </div>
                <div
                  className="font-semibold text-sm"
                  style={{
                    color: theme.colors.text.primary,
                    fontFamily: theme.typography.fontFamily.sans.join(", "),
                    fontWeight: theme.typography.fontWeight.semibold,
                  }}
                >
                  {item.label}
                </div>
                <div
                  className="text-xs"
                  style={{
                    color: theme.colors.text.secondary,
                    fontFamily: theme.typography.fontFamily.sans.join(", "),
                  }}
                >
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTASection;
