// src/components/StatsSection.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';

interface StatItem {
  number: string;
  label: string;
  color: string;
  targetValue: number;
  suffix: string;
}

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    {
      number: '1500+',
      label: 'Trusted Clients',
      color: 'text-orange-500',
      targetValue: 1500,
      suffix: '+'
    },
    {
      number: '7500+',
      label: 'Comfort Rides',
      color: 'text-cyan-500',
      targetValue: 7500,
      suffix: '+'
    },
    {
      number: '+10',
      label: 'Years of Service',
      color: 'text-purple-500',
      targetValue: 10,
      suffix: '+'
    }
  ];

  // Intersection Observer to trigger animation when component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // Animate numbers when component becomes visible
  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = stat.targetValue / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
          step++;
          current = Math.min(increment * step, stat.targetValue);
          
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = Math.floor(current);
            return newValues;
          });

          if (step >= steps) {
            clearInterval(timer);
          }
        }, duration / steps);

        return () => clearInterval(timer);
      });
    }
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="py-16 lg:py-20 bg-gradient-to-br from-penta-charcoal/20 to-transparent relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-penta-gold rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-penta-amber rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center animate-fade-in-up bg-penta-charcoal/30 backdrop-blur-sm rounded-2xl p-8 border border-penta-gold/10 hover:border-penta-gold/30 transition-all duration-500 hover:shadow-gold hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Animated Number */}
              <div className={`text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 ${stat.color} transition-all duration-300 group-hover:scale-110`}>
                {index === 2 ? '+' : ''}{animatedValues[index]}{index !== 2 ? '+' : ''}
              </div>
              
              {/* Label */}
              <div className="text-penta-light-gray font-medium text-lg group-hover:text-penta-cream transition-colors duration-300">
                {stat.label}
              </div>

              {/* Decorative line */}
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-penta-gold to-transparent mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-cyan-400 leading-relaxed">
            Safe, reliable and always on time.
          </h3>
          
          {/* Decorative elements */}
          <div className="flex items-center justify-center mt-6 space-x-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400" />
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
        </div>
      </div>
      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-penta-gold to-transparent" />
    </section>
  );
};

export default StatsSection;