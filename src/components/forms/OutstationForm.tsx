// src/components/forms/OutstationForm.tsx
'use client';

import React from 'react';
import { theme } from '@/styles/theme';
import { ThemedInput } from '@/components/UI/ThemedInput';
import { ThemedSelect } from '@/components/UI/ThemedSelect';
import { TabGroup } from '@/components/UI/TabGroup';
import { BookingFormData, TripType } from '@/types/booking';
import { CITIES } from '@/constants/booking';

interface OutstationFormProps {
  bookingData: BookingFormData;
  errors: Record<string, string>;
  activeTripType: TripType;
  onInputChange: (field: keyof BookingFormData, value: string) => void;
  onTripTypeChange: (type: TripType) => void;
}

export const OutstationForm: React.FC<OutstationFormProps> = ({
  bookingData,
  errors,
  activeTripType,
  onInputChange,
  onTripTypeChange
}) => (
  <div className="space-y-4">
    <div className="text-center">
      <h3 
        className="font-bold mb-4"
        style={{
          color: theme.colors.text.primary,
          fontFamily: theme.typography.fontFamily.sans.join(', '),
          fontSize: theme.typography.fontSize.lg,
          fontWeight: theme.typography.fontWeight.bold,
        }}
      >
        INDIA'S PREMIER INTERCITY CABS
      </h3>
      <TabGroup 
        options={['ONEWAY', 'ROUNDWAY']}
        activeOption={activeTripType}
        onOptionChange={onTripTypeChange}
      />
    </div>

    <div>
      <label 
        className="block text-sm font-medium mb-2"
        style={{
          color: theme.colors.text.secondary,
          fontFamily: theme.typography.fontFamily.sans.join(', '),
          fontWeight: theme.typography.fontWeight.medium,
        }}
      >
        FROM
      </label>
      <div className="relative">
        <ThemedSelect
          value={bookingData.from}
          onChange={(e) => onInputChange('from', e.target.value)}
          options={CITIES}
          placeholder="Select City"
          error={errors.from}
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            style={{ color: theme.colors.text.muted }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
        </div>
      </div>
    </div>

    <div>
      <label 
        className="block text-sm font-medium mb-2"
        style={{
          color: theme.colors.text.secondary,
          fontFamily: theme.typography.fontFamily.sans.join(', '),
          fontWeight: theme.typography.fontWeight.medium,
        }}
      >
        TO
      </label>
      <ThemedSelect
        value={bookingData.to}
        onChange={(e) => onInputChange('to', e.target.value)}
        options={CITIES}
        placeholder="Select City"
        error={errors.to}
      />
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div>
        <label 
          className="block text-sm font-medium mb-2"
          style={{
            color: theme.colors.text.secondary,
            fontFamily: theme.typography.fontFamily.sans.join(', '),
            fontWeight: theme.typography.fontWeight.medium,
          }}
        >
          DATE 📅
        </label>
        <ThemedInput
          value={bookingData.date}
          onChange={(e) => onInputChange('date', e.target.value)}
          error={errors.date}
        />
      </div>
      <div>
        <label 
          className="block text-sm font-medium mb-2"
          style={{
            color: theme.colors.text.secondary,
            fontFamily: theme.typography.fontFamily.sans.join(', '),
            fontWeight: theme.typography.fontWeight.medium,
          }}
        >
          PICKUP TIME ⏰
        </label>
        <ThemedInput
          value={bookingData.pickupTime}
          onChange={(e) => onInputChange('pickupTime', e.target.value)}
          error={errors.pickupTime}
        />
      </div>
    </div>
  </div>
);