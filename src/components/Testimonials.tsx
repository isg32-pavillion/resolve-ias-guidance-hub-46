
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';

const testimonials = [
  {
    content: "The answer writing techniques I learned from UPSC Resolve helped me score 15-20 marks more per paper. The guidance was practical and directly applicable.",
    author: "Rahul S.",
    position: "UPSC Aspirant, Delhi",
    rating: 5
  },
  {
    content: "Prankul sir's approach to current affairs analysis is unique. He focuses on connecting events to syllabus topics, which has completely changed how I read newspapers.",
    author: "Priya M.",
    position: "UPSC Mains Qualifier",
    rating: 5
  },
  {
    content: "The structured study plan provided by UPSC Resolve helped me cover the vast syllabus systematically. I finally feel in control of my preparation.",
    author: "Ankit G.",
    position: "UPSC Aspirant, Mumbai",
    rating: 5
  },
  {
    content: "The Telegram community is incredibly supportive. Getting doubts resolved quickly and connecting with fellow aspirants has been invaluable for my preparation.",
    author: "Sneha K.",
    position: "UPSC Prelims Qualifier",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-navy-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Impact & Success Stories</h2>
          <p className="text-navy-700 max-w-2xl mx-auto">
            Hear from UPSC aspirants who have benefited from our guidance and resources
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              position={testimonial.position}
              rating={testimonial.rating}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md border border-navy-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard number="1000+" label="Aspirants Guided" />
            <StatCard number="200+" label="Success Stories" />
            <StatCard number="500+" label="Resources Shared" />
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ 
  content, 
  author, 
  position,
  rating 
}: { 
  content: string, 
  author: string, 
  position: string,
  rating: number
}) => {
  return (
    <Card className="border-navy-100 hover:border-accent transition-all">
      <CardContent className="p-6">
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-upsc-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>
        
        <p className="text-navy-700 mb-6">"{content}"</p>
        
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-navy-200 flex items-center justify-center mr-3">
            <span className="font-medium text-navy-700">{author.charAt(0)}</span>
          </div>
          <div>
            <h4 className="font-medium text-navy-900">{author}</h4>
            <p className="text-sm text-navy-600">{position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const StatCard = ({ number, label }: { number: string, label: string }) => {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-upsc-blue mb-2">{number}</div>
      <div className="text-navy-700">{label}</div>
    </div>
  );
};

export default Testimonials;
