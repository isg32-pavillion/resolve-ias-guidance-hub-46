import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Mail, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Connect With Us</h2>
          <p className="text-navy-700 max-w-2xl mx-auto">
            Reach out to join our community and get personalized guidance for your UPSC preparation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Card className="border-navy-100">
              <CardContent className="p-6">
                <h3 className="font-serif font-bold text-xl text-navy-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <ContactOption 
                    icon={<MessageCircle className="h-5 w-5" />}
                    title="Join Our Telegram Community"
                    description="Get daily updates, study materials, and connect with fellow aspirants"
                    action={
                      <Button asChild className="bg-upsc-blue hover:bg-navy-700 text-white">
                        <a href="https://t.me/upscresolve" target="_blank" rel="noopener noreferrer">
                          Join Now
                        </a>
                      </Button>
                    }
                  />
                  
                  <ContactOption 
                    icon={<Youtube className="h-5 w-5" />}
                    title="Subscribe on YouTube"
                    description="Watch in-depth video tutorials on various UPSC topics"
                    action={
                      <Button asChild variant="outline" className="border-upsc-orange text-upsc-orange hover:bg-upsc-orange/10">
                        <a href="https://www.youtube.com/@UPSCResolvee" target="_blank" rel="noopener noreferrer">
                          Subscribe
                        </a>
                      </Button>
                    }
                  />
                  
                  <ContactOption 
                    icon={<Mail className="h-5 w-5" />}
                    title="Email Us"
                    description="For personalized guidance or specific queries"
                    action={
                      <Button asChild variant="outline" className="border-navy-500 text-navy-700 hover:bg-navy-50">
                        <a href="mailto:upscresolve@gmail.com">
                          Send Email
                        </a>
                      </Button>
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <div className="bg-navy-50 p-6 rounded-lg shadow-sm border border-navy-100">
              <h3 className="font-serif font-bold text-xl text-navy-900 mb-4">Why Join Our Community?</h3>
              
              <ul className="space-y-3">
                <CommunityFeature>Access to exclusive study materials and notes</CommunityFeature>
                <CommunityFeature>Regular updates on current affairs from UPSC perspective</CommunityFeature>
                <CommunityFeature>Peer learning through discussion and doubt solving</CommunityFeature>
                <CommunityFeature>Motivation and support throughout your preparation journey</CommunityFeature>
                <CommunityFeature>Direct guidance from Prankul Agarwal</CommunityFeature>
              </ul>
            </div>
            
            <Card className="border-accent/30 bg-accent/5">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-foreground">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-navy-900">Request Study Materials</h3>
                </div>
                
                <p className="text-navy-700 mb-4">
                  Looking for specific study resources? Join our Telegram group and request materials tailored to your needs.
                </p>
                
                <Button asChild className="w-full bg-accent hover:bg-accent/80 text-accent-foreground">
                  <a href="https://t.me/upscresolve" target="_blank" rel="noopener noreferrer">
                    Request Materials
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactOption = ({ 
  icon, 
  title, 
  description, 
  action 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  action: React.ReactNode
}) => {
  return (
    <div className="flex items-start">
      <div className="mr-4 h-10 w-10 rounded-full bg-navy-50 flex items-center justify-center text-navy-700">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-navy-900 mb-1">{title}</h4>
        <p className="text-sm text-navy-700 mb-3">{description}</p>
        {action}
      </div>
    </div>
  );
};

const CommunityFeature = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex items-start">
      <div className="mr-3 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center">
        <svg className="h-3 w-3 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <span className="text-navy-700">{children}</span>
    </li>
  );
};

export default Contact;
