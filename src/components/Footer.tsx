
import React from 'react';
import { Telegram, Mail, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">UPSC <span className="text-upsc-orange">Resolve</span></h3>
            <p className="text-navy-200 mb-4">
              Your strategic partner for UPSC preparation with practical tips, study plans, and answer-writing strategies.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://t.me/upscresolve" icon={<Telegram className="h-5 w-5" />} />
              <SocialLink href="mailto:upscresolve@gmail.com" icon={<Mail className="h-5 w-5" />} />
              <SocialLink href="https://www.youtube.com/@UPSCResolvee" icon={<Youtube className="h-5 w-5" />} />
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#testimonials">Impact</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Contact Information</h4>
            <ul className="space-y-2 text-navy-200">
              <li>
                <a href="https://t.me/upscresolve" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Telegram: t.me/upscresolve
                </a>
              </li>
              <li>
                <a href="mailto:upscresolve@gmail.com" className="hover:text-white transition-colors">
                  Email: upscresolve@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@UPSCResolvee" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  YouTube: @UPSCResolvee
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-navy-700 mt-8 pt-8 text-center text-navy-300 text-sm">
          <p>© {new Date().getFullYear()} UPSC Resolve by Prankul Agarwal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="h-10 w-10 rounded-full bg-navy-800 hover:bg-upsc-blue/70 flex items-center justify-center transition-colors"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <li>
      <a href={href} className="text-navy-200 hover:text-white transition-colors">{children}</a>
    </li>
  );
};

export default Footer;
