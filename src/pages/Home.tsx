import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import ProcessSection from '@/components/ProcessSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={scrollToSection} />
      <main>
        <HeroSection
          onGetStarted={() => scrollToSection('contact')}
          onViewProjects={() => scrollToSection('projects')}
        />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        {/* <TestimonialsSection /> */}
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}
