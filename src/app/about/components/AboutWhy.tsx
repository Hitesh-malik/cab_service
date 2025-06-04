'use client';
import React from 'react';
import { theme } from '@/styles/theme';


export const AboutWhy: React.FC = () => {
    return (
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-display font-bold mb-6"
              style={{ color: theme.colors.text.primary }}
            >
              Why Choose Us?
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: theme.colors.text.secondary }}
            >
              Discover what sets Penta Cab apart from the competition and why thousands trust us for their transportation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                number: "1",
                title: "Safety First",
                description: "Your safety is our top priority. We rigorously screen and train our drivers, employ cutting-edge safety features, and regularly maintain our vehicles to ensure that you reach your destination securely.",
                icon: "🛡️"
              },
              {
                number: "2",
                title: "Convenience at Your Fingertips",
                description: "Booking a taxi has never been easier. With our user-friendly website, you can book a ride within minutes, track your driver in real-time, and even pay cashlessly for a hassle-free experience.",
                icon: "📱"
              },
              {
                number: "3",
                title: "Exceptional Customer Service",
                description: "Our dedicated customer support team is available around the clock to assist you with any queries or concerns. We believe in going the extra mile to make your journey as smooth as possible.",
                icon: "🎯"
              },
              {
                number: "4",
                title: "Fair and Transparent Pricing",
                description: "We believe in fair pricing. With us, you'll never have to worry about hidden fees or surcharges. Our transparent pricing policy ensures that you only pay what you see.",
                icon: "💰"
              },
              {
                number: "5",
                title: "Environmental Responsibility",
                description: "As a responsible company, we are committed to reducing our carbon footprint. We actively promote the use of eco-friendly vehicles and employ environmentally conscious practices wherever possible.",
                icon: "🌱"
              }
            ].map((item, index) => (
              <div
                key={item.number}
                className="group rounded-2xl p-6 lg:p-8 border hover:border-opacity-40 transition-all duration-300 animate-fade-in-up"
                style={{
                  background: theme.gradients.primary,
                  borderColor: theme.colors.border.gold + '20',
                  animationDelay: `${index * 100}ms`,
                  boxShadow: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.border.gold + '40';
                  e.currentTarget.style.boxShadow = `0 20px 40px ${theme.colors.shadow.gold}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.border.gold + '20';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: theme.gradients.gold,
                        color: theme.colors.primary.black
                      }}
                    >
                      {item.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-2xl">{item.icon}</span>
                      <h3
                        className="text-xl font-bold group-hover:opacity-80 transition-colors duration-300"
                        style={{ color: theme.colors.text.primary }}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <p
                      className="leading-relaxed"
                      style={{ color: theme.colors.text.secondary }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}