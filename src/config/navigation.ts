// src/config/navigation.ts
import { NavItem } from '@/types';

export const navigationItems: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    hasDropdown: true,
    description: 'Explore our range of cab services',
    icon: '🚗',
    dropdownItems: [
      { 
        label: 'Oneway Rentals', 
        href: '/#booking-widget',
        icon: '➡️',
        description: 'Single destination car rentals'
      },
      { 
        label: 'Roundway Rentals', 
        href: '/#booking-widget',
        icon: '🔄',
        description: 'Return to pickup location'
      },
      { 
        label: 'Local Rentals', 
        href: '/#booking-widget',
        icon: '🏙️',
        description: 'City and local area rentals'
      },
      { 
        label: 'Airport Rentals', 
        href: '/#booking-widget',
        icon: '✈️',
        badge: 'Fast',
        description: 'Quick airport pickup & drop'
      },
      
    ]
  },
  {
    label: 'Popular',
    href: '/popular',
    description: 'Discover our most popular routes and cities',
    hasDropdown: true,
    icon: '⭐',
    dropdownItems: [
      { 
        label: 'Popular Routes', 
        href: '/#booking-widget',
        icon: '🗺️',
        description: 'Most booked travel routes'
      },
      
    ]
  },
  { 
    label: 'About Us', 
    description: 'Learn more about our company and values',
    href: '/about',
    icon: 'ℹ️'
  },
  { 
    label: 'Contact Us', 
    description: 'Get in touch with our support team',
    href: '/contact',
    icon: '📞'
  }
];

export const contactInfo = {
  phone: '9157576555',
  phoneFormatted: '+91 915 757 6555',
  email: 'contact@pentacab.com',
  whatsapp: '9157576555',
  
  // Enhanced contact options
  supportHours: '24/7 Support Available',
  emergencyPhone: '9157576555',
  bookingEmail: 'booking@pentacab.com',
  supportEmail: 'support@pentacab.com',
  
  // Social media (optional)
  social: {
    facebook: 'https://facebook.com/pentacab',
    instagram: 'https://instagram.com/pentacab',
    twitter: 'https://twitter.com/pentacab'
  }
};

// Optional: Quick actions for mobile
export const quickActions = [
  {
    label: 'Book Now',
    href: '/book',
    icon: '🚗',
    primary: true
  },
  {
    label: 'Call Us',
    href: 'tel:+919157576555',
    icon: '📞',
    external: true
  },
  {
    label: 'WhatsApp',
    href: `https://wa.me/919157576555?text=Hi, I need a cab booking`,
    icon: '💬',
    external: true
  },
  {
    label: 'Get Quote',
    href: '/quote',
    icon: '💰'
  }
];