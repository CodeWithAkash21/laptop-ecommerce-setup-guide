
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    content: "The Phantom X Pro exceeded all my expectations. The graphics are incredible and it handles all my games at max settings without breaking a sweat.",
    author: "Alex Morgan",
    role: "Professional Gamer",
    avatar: "AM"
  },
  {
    id: 2,
    content: "As a game developer, I need reliable performance. The Stealth 15 Elite has been my faithful companion for coding and testing for over a year now.",
    author: "Sarah Johnson",
    role: "Game Developer",
    avatar: "SJ"
  },
  {
    id: 3,
    content: "Customer service was exceptional. They helped me choose the perfect laptop based on my needs and budget. Very happy with my Nova Ultimate!",
    author: "Michael Chen",
    role: "Content Creator",
    avatar: "MC"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(testimonial => (
            <div 
              key={testimonial.id} 
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all"
            >
              <div className="space-y-4">
                <div className="flex-1">
                  <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S15.5 8 10 8zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"></path>
                    <path d="M10 14c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zM28 14c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z"></path>
                  </svg>
                  <p className="mt-3 text-muted-foreground">"{testimonial.content}"</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
