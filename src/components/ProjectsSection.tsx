import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type ProjectCategory = 'all' | 'web2' | 'web3' | 'mobile';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'DeFi Exchange Platform',
    description: 'A decentralized exchange with automated market making and liquidity pools for seamless token swaps.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
    category: ['web3'],
    tags: ['Solidity', 'React', 'Web3.js', 'Ethereum'],
    liveUrl: '#',
  },
  {
    id: '2',
    title: 'Enterprise SaaS Dashboard',
    description: 'Comprehensive analytics and management platform for enterprise clients with real-time data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    category: ['web2'],
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js'],
    liveUrl: '#',
  },
  {
    id: '3',
    title: 'NFT Marketplace',
    description: 'Full-featured marketplace for creating, buying, and selling NFTs with royalty distribution.',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&h=600&fit=crop',
    category: ['web3'],
    tags: ['Solidity', 'IPFS', 'React', 'Hardhat'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '4',
    title: 'HealthTech Mobile App',
    description: 'Cross-platform health tracking application with wearable device integration and health insights.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    category: ['mobile', 'web2'],
    tags: ['React Native', 'Node.js', 'MongoDB', 'HealthKit'],
    liveUrl: '#',
  },
  {
    id: '5',
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with inventory management, payment processing, and analytics.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    category: ['web2'],
    tags: ['Next.js', 'Stripe', 'Prisma', 'TailwindCSS'],
    liveUrl: '#',
  },
  {
    id: '6',
    title: 'DAO Governance Platform',
    description: 'Decentralized governance system with proposal creation, voting, and treasury management.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
    category: ['web3'],
    tags: ['Solidity', 'TheGraph', 'React', 'Snapshot'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filters: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Web2', value: 'web2' },
    { label: 'Web3', value: 'web3' },
    { label: 'Mobile', value: 'mobile' },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-20 md:py-32 bg-card relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/5 to-transparent blur-3xl"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <Badge variant="secondary" className="mb-4">Our Work</Badge>
          </motion.div>
          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore our portfolio of successful projects across Web2, Web3, and mobile platforms.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {filters.map((filter, index) => (
            <motion.div
              key={filter.value}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={activeFilter === filter.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(filter.value)}
                data-testid={`button-filter-${filter.value}`}
              >
                {filter.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -8 }}
              >
                <Card
                  className="group overflow-hidden border-card-border transition-all duration-300 h-full"
                  data-testid={`card-project-${project.id}`}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-4 gap-2"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.liveUrl && (
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          <Button size="sm" variant="secondary" className="gap-1.5" data-testid={`button-project-live-${project.id}`}>
                            <ExternalLink className="w-3.5 h-3.5" />
                            Live Demo
                          </Button>
                        </motion.div>
                      )}
                      {project.githubUrl && (
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Button size="sm" variant="outline" className="gap-1.5 bg-white/10 border-white/30 text-white" data-testid={`button-project-github-${project.id}`}>
                            <Github className="w-3.5 h-3.5" />
                            Code
                          </Button>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                  <CardContent className="p-5">
                    <motion.h3
                      className="font-display text-lg font-semibold mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
