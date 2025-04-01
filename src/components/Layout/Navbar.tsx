
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "About", path: "/#about" },
    { name: "Testimonials", path: "/#testimonials" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo area with reduced width on smaller screens */}
          <Link to="/" className="flex items-center gap-2 max-w-[180px] sm:max-w-[220px] md:max-w-none">
            <img src="/lovable-uploads/760e838b-1ff0-44d6-a006-6dfad0c91fee.png" alt="Accessmart Solutions Logo" className="h-10" />
            <span className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-primary-500 truncate">
              Accessmart<span className="text-accent-400">Solutions</span>
            </span>
          </Link>

          {/* Desktop Navigation with more spacing */}
          <nav className="hidden md:flex items-center md:ml-6 lg:ml-10">
            <div className="flex space-x-4 lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-foreground hover:text-primary-500 font-medium transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <Button 
              className="btn-primary ml-4 lg:ml-8"
              onClick={() => window.open("https://wa.me/2348039479877", "_blank")}
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary-500 transition-colors"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white absolute top-full left-0 w-full shadow-md`}
      >
        <div className="container-custom py-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-foreground hover:text-primary-500 font-medium transition-colors py-2"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="btn-primary w-full"
              onClick={() => {
                window.open("https://wa.me/2348039479877", "_blank");
                toggleMenu();
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
