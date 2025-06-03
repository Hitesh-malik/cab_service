// src/components/ServicesSection.tsx
'use client';

import React from 'react';
import Link from 'next/link';

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  bgColor: string;
  textColor: string;
  href: string;
}

const ServicesSection: React.FC = () => {
  const services: ServiceCard[] = [
    {
      id: 'outstation',
      title: 'Outstation Travel',
      description: 'Explore all of India with our One-way or Round-trip outstation cab services. Our skilled drivers prioritize both speed and safety, guaranteeing timely arrivals. Trust us for all your outstation car rental needs.',
      image: '/api/placeholder/400/250',
      features: ['One-way & Round-trip', 'Skilled Drivers', 'Speed & Safety', 'Timely Arrivals'],
      bgColor: 'from-blue-500/20 to-blue-600/20',
      textColor: 'text-blue-100',
      href: '/services/outstation'
    },
    {
      id: 'airport',
      title: 'Airport Transfer',
      description: 'We prioritize your flight\'s punctuality and safety. Whether returning from a trip, exploring as a tourist, or needing an airport drop, our prompt drivers ensure a secure journey.',
      image: '/api/placeholder/400/250',
      features: ['Flight Tracking', 'Punctual Service', 'Safe & Secure', 'Professional Drivers'],
      bgColor: 'from-gray-500/20 to-gray-600/20',
      textColor: 'text-gray-100',
      href: '/services/airport'
    },
    {
      id: 'local',
      title: 'Local Trip Rental',
      description: 'Discover local car rentals in the city with tailored packages. Whether you need a ride to a meeting, wedding, or any event, our skilled drivers navigate traffic and rough roads, ensuring punctual arrivals.',
      image: '/api/placeholder/400/250',
      features: ['City Packages', 'Event Transportation', 'Traffic Navigation', 'Punctual Service'],
      bgColor: 'from-yellow-500/20 to-orange-500/20',
      textColor: 'text-yellow-100',
      href: '/services/local'
    },
    {
      id: 'multiway',
      title: 'Multiway Booking',
      description: 'A single travel booking that allows you to visit several destinations during one trip, choose your destinations, and alter your schedule as you go. Avoid multiple bookings and check-ins.',
      image: '/api/placeholder/400/250',
      features: ['Multiple Destinations', 'Flexible Schedule', 'Single Booking', 'No Check-ins'],
      bgColor: 'from-cyan-500/20 to-blue-500/20',
      textColor: 'text-cyan-100',
      href: '/services/multiway'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-penta-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-penta-gold rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Take a Ride Experience With Penta Cab
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-gradient-dark rounded-2xl overflow-hidden border border-penta-gold/20 hover:border-penta-gold/40 transition-all duration-500 hover:shadow-gold hover:scale-105 h-full">
                
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor}`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Service Icon */}
                    <div className="w-20 h-20 bg-penta-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {service.id === 'outstation' && (
                        <svg className="w-10 h-10 text-penta-gold" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                        </svg>
                      )}
                      {service.id === 'airport' && (
                        <svg className="w-10 h-10 text-penta-gold" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.36 2.64L19.29 3.71L16.17 6.83L14.83 5.49L13.76 6.56L16.24 9.04L9.35 15.93L5.78 12.36L2.64 15.5L9.35 22.21L22.07 9.49L20.36 2.64Z"/>
                        </svg>
                      )}
                      {service.id === 'local' && (
                        <svg className="w-10 h-10 text-penta-gold" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2M12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z"/>
                        </svg>
                      )}
                      {service.id === 'multiway' && (
                        <svg className="w-10 h-10 text-penta-gold" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M2 12C2 6.48 6.48 2 12 2S22 6.48 22 12 17.52 22 12 22 2 17.52 2 12M15.5 8L14 6.5 9.5 11 14 15.5 15.5 14 12.5 11 15.5 8Z"/>
                        </svg>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-penta-cream mb-3 group-hover:text-penta-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-penta-light-gray text-sm leading-relaxed mb-4 line-clamp-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-penta-gold rounded-full" />
                        <span className="text-xs text-penta-light-gray">{feature}</span>
                      </div>
                    ))}
                  </div>

                   
                </div>
              </div>
            </div>
          ))}
        </div>
  
      </div>
    </section>
  );
};

export default ServicesSection;