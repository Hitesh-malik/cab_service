"use client";

import React, { useState } from "react";
import { theme } from "@/styles/theme";
import WhatsAppChat from "./WhatsAppChat";

interface FloatingCallIconsProps {
  phoneNumber?: string;
  whatsappNumber?: string;
}

const FloatingCallIcons: React.FC<FloatingCallIconsProps> = ({
  phoneNumber = "7600839900",
  whatsappNumber = "7600839900",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCalling, setIsCalling] = useState(false);
  const [isWhatsApp, setIsWhatsApp] = useState(false);
  const [showWhatsAppChat, setShowWhatsAppChat] = useState(false);

  const handleCall = () => {
    try {
      setIsCalling(true);
      const telLink = `tel:${phoneNumber}`;
      window.location.href = telLink;

      setTimeout(() => {
        setIsCalling(false);
      }, 1000);
    } catch (error) {
      console.error("Failed to initiate call:", error);
      setIsCalling(false);
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

  const handleWhatsApp = () => {
    try {
      setIsWhatsApp(true);
      setShowWhatsAppChat(true);

      setTimeout(() => {
        setIsWhatsApp(false);
      }, 1000);
    } catch (error) {
      console.error("Failed to open WhatsApp:", error);
      setIsWhatsApp(false);
    }
  };

  const handleCloseWhatsAppChat = () => {
    setShowWhatsAppChat(false);
  };

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const buttonStyle = {
    background: theme.gradients.goldToAmber,
    boxShadow: `0 6px 25px ${theme.colors.shadow.gold}`,
    border: `2px solid ${theme.colors.accent.gold}`,
  };

  const activeButtonStyle = {
    background: theme.gradients.gold,
    boxShadow: `0 8px 30px ${theme.colors.shadow.gold}`,
    border: `2px solid ${theme.colors.accent.gold}`,
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* WhatsApp Button (Top) */}
      <div
        className={`absolute transition-all duration-300 ease-in-out ${
          isExpanded
            ? "bottom-36 opacity-100 scale-100"
            : "bottom-0 opacity-0 scale-50 pointer-events-none"
        }`}
      >
        <button
          onClick={handleWhatsApp}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-xl ${
            isWhatsApp ? "scale-110 animate-pulse" : ""
          }`}
          style={isWhatsApp ? activeButtonStyle : buttonStyle}
          aria-label="WhatsApp us"
          title={`WhatsApp ${whatsappNumber}`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-black"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </button>
      </div>

      {/* Call Button (Middle) */}
      <div
        className={`absolute transition-all duration-300 ease-in-out ${
          isExpanded
            ? "bottom-20 opacity-100 scale-100"
            : "bottom-0 opacity-0 scale-50 pointer-events-none"
        }`}
      >
        <button
          onClick={handleCall}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-xl ${
            isCalling ? "scale-110 animate-pulse" : ""
          }`}
          style={isCalling ? activeButtonStyle : buttonStyle}
          aria-label="Call us"
          title={`Call ${phoneNumber}`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-black"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </button>
      </div>

      {/* Main Plus/X Button */}
      <div className="relative">
        <button
          onClick={toggleExpansion}
          className={`w-16 h-16 md:w-18 md:h-18 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-xl ${
            isExpanded ? "rotate-45" : ""
          }`}
          style={buttonStyle}
          aria-label="Toggle contact options"
          title="Contact options"
        >
          <svg
            width="28"
            height="28"
            className="md:w-8 md:h-8 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke={theme.colors.primary.black}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isExpanded ? (
              // X icon when expanded
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              // Plus icon when collapsed
              <>
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* WhatsApp Chat Modal */}
      <WhatsAppChat
        whatsappNumber={whatsappNumber}
        isOpen={showWhatsAppChat}
        onClose={handleCloseWhatsAppChat}
      />
    </div>
  );
};

export default FloatingCallIcons;
