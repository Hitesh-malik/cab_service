// src/components/IntroductionSection.tsx
'use client';
import React from 'react';
import { theme, themeVariants } from '@/styles/theme';

const IntroductionSection: React.FC = () => {
  const luxuryTheme = themeVariants.luxury;

  return (
    <section 
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{
        background: theme.gradients.blackToCharcoal,
      }}
    >
      {/* Background decoration using theme colors */}
      <div className="absolute inset-0" style={{ opacity: 0.05 }}>
        <div 
          className="absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl animate-pulse"
          style={{
            backgroundColor: theme.colors.accent.gold,
          }}
        />
        <div 
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{
            backgroundColor: theme.colors.secondary.amber,
            animationDelay: '1000ms'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Introduction */}
        <div className="mb-16 animate-fade-in-up">
          <h2 
            className="text-3xl lg:text-4xl font-bold mb-8"
            style={{
              fontFamily: theme.typography.fontFamily.display.join(', '),
              color: theme.colors.text.primary,
              fontSize: theme.typography.fontSize['4xl'],
            }}
          >
            Introduction:
          </h2>
          <div 
            className="space-y-6 leading-relaxed text-lg"
            style={{
              color: theme.colors.text.secondary,
              lineHeight: theme.typography.lineHeight.relaxed,
            }}
          >
            <p>
              Encouraging everyone to embark on a safe and memorable journey drives our success. Whether it's a one-way cab service or corporate car rental, each journey adds special moments to your life. At{' '}
              <span 
                className="font-semibold"
                style={{ color: theme.colors.accent.gold }}
              >
                Penta Cab
              </span>, we ensure that your life is filled with these memorable moments, guaranteeing the safest journey for each of our guests.
            </p>
            <p>
              As a taxi aggregator, we started our journey in 2020. Slow wins the race engraved in our journey that enabled us to grow gradually as we started delivering satisfaction to our guests bit by bit. Safety, convenience, and satisfaction have been the cornerstones when you hire a taxi with us today and tomorrow, too.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <h2 
            className="text-3xl lg:text-4xl font-bold mb-8"
            style={{
              fontFamily: theme.typography.fontFamily.display.join(', '),
              color: theme.colors.text.primary,
              fontSize: theme.typography.fontSize['4xl'],
            }}
          >
            Features:
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6 leading-relaxed" style={{ color: theme.colors.text.secondary }}>
              
              {/* Feature Card 1 */}
              <div 
                className="group p-6 rounded-xl border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: theme.colors.background.card,
                  borderColor: theme.colors.border.goldLight,
                  boxShadow: `0 4px 20px ${theme.colors.shadow.card}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.border.gold;
                  e.currentTarget.style.boxShadow = `0 8px 32px ${theme.colors.shadow.gold}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.border.goldLight;
                  e.currentTarget.style.boxShadow = `0 4px 20px ${theme.colors.shadow.card}`;
                }}
              >
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{
                      background: theme.gradients.gold,
                    }}
                  >
                    <span 
                      className="font-bold text-sm"
                      style={{ color: theme.colors.primary.black }}
                    >
                      💰
                    </span>
                  </div>
                  <p>
                    <span 
                      className="font-semibold"
                      style={{ color: theme.colors.accent.gold }}
                    >
                      Cost efficiency
                    </span>{' '}
                    stays at the heart of Penta Cab. You are assured to get the most reasonable price for the journey.
                  </p>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div 
                className="group p-6 rounded-xl border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: theme.colors.background.card,
                  borderColor: theme.colors.border.goldLight,
                  boxShadow: `0 4px 20px ${theme.colors.shadow.card}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.border.gold;
                  e.currentTarget.style.boxShadow = `0 8px 32px ${theme.colors.shadow.gold}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.border.goldLight;
                  e.currentTarget.style.boxShadow = `0 4px 20px ${theme.colors.shadow.card}`;
                }}
              >
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{
                      background: theme.gradients.gold,
                    }}
                  >
                    <span 
                      className="font-bold text-sm"
                      style={{ color: theme.colors.primary.black }}
                    >
                      ✨
                    </span>
                  </div>
                  <p>
                    More importantly, we are committed to delivering a{' '}
                    <span 
                      className="font-semibold"
                      style={{ color: theme.colors.accent.gold }}
                    >
                      luxurious traveling experience
                    </span>. Therefore, we staunchly focus on adding convenience to your journey, regardless of the distance.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 leading-relaxed" style={{ color: theme.colors.text.secondary }}>
              
              {/* Feature Card 3 */}
              <div 
                className="group p-6 rounded-xl border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: theme.colors.background.card,
                  borderColor: theme.colors.border.goldLight,
                  boxShadow: `0 4px 20px ${theme.colors.shadow.card}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.border.gold;
                  e.currentTarget.style.boxShadow = `0 8px 32px ${theme.colors.shadow.gold}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.border.goldLight;
                  e.currentTarget.style.boxShadow = `0 4px 20px ${theme.colors.shadow.card}`;
                }}
              >
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{
                      background: theme.gradients.gold,
                    }}
                  >
                    <span 
                      className="font-bold text-sm"
                      style={{ color: theme.colors.primary.black }}
                    >
                      🚗
                    </span>
                  </div>
                  <p>
                    Whether you book a round trip with us or go around the world, your journey is{' '}
                    <span 
                      className="font-semibold"
                      style={{ color: theme.colors.accent.gold }}
                    >
                      comfortable, cheerful, and matchless
                    </span>. With our cab hire service, you are guaranteed to receive instant pick-up and drop service.
                  </p>
                </div>
              </div>

              {/* Feature Card 4 */}
              <div 
                className="group p-6 rounded-xl border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: theme.colors.background.card,
                  borderColor: theme.colors.border.goldLight,
                  boxShadow: `0 4px 20px ${theme.colors.shadow.card}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.border.gold;
                  e.currentTarget.style.boxShadow = `0 8px 32px ${theme.colors.shadow.gold}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.border.goldLight;
                  e.currentTarget.style.boxShadow = `0 4px 20px ${theme.colors.shadow.card}`;
                }}
              >
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{
                      background: theme.gradients.gold,
                    }}
                  >
                    <span 
                      className="font-bold text-sm"
                      style={{ color: theme.colors.primary.black }}
                    >
                      🛡️
                    </span>
                  </div>
                  <p>
                    Besides price and luxury, we strictly maintain the highest level of{' '}
                    <span 
                      className="font-semibold"
                      style={{ color: theme.colors.accent.gold }}
                    >
                      security and safety
                    </span>{' '}
                    by deploying stringent security apparatus, leveraging technology, and availing it at your fingertips.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <h2 
            className="text-3xl lg:text-4xl font-bold mb-8"
            style={{
              fontFamily: theme.typography.fontFamily.display.join(', '),
              color: theme.colors.text.primary,
              fontSize: theme.typography.fontSize['4xl'],
            }}
          >
            Benefits:
          </h2>
          <div 
            className="space-y-6 leading-relaxed text-lg"
            style={{
              color: theme.colors.text.secondary,
              lineHeight: theme.typography.lineHeight.relaxed,
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                
                {/* Benefit Card 1 */}
                <div 
                  className="group p-6 rounded-xl border transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: theme.colors.background.card,
                    borderColor: theme.colors.border.goldLight,
                    boxShadow: `0 4px 20px ${theme.colors.shadow.card}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = theme.colors.border.gold;
                    e.currentTarget.style.boxShadow = `0 8px 32px ${theme.colors.shadow.gold}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = theme.colors.border.goldLight;
                    e.currentTarget.style.boxShadow = `0 4px 20px ${theme.colors.shadow.card}`;
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                      style={{
                        backgroundColor: `${theme.colors.status.success}20`,
                      }}
                    >
                      <span 
                        className="text-lg"
                        style={{ color: theme.colors.status.success }}
                      >
                        🌱
                      </span>
                    </div>
                    <p>
                      We all are at the mercy of changing environments. Climate change is real, and therefore, at Penta Cab, we invest a lot of energy in providing an{' '}
                      <span 
                        className="font-semibold"
                        style={{ color: theme.colors.accent.gold }}
                      >
                        eco-friendly and hazard-free travel experience
                      </span>{' '}
                      with one-way cab service as well as round-trip.
                    </p>
                  </div>
                </div>

                {/* Benefit Card 2 */}
                <div 
                  className="group p-6 rounded-xl border transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: theme.colors.background.card,
                    borderColor: theme.colors.border.goldLight,
                    boxShadow: `0 4px 20px ${theme.colors.shadow.card}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = theme.colors.border.gold;
                    e.currentTarget.style.boxShadow = `0 8px 32px ${theme.colors.shadow.gold}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = theme.colors.border.goldLight;
                    e.currentTarget.style.boxShadow = `0 4px 20px ${theme.colors.shadow.card}`;
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                      style={{
                        backgroundColor: `${theme.colors.status.info}20`,
                      }}
                    >
                      <span 
                        className="text-lg"
                        style={{ color: theme.colors.status.info }}
                      >
                        💎
                      </span>
                    </div>
                    <p>
                      Our price mechanism is for everyone to see and evaluate, as we believe in{' '}
                      <span 
                        className="font-semibold"
                        style={{ color: theme.colors.accent.gold }}
                      >
                        fair play and transparency
                      </span>. Given our adherence to a unique price algorithm, we deliver the most luxurious corporate car rental at pocket-friendly rates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                
                {/* Benefit Card 3 */}
                <div 
                  className="group p-6 rounded-xl border transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: theme.colors.background.card,
                    borderColor: theme.colors.border.goldLight,
                    boxShadow: `0 4px 20px ${theme.colors.shadow.card}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = theme.colors.border.gold;
                    e.currentTarget.style.boxShadow = `0 8px 32px ${theme.colors.shadow.gold}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = theme.colors.border.goldLight;
                    e.currentTarget.style.boxShadow = `0 4px 20px ${theme.colors.shadow.card}`;
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                      style={{
                        backgroundColor: `#9333ea20`, // Purple with transparency
                      }}
                    >
                      <span 
                        className="text-lg"
                        style={{ color: '#9333ea' }}
                      >
                        🕐
                      </span>
                    </div>
                    <p>
                      Always keep in mind that{' '}
                      <span 
                        className="font-semibold"
                        style={{ color: theme.colors.accent.gold }}
                      >
                        Penta Cab is always at your service
                      </span>. You can book our taxi services 24*7 and trust us to deliver a reliable and effective transportation solution.
                    </p>
                  </div>
                </div>

                {/* Benefit Card 4 */}
                <div 
                  className="group p-6 rounded-xl border transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: theme.colors.background.card,
                    borderColor: theme.colors.border.goldLight,
                    boxShadow: `0 4px 20px ${theme.colors.shadow.card}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = theme.colors.border.gold;
                    e.currentTarget.style.boxShadow = `0 8px 32px ${theme.colors.shadow.gold}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = theme.colors.border.goldLight;
                    e.currentTarget.style.boxShadow = `0 4px 20px ${theme.colors.shadow.card}`;
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                      style={{
                        backgroundColor: `${theme.colors.secondary.warmYellow}20`,
                      }}
                    >
                      <span 
                        className="text-lg"
                        style={{ color: theme.colors.secondary.warmYellow }}
                      >
                        📞
                      </span>
                    </div>
                    <p>
                      Next time, if you want to ride safely and with full comfort and convenience, choose a stress-free travel experience at Penta Cab on{' '}
                      <a 
                        href="tel:9157576555" 
                        className="font-semibold underline transition-colors duration-300"
                        style={{ color: theme.colors.accent.gold }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = theme.colors.accent.warmGold;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = theme.colors.accent.gold;
                        }}
                      >
                        9157576555
                      </a>{' '}
                      and enjoy the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom line */}
        <div className="mt-16 flex items-center justify-center">
          <div 
            className="w-24 h-1 rounded-full"
            style={{
              background: theme.gradients.gold,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;