
// src/components/UI/ThemedSelect.tsx
'use client';

import React from 'react';
import { theme } from '@/styles/theme';

interface ThemedSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder: string;
  error?: string;
  className?: string;
}

export const ThemedSelect: React.FC<ThemedSelectProps> = ({ 
  value, 
  onChange, 
  options, 
  placeholder, 
  error,
  className = ''
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
