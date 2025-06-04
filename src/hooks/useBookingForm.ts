
// src/hooks/useBookingForm.ts
'use client';

import { useState } from 'react';
import { BookingFormData, ServiceType, TripType, PickupDropType } from '@/types/booking';

export const useBookingForm = () => {
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

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!bookingData.date) newErrors.date = 'Date is required';
    if (!bookingData.time && !bookingData.pickupTime) newErrors.time = 'Time is required';

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

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Booking Data:', bookingData);
      alert('Searching for available cabs...');
    } catch (error) {
      console.error('Error searching cabs:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
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
  };
};
