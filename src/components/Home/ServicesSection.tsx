
import { Code, LineChart, Smartphone, Palette, MessageSquare, History } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
      <div className="w-12 h-12 bg-primary-50 text-primary-500 rounded-lg flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-primary-500">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Code size={24} />,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies that drive business growth.",
    },
    {
      icon: <LineChart size={24} />,
      title: "Digital Marketing",
      description: "Data-driven strategies to increase your online presence and drive qualified traffic to your business.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "App Development",
      description: "Native and cross-platform mobile applications that provide seamless user experiences across devices.",
    },
    {
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance usability, accessibility, and overall user satisfaction.",
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Consulting",
      description: "Strategic guidance to help businesses navigate the digital landscape and achieve their goals.",
    },
    {
      icon: <History size={24} />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance services to keep your digital assets running smoothly.",
    },
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            We offer a comprehensive range of digital services to help your business grow and succeed in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
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
