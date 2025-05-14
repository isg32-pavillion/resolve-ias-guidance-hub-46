
import React from 'react';
import { BookOpen, FileText, MessageSquareText, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from '@/lib/utils';

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">How UPSC Resolve Helps You</h2>
          <p className="text-navy-700 max-w-2xl mx-auto">
            Comprehensive resources and guidance to support every stage of your UPSC preparation journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            title="Study Plans"
            description="Structured plans to cover the entire UPSC syllabus efficiently and effectively"
            icon={<BookOpen className="h-6 w-6" />}
            color="blue"
          />
          
          <ServiceCard 
            title="Answer Writing"
            description="Techniques to structure and present answers that score maximum marks in the exam"
            icon={<FileText className="h-6 w-6" />}
            color="orange"
          />
          
          <ServiceCard 
            title="Doubt Solving"
            description="Personalized guidance to resolve subject-specific doubts and preparation concerns"
            icon={<MessageSquareText className="h-6 w-6" />}
            color="green"
          />
          
          <ServiceCard 
            title="Current Affairs"
            description="Regular updates and analysis of current events from a UPSC perspective"
            icon={<GraduationCap className="h-6 w-6" />}
            color="purple"
          />
        </div>
        
        <div className="mt-16">
          <Card className="bg-navy-50 border-navy-100">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">Stay Updated with Our Resources</h3>
                  <p className="text-navy-700 mb-6">
                    UPSC Resolve provides regular content through various channels to support your preparation. Join our community to access:
                  </p>
                  
                  <ul className="space-y-3">
                    <ResourceItem title="YouTube Tutorials" description="In-depth video explanations on complex topics" />
                    <ResourceItem title="Telegram Updates" description="Daily current affairs and exam strategy tips" />
                    <ResourceItem title="Study Materials" description="Curated notes and resources for effective revision" />
                    <ResourceItem title="Mock Tests" description="Practice with exam-pattern questions to improve performance" />
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h4 className="font-serif font-bold text-lg text-navy-800 mb-4">Our Approach to UPSC Preparation</h4>
                  
                  <div className="space-y-4">
                    <ApproachItem number="01" title="Understand the Exam">
                      Gaining clarity on UPSC requirements and patterns
                    </ApproachItem>
                    
                    <ApproachItem number="02" title="Strategic Planning">
                      Creating customized study schedules that optimize learning
                    </ApproachItem>
                    
                    <ApproachItem number="03" title="Content Mastery">
                      Building strong conceptual foundations across subjects
                    </ApproachItem>
                    
                    <ApproachItem number="04" title="Answer Presentation">
                      Developing the skill to present information effectively
                    </ApproachItem>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  color 
}: { 
  title: string, 
  description: string, 
  icon: React.ReactNode,
  color: "blue" | "orange" | "green" | "purple"
}) => {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600",
    orange: "bg-orange-50 text-orange-600",
    green: "bg-green-50 text-green-600",
    purple: "bg-purple-50 text-purple-600"
  };
  
  return (
    <Card className="border-navy-100 hover:shadow-md transition-all">
      <CardHeader>
        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", colorClasses[color])}>
          {icon}
        </div>
        <CardTitle className="text-navy-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-navy-700">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const ResourceItem = ({ title, description }: { title: string, description: string }) => {
  return (
    <li className="flex items-start">
      <div className="mr-3 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-accent/30 flex items-center justify-center">
        <svg className="h-3 w-3 text-upsc-gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <span className="font-medium text-navy-900">{title}:</span> {" "}
        <span className="text-navy-700">{description}</span>
      </div>
    </li>
  );
};

const ApproachItem = ({ number, title, children }: { number: string, title: string, children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="mr-4 flex-shrink-0">
        <span className="inline-block w-8 h-8 rounded-full bg-upsc-blue/10 text-upsc-blue font-medium text-sm flex items-center justify-center">
          {number}
        </span>
      </div>
      <div>
        <h5 className="font-medium text-navy-900 mb-1">{title}</h5>
        <p className="text-sm text-navy-700">{children}</p>
      </div>
    </div>
  );
};

export default Services;
