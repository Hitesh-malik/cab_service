
// src/components/forms/OutstationForm.tsx (Enhanced)
'use client';

import React from 'react';
import { theme } from '@/styles/theme';
import { ThemedSelect } from '@/components/UI/ThemedSelect';
import { ThemedDatePicker } from '@/components/UI/ThemedDatePicker';
import { ThemedTimePicker } from '@/components/UI/ThemedTimePicker';
import { TabGroup } from '@/components/UI/TabGroup';
import { CitySwapButton } from '@/components/UI/CitySwapButton';
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
}) => {
  const handleCitySwap = () => {
    const fromCity = bookingData.from;
    const toCity = bookingData.to;
    
    onInputChange('from', toCity);
    onInputChange('to', fromCity);
  };

  // Helper function to get minimum return date (should be same day or later than departure)
  const getMinReturnDate = (): string => {
    if (!bookingData.date) return '';
    
    // Convert DD-MM-YY to YYYY-MM-DD for comparison
    const [day, month, year] = bookingData.date.split('-');
    const fullYear = year.length === 2 ? `20${year}` : year;
    return `${fullYear}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  return (
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

      {/* Cities Selection with Swap Button */}
      <div className="space-y-4">
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
          <ThemedSelect
            value={bookingData.from}
            onChange={(e) => onInputChange('from', e.target.value)}
            options={CITIES}
            placeholder="Select Departure City"
            error={errors.from}
          />
        </div>

        {/* Swap Button */}
        <CitySwapButton onSwap={handleCitySwap} className="-my-2 relative z-10" />

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
            placeholder="Select Destination City"
            error={errors.to}
          />
        </div>
      </div>

      {/* Departure Date and Time */}
      <div className="space-y-4">
        <div 
          className="p-4 rounded-lg border"
          style={{
            backgroundColor: theme.colors.background.secondary,
            borderColor: theme.colors.border.goldLight,
          }}
        >
          <h4 
            className="font-semibold mb-3 text-center"
            style={{
              color: theme.colors.text.primary,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
              fontWeight: theme.typography.fontWeight.semibold,
            }}
          >
            🚗 DEPARTURE DETAILS
          </h4>
          
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
                DEPARTURE DATE 📅
              </label>
              <ThemedDatePicker
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
              <ThemedTimePicker
                value={bookingData.pickupTime}
                onChange={(e) => onInputChange('pickupTime', e.target.value)}
                error={errors.pickupTime}
              />
            </div>
          </div>
        </div>

        {/* Return Date (Only for Round Trip) */}
        {activeTripType === 'ROUNDWAY' && (
          <div 
            className="p-4 rounded-lg border animate-fadeIn"
            style={{
              backgroundColor: theme.colors.background.card,
              borderColor: theme.colors.border.goldLight,
            }}
          >
            <h4 
              className="font-semibold mb-3 text-center"
              style={{
                color: theme.colors.text.primary,
                fontFamily: theme.typography.fontFamily.sans.join(', '),
                fontWeight: theme.typography.fontWeight.semibold,
              }}
            >
              🔄 RETURN DETAILS
            </h4>
            
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
                  RETURN DATE 📅
                </label>
                <ThemedDatePicker
                  value={bookingData.returnDate || ''}
                  onChange={(e) => onInputChange('returnDate', e.target.value)}
                  error={errors.returnDate}
                  min={getMinReturnDate()}
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
                  RETURN TIME ⏰
                </label>
                <ThemedTimePicker
                  value={bookingData.time}
                  onChange={(e) => onInputChange('time', e.target.value)}
                  error={errors.time}
                />
              </div>
            </div>
            
            {/* Return Trip Info */}
            <div 
              className="mt-3 p-2 rounded text-center text-sm"
              style={{
                backgroundColor: theme.colors.background.secondary,
                color: theme.colors.text.muted,
                fontFamily: theme.typography.fontFamily.sans.join(', '),
              }}
            >
              Return journey: {bookingData.to || 'Destination'} → {bookingData.from || 'Origin'}
            </div>
          </div>
        )}
      </div>

      {/* Trip Summary */}
      {bookingData.from && bookingData.to && (
        <div 
          className="p-3 rounded-lg text-center border"
          style={{
            backgroundColor: theme.colors.background.secondary,
            borderColor: theme.colors.border.goldLight,
            color: theme.colors.text.primary,
            fontFamily: theme.typography.fontFamily.sans.join(', '),
          }}
        >
          <div className="flex items-center justify-center space-x-2">
            <span className="font-semibold">{bookingData.from}</span>
            <span style={{ color: theme.colors.accent.gold }}>
              {activeTripType === 'ROUNDWAY' ? '⇄' : '→'}
            </span>
            <span className="font-semibold">{bookingData.to}</span>
          </div>
          <div className="text-sm mt-1" style={{ color: theme.colors.text.muted }}>
            {activeTripType === 'ROUNDWAY' ? 'Round Trip' : 'One Way Trip'}
          </div>
        </div>
      )}
    </div>
  );
};