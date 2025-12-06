import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Lightbulb, Users, Rocket } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We embrace new technologies and methodologies to deliver cutting-edge solutions.',
  },
  {
    icon: Target,
    title: 'Client Focused',
    description: 'Your success is our priority. We work closely with you to understand and exceed expectations.',
  },
  {
    icon: Users,
    title: 'Collaborative',
    description: 'We believe in transparent communication and treating every project as a partnership.',
  },
  {
    icon: Rocket,
    title: 'Results Driven',
    description: 'We measure our success by the tangible impact we create for your business.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <Badge variant="secondary" className="mb-4">About Us</Badge>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Building the Future,
              <span className="text-primary"> One Product at a Time</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">Micro1</strong> is a software development and consulting agency 
                dedicated to helping businesses navigate the digital landscape. We specialize in both 
                traditional web development and emerging blockchain technologies.
              </p>
              <p className="leading-relaxed">
                Founded with a vision to bridge the gap between ideas and execution, we bring together 
                a team of passionate developers, designers, and strategists who are committed to 
                delivering exceptional digital products.
              </p>
              <p className="leading-relaxed">
                Whether you're a startup looking to build your MVP or an enterprise seeking to innovate, 
                we have the expertise and dedication to bring your vision to life.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="font-display text-3xl font-bold text-primary mb-1">2025</div>
                  <div className="text-sm text-muted-foreground">Year Founded</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-primary mb-1">Nigeria</div>
                  <div className="text-sm text-muted-foreground">Headquarters</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value) => (
              <Card
                key={value.title}
                className="border-card-border hover-elevate transition-all duration-300"
                data-testid={`card-value-${value.title.toLowerCase().replace(' ', '-')}`}
              >
                <CardContent className="p-5">
                  <div className="p-2 rounded-md bg-primary/10 w-fit mb-4">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
