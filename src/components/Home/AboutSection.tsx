
import { Check } from "lucide-react";

const AboutSection = () => {
  const reasons = [
    "Expertise to help your business at every stage, from ideation to sustainability and growth",
    "Tailored holistic approach combining humanized traditional business methodologies",
    "AI and digital innovation integration for modern business solutions",
    "Deep understanding of Nigerian business landscape and challenges",
    "Dedicated team committed to your business success",
    "Proven track record of helping businesses grow"
  ];

  return (
    <section id="about" className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/lovable-uploads/b2ce3c49-1ccc-4457-883b-3272b4b40fc1.png"
                alt="Samuel Oluwadamilare - Founder of Accessmart Solutions"
                className="rounded-lg shadow-xl"
              />
              <div className="hidden md:block absolute -top-6 -right-6 bg-secondary-400 text-white rounded-lg p-6 shadow-lg">
                <p className="text-xl font-bold">Since 2018</p>
                <p className="text-sm">Serving Lagos</p>
              </div>
              <div className="hidden md:block absolute -bottom-6 -left-6 bg-accent-400 text-white rounded-lg p-6 shadow-lg">
                <p className="text-xl font-bold">6+ Years</p>
                <p className="text-sm">Industry Experience</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-6">
              About Accessmart Solutions
            </h2>
            <p className="text-gray-600 mb-6">
              Accessmart Solutions has been serving the Lagos area since 2018, initially as a computer sales, repair, and maintenance agency with a cyber cafe on the side.
            </p>
            <p className="text-gray-600 mb-6">
              Founded by Samuel Oluwadamilare, we cater to businesses' needs, from IT infrastructure to digital presence. We are poised to help them get online, generate leads, and ensure they are well-represented in the digital space.
            </p>
            <p className="text-gray-600 mb-8">
              We are readily available to support your vision and unlock your business' potential. We bring together people, tools, tips, intelligence, and strategies that work to make sure your brand is visible to the right audience.
            </p>
            
            <h3 className="text-xl font-bold text-primary-500 mb-4">Why Choose Us</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-accent-400 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-600">{reason}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-bold text-primary-500 mb-2">Our Vision</h4>
              <p className="text-gray-600">
                To become the go-to business solutions platform in Nigeria, driving sustainable growth for our clients while fostering innovation and excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
