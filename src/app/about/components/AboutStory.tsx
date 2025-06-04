'use client';
import React from 'react';
import { theme } from '@/styles/theme';


export const AboutStory: React.FC = () => {
    return (
          <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2
                className="text-3xl lg:text-4xl font-display font-bold mb-6"
                style={{ color: theme.colors.text.primary }}
              >
                Our Story
              </h2>
              <div
                className="space-y-4 leading-relaxed"
                style={{ color: theme.colors.text.secondary }}
              >
                <p>
                  At Penta Cab, we are passionate about revolutionizing the way you experience taxi services. Founded in 2020, our journey began with a simple idea – to make transportation safer, more convenient, and more accessible for everyone.
                </p>
                <p>
                  Since then, we have evolved into a leading name in the industry, driven by our commitment to excellence and customer satisfaction. What started as a vision to transform urban mobility has grown into a comprehensive transportation solution that serves thousands of satisfied customers daily.
                </p>
                <p>
                  Our dedication to innovation, safety, and service quality has made us the preferred choice for discerning travelers who demand nothing but the best.
                </p>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div
                  className="rounded-2xl p-8 border"
                  style={{
                    background: theme.gradients.primary,
                    borderColor: theme.colors.border.gold + '20',
                    boxShadow: `0 10px 30px ${theme.colors.shadow.gold}`
                  }}
                >
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div
                        className="text-3xl font-bold mb-2"
                        style={{ color: theme.colors.accent.gold }}
                      >
                        2020
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: theme.colors.text.secondary }}
                      >
                        Founded
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className="text-3xl font-bold mb-2"
                        style={{ color: theme.colors.accent.gold }}
                      >
                        10K+
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: theme.colors.text.secondary }}
                      >
                        Happy Customers
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className="text-3xl font-bold mb-2"
                        style={{ color: theme.colors.accent.gold }}
                      >
                        50+
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: theme.colors.text.secondary }}
                      >
                        Professional Drivers
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className="text-3xl font-bold mb-2"
                        style={{ color: theme.colors.accent.gold }}
                      >
                        24/7
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: theme.colors.text.secondary }}
                      >
                        Service Available
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}