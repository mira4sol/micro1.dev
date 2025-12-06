import { Mail } from 'lucide-react';
import { SiCalendly, SiGithub, SiLinkedin, SiTelegram, SiWhatsapp, SiX } from 'react-icons/si';

export const socialLinks = {
  twitter: {
    name: 'X',
    href: 'https://twitter.com/4k_mira',
    icon: SiX,
  },
  linkedin: {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/micro1',
    icon: SiLinkedin,
  },
  whatsapp: {
    name: 'WhatsApp',
    href: 'https://wa.me/message/+2349050273391',
    icon: SiWhatsapp,
  },
  telegram: {
    name: 'Telegram',
    href: 'https://t.me/mira4sol',
    icon: SiTelegram,
  },
  calendly: {
    name: 'Book a call',
    href: 'https://calendly.com/micro1',
    icon: SiCalendly,
  },
  email: {
    name: 'Email',
    href: 'mailto:contact@micro1.dev',
    email: 'contact@micro1.dev',
    icon: Mail,
  },
  github: {
    name: 'GitHub',
    href: 'https://github.com/micro1dev',
    icon: SiGithub,
  }
};

export const companyInfo = {
  address: {
    street: '4 Block 10, Kanfage Street',
    area: 'Makera, Kaduna South',
    city: 'Kaduna',
    country: 'Nigeria',
    fullAddress: '4 Block 10, Kanfage Street\nMakera, Kaduna South\nKaduna, Nigeria',
  },
  registration: {
    name: 'Micro1 Limited',
    number: 'RC-8939675',
  },
  hours: 'We typically respond within 24 hours during business days.',
};
