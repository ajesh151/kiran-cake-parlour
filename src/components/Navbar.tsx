
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'menu', 'wallet', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'menu', label: 'MENU & PRICING' },
    { id: 'wallet', label: 'KIRAN WALLET' },
    { id: 'contact', label: 'CONTACT US' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/4720b749-946d-4875-97c9-82e93591461a.png" 
              alt="Kiran Cake Parlour" 
              className="h-12 w-auto object-contain"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-orange-400 ${
                  activeSection === item.id ? 'text-orange-400 border-b-2 border-orange-400 pb-1' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Link 
              to="/login"
              className="flex items-center space-x-2 bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              <User size={16} />
              <span>LOGIN</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-orange-400 ${
                  activeSection === item.id ? 'text-orange-400' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Link 
              to="/login"
              className="flex items-center space-x-2 mx-4 mt-2 bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              <User size={16} />
              <span>LOGIN</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
