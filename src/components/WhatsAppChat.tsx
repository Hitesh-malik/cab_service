"use client";

import React, { useState } from "react";

// Theme configuration (matching cab-lists page)
const theme = {
  colors: {
    primary: {
      black: "#000000",
      darkGray: "#1a1a1a",
    },
    accent: {
      gold: "#FFD700",
      lightGold: "#FFF700",
    },
    secondary: {
      amber: "#FFA500",
      warmYellow: "#FFB84D",
      lightAmber: "#FFCC80",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#E5E5E5",
      muted: "#B0B0B0",
    },
    background: {
      primary: "#000000",
      dark: "#0a0a0a",
      gradient:
        "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
    },
    border: {
      gold: "#FFD700",
      goldLight: "#FFF700",
      light: "rgba(255, 255, 255, 0.1)",
    },
    shadow: {
      gold: "rgba(255, 215, 0, 0.4)",
      primary: "rgba(0, 0, 0, 0.8)",
      elevated: "rgba(0, 0, 0, 0.6)",
    },
  },
  gradients: {
    heroGradient:
      "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2a2a2a 100%)",
    gold: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
    cardGradient: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
  },
  typography: {
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
    },
    fontWeight: {
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
};

interface WhatsAppChatProps {
  whatsappNumber?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const WhatsAppChat: React.FC<WhatsAppChatProps> = ({
  whatsappNumber = "7600839900",
  isOpen = false,
  onClose,
}) => {
  const [selectedMessage, setSelectedMessage] = useState<string>("");
  const [customMessage, setCustomMessage] = useState<string>("");

  const predefinedMessages = [
    {
      id: "booking",
      text: "Hi! I want to book a cab service. 🚗",
      emoji: "🚗",
    },
    {
      id: "airport",
      text: "I need airport pickup/drop service. ✈️",
      emoji: "✈️",
    },
    {
      id: "local",
      text: "I need local city travel service. 🏙️",
      emoji: "🏙️",
    },
    {
      id: "outstation",
      text: "I need outstation travel service. 🛣️",
      emoji: "🛣️",
    },
    {
      id: "quote",
      text: "Can you provide me with a quote? 💰",
      emoji: "💰",
    },
  ];

  const handleMessageSelect = (message: string) => {
    setSelectedMessage(message);
  };

  const handleSendMessage = () => {
    const messageToSend = selectedMessage || customMessage;
    if (!messageToSend.trim()) return;

    const encodedMessage = encodeURIComponent(messageToSend);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");

    if (onClose) {
      onClose();
    }
  };

  const handleCustomMessageChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCustomMessage(e.target.value);
    setSelectedMessage(""); // Clear selected message when typing custom message
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Background overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.5) 70%, #000000 100%)`,
        }}
        onClick={onClose}
      />

      {/* Animated background particles */}
      <div
        className="absolute top-1/4 left-1/6 w-24 h-24 rounded-full blur-2xl animate-pulse"
        style={{
          backgroundColor: theme.colors.accent.gold,
          opacity: 0.1,
          animationDuration: "3s",
        }}
      />
      <div
        className="absolute top-2/3 right-1/4 w-32 h-32 rounded-full blur-3xl animate-pulse"
        style={{
          backgroundColor: theme.colors.secondary.amber,
          opacity: 0.08,
          animationDelay: "1.5s",
          animationDuration: "4s",
        }}
      />

      {/* Modal Content */}
      <div
        className="relative w-full max-w-md h-[90vh] sm:h-auto sm:max-h-[85vh] flex flex-col rounded-2xl shadow-2xl"
        style={{
          background: theme.gradients.cardGradient,
          border: `2px solid ${theme.colors.accent.gold}`,
          boxShadow: `0 25px 80px ${theme.colors.shadow.elevated}, 0 0 0 1px ${theme.colors.accent.gold}30`,
          fontFamily: theme.typography.fontFamily.sans.join(", "),
        }}
      >
        {/* Header */}
        <div
          className="p-4 sm:p-6 flex items-center justify-between flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${theme.colors.primary.darkGray} 0%, ${theme.colors.primary.black} 100%)`,
            borderBottom: `1px solid ${theme.colors.border.light}`,
          }}
        >
          <div className="flex items-center space-x-3">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
              style={{
                background: theme.gradients.gold,
                boxShadow: `0 4px 20px ${theme.colors.shadow.gold}`,
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ color: theme.colors.primary.black }}
                className="sm:w-6 sm:h-6"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
            </div>
            <div>
              <h3
                className="font-semibold text-lg sm:text-xl"
                style={{
                  color: theme.colors.accent.gold,
                  fontWeight: theme.typography.fontWeight.semibold,
                  textShadow: `0 2px 10px ${theme.colors.shadow.gold}`,
                }}
              >
                WhatsApp Chat
              </h3>
              <p
                className="text-xs sm:text-sm"
                style={{ color: theme.colors.text.secondary }}
              >
                Choose your message
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-yellow-300 transition-colors p-1 sm:p-2 rounded-full hover:bg-gray-800"
            style={{ color: theme.colors.text.primary }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sm:w-6 sm:h-6"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Content - Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Predefined Messages */}
          <div>
            <h4
              className="font-medium mb-3 sm:mb-4 text-base sm:text-lg"
              style={{
                color: theme.colors.accent.gold,
                fontWeight: theme.typography.fontWeight.medium,
              }}
            >
              Quick Messages
            </h4>
            <div className="space-y-2 sm:space-y-3">
              {predefinedMessages.map((msg) => (
                <button
                  key={msg.id}
                  onClick={() => handleMessageSelect(msg.text)}
                  className={`w-full text-left p-3 sm:p-4 rounded-xl border transition-all duration-300 hover:scale-105 transform ${
                    selectedMessage === msg.text
                      ? "border-gold bg-gold-20"
                      : "border-gray-700 hover:border-gold-300"
                  }`}
                  style={{
                    background:
                      selectedMessage === msg.text
                        ? `linear-gradient(135deg, ${theme.colors.primary.darkGray} 0%, ${theme.colors.primary.black} 100%)`
                        : theme.gradients.cardGradient,
                    border:
                      selectedMessage === msg.text
                        ? `2px solid ${theme.colors.accent.gold}`
                        : `1px solid ${theme.colors.border.light}`,
                    boxShadow:
                      selectedMessage === msg.text
                        ? `0 10px 30px ${theme.colors.shadow.gold}`
                        : `0 5px 15px ${theme.colors.shadow.elevated}`,
                  }}
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <span className="text-xl sm:text-2xl">{msg.emoji}</span>
                    <span
                      className="text-xs sm:text-sm"
                      style={{ color: theme.colors.text.secondary }}
                    >
                      {msg.text}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Message */}
          <div>
            <h4
              className="font-medium mb-3 sm:mb-4 text-base sm:text-lg"
              style={{
                color: theme.colors.accent.gold,
                fontWeight: theme.typography.fontWeight.medium,
              }}
            >
              Custom Message
            </h4>
            <textarea
              value={customMessage}
              onChange={handleCustomMessageChange}
              placeholder="Type your custom message here..."
              className="w-full p-3 sm:p-4 rounded-xl resize-none transition-all duration-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              rows={3}
              style={{
                background: theme.colors.primary.darkGray,
                border: `1px solid ${theme.colors.border.light}`,
                color: theme.colors.text.secondary,
                fontFamily: theme.typography.fontFamily.sans.join(", "),
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <div
          className="p-4 sm:p-6 border-t flex-shrink-0"
          style={{ borderColor: theme.colors.border.light }}
        >
          <button
            onClick={handleSendMessage}
            disabled={!selectedMessage && !customMessage.trim()}
            className="w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-bold text-base sm:text-lg transition-all duration-500 hover:scale-105 transform relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: theme.gradients.gold,
              color: theme.colors.primary.black,
              fontWeight: theme.typography.fontWeight.bold,
              boxShadow: `0 20px 60px ${theme.colors.shadow.gold}`,
              border: `2px solid ${theme.colors.accent.lightGold}`,
            }}
          >
            {/* Button glow effect */}
            <div
              className="absolute inset-0 blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"
              style={{
                background: theme.gradients.gold,
                transform: "scale(1.2)",
              }}
            />
            <span className="relative z-10">Send via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppChat;
