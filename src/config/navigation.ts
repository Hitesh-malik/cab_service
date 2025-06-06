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
        href: '/services/oneway',
        icon: '➡️',
        description: 'Single destination car rentals'
      },
      { 
        label: 'Roundway Rentals', 
        href: '/services/roundway',
        icon: '🔄',
        description: 'Return to pickup location'
      },
      { 
        label: 'Local Rentals', 
        href: '/services/local',
        icon: '🏙️',
        description: 'City and local area rentals'
      },
      { 
        label: 'Airport Rentals', 
        href: '/services/airport',
        icon: '✈️',
        badge: 'Fast',
        description: 'Quick airport pickup & drop'
      },
      {
        label: 'Get Quote',
        href: '/quote',
        icon: '💰',
        description: 'Instant price calculator',
        badge: 'New'
      },
      {
        label: 'Call Now',
        href: 'tel:+919157576555',
        icon: '📞',
        description: 'Speak with our team',
        external: true
      }
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
        href: '/popular/routes',
        icon: '🗺️',
        description: 'Most booked travel routes'
      },
      { 
        label: 'Popular Cities', 
        href: '/popular/city',
        icon: '🌆',
        description: 'Top destination cities'
      },
      {
        label: 'Delhi to Agra',
        href: '/routes/delhi-agra',
        icon: '🕌',
        description: 'Most popular route',
        badge: 'Trending'
      },
      {
        label: 'Mumbai to Pune',
        href: '/routes/mumbai-pune',
        icon: '🏙️',
        description: 'Business route'
      }
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