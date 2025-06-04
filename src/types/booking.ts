// src/types/booking.ts
export type ServiceType = 'OUTSTATION' | 'LOCAL' | 'AIRPORT';
export type TripType = 'ONEWAY' | 'ROUNDWAY';
export type PickupDropType = 'PICKUP' | 'DROP';

export interface BookingFormData {
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

export interface QuickInquiryData {
  name: string;
  mobile: string;
  email: string;
  message: string;
}
