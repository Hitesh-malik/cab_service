"use client";
import React from "react";
import { theme } from "@/styles/theme";

export const AboutMission: React.FC = () => {
  return (
    <section
      className="py-16 lg:py-24"
      style={{ backgroundColor: theme.colors.background.tertiary + "30" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h2
            className="text-3xl lg:text-4xl font-display font-bold mb-8"
            style={{ color: theme.colors.text.primary }}
          >
            Our Mission
          </h2>
          <div
            className="rounded-2xl p-8 lg:p-12 border"
            style={{
              background: theme.gradients.primary,
              borderColor: theme.colors.border.gold + "20",
              boxShadow: `0 10px 30px ${theme.colors.shadow.gold}`,
            }}
          >
            <p
              className="text-lg lg:text-xl leading-relaxed"
              style={{ color: theme.colors.text.secondary }}
            >
              To get people to their destination safely and efficiently.
              PentaCab's mission is to make{" "}
              <span
                className="font-semibold"
                style={{ color: theme.colors.accent.gold }}
              >
                travel simple and enjoyable
              </span>{" "}
              through advanced technology and unparalleled service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
