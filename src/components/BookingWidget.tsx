// src/components/BookingWidget.tsx
'use client';

import React, { useState } from 'react';
import { theme, themeVariants } from '@/styles/theme';

type ServiceType = 'OUTSTATION' | 'LOCAL' | 'AIRPORT';
type TripType = 'ONEWAY' | 'ROUNDWAY';
type PickupDropType = 'PICKUP' | 'DROP';

interface BookingFormData {
  serviceType: ServiceType;
  tripType?: TripType;
  pickupDropType?: PickupDropType;
  from: string;
  to: string;
  airport: string;
  dropAddress: string;
  city: string;
  package: string;
  date: string;
  time: string;
  pickupTime: string;
}

interface QuickInquiryData {
  name: string;
  mobile: string;
  email: string;
  message: string;
}

const BookingWidget: React.FC = () => {
  const [activeService, setActiveService] = useState<ServiceType>('AIRPORT');
  const [activeTripType, setActiveTripType] = useState<TripType>('ONEWAY');
  const [activePickupDrop, setActivePickupDrop] = useState<PickupDropType>('PICKUP');
  
  const [bookingData, setBookingData] = useState<BookingFormData>({
    serviceType: 'AIRPORT',
    tripType: 'ONEWAY',
    pickupDropType: 'PICKUP',
    from: '',
    to: '',
    airport: '',
    dropAddress: '',
    city: '',
    package: '',
    date: '03-06-25',
    time: '11:00 PM',
    pickupTime: '11:00 PM'
  });

  const [inquiryData, setInquiryData] = useState<QuickInquiryData>({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // City options for dropdowns
  const cities = [
    'Ahmedabad', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 
    'Pune', 'Hyderabad', 'Jaipur', 'Surat', 'Vadodara', 'Rajkot'
  ];

  const airports = [
    'Ahmedabad Airport (AMD)', 'Mumbai Airport (BOM)', 'Delhi Airport (DEL)',
    'Bangalore Airport (BLR)', 'Chennai Airport (MAA)', 'Kolkata Airport (CCU)'
  ];

  const packages = [
    '4 Hours / 40 KM', '8 Hours / 80 KM', '12 Hours / 120 KM', 'Full Day'
  ];

  const handleBookingInputChange = (field: keyof BookingFormData, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleInquiryInputChange = (field: keyof QuickInquiryData, value: string) => {
    setInquiryData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateBookingForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Common validations
    if (!bookingData.date) newErrors.date = 'Date is required';
    if (!bookingData.time && !bookingData.pickupTime) newErrors.time = 'Time is required';

    // Service-specific validations
    if (activeService === 'AIRPORT') {
      if (!bookingData.airport) newErrors.airport = 'Airport selection is required';
      if (!bookingData.dropAddress) newErrors.dropAddress = 'Drop address is required';
    } else if (activeService === 'OUTSTATION') {
      if (!bookingData.from) newErrors.from = 'From city is required';
      if (!bookingData.to) newErrors.to = 'To city is required';
    } else if (activeService === 'LOCAL') {
      if (!bookingData.city) newErrors.city = 'City selection is required';
      if (!bookingData.package) newErrors.package = 'Package selection is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateInquiryForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!inquiryData.name.trim()) newErrors.name = 'Name is required';
    if (!inquiryData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    else if (!/^\d{10}$/.test(inquiryData.mobile.replace(/\D/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    if (!inquiryData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiryData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!inquiryData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSearchCabs = async () => {
    if (!validateBookingForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Booking Data:', bookingData);
      alert('Searching for available cabs...');
    } catch (error) {
      console.error('Error searching cabs:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendInquiry = async () => {
    if (!validateInquiryForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Inquiry Data:', inquiryData);
      alert('Inquiry sent successfully! We will contact you soon.');
      setInquiryData({ name: '', mobile: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending inquiry:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Styled input component using theme
  const ThemedInput = ({ 
    type = 'text', 
    placeholder, 
    value, 
    onChange, 
    error,
    className = ''
  }: {
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    className?: string;
  }) => (
    <div className={className}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-3 rounded-lg transition-all duration-300 outline-none"
        style={{
          backgroundColor: theme.colors.background.card,
          color: theme.colors.text.primary,
          border: `2px solid ${error ? theme.colors.status.error : theme.colors.border.muted}`,
          fontFamily: theme.typography.fontFamily.sans.join(', '),
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = theme.colors.accent.gold;
          e.currentTarget.style.boxShadow = `0 0 0 3px ${theme.colors.border.goldLight}`;
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = error ? theme.colors.status.error : theme.colors.border.muted;
          e.currentTarget.style.boxShadow = 'none';
        }}
      />
      {error && (
        <p 
          className="text-sm mt-1"
          style={{ color: theme.colors.status.error }}
        >
          {error}
        </p>
      )}
    </div>
  );

  // Styled select component using theme
  const ThemedSelect = ({ 
    value, 
    onChange, 
    options, 
    placeholder, 
    error,
    className = ''
  }: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
    placeholder: string;
    error?: string;
    className?: string;
  }) => (
    <div className={className}>
      <select
        value={value}
        onChange={onChange}
        className="w-full p-3 rounded-lg transition-all duration-300 outline-none"
        style={{
          backgroundColor: theme.colors.background.card,
          color: theme.colors.text.primary,
          border: `2px solid ${error ? theme.colors.status.error : theme.colors.border.muted}`,
          fontFamily: theme.typography.fontFamily.sans.join(', '),
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = theme.colors.accent.gold;
          e.currentTarget.style.boxShadow = `0 0 0 3px ${theme.colors.border.goldLight}`;
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = error ? theme.colors.status.error : theme.colors.border.muted;
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      {error && (
        <p 
          className="text-sm mt-1"
          style={{ color: theme.colors.status.error }}
        >
          {error}
        </p>
      )}
    </div>
  );

  // Service tabs component
  const renderServiceTabs = () => (
    <div 
      className="flex rounded-lg p-1 mb-6"
      style={{
        backgroundColor: theme.colors.background.secondary,
      }}
    >
      {(['OUTSTATION', 'LOCAL', 'AIRPORT'] as ServiceType[]).map((service) => (
        <button
          key={service}
          onClick={() => setActiveService(service)}
          className="flex-1 py-3 px-4 rounded-md font-semibold transition-all duration-300"
          style={{
            backgroundColor: activeService === service ? theme.colors.accent.gold : 'transparent',
            color: activeService === service ? theme.colors.primary.black : theme.colors.text.secondary,
            fontFamily: theme.typography.fontFamily.sans.join(', '),
            fontWeight: theme.typography.fontWeight.semibold,
            boxShadow: activeService === service ? `0 4px 12px ${theme.colors.shadow.gold}` : 'none',
          }}
          onMouseEnter={(e) => {
            if (activeService !== service) {
              e.currentTarget.style.color = theme.colors.text.primary;
            }
          }}
          onMouseLeave={(e) => {
            if (activeService !== service) {
              e.currentTarget.style.color = theme.colors.text.secondary;
            }
          }}
        >
          {service}
          {service === 'AIRPORT' && <span className="ml-1">✈️</span>}
        </button>
      ))}
    </div>
  );

  // Tab component for trip types and pickup/drop
  const TabGroup = ({ 
    options, 
    activeOption, 
    onOptionChange 
  }: {
    options: string[];
    activeOption: string;
    onOptionChange: (option: any) => void;
  }) => (
    <div 
      className="flex rounded-lg p-1 mb-4"
      style={{
        backgroundColor: theme.colors.background.secondary,
      }}
    >
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onOptionChange(option)}
          className="flex-1 py-2 px-4 rounded-md font-semibold transition-all duration-300"
          style={{
            backgroundColor: activeOption === option ? theme.colors.accent.gold : 'transparent',
            color: activeOption === option ? theme.colors.primary.black : theme.colors.text.secondary,
            fontFamily: theme.typography.fontFamily.sans.join(', '),
            fontWeight: theme.typography.fontWeight.semibold,
          }}
          onMouseEnter={(e) => {
            if (activeOption !== option) {
              e.currentTarget.style.color = theme.colors.text.primary;
            }
          }}
          onMouseLeave={(e) => {
            if (activeOption !== option) {
              e.currentTarget.style.color = theme.colors.text.secondary;
            }
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );

  const renderAirportForm = () => (
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
          RELIABLE AIRPORT PICKUPS & DROPS
        </h3>
        <TabGroup 
          options={['PICKUP', 'DROP']}
          activeOption={activePickupDrop}
          onOptionChange={setActivePickupDrop}
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
          AIRPORT
        </label>
        <ThemedSelect
          value={bookingData.airport}
          onChange={(e) => handleBookingInputChange('airport', e.target.value)}
          options={airports}
          placeholder="Select Airport or City"
          error={errors.airport}
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
          DROP ADDRESS
        </label>
        <ThemedInput
          placeholder="Select Your Location"
          value={bookingData.dropAddress}
          onChange={(e) => handleBookingInputChange('dropAddress', e.target.value)}
          error={errors.dropAddress}
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
            onChange={(e) => handleBookingInputChange('date', e.target.value)}
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
            TIME ⏰
          </label>
          <ThemedInput
            value={bookingData.time}
            onChange={(e) => handleBookingInputChange('time', e.target.value)}
            error={errors.time}
          />
        </div>
      </div>
    </div>
  );

  const renderOutstationForm = () => (
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
          onOptionChange={setActiveTripType}
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
            onChange={(e) => handleBookingInputChange('from', e.target.value)}
            options={cities}
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
          onChange={(e) => handleBookingInputChange('to', e.target.value)}
          options={cities}
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
            onChange={(e) => handleBookingInputChange('date', e.target.value)}
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
            onChange={(e) => handleBookingInputChange('pickupTime', e.target.value)}
            error={errors.pickupTime}
          />
        </div>
      </div>
    </div>
  );

  const renderLocalForm = () => (
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
          HOURLY RENTALS WITHIN THE CITY
        </h3>
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
          CITY
        </label>
        <ThemedSelect
          value={bookingData.city}
          onChange={(e) => handleBookingInputChange('city', e.target.value)}
          options={cities}
          placeholder="Select City"
          error={errors.city}
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
          PACKAGE
        </label>
        <ThemedSelect
          value={bookingData.package}
          onChange={(e) => handleBookingInputChange('package', e.target.value)}
          options={packages}
          placeholder="Select Package"
          error={errors.package}
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
            onChange={(e) => handleBookingInputChange('date', e.target.value)}
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
            TIME ⏰
          </label>
          <ThemedInput
            value={bookingData.time}
            onChange={(e) => handleBookingInputChange('time', e.target.value)}
            error={errors.time}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto p-6">
      {/* Booking Form */}
      <div 
        className="flex-1 rounded-2xl p-6 border"
        style={{
          backgroundColor: theme.colors.background.card,
          borderColor: theme.colors.border.goldLight,
          boxShadow: `0 8px 32px ${theme.colors.shadow.elevated}`,
        }}
      >
        {renderServiceTabs()}
        
        {activeService === 'AIRPORT' && renderAirportForm()}
        {activeService === 'OUTSTATION' && renderOutstationForm()}
        {activeService === 'LOCAL' && renderLocalForm()}

        <button
          onClick={handleSearchCabs}
          disabled={isSubmitting}
          className="w-full mt-6 py-4 px-6 rounded-lg font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: theme.gradients.gold,
            color: theme.colors.primary.black,
            fontFamily: theme.typography.fontFamily.sans.join(', '),
            fontWeight: theme.typography.fontWeight.bold,
            boxShadow: `0 4px 20px ${theme.colors.shadow.gold}`,
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = `0 8px 32px ${theme.colors.shadow.gold}`;
            }
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = `0 4px 20px ${theme.colors.shadow.gold}`;
            }
          }}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center space-x-2">
              <div 
                className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin"
                style={{ 
                  borderColor: theme.colors.primary.black,
                  borderTopColor: 'transparent'
                }}
              />
              <span>Searching...</span>
            </span>
          ) : (
            'Search Cabs'
          )}
        </button>
      </div>

      {/* Quick Inquiry Form */}
      <div 
        className="w-full lg:w-80 rounded-2xl p-6 border"
        style={{
          backgroundColor: theme.colors.background.card,
          borderColor: theme.colors.border.goldLight,
          boxShadow: `0 8px 32px ${theme.colors.shadow.elevated}`,
        }}
      >
        <div className="text-center mb-6">
          <h3 
            className="font-bold mb-2"
            style={{
              color: theme.colors.text.primary,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
              fontWeight: theme.typography.fontWeight.bold,
            }}
          >
            Quick Inquiry for Booking
          </h3>
          <a 
            href="tel:9157576555" 
            className="font-bold text-lg transition-colors"
            style={{
              color: theme.colors.accent.gold,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
              fontWeight: theme.typography.fontWeight.bold,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = theme.colors.accent.warmGold;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = theme.colors.accent.gold;
            }}
          >
            📞 9157576555
          </a>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <ThemedInput
              placeholder="Name"
              value={inquiryData.name}
              onChange={(e) => handleInquiryInputChange('name', e.target.value)}
              error={errors.name}
            />
            <ThemedInput
              type="tel"
              placeholder="Mobile"
              value={inquiryData.mobile}
              onChange={(e) => handleInquiryInputChange('mobile', e.target.value)}
              error={errors.mobile}
            />
          </div>

          <ThemedInput
            type="email"
            placeholder="Email Address"
            value={inquiryData.email}
            onChange={(e) => handleInquiryInputChange('email', e.target.value)}
            error={errors.email}
          />

          <div>
            <textarea
              placeholder="Message"
              value={inquiryData.message}
              onChange={(e) => handleInquiryInputChange('message', e.target.value)}
              rows={4}
              className="w-full p-3 rounded-lg transition-all duration-300 outline-none resize-none"
              style={{
                backgroundColor: theme.colors.background.card,
                color: theme.colors.text.primary,
                border: `2px solid ${errors.message ? theme.colors.status.error : theme.colors.border.muted}`,
                fontFamily: theme.typography.fontFamily.sans.join(', '),
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = theme.colors.accent.gold;
                e.currentTarget.style.boxShadow = `0 0 0 3px ${theme.colors.border.goldLight}`;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = errors.message ? theme.colors.status.error : theme.colors.border.muted;
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            {errors.message && (
              <p 
                className="text-sm mt-1"
                style={{ color: theme.colors.status.error }}
              >
                {errors.message}
              </p>
            )}
          </div>

          <button
            onClick={handleSendInquiry}
            disabled={isSubmitting}
            className="w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: theme.gradients.gold,
              color: theme.colors.primary.black,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
              fontWeight: theme.typography.fontWeight.bold,
              boxShadow: `0 4px 20px ${theme.colors.shadow.gold}`,
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = `0 8px 32px ${theme.colors.shadow.gold}`;
              }
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 4px 20px ${theme.colors.shadow.gold}`;
              }
            }}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center space-x-2">
                <div 
                  className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin"
                  style={{ 
                    borderColor: theme.colors.primary.black,
                    borderTopColor: 'transparent'
                  }}
                />
                <span>Sending...</span>
              </span>
            ) : (
              'Send Now'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;