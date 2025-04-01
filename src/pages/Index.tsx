
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import HeroSection from "../components/Home/HeroSection";
import ServicesSection from "../components/Home/ServicesSection";
import AboutSection from "../components/Home/AboutSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import ContactSection from "../components/Home/ContactSection";
import CTASection from "../components/Home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
