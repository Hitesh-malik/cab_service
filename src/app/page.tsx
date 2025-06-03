// src/app/page.tsx
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Premium Taxi Service - Book Your Ride Now",
  description: "Experience luxury transportation with Penta Cab. Professional drivers, premium vehicles, and 24/7 service. Book your taxi now for a comfortable and reliable journey.",
};
// In your home page or any other page
import StatsSection from '@/components/StatsSection';
import IntroductionSection from '@/components/IntroductionSection';
import ServicesSection from '@/components/ServicesSection';
import BookingCTASection from '@/components/BookingCTASection';
import BookingWidget from '@/components/BookingWidget';

export default function HomePage() {
  return (
    <div>
      {/* Other sections */}
      <StatsSection />
      <section className="py-16">
        <BookingWidget />
      </section>
      <IntroductionSection />
      <ServicesSection />
      <BookingCTASection />
      {/* Other sections */}
    </div>
  );
}