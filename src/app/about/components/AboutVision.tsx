"use client";
import React from "react";
import { theme } from "@/styles/theme";

export const AboutVision: React.FC = () => {
  return (
    <section
      className="py-16 lg:py-24"
      style={{ backgroundColor: theme.colors.background.tertiary + "30" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          <h2
            className="text-3xl lg:text-4xl font-display font-bold mb-8"
            style={{ color: theme.colors.text.primary }}
          >
            Our Vision
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
              Our vision is to be the architects of intelligent urban movement,
              pioneering a dynamic ecosystem where cutting-edge technology,
              autonomous solutions, and human-centric design converge. We aim to
              create a predictive and adaptive mobility platform that constantly
              redefines convenience, safety, and efficiency for the cities of
              tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
