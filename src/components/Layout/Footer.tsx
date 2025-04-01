
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
            <h3 className="text-xl font-bold mb-4">AccessMart Solutions</h3>
            <p className="mb-4 text-gray-200">
              Transforming businesses with innovative digital solutions that drive growth and success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-400 transition-colors">
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
                <a href="/#services" className="text-gray-200 hover:text-white transition-colors">Web Development</a>
              </li>
              <li>
                <a href="/#services" className="text-gray-200 hover:text-white transition-colors">Digital Marketing</a>
              </li>
              <li>
                <a href="/#services" className="text-gray-200 hover:text-white transition-colors">App Development</a>
              </li>
              <li>
                <a href="/#services" className="text-gray-200 hover:text-white transition-colors">UI/UX Design</a>
              </li>
              <li>
                <a href="/#services" className="text-gray-200 hover:text-white transition-colors">Consulting</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0" size={18} />
                <span>123 Innovation Street, Tech City, TC 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" size={18} />
                <span>info@accessmartsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              &copy; {currentYear} AccessMart Solutions. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
