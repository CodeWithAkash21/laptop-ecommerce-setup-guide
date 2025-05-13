
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import SpecsComparison from '@/components/SpecsComparison';
import Testimonials from '@/components/Testimonials';
import ParallaxSection from '@/components/ParallaxSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProducts />
        <BrandsShowcase />
        <SpecsComparison />
        
        <ParallaxSection 
          imageUrl="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1442&auto=format&fit=crop" 
          speed={0.3}
          className="py-24"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center bg-background/80 backdrop-blur-sm p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold mb-4">Ultimate Gaming Experience</h2>
              <p className="text-muted-foreground mb-6">
                Elevate your gameplay with cutting-edge technology designed for the most demanding games. 
                Our laptops are built for performance, reliability, and immersive experiences.
              </p>
              <Button asChild size="lg">
                <Link to="/products">Explore Collection</Link>
              </Button>
            </div>
          </div>
        </ParallaxSection>
        
        <FeaturesSection />
        
        <ParallaxSection 
          imageUrl="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1470&auto=format&fit=crop" 
          speed={0.4}
          className="py-24"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center bg-background/80 backdrop-blur-sm p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold mb-4">Built for Gamers, By Gamers</h2>
              <p className="text-muted-foreground mb-6">
                Every product in our collection is carefully selected and tested by our team of 
                gaming enthusiasts to ensure it meets the highest standards of performance and durability.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </ParallaxSection>
        
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

const BrandsShowcase = () => {
  const brands = ["TechX", "Razen", "Onyx", "VelocityX", "ProGamer", "NexusG"];
  
  return (
    <section className="py-10 border-y border-border">
      <div className="container">
        <div className="text-center mb-6">
          <p className="text-muted-foreground">Trusted by leading brands</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <div key={index} className="text-xl font-bold text-muted-foreground/70 hover:text-primary transition-colors">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Star className="h-8 w-8" />,
      title: "Premium Quality",
      description: "Every gaming laptop meets our rigorous quality standards for performance and durability"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Fast Delivery",
      description: "Free express shipping on all orders over $1500 with same-day dispatch"
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Extended Warranty",
      description: "Get up to 3 years warranty coverage with our protection plans"
    }
  ];
  
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 border border-border rounded-lg bg-card hover:border-primary/50 transition-all">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => {
  return (
    <section className="py-20 relative bg-muted">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Gaming Experience?</h2>
          <p className="text-muted-foreground mb-6">
            Browse our collection of premium gaming laptops and find the perfect match for your gaming style.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link to="/products">
              Shop Now <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Index;
