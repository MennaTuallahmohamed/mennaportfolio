
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      closeMenu();
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container-custom py-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-brand-primary">Portfolio</a>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleMenu}
          className="md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['home', 'services', 'skills', 'portfolio', 'about', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`nav-link ${activeSection === item ? 'active' : ''}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>

        {/* Contact Button - Desktop */}
        <Button 
          className="hidden md:block rounded-full bg-brand-primary hover:bg-purple-800 transition-all"
          onClick={() => scrollToSection('contact')}
        >
          Contact Me
        </Button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed inset-0 bg-white z-50 md:hidden pt-20">
            <nav className="flex flex-col items-center space-y-6 p-5">
              {['home', 'services', 'skills', 'portfolio', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-lg ${activeSection === item ? 'text-brand-primary font-semibold' : 'text-gray-700'}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <Button 
                className="mt-4 rounded-full bg-brand-primary hover:bg-purple-800 transition-all"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
