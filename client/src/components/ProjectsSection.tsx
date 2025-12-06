import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

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
    <section id="projects" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Our Work</Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful projects across Web2, Web3, and mobile platforms.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(filter.value)}
              data-testid={`button-filter-${filter.value}`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-card-border hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                  {project.liveUrl && (
                    <Button size="sm" variant="secondary" className="gap-1.5" data-testid={`button-project-live-${project.id}`}>
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" className="gap-1.5 bg-white/10 border-white/30 text-white" data-testid={`button-project-github-${project.id}`}>
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-display text-lg font-semibold mb-2">{project.title}</h3>
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
          ))}
        </div>
      </div>
    </section>
  );
}
