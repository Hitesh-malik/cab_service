// src/components/BookingCTASection.tsx
'use client';

import React from 'react';
import Link from 'next/link';

const BookingCTASection: React.FC = () => {
  const benefits = [
    {
      icon: '🎯',
      title: 'Complete support',
      description: 'assisting you from the initial inquiry to drop-off service.'
    },
    {
      icon: '💳',
      title: 'Easy payment and return policy',
      description: 'along with our transparent Terms & Conditions, ensure a hassle-free experience.'
    },
    {
      icon: '📧',
      title: 'Rest assured, there are no hidden charges',
      description: 'Your invoice will be promptly shared via email and mobile, ensuring complete transparency.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-penta-charcoal/20 to-penta-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-penta-gold rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-6">
                Book with us for a{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  stress-free journey!
                </span>
              </h2>
              
              <div className="space-y-4 text-penta-light-gray leading-relaxed">
                <p>
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-gold rounded-full text-penta-black font-bold text-sm mr-3">P</span>
                  one-stop solution in Ahmedabad for one-way and round-trip journeys, efficient airport pickups and drops, and convenient local car rentals.{' '}
                  <span className="bg-red-500 text-white px-2 py-1 rounded font-semibold">Penta Cab</span>{' '}
                  a trusted car rental company in Ahmedabad, has been serving customers for over a decade. We offer a{' '}
                  <span className="text-penta-gold font-semibold">hassle-free booking process</span>, letting you provide the flexibility to select from a diverse range of cars, including Premium options, all within your budget. Our helpful representatives assist in planning your trip. Popular services include{' '}
                  <span className="text-penta-gold font-semibold">corporate car rentals</span> and{' '}
                  <span className="text-penta-gold font-semibold">outstation cabs</span>. Book with us for a stress-free journey!
                </p>
              </div>
            </div>

            {/* Book Now Button */}
            <div className="mb-12">
              <Link
                href="/book"
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span>Book now</span>
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Why This Trip Will Be Better */}
            <div>
              <h3 className="text-2xl font-bold text-penta-cream mb-6">
                Know Why this trip will be better ?
              </h3>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-penta-charcoal rounded-full flex items-center justify-center border-2 border-penta-gold">
                      <svg className="w-4 h-4 text-penta-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-penta-light-gray leading-relaxed">
                        <span className="text-penta-cream font-semibold">{benefit.title}</span>, {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="animate-slide-in-right lg:order-2">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>

                {/* Rating Badge */}
                <div className="absolute top-6 left-6 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                  <span>❤️</span>
                  <span>99</span>
                </div>

                {/* Main Illustration */}
                <div className="text-center mb-8">
                  <div className="inline-block relative">
                    {/* Character with backpack */}
                    <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center relative">
                      <div className="text-4xl">🧳</div>
                      {/* Hat */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-yellow-400 rounded-full" />
                    </div>
                    
                    {/* Arms raised */}
                    <div className="absolute -left-8 top-8 w-16 h-4 bg-purple-400 rounded-full transform -rotate-45" />
                    <div className="absolute -right-8 top-8 w-16 h-4 bg-purple-400 rounded-full transform rotate-45" />
                  </div>
                </div>

                {/* Travel Elements */}
                <div className="relative">
                  {/* Luggage */}
                  <div className="absolute bottom-0 left-4 w-8 h-12 bg-yellow-500 rounded-lg" />
                  <div className="absolute bottom-0 left-14 w-6 h-8 bg-gray-600 rounded-lg" />
                  
                  {/* Location pin */}
                  <div className="absolute top-4 right-8 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>
                  
                  {/* Compass */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <div className="text-white font-bold text-xs">N</div>
                  </div>
                  
                  {/* Clouds */}
                  <div className="absolute top-2 left-8 w-16 h-8 bg-white rounded-full opacity-60" />
                  <div className="absolute top-4 left-12 w-12 h-6 bg-white rounded-full opacity-40" />
                  
                  {/* Decorative dots pattern */}
                  <div className="absolute bottom-8 right-12">
                    <div className="grid grid-cols-4 gap-1">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="w-1.5 h-1.5 bg-orange-400 rounded-full opacity-60"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom icons */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                  <div className="w-8 h-8 bg-red-400 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">📋</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-400 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">🔄</span>
                  </div>
                  <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">📱</span>
                  </div>
                </div>
              </div>

              {/* Floating elements around the card */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center animate-bounce">
                <span className="text-penta-black text-lg">✨</span>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white text-xl">🚗</span>
              </div>
              
              <div className="absolute top-1/2 -right-6 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center animate-ping">
                <span className="text-white text-sm">✓</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-penta-gold/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: '🛡️', label: 'Secure Booking', desc: 'SSL Protected' },
              { icon: '💳', label: 'Easy Payment', desc: 'Multiple Options' },
              { icon: '📞', label: '24/7 Support', desc: 'Always Available' },
              { icon: '⭐', label: '5-Star Rated', desc: 'Customer Choice' }
            ].map((item, index) => (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-penta-cream font-semibold text-sm">{item.label}</div>
                <div className="text-penta-light-gray text-xs">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTASection;