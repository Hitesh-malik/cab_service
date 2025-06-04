// src/components/Navbar.tsx
"use client";

import React from "react";
import { navigationItems } from "@/config/navigation";
import { useScrollProgress, useNavbarState } from "@/hooks/useNavbar";
import Logo from "./navbar/Logo";
import NavigationMenu from "./navbar/NavigationMenu";
import PhoneButton from "./navbar/PhoneButton";
import MobileMenuButton from "./navbar/MobileMenuButton";

const Navbar: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { scrollProgress, isScrolled } = useScrollProgress();
  const {
    activeDropdown,
    isMobileMenuOpen,
    clickedDropdown,
    handleDropdownToggle,
    handleDropdownClose,
    handleMobileMenuToggle,
    handleMobileMenuClose,
  } = useNavbarState();

  return (
    <>
      {/* Main Navigation Bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-2xl shadow-2xl border-b border-yellow-500/20 transition-all duration-700 ease-out"
        role="navigation"
        aria-label="Main navigation"
      >
       
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5 opacity-100" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 lg:h-22">
          
            <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
              <div className="text-white">
                <Logo />
              </div>
            </div>

         
            <div className="hidden lg:flex items-center space-x-1">
              <NavigationMenu
                items={navigationItems}
                activeDropdown={activeDropdown}
                onDropdownToggle={handleDropdownToggle}
                onDropdownClose={handleDropdownClose}
                clickedDropdown={clickedDropdown}
              />
            </div>

           
            <div className="flex items-center space-x-4">
            
              <div className="hidden lg:block">
                <PhoneButton className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25" />
              </div>

           
              <MobileMenuButton
                isOpen={isMobileMenuOpen}
                onClick={handleMobileMenuToggle}
                className="lg:hidden mobile-menu-button p-2 rounded-lg hover:bg-yellow-500/10 transition-colors duration-300"
              />
            </div>
          </div>
        </div>

     
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent opacity-100" />
      </nav>

     
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-md transition-opacity duration-300"
          onClick={handleMobileMenuClose}
          aria-hidden="true"
        />
      )}

     
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 z-50 bg-black/98 backdrop-blur-2xl border-b border-yellow-500/20 animate-slide-up max-h-[calc(100vh-4rem)] overflow-y-auto">
          
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent" />

          <div className="relative">
            <NavigationMenu
              items={navigationItems}
              activeDropdown={activeDropdown}
              onDropdownToggle={handleDropdownToggle}
              onDropdownClose={handleDropdownClose}
              isMobile={true}
              onMobileMenuClose={handleMobileMenuClose}
              clickedDropdown={clickedDropdown}
            />

          
            <div className="px-4 pb-6 pt-4 border-t border-yellow-500/10">
              <PhoneButton
                isMobile={true}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold py-4 rounded-xl transform hover:scale-[1.02] transition-all duration-300 shadow-lg"
              />
            </div>
          </div>
        </div>
      )}

    
      <div className="fixed top-0 left-0 w-full h-1 bg-black/30 z-50">
        <div
          className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 transition-all duration-300 shadow-lg shadow-yellow-500/50"
          style={{
            width: `${scrollProgress}%`,
            boxShadow: `0 0 20px rgba(234, 179, 8, 0.6)`,
          }}
        />
      </div>

    
      <div className="h-18 lg:h-22" aria-hidden="true" />
    </>
  );
};

export default Navbar;
