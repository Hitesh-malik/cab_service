// src/components/IntroductionSection.tsx
'use client';

import React from 'react';

const IntroductionSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-penta-charcoal/10 to-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-penta-gold rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-penta-amber rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Introduction */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-penta-cream mb-8">
            Introduction:
          </h2>
          <div className="space-y-6 text-penta-light-gray leading-relaxed text-lg">
            <p>
              Encouraging everyone to embark on a safe and memorable journey drives our success. Whether it's a one-way cab service or corporate car rental, each journey adds special moments to your life. At <span className="text-penta-gold font-semibold">Penta Cab</span>, we ensure that your life is filled with these memorable moments, guaranteeing the safest journey for each of our guests.
            </p>
            <p>
              As a taxi aggregator, we started our journey in 2020. Slow wins the race engraved in our journey that enabled us to grow gradually as we started delivering satisfaction to our guests bit by bit. Safety, convenience, and satisfaction have been the cornerstones when you hire a taxi with us today and tomorrow, too.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-penta-cream mb-8">
            Features:
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6 text-penta-light-gray leading-relaxed">
              <div className="group p-6 bg-gradient-dark rounded-xl border border-penta-gold/20 hover:border-penta-gold/40 transition-all duration-300 hover:shadow-gold">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-penta-black font-bold text-sm">💰</span>
                  </div>
                  <p>
                    <span className="text-penta-gold font-semibold">Cost efficiency</span> stays at the heart of Penta Cab. You are assured to get the most reasonable price for the journey.
                  </p>
                </div>
              </div>

              <div className="group p-6 bg-gradient-dark rounded-xl border border-penta-gold/20 hover:border-penta-gold/40 transition-all duration-300 hover:shadow-gold">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-penta-black font-bold text-sm">✨</span>
                  </div>
                  <p>
                    More importantly, we are committed to delivering a <span className="text-penta-gold font-semibold">luxurious traveling experience</span>. Therefore, we staunchly focus on adding convenience to your journey, regardless of the distance.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-penta-light-gray leading-relaxed">
              <div className="group p-6 bg-gradient-dark rounded-xl border border-penta-gold/20 hover:border-penta-gold/40 transition-all duration-300 hover:shadow-gold">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-penta-black font-bold text-sm">🚗</span>
                  </div>
                  <p>
                    Whether you book a round trip with us or go around the world, your journey is <span className="text-penta-gold font-semibold">comfortable, cheerful, and matchless</span>. With our cab hire service, you are guaranteed to receive instant pick-up and drop service.
                  </p>
                </div>
              </div>

              <div className="group p-6 bg-gradient-dark rounded-xl border border-penta-gold/20 hover:border-penta-gold/40 transition-all duration-300 hover:shadow-gold">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-penta-black font-bold text-sm">🛡️</span>
                  </div>
                  <p>
                    Besides price and luxury, we strictly maintain the highest level of <span className="text-penta-gold font-semibold">security and safety</span> by deploying stringent security apparatus, leveraging technology, and availing it at your fingertips.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-penta-cream mb-8">
            Benefits:
          </h2>
          <div className="space-y-6 text-penta-light-gray leading-relaxed text-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="group p-6 bg-gradient-dark rounded-xl border border-penta-gold/20 hover:border-penta-gold/40 transition-all duration-300 hover:shadow-gold">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-400 text-lg">🌱</span>
                    </div>
                    <p>
                      We all are at the mercy of changing environments. Climate change is real, and therefore, at Penta Cab, we invest a lot of energy in providing an <span className="text-penta-gold font-semibold">eco-friendly and hazard-free travel experience</span> with one-way cab service as well as round-trip.
                    </p>
                  </div>
                </div>

                <div className="group p-6 bg-gradient-dark rounded-xl border border-penta-gold/20 hover:border-penta-gold/40 transition-all duration-300 hover:shadow-gold">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-400 text-lg">💎</span>
                    </div>
                    <p>
                      Our price mechanism is for everyone to see and evaluate, as we believe in <span className="text-penta-gold font-semibold">fair play and transparency</span>. Given our adherence to a unique price algorithm, we deliver the most luxurious corporate car rental at pocket-friendly rates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="group p-6 bg-gradient-dark rounded-xl border border-penta-gold/20 hover:border-penta-gold/40 transition-all duration-300 hover:shadow-gold">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-400 text-lg">🕐</span>
                    </div>
                    <p>
                      Always keep in mind that <span className="text-penta-gold font-semibold">Penta Cab is always at your service</span>. You can book our taxi services 24*7 and trust us to deliver a reliable and effective transportation solution.
                    </p>
                  </div>
                </div>

                <div className="group p-6 bg-gradient-dark rounded-xl border border-penta-gold/20 hover:border-penta-gold/40 transition-all duration-300 hover:shadow-gold">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-cyan-400 text-lg">📞</span>
                    </div>
                    <p>
                      Next time, if you want to ride safely and with full comfort and convenience, choose a stress-free travel experience at Penta Cab on <a href="tel:9157576555" className="text-penta-gold hover:text-penta-warm-gold font-semibold underline transition-colors duration-300">9157576555</a> and enjoy the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom line */}
        <div className="mt-16 flex items-center justify-center">
          <div className="w-24 h-1 bg-gradient-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;