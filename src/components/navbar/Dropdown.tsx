/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/navbar/Dropdown.tsx
"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { NavItem } from "@/types";

interface DropdownProps {
  item: NavItem;
  isOpen: boolean;
  onClose: () => void;
  isMobile?: boolean;
  isClickedOpen?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  item,
  isOpen,
  onClose,
  isMobile = false,
  isClickedOpen = false,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !isMobile) {
      const firstItem = dropdownRef.current?.querySelector("a");
      if (firstItem && isClickedOpen) {
        setTimeout(() => firstItem.focus(), 100);
      }
    }
  }, [isOpen, isMobile, isClickedOpen]);

 
  const handleItemClick = (dropdownItem: any, e: React.MouseEvent) => {
  
    if (dropdownItem.keepOpen || dropdownItem.external) {
      e.preventDefault();
      
      return;
    }

   
    onClose();
  };

  
  if (!item.hasDropdown || !item.dropdownItems || !isOpen) return null;

  if (isMobile) {
    return (
      <div className="ml-4 space-y-1 animate-slide-down border-l-2 border-penta-gold/30 pl-4 bg-gradient-to-r from-penta-charcoal/20 to-transparent rounded-r-lg py-3">
        {item.dropdownItems.map((dropdownItem, index) => (
          <Link
            key={dropdownItem.label}
            href={dropdownItem.href}
            className="group flex items-center space-x-3 text-penta-light-gray hover:text-penta-gold py-3 px-4 rounded-lg hover:bg-penta-gold/10 transition-all duration-300 transform hover:translate-x-1"
            onClick={(e) => handleItemClick(dropdownItem, e)}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="w-8 h-8 rounded-lg bg-penta-gold/10 group-hover:bg-penta-gold/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              <span className="text-sm transition-transform duration-300 group-hover:rotate-12">
                {dropdownItem.icon || "🚗"}
              </span>
            </div>

            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-sm">
                  {dropdownItem.label}
                </span>
                {dropdownItem.badge && (
                  <span className="text-xs bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-2 py-0.5 rounded-full font-bold animate-pulse">
                    {dropdownItem.badge}
                  </span>
                )}
              </div>
            </div>

            <svg
              className="w-4 h-4 opacity-40 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-yellow-500/30 overflow-hidden z-[9999] animate-dropdown-enter"
      style={{
        position: "absolute",
        zIndex: 9999,
        display: isOpen ? "block" : "none",
      }}
      onMouseEnter={(e) => e.stopPropagation()}
      onMouseLeave={(e) => e.stopPropagation()}
    >
  
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-yellow-400/5 pointer-events-none" />

      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-4 left-4 w-1 h-1 bg-yellow-500/30 rounded-full animate-float" />
        <div
          className="absolute top-8 right-6 w-1 h-1 bg-yellow-400/40 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-6 left-8 w-1 h-1 bg-yellow-600/30 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

    
      <div className="px-6 py-4 border-b border-yellow-500/20 relative bg-gradient-to-r from-gray-800/40 to-transparent">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {item.icon && (
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
                <span className="text-lg">{item.icon}</span>
              </div>
            )}
            <div>
              <p className="text-sm font-bold text-yellow-500 uppercase tracking-wider">
                {item.label}
              </p>
              <p className="text-xs text-gray-300">
                Choose your preferred service
              </p>
            </div>
          </div>

          {isClickedOpen && (
            <button
              onClick={onClose}
              className="w-6 h-6 rounded-full bg-yellow-500/20 hover:bg-yellow-500/30 flex items-center justify-center transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg
                className="w-3 h-3 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

    
      <div
        className="py-2 max-h-48 overflow-y-auto"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#eab308 #1f2937",
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            width: 8px;
          }

          div::-webkit-scrollbar-track {
            background: #1f2937;
            border-radius: 4px;
          }

          div::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #eab308, #f59e0b);
            border-radius: 4px;
            border: 1px solid #374151;
          }

          div::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, #f59e0b, #eab308);
          }
        `}</style>

        {item.dropdownItems.map((dropdownItem, index) => (
          <Link
            key={dropdownItem.label}
            href={dropdownItem.href}
            className="group flex items-center justify-between px-6 py-4 text-gray-200 hover:text-yellow-500 hover:bg-gradient-to-r hover:from-yellow-500/10 hover:to-transparent transition-all duration-300 relative overflow-hidden"
            onClick={(e) => handleItemClick(dropdownItem, e)}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Background hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            <div className="flex items-center space-x-4 relative z-10 flex-1">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 group-hover:bg-yellow-500/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <span className="text-lg transition-transform duration-300 group-hover:scale-110">
                  {dropdownItem.icon || "📍"}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-semibold text-sm group-hover:text-yellow-400 transition-colors">
                    {dropdownItem.label}
                  </span>
                  {dropdownItem.badge && (
                    <span className="text-xs bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-2 py-0.5 rounded-full font-bold group-hover:animate-pulse">
                      {dropdownItem.badge}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="relative z-10 ml-3">
              <div className="w-8 h-8 rounded-full bg-yellow-500/0 group-hover:bg-yellow-500/10 flex items-center justify-center transition-all duration-300">
                <svg
                  className="w-4 h-4 opacity-40 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>

         
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%]" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
