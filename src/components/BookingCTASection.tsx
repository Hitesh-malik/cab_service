// src/components/BookingCTASection.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { theme, themeVariants } from '@/styles/theme';

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

  const trustIndicators = [
    { icon: '🛡️', label: 'Secure Booking', desc: 'SSL Protected' },
    { icon: '💳', label: 'Easy Payment', desc: 'Multiple Options' },
    { icon: '📞', label: '24/7 Support', desc: 'Always Available' },
    { icon: '⭐', label: '5-Star Rated', desc: 'Customer Choice' }
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
            animationDelay: '1000ms'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="mb-8">
              <h2 
                className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6"
                style={{
                  fontFamily: theme.typography.fontFamily.display.join(', '),
                  color: theme.colors.text.primary,
                  fontSize: theme.typography.fontSize['5xl'],
                  fontWeight: theme.typography.fontWeight.bold,
                }}
              >
                Book with us for a{' '}
                <span 
                  className="bg-clip-text text-transparent"
                  style={{
                    background: theme.gradients.goldToAmber,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
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
                  one-stop solution in Ahmedabad for one-way and round-trip journeys, efficient airport pickups and drops, and convenient local car rentals.{' '}
                  <span 
                    className="px-2 py-1 rounded font-semibold"
                    style={{
                      backgroundColor: theme.colors.status.error,
                      color: theme.colors.text.primary,
                    }}
                  >
                    Penta Cab
                  </span>{' '}
                  a trusted car rental company in Ahmedabad, has been serving customers for over a decade. We offer a{' '}
                  <span 
                    className="font-semibold"
                    style={{ color: theme.colors.accent.gold }}
                  >
                    hassle-free booking process
                  </span>, letting you provide the flexibility to select from a diverse range of cars, including Premium options, all within your budget. Our helpful representatives assist in planning your trip. Popular services include{' '}
                  <span 
                    className="font-semibold"
                    style={{ color: theme.colors.accent.gold }}
                  >
                    corporate car rentals
                  </span> and{' '}
                  <span 
                    className="font-semibold"
                    style={{ color: theme.colors.accent.gold }}
                  >
                    outstation cabs
                  </span>. Book with us for a stress-free journey!
                </p>
              </div>
            </div>

            {/* Book Now Button */}
            <div className="mb-12">
              <Link
                href="/book"
                className="group inline-flex items-center space-x-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105"
                style={{
                  background: theme.gradients.gold,
                  color: theme.colors.primary.black,
                  fontFamily: theme.typography.fontFamily.sans.join(', '),
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Why This Trip Will Be Better */}
            <div>
              <h3 
                className="text-2xl font-bold mb-6"
                style={{
                  color: theme.colors.text.primary,
                  fontFamily: theme.typography.fontFamily.sans.join(', '),
                  fontSize: theme.typography.fontSize['2xl'],
                  fontWeight: theme.typography.fontWeight.bold,
                }}
              >
                Know Why this trip will be better ?
              </h3>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div 
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2"
                      style={{
                        backgroundColor: theme.colors.background.card,
                        borderColor: theme.colors.accent.gold,
                      }}
                    >
                      <svg 
                        className="w-4 h-4" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        style={{ color: theme.colors.accent.gold }}
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p 
                        className="leading-relaxed"
                        style={{
                          color: theme.colors.text.secondary,
                          lineHeight: theme.typography.lineHeight.relaxed,
                        }}
                      >
                        <span 
                          className="font-semibold"
                          style={{ color: theme.colors.text.primary }}
                        >
                          {benefit.title}
                        </span>, {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Illustration - Enhanced with theme */}
          <div className="animate-slide-in-right lg:order-2">
            <div className="relative">
              {/* Main Card - Now using theme colors */}
              <div 
                className="rounded-3xl p-8 lg:p-12 relative overflow-hidden border"
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.background.card}, ${theme.colors.background.secondary})`,
                  borderColor: theme.colors.border.goldLight,
                  boxShadow: `0 12px 40px ${theme.colors.shadow.elevated}`,
                }}
              >
                
                {/* Decorative elements - themed */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: theme.colors.status.error }}
                  />
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: theme.colors.secondary.warmYellow }}
                  />
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: theme.colors.status.success }}
                  />
                </div>

                {/* Rating Badge - themed */}
                <div 
                  className="absolute top-6 left-6 px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1"
                  style={{
                    backgroundColor: theme.colors.accent.gold,
                    color: theme.colors.primary.black,
                  }}
                >
                  <span>❤️</span>
                  <span>99</span>
                </div>

                {/* Main Illustration */}
                <div className="text-center mb-8">
                  <div className="inline-block relative">
                    {/* Character with backpack - themed */}
                    <div 
                      className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center relative"
                      style={{
                        background: `linear-gradient(135deg, ${theme.colors.accent.gold}, ${theme.colors.accent.darkGold})`,
                      }}
                    >
                      <div className="text-4xl">🧳</div>
                      {/* Hat - themed */}
                      <div 
                        className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-8 rounded-full"
                        style={{
                          backgroundColor: theme.colors.secondary.warmYellow,
                        }}
                      />
                    </div>
                    
                    {/* Arms raised - themed */}
                    <div 
                      className="absolute -left-8 top-8 w-16 h-4 rounded-full transform -rotate-45"
                      style={{
                        backgroundColor: theme.colors.accent.bronze,
                      }}
                    />
                    <div 
                      className="absolute -right-8 top-8 w-16 h-4 rounded-full transform rotate-45"
                      style={{
                        backgroundColor: theme.colors.accent.bronze,
                      }}
                    />
                  </div>
                </div>

                {/* Travel Elements - themed */}
                <div className="relative">
                  {/* Luggage - themed */}
                  <div 
                    className="absolute bottom-0 left-4 w-8 h-12 rounded-lg"
                    style={{
                      backgroundColor: theme.colors.secondary.warmYellow,
                    }}
                  />
                  <div 
                    className="absolute bottom-0 left-14 w-6 h-8 rounded-lg"
                    style={{
                      backgroundColor: theme.colors.primary.charcoal,
                    }}
                  />
                  
                  {/* Location pin - themed */}
                  <div 
                    className="absolute top-4 right-8 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: theme.colors.status.error,
                    }}
                  >
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{
                        backgroundColor: theme.colors.primary.white,
                      }}
                    />
                  </div>
                  
                  {/* Compass - themed */}
                  <div 
                    className="absolute bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: theme.gradients.goldToAmber,
                    }}
                  >
                    <div 
                      className="font-bold text-xs"
                      style={{ color: theme.colors.primary.black }}
                    >
                      N
                    </div>
                  </div>
                  
                  {/* Clouds - themed */}
                  <div 
                    className="absolute top-2 left-8 w-16 h-8 rounded-full opacity-60"
                    style={{
                      backgroundColor: theme.colors.primary.white,
                    }}
                  />
                  <div 
                    className="absolute top-4 left-12 w-12 h-6 rounded-full opacity-40"
                    style={{
                      backgroundColor: theme.colors.primary.white,
                    }}
                  />
                  
                  {/* Decorative dots pattern - themed */}
                  <div className="absolute bottom-8 right-12">
                    <div className="grid grid-cols-4 gap-1">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="w-1.5 h-1.5 rounded-full opacity-60"
                          style={{ 
                            backgroundColor: theme.colors.secondary.orange,
                            animationDelay: `${i * 100}ms`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom icons - themed */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: theme.colors.status.error,
                    }}
                  >
                    <span 
                      className="text-xs"
                      style={{ color: theme.colors.primary.white }}
                    >
                      📋
                    </span>
                  </div>
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: theme.colors.primary.charcoal,
                    }}
                  >
                    <span 
                      className="text-xs"
                      style={{ color: theme.colors.primary.white }}
                    >
                      🔄
                    </span>
                  </div>
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: theme.colors.accent.gold,
                    }}
                  >
                    <span 
                      className="text-xs"
                      style={{ color: theme.colors.primary.black }}
                    >
                      📱
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating elements around the card - themed */}
              <div 
                className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center animate-bounce"
                style={{
                  background: theme.gradients.gold,
                }}
              >
                <span 
                  className="text-lg"
                  style={{ color: theme.colors.primary.black }}
                >
                  ✨
                </span>
              </div>
              
              <div 
                className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center animate-pulse"
                style={{
                  background: theme.gradients.gold,
                }}
              >
                <span 
                  className="text-xl"
                  style={{ color: theme.colors.primary.black }}
                >
                  🚗
                </span>
              </div>
              
              <div 
                className="absolute top-1/2 -right-6 w-8 h-8 rounded-full flex items-center justify-center animate-ping"
                style={{
                  backgroundColor: theme.colors.status.success,
                }}
              >
                <span 
                  className="text-sm"
                  style={{ color: theme.colors.primary.white }}
                >
                  ✓
                </span>
              </div>
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
                    fontFamily: theme.typography.fontFamily.sans.join(', '),
                    fontWeight: theme.typography.fontWeight.semibold,
                  }}
                >
                  {item.label}
                </div>
                <div 
                  className="text-xs"
                  style={{
                    color: theme.colors.text.secondary,
                    fontFamily: theme.typography.fontFamily.sans.join(', '),
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