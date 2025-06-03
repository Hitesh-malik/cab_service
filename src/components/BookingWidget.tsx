// src/components/BookingWidget.tsx
'use client';

import React, { useState } from 'react';

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

  const renderServiceTabs = () => (
    <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
      {(['OUTSTATION', 'LOCAL', 'AIRPORT'] as ServiceType[]).map((service) => (
        <button
          key={service}
          onClick={() => setActiveService(service)}
          className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all duration-300 ${
            activeService === service
              ? 'bg-cyan-500 text-white shadow-md'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          {service}
          {service === 'AIRPORT' && <span className="ml-1">✈️</span>}
        </button>
      ))}
    </div>
  );

  const renderAirportForm = () => (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="font-bold text-gray-800 mb-4">RELIABLE AIRPORT PICKUPS & DROPS</h3>
        <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
          {(['PICKUP', 'DROP'] as PickupDropType[]).map((type) => (
            <button
              key={type}
              onClick={() => setActivePickupDrop(type)}
              className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all duration-300 ${
                activePickupDrop === type
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">AIRPORT</label>
        <select
          value={bookingData.airport}
          onChange={(e) => handleBookingInputChange('airport', e.target.value)}
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
            errors.airport ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select Airport or City</option>
          {airports.map((airport) => (
            <option key={airport} value={airport}>{airport}</option>
          ))}
        </select>
        {errors.airport && <p className="text-red-500 text-sm mt-1">{errors.airport}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">DROP ADDRESS</label>
        <input
          type="text"
          value={bookingData.dropAddress}
          onChange={(e) => handleBookingInputChange('dropAddress', e.target.value)}
          placeholder="Select Your Location"
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
            errors.dropAddress ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.dropAddress && <p className="text-red-500 text-sm mt-1">{errors.dropAddress}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">DATE 📅</label>
          <input
            type="text"
            value={bookingData.date}
            onChange={(e) => handleBookingInputChange('date', e.target.value)}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
              errors.date ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">TIME ⏰</label>
          <input
            type="text"
            value={bookingData.time}
            onChange={(e) => handleBookingInputChange('time', e.target.value)}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
              errors.time ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
        </div>
      </div>
    </div>
  );

  const renderOutstationForm = () => (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="font-bold text-gray-800 mb-4">INDIA'S PREMIER INTERCITY CABS</h3>
        <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
          {(['ONEWAY', 'ROUNDWAY'] as TripType[]).map((type) => (
            <button
              key={type}
              onClick={() => setActiveTripType(type)}
              className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all duration-300 ${
                activeTripType === type
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">FROM</label>
        <div className="relative">
          <select
            value={bookingData.from}
            onChange={(e) => handleBookingInputChange('from', e.target.value)}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
              errors.from ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </div>
        </div>
        {errors.from && <p className="text-red-500 text-sm mt-1">{errors.from}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">TO</label>
        <select
          value={bookingData.to}
          onChange={(e) => handleBookingInputChange('to', e.target.value)}
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
            errors.to ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
        {errors.to && <p className="text-red-500 text-sm mt-1">{errors.to}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">DATE 📅</label>
          <input
            type="text"
            value={bookingData.date}
            onChange={(e) => handleBookingInputChange('date', e.target.value)}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
              errors.date ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">PICKUP TIME ⏰</label>
          <input
            type="text"
            value={bookingData.pickupTime}
            onChange={(e) => handleBookingInputChange('pickupTime', e.target.value)}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
              errors.pickupTime ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.pickupTime && <p className="text-red-500 text-sm mt-1">{errors.pickupTime}</p>}
        </div>
      </div>
    </div>
  );

  const renderLocalForm = () => (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="font-bold text-gray-800 mb-4">HOURLY RENTALS WITHIN THE CITY</h3>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">CITY</label>
        <select
          value={bookingData.city}
          onChange={(e) => handleBookingInputChange('city', e.target.value)}
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
            errors.city ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">PACKAGE</label>
        <select
          value={bookingData.package}
          onChange={(e) => handleBookingInputChange('package', e.target.value)}
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
            errors.package ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select Package</option>
          {packages.map((pkg) => (
            <option key={pkg} value={pkg}>{pkg}</option>
          ))}
        </select>
        {errors.package && <p className="text-red-500 text-sm mt-1">{errors.package}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">DATE 📅</label>
          <input
            type="text"
            value={bookingData.date}
            onChange={(e) => handleBookingInputChange('date', e.target.value)}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
              errors.date ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">TIME ⏰</label>
          <input
            type="text"
            value={bookingData.time}
            onChange={(e) => handleBookingInputChange('time', e.target.value)}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
              errors.time ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto p-6">
      {/* Booking Form */}
      <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        {renderServiceTabs()}
        
        {activeService === 'AIRPORT' && renderAirportForm()}
        {activeService === 'OUTSTATION' && renderOutstationForm()}
        {activeService === 'LOCAL' && renderLocalForm()}

        <button
          onClick={handleSearchCabs}
          disabled={isSubmitting}
          className="w-full mt-6 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Searching...</span>
            </span>
          ) : (
            'Search Cabs'
          )}
        </button>
      </div>

      {/* Quick Inquiry Form */}
      <div className="w-full lg:w-80 bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        <div className="text-center mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Quick Inquiry for Booking</h3>
          <a href="tel:9157576555" className="text-cyan-500 font-bold text-lg hover:text-cyan-600 transition-colors">
            📞 9157576555
          </a>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Name"
              value={inquiryData.name}
              onChange={(e) => handleInquiryInputChange('name', e.target.value)}
              className={`p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <input
              type="tel"
              placeholder="Mobile"
              value={inquiryData.mobile}
              onChange={(e) => handleInquiryInputChange('mobile', e.target.value)}
              className={`p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
                errors.mobile ? 'border-red-500' : 'border-gray-300'
              }`}
            />
          </div>
          {(errors.name || errors.mobile) && (
            <div className="text-red-500 text-sm">
              {errors.name && <p>{errors.name}</p>}
              {errors.mobile && <p>{errors.mobile}</p>}
            </div>
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={inquiryData.email}
            onChange={(e) => handleInquiryInputChange('email', e.target.value)}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <textarea
            placeholder="Message"
            value={inquiryData.message}
            onChange={(e) => handleInquiryInputChange('message', e.target.value)}
            rows={4}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <button
            onClick={handleSendInquiry}
            disabled={isSubmitting}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
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