
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Zap, Monitor } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90 z-10"></div>
      
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1636489953081-c4ebbd50fa3a?q=80&w=2072&auto=format&fit=crop" 
          alt="Gaming setup" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="container relative z-20 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              New Arrivals 2025
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Unleash Your <span className="text-primary">Gaming</span> Potential
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md">
              Discover our collection of high-performance gaming laptops designed to deliver unmatched speed, graphics, and immersion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link to="/products">
                  Shop Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="flex flex-col items-center text-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Cpu className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-medium">Latest Processors</h3>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-medium">Max Performance</h3>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Monitor className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-medium">Premium Display</h3>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center relative float-animation">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1593640495253-23196b27a87f?q=80&w=2069&auto=format&fit=crop" 
              alt="Gaming Laptop" 
              className="max-w-sm rounded-lg shadow-2xl border border-border relative z-0"
            />
            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition duration-500 blur-sm animate-glow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
