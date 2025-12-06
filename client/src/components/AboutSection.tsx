import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Lightbulb, Users, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 50, rotateY: -15 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <Badge variant="secondary" className="mb-4">About Us</Badge>
            </motion.div>
            <motion.h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Building the Future,
              <motion.span
                className="text-primary"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {" "}One Product at a Time
              </motion.span>
            </motion.h2>
            <motion.div
              className="space-y-4 text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.p
                className="text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <strong className="text-foreground">Micro1</strong> is a software development and consulting agency 
                dedicated to helping businesses navigate the digital landscape. We specialize in both 
                traditional web development and emerging blockchain technologies.
              </motion.p>
              <motion.p
                className="leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Founded with a vision to bridge the gap between ideas and execution, we bring together 
                a team of passionate developers, designers, and strategists who are committed to 
                delivering exceptional digital products.
              </motion.p>
              <motion.p
                className="leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Whether you're a startup looking to build your MVP or an enterprise seeking to innovate, 
                we have the expertise and dedication to bring your vision to life.
              </motion.p>
            </motion.div>

            <motion.div
              className="mt-8 pt-8 border-t border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="font-display text-3xl font-bold text-primary mb-1"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.9 }}
                  >
                    2025
                  </motion.div>
                  <div className="text-sm text-muted-foreground">Year Founded</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="font-display text-3xl font-bold text-primary mb-1"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 1 }}
                  >
                    Nigeria
                  </motion.div>
                  <div className="text-sm text-muted-foreground">Headquarters</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
              >
                <Card
                  className="border-card-border transition-all duration-300 h-full"
                  data-testid={`card-value-${value.title.toLowerCase().replace(' ', '-')}`}
                >
                  <CardContent className="p-5">
                    <motion.div
                      className="p-2 rounded-md bg-primary/10 w-fit mb-4"
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <value.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <h3 className="font-display text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
