'use client';
import React from 'react';
import { theme } from '@/styles/theme';


export const AboutVision: React.FC = () => {
    return (
          <section 
        className="py-16 lg:py-24"
        style={{ backgroundColor: theme.colors.background.tertiary + '30' }}
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
                borderColor: theme.colors.border.gold + '20',
                boxShadow: `0 10px 30px ${theme.colors.shadow.gold}`
              }}
            >
              <p 
                className="text-lg lg:text-xl leading-relaxed mb-6"
                style={{ color: theme.colors.text.secondary }}
              >
                Our vision is to redefine the way people perceive taxi services. We envision a future where transportation is not just a means to an end but an integral part of your journey, offering comfort, reliability, and peace of mind.
              </p>
              <p 
                className="text-lg lg:text-xl leading-relaxed"
                style={{ color: theme.colors.text.secondary }}
              >
                As we continue to grow and expand our services, we invite you to join us on this exciting journey towards a better, more connected world.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}