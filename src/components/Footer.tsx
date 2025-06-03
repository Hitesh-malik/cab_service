// src/components/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { contactInfo } from '@/config/navigation';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com/pentacab',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/pentacab',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-2.458 0-4.467-2.01-4.467-4.468 0-2.458 2.009-4.467 4.467-4.467 2.458 0 4.468 2.009 4.468 4.467 0 2.458-2.01 4.468-4.468 4.468zm4.468-6.521c0-1.381-1.087-2.468-2.468-2.468-1.381 0-2.467 1.087-2.467 2.468 0 1.381 1.086 2.467 2.467 2.467 1.381 0 2.468-1.086 2.468-2.467zm5.679 6.521c-2.458 0-4.467-2.01-4.467-4.468 0-2.458 2.009-4.467 4.467-4.467 2.458 0 4.468 2.009 4.468 4.467 0 2.458-2.01 4.468-4.468 4.468z"/>
        </svg>
      ),
      color: 'hover:bg-pink-600'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/pentacab',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: 'hover:bg-blue-400'
    }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms and Conditions', href: '/terms-conditions' },
    { name: 'Refund Policy', href: '/refund-policy' }
  ];

  return (
    <footer className="bg-penta-black border-t border-penta-gold/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-penta-gold rounded-full blur-3xl -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-penta-amber rounded-full blur-3xl translate-x-32 translate-y-32" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          
          {/* Logo and Company Info */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-gradient-gold p-0.5 group-hover:scale-110 transition-transform duration-300 shadow-gold">
                <div className="w-full h-full bg-penta-black rounded-lg flex items-center justify-center">
                  <Image
                    src="/c.jpg"
                    alt="Penta Cab Logo"
                    width={40}
                    height={40}
                    className="w-9 h-9 object-contain transition-transform group-hover:scale-110 duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-penta-gold font-display font-bold text-2xl tracking-wide group-hover:text-penta-warm-gold transition-colors duration-300">
                  Penta
                </span>
                <span className="text-penta-cream text-sm font-medium -mt-1 group-hover:text-penta-gold transition-colors duration-300 tracking-wider">
                  CAB
                </span>
              </div>
            </Link>

            {/* Contact Information */}
            <div className="flex flex-col items-center lg:items-start space-y-2 text-sm">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-2 text-penta-cream hover:text-penta-gold transition-colors duration-300 group"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg className="w-4 h-4 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <span className="font-medium">{contactInfo.phone}</span>
              </a>

              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-2 text-penta-cream hover:text-penta-gold transition-colors duration-300 group"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span>info@pentacab.com</span>
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center">
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full bg-penta-charcoal border border-penta-gold/30 flex items-center justify-center text-penta-cream transition-all duration-300 hover:text-white hover:border-transparent hover:scale-110 hover:shadow-lg ${social.color}`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col items-center lg:items-end space-y-3">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <Link
                    href={link.href}
                    className="text-penta-light-gray hover:text-penta-gold transition-colors duration-300 whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="hidden sm:block text-penta-gold/30">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-penta-gold/20" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-penta-light-gray text-sm">
            Copyright ©{currentYear} Penta Cab. All rights reserved.
          </p>
        </div>

        {/* Additional Company Info */}
        <div className="mt-6 text-center">
          <p className="text-penta-light-gray text-xs max-w-2xl mx-auto">
            Premium taxi service providing reliable, safe, and comfortable transportation 24/7. 
            Professional drivers, luxury vehicles, and exceptional customer service.
          </p>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold" />
    </footer>
  );
};

export default Footer;