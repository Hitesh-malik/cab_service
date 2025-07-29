// src/components/forms/LocalForm.tsx
"use client";

import React from "react";
import { theme } from "@/styles/theme";
import { ThemedInput } from "@/components/UI/ThemedInput";
import { ThemedSelect } from "@/components/UI/ThemedSelect";
import { BookingFormData } from "@/types/booking";
import { CITIES, PACKAGES } from "@/constants/booking";
import { ThemedTimePicker } from "../UI/ThemedTimePicker";
import { ThemedDatePicker } from "../UI/ThemedDatePicker";

interface LocalFormProps {
  bookingData: BookingFormData;
  errors: Record<string, string>;
  onInputChange: (field: keyof BookingFormData, value: string) => void;
}

export const LocalForm: React.FC<LocalFormProps> = ({
  bookingData,
  errors,
  onInputChange,
}) => (
  <div className="space-y-4">
    <div className="text-center">
      <h3
        className="font-bold mb-4"
        style={{
          color: theme.colors.text.primary,
          fontFamily: theme.typography.fontFamily.sans.join(", "),
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
          fontFamily: theme.typography.fontFamily.sans.join(", "),
          fontWeight: theme.typography.fontWeight.medium,
        }}
      >
        CITY
      </label>
      <ThemedSelect
        value={bookingData.city}
        onChange={(e) => onInputChange("city", e.target.value)}
        options={CITIES}
        placeholder="Select City"
        error={errors.city}
      />
    </div>

    <div>
      <label
        className="block text-sm font-medium mb-2"
        style={{
          color: theme.colors.text.secondary,
          fontFamily: theme.typography.fontFamily.sans.join(", "),
          fontWeight: theme.typography.fontWeight.medium,
        }}
      >
        PACKAGE
      </label>
      <ThemedSelect
        value={bookingData.package}
        onChange={(e) => onInputChange("package", e.target.value)}
        options={PACKAGES}
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
            fontFamily: theme.typography.fontFamily.sans.join(", "),
            fontWeight: theme.typography.fontWeight.medium,
          }}
        >
          DATE 📅
        </label>
        <ThemedDatePicker
          value={bookingData.date}
          onChange={(e) => onInputChange("date", e.target.value)}
          error={errors.date}
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium mb-2"
          style={{
            color: theme.colors.text.secondary,
            fontFamily: theme.typography.fontFamily.sans.join(", "),
            fontWeight: theme.typography.fontWeight.medium,
          }}
        >
          TIME ⏰
        </label>
        <ThemedTimePicker
          value={bookingData.time}
          onChange={(e) => onInputChange("time", e.target.value)}
          error={errors.time}
        />
      </div>
    </div>

    {/* Customer Details */}
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label
          className="block text-sm font-medium mb-2"
          style={{
            color: theme.colors.text.secondary,
            fontFamily: theme.typography.fontFamily.sans.join(", "),
            fontWeight: theme.typography.fontWeight.medium,
          }}
        >
          NAME 👤
        </label>
        <ThemedInput
          placeholder="Enter your full name"
          value={bookingData.name}
          onChange={(e) => onInputChange("name", e.target.value)}
          error={errors.name}
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium mb-2"
          style={{
            color: theme.colors.text.secondary,
            fontFamily: theme.typography.fontFamily.sans.join(", "),
            fontWeight: theme.typography.fontWeight.medium,
          }}
        >
          PHONE NUMBER 📞
        </label>
        <ThemedInput
          placeholder="Enter your phone number"
          value={bookingData.phoneNumber}
          onChange={(e) => onInputChange("phoneNumber", e.target.value)}
          error={errors.phoneNumber}
        />
      </div>
    </div>
  </div>
);
