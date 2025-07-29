"use client";
import React from "react";
import { theme } from "@/styles/theme";

export const AboutValue: React.FC = () => {
  return (
    <section
      className="py-16 lg:py-24"
      style={{ backgroundColor: theme.colors.background.tertiary + "30" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl lg:text-4xl font-display font-bold mb-6"
            style={{ color: theme.colors.text.primary }}
          >
            Our Core Values
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: theme.colors.text.secondary }}
          >
            Focused on Service and Trust - These values guide every decision we
            make and every interaction we have.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "🛡️",
              title: "Safety First",
              description:
                "We prioritize the well-being of our passengers and drivers above all else, implementing rigorous safety protocols and continuous improvements.",
            },
            {
              icon: "❤️",
              title: "Customer Centricity",
              description:
                "Our customers are at the heart of everything we do. We are dedicated to understanding their needs and consistently exceeding their expectations with exceptional service.",
            },
            {
              icon: "⏰",
              title: "Reliability & Punctuality",
              description:
                "We are committed to being consistently dependable, ensuring timely arrivals and departures, because we value your time.",
            },
            {
              icon: "🔍",
              title: "Transparency",
              description:
                "We believe in clear communication and honest dealings, from upfront pricing to detailed trip information, building trust with every interaction.",
            },
            {
              icon: "🚀",
              title: "Innovation",
              description:
                "We continuously seek new and better ways to enhance the mobility experience, embracing technology to provide smarter and more convenient solutions.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
                style={{ background: theme.gradients.gold }}
              >
                {value.icon}
              </div>
              <h3
                className="text-xl font-bold mb-3 group-hover:opacity-80 transition-colors duration-300"
                style={{ color: theme.colors.text.primary }}
              >
                {value.title}
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: theme.colors.text.secondary }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
