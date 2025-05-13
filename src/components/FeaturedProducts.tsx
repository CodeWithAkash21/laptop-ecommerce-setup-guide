
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  // Get 3 featured products
  const featuredProducts = products.slice(0, 3);
  
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-muted-foreground">Explore our top-rated gaming laptops</p>
          </div>
          <Button asChild variant="link" className="gap-2 mt-2 md:mt-0">
            <Link to="/products">
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
