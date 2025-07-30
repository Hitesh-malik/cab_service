"use client";

import React, { useState } from "react";
import { theme } from "@/styles/theme";

interface FloatingCallIconsProps {
  phoneNumber?: string;
}

const FloatingCallIcons: React.FC<FloatingCallIconsProps> = ({
  phoneNumber = "7600839900",
}) => {
  const [clickedButton, setClickedButton] = useState(false);
  const [isCalling, setIsCalling] = useState(false);

  const handleCall = () => {
    try {
      setClickedButton(true);
      setIsCalling(true);

      // Create the tel link
      const telLink = `tel:${phoneNumber}`;

      // For mobile devices, this will open the phone app
      // For desktop, it will show a prompt or open Skype/other calling apps
      window.location.href = telLink;

      // Reset button state after animation
      setTimeout(() => {
        setClickedButton(false);
        setIsCalling(false);
      }, 1000);
    } catch (error) {
      console.error("Failed to initiate call:", error);
      setClickedButton(false);
      setIsCalling(false);

      // Fallback: copy number to clipboard
      navigator.clipboard
        .writeText(phoneNumber)
        .then(() => {
          alert(`Phone number ${phoneNumber} copied to clipboard!`);
        })
        .catch(() => {
          alert(`Call ${phoneNumber} to book your cab!`);
        });
    }
  };

  const callButtonStyle = {
    background: isCalling ? theme.gradients.gold : theme.gradients.goldToAmber,
    boxShadow: `0 6px 25px ${theme.colors.shadow.gold}`,
    border: `2px solid ${theme.colors.accent.gold}`,
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in">
      {/* Single Call Button */}
      <button
        onClick={handleCall}
        className={`w-16 h-16 md:w-18 md:h-18 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-xl ${
          clickedButton ? "scale-110" : ""
        } ${isCalling ? "animate-pulse" : ""}`}
        style={callButtonStyle}
        aria-label="Call us"
        title={`Call ${phoneNumber}`}
      >
        <svg
          width="28"
          height="28"
          className="md:w-8 md:h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke={theme.colors.primary.black}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </button>
    </div>
  );
};

export default FloatingCallIcons;
