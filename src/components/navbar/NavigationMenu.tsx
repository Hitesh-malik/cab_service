// src/components/navbar/NavigationMenu.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { NavItem } from '@/types';
import Dropdown from './Dropdown';

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
  clickedDropdown
}) => {
  const handleItemClick = (item: NavItem, event: React.MouseEvent) => {
    if (item.hasDropdown) {
      event.preventDefault(); // Prevent navigation
      event.stopPropagation(); // Prevent event bubbling
      onDropdownToggle(item.label);
    } else if (isMobile && onMobileMenuClose) {
      onMobileMenuClose();
    }
  };

  const handleDropdownItemClick = () => {
    // Close dropdown when any internal option is selected
    onDropdownClose();
    if (isMobile && onMobileMenuClose) {
      onMobileMenuClose();
    }
  };

  const handleMouseEnter = (item: NavItem) => {
    // Only auto-open on hover if it's not already clicked open
    if (item.hasDropdown && clickedDropdown !== item.label) {
      onDropdownToggle(item.label);
    }
  };

  const handleMouseLeave = (item: NavItem) => {
    // Only auto-close on mouse leave if it was opened by hover, not click
    if (item.hasDropdown && clickedDropdown !== item.label) {
      setTimeout(() => onDropdownClose(), 150);
    }
  };

  const getCyberLinkClasses = (item: NavItem) => {
    const isSpecialItem = item.label === 'Services' || item.label === 'Popular';
    const isActive = activeDropdown === item.label;
    
    if (isMobile) {
      return `flex-1 font-medium py-3 px-4 rounded-lg transition-all duration-300 ${
        isSpecialItem 
          ? `text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 ${isActive ? 'bg-cyan-400/20 text-cyan-300' : ''}` 
          : `text-penta-cream hover:text-penta-gold hover:bg-penta-gold/10 ${isActive ? 'bg-penta-gold/20 text-penta-gold' : ''}`
      }`;
    }
    
    return `flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group cursor-pointer ${
      isSpecialItem 
        ? `text-cyan-400 hover:text-cyan-300 ${isActive ? 'text-cyan-300 bg-cyan-400/10' : ''}` 
        : `text-penta-cream hover:text-penta-gold ${isActive ? 'text-penta-gold bg-penta-gold/10' : ''}`
    }`;
  };

  if (isMobile) {
    return (
      <div className="px-4 py-6 space-y-3">
        {items.map((item) => (
          <div key={item.label} className="space-y-2">
            <div className="flex items-center justify-between bg-penta-charcoal/30 rounded-lg p-1">
              {item.hasDropdown ? (
                <button
                  className={getCyberLinkClasses(item)}
                  onClick={(e) => handleItemClick(item, e)}
                  type="button"
                >
                  <div className="flex items-center space-x-2">
                    {item.icon && (
                      <span className="text-sm opacity-80">{item.icon}</span>
                    )}
                    <span>{item.label}</span>
                  </div>
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={getCyberLinkClasses(item)}
                  onClick={(e) => handleItemClick(item, e)}
                >
                  <div className="flex items-center space-x-2">
                    {item.icon && (
                      <span className="text-sm opacity-80">{item.icon}</span>
                    )}
                    <span>{item.label}</span>
                  </div>
                </Link>
              )}
              
              {item.hasDropdown && (
                <button
                  onClick={(e) => handleItemClick(item, e)}
                  className="p-2 text-penta-cream hover:text-penta-gold rounded-lg hover:bg-penta-gold/10 transition-all duration-300"
                  aria-label={`Toggle ${item.label} submenu`}
                  type="button"
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              )}
            </div>
            
            <Dropdown
              item={item}
              isOpen={activeDropdown === item.label}
              onClose={handleDropdownItemClick}
              isMobile={true}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="hidden lg:flex items-center space-x-1">
      {items.map((item) => (
        <div
          key={item.label}
          className="relative dropdown-container"
          onMouseEnter={() => handleMouseEnter(item)}
          onMouseLeave={() => handleMouseLeave(item)}
        >
          {item.hasDropdown ? (
            <button
              className={getCyberLinkClasses(item)}
              onClick={(e) => handleItemClick(item, e)}
              data-dropdown={item.label}
              type="button"
              aria-expanded={activeDropdown === item.label}
              aria-haspopup="true"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-penta-gold/0 via-penta-gold/5 to-penta-gold/0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
              
              <div className="flex items-center space-x-2 relative z-10">
                {item.icon && (
                  <span className="text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.icon}
                  </span>
                )}
                <span>{item.label}</span>
              </div>
              
              <svg
                className={`w-4 h-4 transition-all duration-300 relative z-10 ${
                  activeDropdown === item.label ? 'rotate-180 text-penta-gold' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          ) : (
            <Link
              href={item.href}
              className={getCyberLinkClasses(item)}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-penta-gold/0 via-penta-gold/5 to-penta-gold/0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
              
              <div className="flex items-center space-x-2 relative z-10">
                {item.icon && (
                  <span className="text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.icon}
                  </span>
                )}
                <span>{item.label}</span>
              </div>
            </Link>
          )}

          <Dropdown
            item={item}
            isOpen={activeDropdown === item.label}
            onClose={handleDropdownItemClick}
            isMobile={false}
            isClickedOpen={clickedDropdown === item.label}
          />
        </div>
      ))}
    </div>
  );
};

export default NavigationMenu;