// src/components/Navbar.tsx
'use client';

import React from 'react';
import { navigationItems } from '@/config/navigation';
import { useScrollProgress, useNavbarState } from '@/hooks/useNavbar';
import Logo from './navbar/Logo';
import NavigationMenu from './navbar/NavigationMenu';
import PhoneButton from './navbar/PhoneButton';
import MobileMenuButton from './navbar/MobileMenuButton';

const Navbar: React.FC = () => {
  const { scrollProgress, isScrolled } = useScrollProgress();
  const {
    activeDropdown,
    isMobileMenuOpen,
    clickedDropdown,
    handleDropdownToggle,
    handleDropdownClose,
    handleMobileMenuToggle,
    handleMobileMenuClose
  } = useNavbarState();

  return (
    <>
      {/* Main Navigation Bar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-penta-black/98 backdrop-blur-xl shadow-2xl border-b border-penta-gold/30' 
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <NavigationMenu
              items={navigationItems}
              activeDropdown={activeDropdown}
              onDropdownToggle={handleDropdownToggle}
              onDropdownClose={handleDropdownClose}
              clickedDropdown={clickedDropdown}
            />

            {/* Desktop Phone Button */}
            <PhoneButton />

            {/* Mobile Menu Button */}
            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onClick={handleMobileMenuToggle}
              className="mobile-menu-button"
            />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" 
            onClick={handleMobileMenuClose}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 z-50 bg-penta-black/98 backdrop-blur-xl border-b border-penta-gold/30 animate-slide-up max-h-[calc(100vh-4rem)] overflow-y-auto">
            <NavigationMenu
              items={navigationItems}
              activeDropdown={activeDropdown}
              onDropdownToggle={handleDropdownToggle}
              onDropdownClose={handleDropdownClose}
              isMobile={true}
              onMobileMenuClose={handleMobileMenuClose}
              clickedDropdown={clickedDropdown}
            />
            
            {/* Mobile Phone Button */}
            <PhoneButton isMobile={true} className="px-4 pb-6" />
          </div>
        )}
      </nav>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-penta-charcoal/50 z-50">
        <div 
          className="h-full bg-gradient-gold transition-all duration-300 shadow-gold"
          style={{
            width: `${scrollProgress}%`,
          }}
        />
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-20" aria-hidden="true" />
    </>
  );
};

export default Navbar;