// src/app/about/page.tsx
'use client';
import React from 'react';
import { theme } from '@/styles/theme'; 

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.primary.black }}>
      {/* Hero Section */}
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

      {/* Our Story Section */}
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

      {/* Our Mission Section */}
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

      {/* Why Choose Us Section */}
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

      {/* Our Vision Section */}
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

      {/* Thank You Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div 
              className="rounded-2xl p-8 lg:p-12"
              style={{ 
                background: theme.gradients.gold,
                color: theme.colors.primary.black
              }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Thank You for Choosing Penta Cab
              </h3>
              <p className="text-lg lg:text-xl leading-relaxed mb-8">
                We look forward to serving you and being your trusted partner on the road ahead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="px-8 py-3 rounded-lg font-bold transition-colors duration-300"
                  style={{ 
                    backgroundColor: theme.colors.primary.black,
                    color: theme.colors.accent.gold
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.background.tertiary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.primary.black;
                  }}
                >
                  Book Your Ride
                </button>
                <a
                  href="/contact"
                  className="border-2 px-8 py-3 rounded-lg font-bold transition-all duration-300 inline-block"
                  style={{ 
                    borderColor: theme.colors.primary.black,
                    color: theme.colors.primary.black
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.primary.black;
                    e.currentTarget.style.color = theme.colors.accent.gold;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = theme.colors.primary.black;
                  }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        className="py-16 lg:py-24"
        style={{ backgroundColor: theme.colors.background.tertiary + '30' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl lg:text-4xl font-display font-bold mb-6"
              style={{ color: theme.colors.text.primary }}
            >
              Our Core Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Excellence",
                description: "We strive for excellence in every aspect of our service, from driver training to vehicle maintenance."
              },
              {
                icon: "🤝",
                title: "Reliability",
                description: "Count on us to be there when you need us most. Punctuality and dependability are our promises to you."
              },
              {
                icon: "💫",
                title: "Innovation",
                description: "We continuously embrace new technologies and practices to enhance your transportation experience."
              }
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
    </div>
  );
};

export default AboutPage;