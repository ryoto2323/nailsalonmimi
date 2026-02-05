import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Concept', id: SectionId.STRONG_POINTS },
    { label: 'Design', id: SectionId.GALLERY },
    { label: 'Price', id: SectionId.MENU },
    { label: 'Access', id: SectionId.ACCESS },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
    }
  };

  const bookingUrl = "https://airrsv.net/demosite0000/calendar";

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer"
        >
          <span className="text-3xl font-cursive text-accent font-bold transform -rotate-2 inline-block">
            Mimi
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
            <ul className="flex space-x-8">
            {navItems.map((item) => (
                <li key={item.id}>
                <button 
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm font-medium text-text hover:text-accent transition-colors tracking-widest uppercase relative group"
                >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </button>
                </li>
            ))}
            </ul>
            <a 
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 bg-accent text-white rounded-full font-medium shadow-md hover:shadow-lg hover:bg-pink-600 transition-all text-sm flex items-center gap-2"
            >
                <i className="fa-solid fa-calendar-check"></i>
                ネット予約
            </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out flex flex-col justify-center items-center gap-8 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-xl font-serif text-text"
          >
            {item.label}
          </button>
        ))}
        <a 
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 bg-accent text-white rounded-full font-medium shadow-md"
        >
            ネット予約
        </a>
      </div>
    </nav>
  );
};

export default Navigation;