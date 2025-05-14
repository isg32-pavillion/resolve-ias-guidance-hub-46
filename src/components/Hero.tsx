
import React from 'react';
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center rounded-full bg-accent/20 px-3 py-1 text-sm">
              <GraduationCap className="mr-1 h-4 w-4" />
              <span>4 UPSC Mains & 3 UPPSC Mains Experience</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-navy-900">
              Your <span className="text-upsc-orange">Strategic</span> Guide to UPSC Success
            </h1>
            
            <p className="text-lg text-navy-700 md:pr-8 animate-fade-in animate-delay-200">
              Clear, actionable guidance from Prankul Agarwal to simplify your IAS journey with practical tips, customized study plans, and proven answer-writing strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in animate-delay-300">
              <Button asChild size="lg" className="bg-upsc-blue hover:bg-navy-700 text-white">
                <a href="https://t.me/upscresolve" target="_blank" rel="noopener noreferrer">
                  Join Telegram Community
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-navy-300 hover:bg-navy-50">
                <a href="https://www.youtube.com/@UPSCResolvee" target="_blank" rel="noopener noreferrer">
                  Watch YouTube Videos
                </a>
              </Button>
            </div>
            
            <div className="pt-6 flex items-center gap-4 text-sm text-muted-foreground animate-fade-in animate-delay-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-navy-200 border-2 border-white flex items-center justify-center font-medium text-xs text-navy-700">
                    {i}
                  </div>
                ))}
              </div>
              <div>Trusted by thousands of UPSC aspirants</div>
            </div>
          </div>
          
          <div className="relative lg:h-[500px] animate-fade-in animate-delay-200">
            <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h3 className="font-serif font-bold text-lg text-navy-800 mb-3">Why Choose UPSC Resolve?</h3>
              <ul className="space-y-3">
                <FeatureItem>Practical insights from real exam experience</FeatureItem>
                <FeatureItem>Structured study approach to cover vast syllabus</FeatureItem>
                <FeatureItem>Focus on answer writing - the key to UPSC success</FeatureItem>
                <FeatureItem>Community support for motivation and doubt solving</FeatureItem>
              </ul>
            </div>
            
            <div className="absolute top-24 -right-4 w-64 h-64 bg-navy-100 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute bottom-12 -left-8 w-80 h-80 bg-accent/30 rounded-full opacity-40 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex items-start">
      <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center">
        <svg className="h-3.5 w-3.5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <span className="text-navy-700">{children}</span>
    </li>
  );
};

export default Hero;
