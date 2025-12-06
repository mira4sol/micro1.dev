import { SiGithub, SiLinkedin, SiX, SiWhatsapp, SiTelegram } from 'react-icons/si';

const navigation = {
  services: [
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'Blockchain', href: '#services' },
    { name: 'Consulting', href: '#services' },
  ],
  company: [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com/micro1dev', icon: SiGithub },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/micro1', icon: SiLinkedin },
    { name: 'X', href: 'https://twitter.com/micro1dev', icon: SiX },
    { name: 'WhatsApp', href: 'https://wa.me/message/micro1', icon: SiWhatsapp },
    { name: 'Telegram', href: 'https://t.me/micro1dev', icon: SiTelegram },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <a href="#" className="font-display text-2xl font-bold tracking-tight" data-testid="link-footer-home">
              Micro<span className="text-primary">1</span>
            </a>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Transforming ideas into digital products. We specialize in Web2 and Web3 solutions that drive innovation.
            </p>
            <div className="flex gap-3 mt-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  aria-label={item.name}
                  data-testid={`link-social-${item.name.toLowerCase()}`}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                    data-testid={`link-footer-${item.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                    data-testid={`link-footer-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Legal</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Micro1 Limited</strong>
              </p>
              <p>RC-8939675</p>
              <p>
                4 Block 10, Kanfage Street<br />
                Makera, Kaduna South<br />
                Kaduna, Nigeria
              </p>
              <a
                href="mailto:contact@micro1.dev"
                className="block hover:text-foreground transition-colors"
                data-testid="link-footer-email"
              >
                contact@micro1.dev
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} Micro1 Limited. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-privacy">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-terms">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
