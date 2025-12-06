import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechFlow Inc',
    avatar: '',
    rating: 5,
    content: 'Micro1 transformed our outdated system into a modern, scalable platform. Their team delivered beyond our expectations, and the communication throughout the project was exceptional.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder',
    company: 'BlockVenture',
    avatar: '',
    rating: 5,
    content: 'Working with Micro1 on our DeFi platform was a game-changer. Their deep understanding of blockchain technology and attention to security made all the difference.',
  },
  {
    id: 3,
    name: 'Amina Okonkwo',
    role: 'CTO',
    company: 'FinServe Africa',
    avatar: '',
    rating: 5,
    content: 'The mobile app Micro1 built for us has increased our user engagement by 300%. Their UI/UX expertise and technical skills are top-notch.',
  },
  {
    id: 4,
    name: 'David Williams',
    role: 'Product Manager',
    company: 'EcoTrack Solutions',
    avatar: '',
    rating: 5,
    content: 'From concept to launch, Micro1 guided us through every step. Their agile approach and dedication to quality resulted in a product we are proud of.',
  },
  {
    id: 5,
    name: 'Elena Rodriguez',
    role: 'Operations Director',
    company: 'GlobalMart',
    avatar: '',
    rating: 5,
    content: 'Our e-commerce platform now handles 10x the traffic thanks to Micro1\'s infrastructure optimization. They are true professionals who deliver results.',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">Client Reviews</Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="shrink-0 z-10"
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="relative w-full max-w-3xl h-[320px] overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={current.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                  }}
                  className="absolute inset-0"
                >
                  <Card className="h-full border-card-border bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-8 h-full flex flex-col justify-between">
                      <div>
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                          className="inline-block mb-6"
                        >
                          <div className="p-3 rounded-full bg-primary/10">
                            <Quote className="w-6 h-6 text-primary" />
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="flex gap-1 mb-4"
                        >
                          {Array.from({ length: current.rating }).map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.4 + i * 0.1 }}
                            >
                              <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                            </motion.div>
                          ))}
                        </motion.div>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className="text-foreground text-lg leading-relaxed"
                        >
                          "{current.content}"
                        </motion.p>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-4 mt-6 pt-6 border-t border-border"
                      >
                        <Avatar className="w-12 h-12 border-2 border-primary/20">
                          {current.avatar ? (
                            <AvatarImage src={current.avatar} alt={current.name} />
                          ) : null}
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {current.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold">{current.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {current.role}, {current.company}
                          </div>
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="shrink-0 z-10"
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                data-testid={`button-testimonial-dot-${index}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '100%', label: 'Client Satisfaction' },
            { value: '24h', label: 'Response Time' },
            { value: '50+', label: 'Projects Completed' },
            { value: '5/5', label: 'Average Rating' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
              data-testid={`testimonial-stat-${stat.label.toLowerCase().replace(' ', '-')}`}
            >
              <motion.div
                className="font-display text-3xl md:text-4xl font-bold text-primary mb-1"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
