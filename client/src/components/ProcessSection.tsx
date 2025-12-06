import { Badge } from '@/components/ui/badge';
import { MessageSquare, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery',
    description: 'We dive deep into understanding your vision, goals, and requirements through detailed consultations.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design',
    description: 'Our team creates intuitive designs and prototypes that bring your ideas to life before development.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Development',
    description: 'We build your product using cutting-edge technologies, following best practices and agile methodologies.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Support',
    description: 'We deploy your product and provide ongoing support to ensure continued success and growth.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Process</Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            How We <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven methodology that ensures your project is delivered on time, within budget, and exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative text-center"
              data-testid={`process-step-${step.number}`}
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl" />
                <div className="relative w-24 h-24 rounded-full bg-card border border-border flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {step.number}
                </div>
              </div>
              
              <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
