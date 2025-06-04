
// src/components/BookingForm.tsx
'use client';

import React from 'react';
import { theme } from '@/styles/theme';
import { ServiceTabs } from '@/components/UI/ServiceTabs';
import { ThemedButton } from '@/components/UI/ThemedButton';
import { AirportForm } from '@/components/forms/AirportForm';
import { OutstationForm } from '@/components/forms/OutstationForm';
import { LocalForm } from '@/components/forms/LocalForm';
import { useBookingForm } from '@/hooks/useBookingForm';

export const BookingForm: React.FC = () => {
  const {
    activeService,
    setActiveService,
    activeTripType,
    setActiveTripType,
    activePickupDrop,
    setActivePickupDrop,
    bookingData,
    errors,
    isSubmitting,
    handleInputChange,
    handleSubmit
  } = useBookingForm();

  const renderForm = () => {
    switch (activeService) {
      case 'AIRPORT':
        return (
          <AirportForm
            bookingData={bookingData}
            errors={errors}
            activePickupDrop={activePickupDrop}
            onInputChange={handleInputChange}
            onPickupDropChange={setActivePickupDrop}
          />
        );
      case 'OUTSTATION':
        return (
          <OutstationForm
            bookingData={bookingData}
            errors={errors}
            activeTripType={activeTripType}
            onInputChange={handleInputChange}
            onTripTypeChange={setActiveTripType}
          />
        );
      case 'LOCAL':
        return (
          <LocalForm
            bookingData={bookingData}
            errors={errors}
            onInputChange={handleInputChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className="flex-1 rounded-2xl p-6 border"
      style={{
        backgroundColor: theme.colors.background.card,
        borderColor: theme.colors.border.goldLight,
        boxShadow: `0 8px 32px ${theme.colors.shadow.elevated}`,
      }}
    >
      <ServiceTabs
        activeService={activeService}
        onServiceChange={setActiveService}
      />
      
      {renderForm()}

      <ThemedButton
        onClick={handleSubmit}
        disabled={isSubmitting}
        loading={isSubmitting}
        className="w-full mt-6"
      >
        Search Cabs
      </ThemedButton>
    </div>
  );
};