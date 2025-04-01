
import { Check } from "lucide-react";

const AboutSection = () => {
  const values = [
    "Innovation that drives results",
    "Client-centered approach",
    "Quality and excellence in delivery",
    "Transparency and ethical practices",
    "Continuous learning and improvement",
    "Long-term partnerships and collaboration",
  ];

  return (
    <section id="about" className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="AccessMart Solutions Team"
                className="rounded-lg shadow-xl"
              />
              <div className="hidden md:block absolute -top-6 -right-6 bg-secondary-400 text-white rounded-lg p-6 shadow-lg">
                <p className="text-xl font-bold">10+ Years</p>
                <p className="text-sm">Industry Experience</p>
              </div>
              <div className="hidden md:block absolute -bottom-6 -left-6 bg-accent-400 text-white rounded-lg p-6 shadow-lg">
                <p className="text-xl font-bold">200+</p>
                <p className="text-sm">Satisfied Clients</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-6">
              About AccessMart Solutions
            </h2>
            <p className="text-gray-600 mb-6">
              Founded in 2013, AccessMart Solutions has been at the forefront of digital innovation, helping businesses transform and thrive in the digital landscape. We combine technical expertise with strategic thinking to deliver solutions that drive real business results.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of experts is passionate about technology and committed to delivering excellence in every project. We work closely with our clients to understand their unique challenges and develop tailored solutions that meet their specific needs.
            </p>
            
            <h3 className="text-xl font-bold text-primary-500 mb-4">Our Values</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {values.map((value, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-accent-400 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-600">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
