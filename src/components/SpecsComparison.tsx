
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { products } from '@/data/products';

const SpecsComparison = () => {
  // Get two high-end products for comparison
  const highEndProducts = products
    .sort((a, b) => b.price - a.price)
    .slice(0, 2);

  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Compare Our Top Models</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how our best-selling gaming laptops stack up against each other to find your perfect match
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highEndProducts.map(product => (
            <div 
              key={product.id} 
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">{product.brand}</p>
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                  </div>
                  <span className="font-bold text-primary text-xl">${product.price.toFixed(2)}</span>
                </div>
                
                <div className="space-y-4 border-t border-border pt-4">
                  <div className="flex gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-sm">{product.specs.processor}</p>
                  </div>
                  <div className="flex gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-sm">{product.specs.graphics}</p>
                  </div>
                  <div className="flex gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-sm">{product.specs.memory}</p>
                  </div>
                  <div className="flex gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-sm">{product.specs.storage}</p>
                  </div>
                  <div className="flex gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-sm">{product.specs.display}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button asChild className="w-full">
                    <Link to={`/products/${product.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/products">
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecsComparison;
