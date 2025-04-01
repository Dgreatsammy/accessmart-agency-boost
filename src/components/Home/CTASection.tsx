
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-primary-500 py-16">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-secondary-400 to-accent-400 rounded-xl p-8 md:p-12 shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-white text-lg mb-8">
              Whether you're looking to launch your business, refine your strategies, or scale to new heights, Accessmart Solutions is here to make your vision a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-primary-500 hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition-colors duration-300">
                Schedule a Consultation
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 font-medium py-2 px-6 rounded-md transition-colors duration-300 flex items-center"
                onClick={() => window.open("https://wa.me/2348039479877", "_blank")}
              >
                Chat on WhatsApp <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
