
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialBrand = queryParams.get('brand') || '';
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);
  const [priceRange, setPriceRange] = useState([0, 3500]);
  const [inStock, setInStock] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  // Get unique brands from products
  const brands = Array.from(new Set(products.map(product => product.brand)));
  
  // Filter products based on criteria
  const filteredProducts = products.filter(product => {
    // Search term filter
    const matchesSearch = !searchTerm || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    // Brand filter
    const matchesBrand = !selectedBrand || product.brand === selectedBrand;

    // Price filter
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

    return matchesSearch && matchesBrand && matchesPrice;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedBrand('');
    setPriceRange([0, 3500]);
    setInStock(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-muted py-8">
          <div className="container">
            <h1 className="text-3xl font-bold mb-2">Gaming Laptops</h1>
            <p className="text-muted-foreground">
              Browse our collection of high-performance gaming laptops
            </p>
          </div>
        </div>
        
        <div className="container py-8">
          <div className="mb-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-4 pr-4 py-2"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile filter toggle */}
            <div className="flex lg:hidden justify-between items-center mb-4">
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
              
              {(searchTerm || selectedBrand || priceRange[0] > 0 || priceRange[1] < 3500) && (
                <Button 
                  variant="ghost" 
                  onClick={resetFilters}
                  className="text-sm gap-2"
                >
                  <X className="h-4 w-4" />
                  Reset
                </Button>
              )}
            </div>

            {/* Sidebar filters */}
            <aside className={`w-full lg:w-64 ${showFilters ? 'block' : 'hidden'} lg:block`}>
              <div className="bg-card p-6 rounded-lg border border-border sticky top-20">
                <div className="hidden lg:flex justify-between items-center mb-6">
                  <h2 className="font-medium">Filters</h2>
                  {(searchTerm || selectedBrand || priceRange[0] > 0 || priceRange[1] < 3500) && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={resetFilters}
                      className="text-xs h-8"
                    >
                      Reset all
                    </Button>
                  )}
                </div>
                
                {/* Brand filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                    Brand <ChevronDown className="h-4 w-4" />
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox 
                        id="all-brands"
                        checked={selectedBrand === ''}
                        onCheckedChange={() => setSelectedBrand('')}
                      />
                      <label 
                        htmlFor="all-brands" 
                        className="ml-2 text-sm cursor-pointer"
                      >
                        All Brands
                      </label>
                    </div>
                    {brands.map(brand => (
                      <div key={brand} className="flex items-center">
                        <Checkbox 
                          id={brand}
                          checked={selectedBrand === brand}
                          onCheckedChange={() => setSelectedBrand(prevBrand => 
                            prevBrand === brand ? '' : brand
                          )}
                        />
                        <label 
                          htmlFor={brand} 
                          className="ml-2 text-sm cursor-pointer"
                        >
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Price Range filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                    Price Range <ChevronDown className="h-4 w-4" />
                  </h3>
                  <div className="px-1">
                    <Slider
                      defaultValue={priceRange}
                      min={0}
                      max={3500}
                      step={50}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="my-6"
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">${priceRange[0]}</span>
                      <span className="text-sm">${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
                
                {/* Availability filter */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Availability</h3>
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="in-stock" 
                      checked={inStock}
                      onCheckedChange={setInStock}
                    />
                    <Label htmlFor="in-stock">In Stock Only</Label>
                  </div>
                </div>
                
                {/* Close filters button (mobile only) */}
                <div className="mt-6 lg:hidden">
                  <Button 
                    onClick={() => setShowFilters(false)} 
                    className="w-full"
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </aside>
            
            {/* Products grid */}
            <div className="flex-1">
              <div className="mb-4 flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredProducts.length} products
                </p>
                <div className="flex items-center gap-2">
                  <label htmlFor="sort" className="text-sm whitespace-nowrap">Sort by:</label>
                  <select 
                    id="sort"
                    className="text-sm bg-background border border-border rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 border border-border rounded-lg">
                  <h3 className="text-lg font-medium mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters or search term
                  </p>
                  <Button onClick={resetFilters}>Reset Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
