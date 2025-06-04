'use client';
import React from 'react';
import { theme } from '@/styles/theme';


export const AboutMission: React.FC = () => {
    return (
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: theme.colors.background.tertiary + '30' }}
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
                borderColor: theme.colors.border.gold + '20',
                boxShadow: `0 10px 30px ${theme.colors.shadow.gold}`
              }}
            >
              <p
                className="text-lg lg:text-xl leading-relaxed"
                style={{ color: theme.colors.text.secondary }}
              >
                At the core of Penta Cab's mission is a dedication to providing seamless, reliable, and efficient transportation solutions. We strive to connect passengers with professional, friendly, and skilled drivers, ensuring that every ride with us is not just a journey but an experience to remember.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}