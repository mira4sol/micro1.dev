import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Blocks, Cpu, Globe, Smartphone, Shield } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies. From landing pages to complex enterprise solutions.',
    tags: ['React', 'Next.js', 'Node.js'],
    category: 'Web2',
  },
  {
    icon: Blocks,
    title: 'Blockchain Solutions',
    description: 'Smart contracts, DApps, and decentralized platforms. We bring your Web3 vision to life with secure and scalable solutions.',
    tags: ['Solidity', 'Ethereum', 'Smart Contracts'],
    category: 'Web3',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
    tags: ['React Native', 'Flutter', 'iOS/Android'],
    category: 'Web2',
  },
  {
    icon: Code2,
    title: 'Custom Software',
    description: 'Tailored software solutions designed to solve your unique business challenges and streamline operations.',
    tags: ['API Development', 'Integrations', 'Automation'],
    category: 'Web2',
  },
  {
    icon: Shield,
    title: 'Security Audits',
    description: 'Comprehensive security reviews for smart contracts and web applications to protect your users and assets.',
    tags: ['Smart Contract Audit', 'Penetration Testing'],
    category: 'Web3',
  },
  {
    icon: Cpu,
    title: 'AI Integration',
    description: 'Integrate intelligent features into your products with machine learning models and AI-powered automation.',
    tags: ['ChatGPT', 'ML Models', 'Automation'],
    category: 'Web2',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Services</Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Solutions That Drive
            <span className="text-primary"> Innovation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From traditional web development to cutting-edge blockchain technology, 
            we offer comprehensive solutions for the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group relative overflow-visible border-card-border hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`card-service-${service.title.toLowerCase().replace(' ', '-')}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-md bg-primary/10">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge 
                    variant="outline" 
                    className={service.category === 'Web3' ? 'border-purple-500/50 text-purple-600 dark:text-purple-400' : ''}
                  >
                    {service.category}
                  </Badge>
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
