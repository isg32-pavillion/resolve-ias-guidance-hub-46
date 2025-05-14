
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={cn(
      'fixed top-0 w-full z-40 transition-all duration-300 ease-in-out',
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <span className={cn(
            "font-serif text-xl md:text-2xl font-bold transition-all",
            scrolled ? "text-upsc-blue" : "text-upsc-blue"
          )}>
            UPSC <span className="text-upsc-orange">Resolve</span>
          </span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#testimonials">Impact</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <Button asChild className="ml-2 bg-upsc-blue hover:bg-navy-700">
            <a href="https://t.me/upscresolve" target="_blank" rel="noopener noreferrer">Join Telegram</a>
          </Button>
        </nav>
        
        <div className="md:hidden">
          <Button variant="ghost" size="sm" className="text-navy-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-navy-800 hover:text-upsc-orange transition-colors"
    >
      {children}
    </a>
  );
};

export default Navbar;
