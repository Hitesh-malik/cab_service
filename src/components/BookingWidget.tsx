

// src/components/BookingWidget.tsx (Refactored Main Component)
'use client';

import React from 'react';
import { BookingForm } from '@/components/BookingForm';
import { QuickInquiryForm } from '@/components/forms/QuickInquiryForm';
import { useQuickInquiry } from '@/hooks/useQuickInquiry';

const BookingWidget: React.FC = () => {
  const {
    inquiryData,
    errors,
    isSubmitting,
    handleInputChange,
    handleSubmit
  } = useQuickInquiry();

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto p-6">
      <BookingForm />
      
      <QuickInquiryForm
        inquiryData={inquiryData}
        errors={errors}
        isSubmitting={isSubmitting}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default BookingWidget;