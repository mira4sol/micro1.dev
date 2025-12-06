import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroBackground from '@assets/generated_images/tech_innovation_hero_background.png';

interface HeroSectionProps {
  onGetStarted?: () => void;
  onViewProjects?: () => void;
}

export default function HeroSection({ onGetStarted, onViewProjects }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm bg-white/10 border-white/20 text-white backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 mr-2" />
          Web2 & Web3 Solutions
        </Badge>
        
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
          Transform Ideas into
          <span className="block bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Digital Products
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
          We help visionary businesses turn innovation into reality. From cutting-edge web applications 
          to decentralized blockchain solutions, we build products that make an impact.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={onGetStarted}
            className="text-base px-8"
            data-testid="button-hero-get-started"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={onViewProjects}
            className="text-base px-8 bg-white/10 border-white/30 text-white backdrop-blur-sm hover:bg-white/20"
            data-testid="button-hero-view-projects"
          >
            View Our Work
          </Button>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '5+', label: 'Years Experience' },
            { value: '30+', label: 'Happy Clients' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`}>
              <div className="font-display text-3xl sm:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
