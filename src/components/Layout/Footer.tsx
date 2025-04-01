
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-500 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/lovable-uploads/760e838b-1ff0-44d6-a006-6dfad0c91fee.png" alt="Accessmart Solutions Logo" className="h-10" />
              <h3 className="text-xl font-bold">Accessmart Solutions</h3>
            </div>
            <p className="mb-4 text-gray-200">
              Supporting Nigerian Entrepreneurs with Comprehensive Digital Business Solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/accessmartsolutions" target="_blank" className="text-white hover:text-accent-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/accessmart" target="_blank" className="text-white hover:text-accent-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/accessmartsolutions/" target="_blank" className="text-white hover:text-accent-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/accessmart-solutions" target="_blank" className="text-white hover:text-accent-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-200 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/#services" className="text-gray-200 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="/#about" className="text-gray-200 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="/#testimonials" className="text-gray-200 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-200 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#services" className="text-gray-200 hover:text-white transition-colors">Business Strategy</a>
              </li>
              <li>
                <a href="/#services" className="text-gray-200 hover:text-white transition-colors">Digital Presence</a>
              </li>
              <li>
                <a href="/#services" className="text-gray-200 hover:text-white transition-colors">Content & Marketing</a>
              </li>
              <li>
                <a href="/#services" className="text-gray-200 hover:text-white transition-colors">Technical Services</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Lagos | Abuja | Port Harcourt | Kano | Kaduna | Borno</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" size={18} />
                <a href="tel:+2348039479877" className="hover:text-accent-400 transition-colors">+234 803 947 9877</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" size={18} />
                <a href="mailto:accessmartsolutions@gmail.com" className="hover:text-accent-400 transition-colors">accessmartsolutions@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              &copy; {currentYear} Accessmart Solutions. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm mt-2 md:mt-0">
              Lagos | Abuja | Port Harcourt | Kano | Kaduna | Borno
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
