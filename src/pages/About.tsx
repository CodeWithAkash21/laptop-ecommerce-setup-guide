
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container py-16 px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <Separator className="mb-8" />
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2020, GamingTech was born from a passion for gaming and cutting-edge technology. 
                What started as a small team of enthusiastic gamers has grown into a trusted destination for premium gaming laptops. 
                We believe that everyone deserves access to high-performance gaming equipment that doesn't compromise on quality or innovation.
              </p>
              <p className="text-muted-foreground">
                Our mission is simple: to provide gamers with carefully curated, high-performance laptops that deliver exceptional 
                gaming experiences. We test and select each product in our catalog to ensure it meets our rigorous standards for 
                performance, reliability, and value.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-medium mb-3">Expert Curation</h3>
                  <p className="text-muted-foreground">
                    Every laptop in our collection is hand-picked by our team of gaming enthusiasts and tech experts.
                  </p>
                </div>
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-medium mb-3">Quality Assurance</h3>
                  <p className="text-muted-foreground">
                    We thoroughly test each model to ensure it delivers the performance and reliability gamers demand.
                  </p>
                </div>
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-medium mb-3">Dedicated Support</h3>
                  <p className="text-muted-foreground">
                    Our knowledgeable support team is always ready to assist with your questions and concerns.
                  </p>
                </div>
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-medium mb-3">Competitive Pricing</h3>
                  <p className="text-muted-foreground">
                    We work directly with manufacturers to offer the best possible prices without compromising quality.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
              <p className="text-muted-foreground mb-6">
                Our diverse team brings together expertise in gaming hardware, software development, customer service, 
                and logistics. United by our passion for gaming technology, we work together to deliver an exceptional 
                shopping experience from browsing to unboxing.
              </p>
              <p className="text-muted-foreground">
                We're constantly testing new products, staying updated on the latest gaming trends, and refining our 
                services to better serve the gaming community.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
