
import { LineChart, Briefcase, Smartphone, Palette, MessageSquare, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}

const ServiceCard = ({ icon, title, description, items }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
      <div className="w-12 h-12 bg-primary-50 text-primary-500 rounded-lg flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-primary-500">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-gray-600 space-y-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-accent-400 mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Briefcase size={24} />,
      title: "Business Strategy",
      description: "Strategic guidance to help businesses navigate their journey from ideation to growth.",
      items: [
        "Business Idea Generation",
        "Business Development & Planning",
        "Business Registration",
        "Training & Consulting"
      ]
    },
    {
      icon: <Palette size={24} />,
      title: "Digital Presence",
      description: "Establish and enhance your online presence to reach your target audience effectively.",
      items: [
        "Website Design & Development",
        "Graphics Design & Branding",
        "Search Engine Optimization (SEO)",
        "E-commerce Solutions"
      ]
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Content & Marketing",
      description: "Create compelling content and implement effective marketing strategies.",
      items: [
        "Digital Marketing",
        "Social Media Management",
        "Video Content Creation",
        "Ghostwriting & Email Marketing"
      ]
    },
    {
      icon: <Terminal size={24} />,
      title: "Technical Services",
      description: "Technical expertise to optimize your business operations and infrastructure.",
      items: [
        "Data Analysis",
        "AI Automation",
        "IT Infrastructure",
        "Computer Repair & Maintenance"
      ]
    }
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            We offer a comprehensive range of digital services to help Nigerian businesses grow and succeed in today's competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              items={service.items}
            />
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-primary">Explore All Services</Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
