// src/config/navigation.ts
import { NavItem } from '@/types';

export const navigationItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
    description: 'Welcome to Penta CAB - Your trusted travel partner',
  },
  {
    label: 'Services',
    href: '/services',
    hasDropdown: true,
    description: 'Explore our range of cab services',
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
    dropdownItems: [
      { 
        label: 'Popular Routes', 
        href: '/popular_route_info',
        icon: '🗺️',
        description: 'Most booked travel routes'
      },
      
    ]
  },
  { 
    label: 'About Us', 
    description: 'Learn more about our company and values',
    href: '/about',
  },
  { 
    label: 'Contact Us', 
    description: 'Get in touch with our support team',
    href: '/contact',
  }
];

export const contactInfo = {
  phone: '7600839900',
  phoneFormatted: '+91 760 083 9900',
  email: 'Info.pentacab@gmail.com',
  whatsapp: '7600839900',
  
  // Enhanced contact options
  supportHours: '24/7 Support Available',
  emergencyPhone: '7600839900',
  bookingEmail: 'Info.pentacab@gmail.com',
  supportEmail: 'Info.pentacab@gmail.com',
  
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
    href: 'tel:+917600839900',
    icon: '📞',
    external: true
  },
  {
    label: 'WhatsApp',
    href: `https://wa.me/917600839900?text=Hi, I need a cab booking`,
    icon: '💬',
    external: true
  },
  {
    label: 'Get Quote',
    href: '/quote',
    icon: '💰'
  }
];