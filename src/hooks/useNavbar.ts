// src/hooks/useNavbar.ts
'use client';

import { useState, useEffect } from 'react';

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrollProgress(Math.min(progress, 100));
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollProgress, isScrolled };
};

export const useNavbarState = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [clickedDropdown, setClickedDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (label: string) => {
    const newState = activeDropdown === label ? null : label;
    setActiveDropdown(newState);
    setClickedDropdown(newState); // Track which dropdown was clicked
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
    setClickedDropdown(null);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
    setClickedDropdown(null);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setClickedDropdown(null);
  };

  // Handle escape key and resize events
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setClickedDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
        setClickedDropdown(null);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      
      // Don't close if clicking within dropdown container or mobile menu button
      if (!target.closest('.dropdown-container') && 
          !target.closest('.mobile-menu-button') &&
          !target.closest('[data-dropdown]')) {
        setActiveDropdown(null);
        setClickedDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return {
    activeDropdown,
    isMobileMenuOpen,
    clickedDropdown,
    handleDropdownToggle,
    handleDropdownClose,
    handleMobileMenuToggle,
    handleMobileMenuClose
  };
};