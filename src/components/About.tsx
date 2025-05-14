
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-navy-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">About Prankul Agarwal</h2>
          <p className="text-navy-700 max-w-2xl mx-auto">
            An experienced mentor with proven strategies to guide you through your UPSC preparation journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="lg:order-2">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="font-serif font-bold text-xl text-navy-800 mb-4">My Journey & Experience</h3>
              
              <div className="space-y-4">
                <p className="text-navy-700">
                  Having appeared in 4 UPSC Mains and 3 UPPSC Mains examinations, I understand the challenges, pressures, and strategies needed to navigate the UPSC journey effectively.
                </p>
                
                <p className="text-navy-700">
                  My approach focuses on practical, actionable advice rather than theoretical concepts that don't translate to exam performance. I've developed methods that help aspirants:
                </p>
                
                <ul className="space-y-2 mt-4">
                  <li className="flex">
                    <span className="font-medium text-upsc-blue mr-2">•</span>
                    <span>Optimize study time for maximum retention</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-upsc-blue mr-2">•</span>
                    <span>Master effective answer writing techniques</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-upsc-blue mr-2">•</span>
                    <span>Develop critical thinking for diverse UPSC questions</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-upsc-blue mr-2">•</span>
                    <span>Create personalized preparation strategies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 lg:pr-8">
            <h3 className="font-serif text-2xl font-bold text-navy-900">Qualifications & Expertise</h3>
            
            <div className="grid gap-4">
              <ExperienceCard 
                title="UPSC Advanced Experience"
                description="Successfully navigated 4 UPSC Mains examinations, gaining deep insights into the exam pattern and requirements"
                icon="🏛️"
              />
              
              <ExperienceCard 
                title="UPPSC Experience"
                description="Appeared in 3 UPPSC Mains examinations, understanding state-level civil service requirements"
                icon="📊"
              />
              
              <ExperienceCard 
                title="Answer Writing Expert"
                description="Developed proven techniques for effective answer presentation that scores maximum marks"
                icon="✍️"
              />
              
              <ExperienceCard 
                title="Study Strategy Specialist"
                description="Created optimized study plans that efficiently cover the vast UPSC syllabus without burnout"
                icon="📚"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ title, description, icon }: { title: string, description: string, icon: string }) => {
  return (
    <Card className="border-navy-100 hover:border-accent transition-colors">
      <CardContent className="p-4 flex">
        <div className="mr-4 h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-xl">
          {icon}
        </div>
        <div>
          <h4 className="font-medium text-navy-900 mb-1">{title}</h4>
          <p className="text-sm text-navy-700">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default About;
