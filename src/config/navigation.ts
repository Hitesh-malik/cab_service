// src/config/navigation.ts
import { NavItem } from '@/types';

export const navigationItems: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    hasDropdown: true,
    icon: '🚗',
    dropdownItems: [
      { 
        label: 'Oneway Rentals', 
        href: '/services/oneway',
        icon: '➡️',
      },
      { 
        label: 'Roundway Rentals', 
        href: '/services/roundway',
        icon: '🔄'
      },
      { 
        label: 'Local Rentals', 
        href: '/services/local',
        icon: '🏙️'
      },
      { 
        label: 'Airport Rentals', 
        href: '/services/airport',
        icon: '✈️',
        badge: 'Fast'
      }
    ]
  },
  {
    label: 'Popular',
    href: '/popular',
    hasDropdown: true,
    icon: '⭐',
    dropdownItems: [
      { 
        label: 'Popular Routes', 
        href: '/popular/routes',
        icon: '🗺️'
      },
      { 
        label: 'Popular City', 
        href: '/popular/city',
        icon: '🌆'
      }
    ]
  },
  { 
    label: 'About Us', 
    href: '/about',
    icon: 'ℹ️'
  },
  { 
    label: 'Contact Us', 
    href: '/contact',
    icon: '📞'
  }
];

export const contactInfo = {
  phone: '9157576555',
  phoneFormatted: '+91 915 757 6555',
  email: 'contact@pentacab.com',
  whatsapp: '9157576555'
};