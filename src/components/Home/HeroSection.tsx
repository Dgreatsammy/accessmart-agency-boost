
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 leading-tight mb-6">
              Supporting Nigerian <span className="text-accent-400">Entrepreneurs</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
              Comprehensive Digital Business Solutions for Solopreneurs, Startups, SMEs, and Business Enthusiasts—both locally and in the diaspora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary flex items-center">
                Get Started <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="btn-outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
              alt="Business Meeting"
              className="rounded-lg shadow-2xl animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
