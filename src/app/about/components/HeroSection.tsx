'use client';
import React from 'react';
import { theme } from '@/styles/theme';


export const HeroSection: React.FC = () => {
    return (
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl animate-pulse"
            style={{ backgroundColor: theme.colors.accent.gold + '10' }}
          />
          <div
            className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000"
            style={{ backgroundColor: theme.colors.secondary.amber + '10' }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse delay-2000"
            style={{ backgroundColor: theme.colors.accent.warmGold + '05' }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span style={{ color: theme.colors.text.primary }}>About </span>
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: theme.gradients.gold }}
              >
                Penta Cab
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: theme.colors.text.secondary }}
            >
              Revolutionizing transportation with premium service, cutting-edge technology, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>
    );
}