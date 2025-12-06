import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Blocks, Cpu, Globe, Smartphone, Shield, Database, Cloud, Palette, MessageSquare, ShoppingCart, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

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
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Complete online store solutions with payment processing, inventory management, and seamless checkout experiences.',
    tags: ['Shopify', 'WooCommerce', 'Stripe'],
    category: 'Web2',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Scalable database architecture and optimization for high-performance applications that handle millions of records.',
    tags: ['PostgreSQL', 'MongoDB', 'Redis'],
    category: 'Web2',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Deploy and manage cloud infrastructure with DevOps best practices for reliable, scalable applications.',
    tags: ['AWS', 'Docker', 'Kubernetes'],
    category: 'Web2',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that delight users and drive engagement through thoughtful design principles.',
    tags: ['Figma', 'Prototyping', 'User Research'],
    category: 'Web2',
  },
  {
    icon: MessageSquare,
    title: 'Chatbot Development',
    description: 'Intelligent conversational agents that automate customer support and enhance user engagement.',
    tags: ['Telegram Bots', 'Discord Bots', 'WhatsApp'],
    category: 'Web2',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Ongoing technical support, bug fixes, and feature updates to keep your applications running smoothly.',
    tags: ['24/7 Support', 'Bug Fixes', 'Updates'],
    category: 'Web2',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <Badge variant="secondary" className="mb-4">Our Services</Badge>
          </motion.div>
          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Solutions That Drive
            <motion.span
              className="text-primary"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {" "}Innovation
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            From traditional web development to cutting-edge blockchain technology, 
            we offer comprehensive solutions for the digital age.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              <Card
                className="group relative overflow-visible border-card-border transition-all duration-300 h-full"
                data-testid={`card-service-${service.title.toLowerCase().replace(' ', '-')}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className="p-3 rounded-md bg-primary/10"
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="w-6 h-6 text-primary" />
                    </motion.div>
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
                    {service.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * tagIndex }}
                      >
                        <Badge variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>

                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-primary/0 pointer-events-none"
                  whileHover={{ borderColor: "hsl(var(--primary) / 0.3)" }}
                  transition={{ duration: 0.3 }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
