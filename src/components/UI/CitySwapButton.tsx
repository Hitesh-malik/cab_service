
// src/components/UI/CitySwapButton.tsx
'use client';

import React from 'react';
import { theme } from '@/styles/theme';

interface CitySwapButtonProps {
  onSwap: () => void;
  className?: string;
}

export const CitySwapButton: React.FC<CitySwapButtonProps> = ({
  onSwap,
  className = ''
}) => (
  <div className={`flex justify-center ${className}`}>
    <button
      type="button"
      onClick={onSwap}
      className="p-2 rounded-full transition-all duration-300 hover:scale-110"
      style={{
        backgroundColor: theme.colors.background.card,
        border: `2px solid ${theme.colors.border.goldLight}`,
        color: theme.colors.accent.gold,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = theme.colors.accent.gold;
        e.currentTarget.style.color = theme.colors.primary.black;
        e.currentTarget.style.transform = 'scale(1.1) rotate(180deg)';
        e.currentTarget.style.boxShadow = `0 4px 16px ${theme.colors.shadow.gold}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = theme.colors.background.card;
        e.currentTarget.style.color = theme.colors.accent.gold;
        e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
      }}
      title="Swap cities"
    >
      <svg 
        className="w-5 h-5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" 
        />
      </svg>
    </button>
  </div>
);