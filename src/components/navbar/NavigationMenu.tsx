// src/components/navbar/NavigationMenu.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { NavItem } from "@/types";
import Dropdown from "./Dropdown";

interface NavigationMenuProps {
  items: NavItem[];
  activeDropdown: string | null;
  onDropdownToggle: (label: string) => void;
  onDropdownClose: () => void;
  isMobile?: boolean;
  onMobileMenuClose?: () => void;
  clickedDropdown?: string | null;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  items,
  activeDropdown,
  onDropdownToggle,
  onDropdownClose,
  isMobile = false,
  onMobileMenuClose,
  clickedDropdown,
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleItemClick = (item: NavItem, event: React.MouseEvent) => {
    if (item.hasDropdown && isMobile) {
      event.preventDefault();
      event.stopPropagation();
      onDropdownToggle(item.label);
    } else if (!item.hasDropdown && isMobile && onMobileMenuClose) {
      onMobileMenuClose();
    }
  };

  const handleDropdownItemClick = () => {
    onDropdownClose();
    if (isMobile && onMobileMenuClose) {
      onMobileMenuClose();
    }
  };

  const handleMouseEnter = (item: NavItem) => {
    if (!isMobile && item.hasDropdown) {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      setHoveredItem(item.label);
      onDropdownToggle(item.label);
    }
  };

  const handleMouseLeave = (item: NavItem) => {
    if (!isMobile && item.hasDropdown) {
      hoverTimeoutRef.current = setTimeout(() => {
        setHoveredItem(null);
        onDropdownClose();
      }, 150);
    }
  };

  const handleDropdownMouseEnter = () => {
    if (!isMobile && hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    if (!isMobile) {
      hoverTimeoutRef.current = setTimeout(() => {
        setHoveredItem(null);
        onDropdownClose();
      }, 150);
    }
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const getNavItemClasses = (item: NavItem) => {
    const isActive = activeDropdown === item.label || hoveredItem === item.label;
    const isSpecialItem = item.label === "Services" || item.label === "Popular";

    if (isMobile) {
      return `
        flex items-center justify-between w-full 
        font-medium py-4 px-5 rounded-xl 
        transition-all duration-300 transform hover:scale-[1.02] 
        border border-transparent
        ${isSpecialItem
          ? `text-cyan-300 bg-gradient-to-r from-cyan-500/20 to-cyan-400/20 
             hover:from-cyan-500/30 hover:to-cyan-400/30 hover:text-cyan-200
             border-cyan-400/30 shadow-lg shadow-cyan-500/20
             ${isActive ? "from-cyan-500/40 to-cyan-400/40 text-cyan-100 border-cyan-300/50" : ""}`
          : `text-yellow-200 bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 
             hover:from-yellow-500/30 hover:to-yellow-400/30 hover:text-yellow-100
             border-yellow-400/30 shadow-lg shadow-yellow-500/20
             ${isActive ? "from-yellow-500/40 to-yellow-400/40 text-yellow-50 border-yellow-300/50" : ""}`
        }
      `.replace(/\s+/g, ' ').trim();
    }

    return `
      flex items-center space-x-2 px-5 py-3 rounded-xl 
      font-medium transition-all duration-300 relative group cursor-pointer 
      transform hover:scale-105 border border-transparent
      ${isSpecialItem
        ? `text-cyan-300 hover:text-cyan-200 
           hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-cyan-400/20
           hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/25
           ${isActive 
             ? "text-cyan-200 bg-gradient-to-r from-cyan-500/30 to-cyan-400/30 border-cyan-400/40 shadow-lg shadow-cyan-400/30" 
             : ""
           }`
        : `text-yellow-200 hover:text-yellow-100 
           hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-yellow-400/20
           hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-500/25
           ${isActive 
             ? "text-yellow-100 bg-gradient-to-r from-yellow-500/30 to-yellow-400/30 border-yellow-400/40 shadow-lg shadow-yellow-400/30" 
             : ""
           }`
      }
    `.replace(/\s+/g, ' ').trim();
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-gray-900/95 backdrop-blur-md">
        <div className="px-6 py-8 space-y-4 max-h-screen overflow-y-auto">
          {items.map((item) => (
            <div key={item.label} className="space-y-3">
              <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-3 border border-gray-700/50 shadow-xl">
                {item.hasDropdown ? (
                  <button
                    className={getNavItemClasses(item)}
                    onClick={(e) => handleItemClick(item, e)}
                    type="button"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon && (
                        <span className="text-xl opacity-90 group-hover:opacity-100 transition-opacity">
                          {item.icon}
                        </span>
                      )}
                      <span className="text-lg font-semibold">{item.label}</span>
                    </div>
                    <svg
                      className={`w-5 h-5 transition-all duration-300 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={getNavItemClasses(item)}
                    onClick={(e) => handleItemClick(item, e)}
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon && (
                        <span className="text-xl opacity-90 group-hover:opacity-100 transition-opacity">
                          {item.icon}
                        </span>
                      )}
                      <span className="text-lg font-semibold">{item.label}</span>
                    </div>
                  </Link>
                )}
              </div>

              {/* Mobile Dropdown */}
              {item.hasDropdown && (
                <div className={`
                  transition-all duration-300 overflow-hidden
                  ${activeDropdown === item.label 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                  }
                `}>
                  <Dropdown
                    item={item}
                    isOpen={activeDropdown === item.label}
                    onClose={handleDropdownItemClick}
                    isMobile={true}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop Navigation
  return (
    <div className="hidden lg:flex items-center space-x-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item)}
          onMouseLeave={() => handleMouseLeave(item)}
        >
          {item.hasDropdown ? (
            <button
              className={getNavItemClasses(item)}
              type="button"
              aria-expanded={activeDropdown === item.label}
              aria-haspopup="true"
            >
              {/* Premium glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-yellow-400/10 to-yellow-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />

              <div className="flex items-center space-x-2 relative z-10">
                {item.icon && (
                  <span className="text-sm opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>
                )}
                <span className="font-semibold">{item.label}</span>
              </div>

              <svg
                className={`w-4 h-4 transition-all duration-300 relative z-10 ${
                  activeDropdown === item.label
                    ? "rotate-180 text-yellow-300"
                    : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          ) : (
            <Link href={item.href} className={getNavItemClasses(item)}>
              {/* Premium glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-yellow-400/10 to-yellow-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />

              <div className="flex items-center space-x-2 relative z-10">
                {item.icon && (
                  <span className="text-sm opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>
                )}
                <span className="font-semibold">{item.label}</span>
              </div>
            </Link>
          )}

          {/* Desktop Dropdown */}
          <div
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <Dropdown
              item={item}
              isOpen={activeDropdown === item.label}
              onClose={handleDropdownItemClick}
              isMobile={false}
              isClickedOpen={clickedDropdown === item.label}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavigationMenu;