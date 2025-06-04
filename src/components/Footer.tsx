// src/components/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { theme, themeVariants } from '@/styles/theme';
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
      hoverColor: '#1877f2'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/pentacab',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-2.458 0-4.467-2.01-4.467-4.468 0-2.458 2.009-4.467 4.467-4.467 2.458 0 4.468 2.009 4.468 4.467 0 2.458-2.01 4.468-4.468 4.468zm4.468-6.521c0-1.381-1.087-2.468-2.468-2.468-1.381 0-2.467 1.087-2.467 2.468 0 1.381 1.086 2.467 2.467 2.467 1.381 0 2.468-1.086 2.468-2.467zm5.679 6.521c-2.458 0-4.467-2.01-4.467-4.468 0-2.458 2.009-4.467 4.467-4.467 2.458 0 4.468 2.009 4.468 4.467 0 2.458-2.01 4.468-4.468 4.468z"/>
        </svg>
      ),
      hoverColor: '#e4405f'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/pentacab',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      hoverColor: '#1da1f2'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/pentacab',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      hoverColor: '#0077b5'
    }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms and Conditions', href: '/terms-conditions' },
    { name: 'Refund Policy', href: '/refund-policy' }
  ];

  return (
    <footer 
      className="border-t relative overflow-hidden"
      style={{
        backgroundColor: theme.colors.primary.black,
        borderColor: `${theme.colors.accent.gold}30`,
      }}
    >
      {/* Background decoration using theme */}
      <div className="absolute inset-0" style={{ opacity: 0.03 }}>
        <div 
          className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl -translate-x-32 -translate-y-32"
          style={{
            backgroundColor: theme.colors.accent.gold,
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl translate-x-32 translate-y-32"
          style={{
            backgroundColor: theme.colors.secondary.amber,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          
          {/* Logo and Company Info */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div 
                className="relative w-12 h-12 overflow-hidden rounded-xl p-0.5 group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: theme.gradients.gold,
                  boxShadow: `0 4px 20px ${theme.colors.shadow.gold}`,
                }}
              >
                <div 
                  className="w-full h-full rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: theme.colors.primary.black,
                  }}
                >
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
                <span 
                  className="font-bold text-2xl tracking-wide group-hover:text-opacity-90 transition-colors duration-300"
                  style={{
                    color: theme.colors.accent.gold,
                    fontFamily: theme.typography.fontFamily.display.join(', '),
                    fontWeight: theme.typography.fontWeight.bold,
                  }}
                >
                  Penta
                </span>
                <span 
                  className="text-sm font-medium -mt-1 group-hover:opacity-80 transition-colors duration-300 tracking-wider"
                  style={{
                    color: theme.colors.text.primary,
                    fontFamily: theme.typography.fontFamily.sans.join(', '),
                    fontWeight: theme.typography.fontWeight.medium,
                  }}
                >
                  CAB
                </span>
              </div>
            </Link>

            {/* Contact Information */}
            <div className="flex flex-col items-center lg:items-start space-y-3 text-sm">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-3 group transition-colors duration-300"
                style={{
                  color: theme.colors.text.secondary,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = theme.colors.accent.gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = theme.colors.text.secondary;
                }}
              >
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: `${theme.colors.accent.gold}20`,
                    borderWidth: '1px',
                    borderColor: `${theme.colors.accent.gold}30`,
                  }}
                >
                  <svg className="w-4 h-4 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <span 
                  className="font-medium"
                  style={{
                    fontFamily: theme.typography.fontFamily.sans.join(', '),
                    fontWeight: theme.typography.fontWeight.medium,
                  }}
                >
                  {contactInfo.phone}
                </span>
              </a>

              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-3 group transition-colors duration-300"
                style={{
                  color: theme.colors.text.secondary,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = theme.colors.accent.gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = theme.colors.text.secondary;
                }}
              >
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: `${theme.colors.accent.gold}20`,
                    borderWidth: '1px',
                    borderColor: `${theme.colors.accent.gold}30`,
                  }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span 
                  style={{
                    fontFamily: theme.typography.fontFamily.sans.join(', '),
                  }}
                >
                  info@pentacab.com
                </span>
              </a>

              {/* Address */}
              <div className="flex items-center space-x-3 group">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: `${theme.colors.accent.gold}20`,
                    borderWidth: '1px',
                    borderColor: `${theme.colors.accent.gold}30`,
                  }}
                >
                  <svg 
                    className="w-4 h-4" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <span 
                  className="text-sm"
                  style={{
                    color: theme.colors.text.secondary,
                    fontFamily: theme.typography.fontFamily.sans.join(', '),
                  }}
                >
                  Ahmedabad, Gujarat, India
                </span>
              </div>
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
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    backgroundColor: theme.colors.background.card,
                    borderWidth: '2px',
                    borderColor: `${theme.colors.accent.gold}30`,
                    color: theme.colors.text.secondary,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = social.hoverColor;
                    e.currentTarget.style.borderColor = social.hoverColor;
                    e.currentTarget.style.color = theme.colors.primary.white;
                    e.currentTarget.style.boxShadow = `0 8px 32px ${social.hoverColor}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.background.card;
                    e.currentTarget.style.borderColor = `${theme.colors.accent.gold}30`;
                    e.currentTarget.style.color = theme.colors.text.secondary;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links & Legal */}
          <div className="flex flex-col items-center lg:items-end space-y-4">
            <div className="text-center lg:text-right">
              <h4 
                className="font-semibold mb-3"
                style={{
                  color: theme.colors.text.primary,
                  fontFamily: theme.typography.fontFamily.sans.join(', '),
                  fontWeight: theme.typography.fontWeight.semibold,
                }}
              >
                Quick Links
              </h4>
              <div className="flex flex-col space-y-2 text-sm">
                <Link
                  href="/about"
                  className="transition-colors duration-300"
                  style={{
                    color: theme.colors.text.secondary,
                    fontFamily: theme.typography.fontFamily.sans.join(', '),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = theme.colors.accent.gold;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = theme.colors.text.secondary;
                  }}
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="transition-colors duration-300"
                  style={{
                    color: theme.colors.text.secondary,
                    fontFamily: theme.typography.fontFamily.sans.join(', '),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = theme.colors.accent.gold;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = theme.colors.text.secondary;
                  }}
                >
                  Our Services
                </Link>
                <Link
                  href="/contact"
                  className="transition-colors duration-300"
                  style={{
                    color: theme.colors.text.secondary,
                    fontFamily: theme.typography.fontFamily.sans.join(', '),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = theme.colors.accent.gold;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = theme.colors.text.secondary;
                  }}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-300 whitespace-nowrap"
                    style={{
                      color: theme.colors.text.muted,
                      fontFamily: theme.typography.fontFamily.sans.join(', '),
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = theme.colors.accent.gold;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = theme.colors.text.muted;
                    }}
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span 
                      className="hidden sm:block"
                      style={{ color: `${theme.colors.accent.gold}50` }}
                    >
                      |
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="my-8 border-t"
          style={{
            borderColor: `${theme.colors.accent.gold}30`,
          }}
        />

        {/* Copyright and Company Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-center lg:text-left">
          <div>
            <p 
              className="text-sm"
              style={{
                color: theme.colors.text.muted,
                fontFamily: theme.typography.fontFamily.sans.join(', '),
              }}
            >
              Copyright ©{currentYear} Penta Cab. All rights reserved.
            </p>
          </div>
          
          <div className="lg:text-right">
            <p 
              className="text-xs"
              style={{
                color: theme.colors.text.muted,
                fontFamily: theme.typography.fontFamily.sans.join(', '),
              }}
            >
              Premium taxi service • Reliable transportation • 24/7 availability
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center space-x-6 text-xs">
            <div className="flex items-center space-x-2">
              <div 
                className="w-4 h-4 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: theme.colors.status.success,
                }}
              >
                <span 
                  style={{ 
                    color: theme.colors.primary.white,
                    fontSize: '8px' 
                  }}
                >
                  ✓
                </span>
              </div>
              <span 
                style={{
                  color: theme.colors.text.muted,
                  fontFamily: theme.typography.fontFamily.sans.join(', '),
                }}
              >
                SSL Secured
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div 
                className="w-4 h-4 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: theme.colors.accent.gold,
                }}
              >
                <span 
                  style={{ 
                    color: theme.colors.primary.black,
                    fontSize: '8px' 
                  }}
                >
                  ★
                </span>
              </div>
              <span 
                style={{
                  color: theme.colors.text.muted,
                  fontFamily: theme.typography.fontFamily.sans.join(', '),
                }}
              >
                5-Star Service
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div 
                className="w-4 h-4 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: theme.colors.status.info,
                }}
              >
                <span 
                  style={{ 
                    color: theme.colors.primary.white,
                    fontSize: '8px' 
                  }}
                >
                  🛡
                </span>
              </div>
              <span 
                style={{
                  color: theme.colors.text.muted,
                  fontFamily: theme.typography.fontFamily.sans.join(', '),
                }}
              >
                Licensed & Insured
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background: theme.gradients.gold,
        }}
      />
    </footer>
  );
};

export default Footer;