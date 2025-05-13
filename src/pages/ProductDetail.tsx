
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, ChevronRight, Star, Check, ShoppingCart, Heart } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id);
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">Sorry, we couldn't find the product you were looking for.</p>
            <Button onClick={() => navigate('/products')}>View All Products</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const isOnSale = product.originalPrice && product.originalPrice > product.price;
  const discount = isOnSale
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Breadcrumbs */}
        <div className="bg-muted py-4">
          <div className="container">
            <div className="flex items-center text-sm text-muted-foreground">
              <a href="/" className="hover:text-foreground">Home</a>
              <ChevronRight className="h-4 w-4 mx-2" />
              <a href="/products" className="hover:text-foreground">Products</a>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </div>
        
        {/* Product details */}
        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product images */}
            <div className="space-y-4">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden border border-border">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`w-20 h-20 rounded-md border ${
                      selectedImage === index ? 'border-primary' : 'border-border'
                    } overflow-hidden flex-shrink-0`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product details */}
            <div className="space-y-6">
              <div>
                <p className="text-muted-foreground">{product.brand}</p>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= Math.round(product.rating)
                            ? 'text-yellow-500 fill-yellow-500'
                            : 'text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{product.rating.toFixed(1)}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                </span>
                {isOnSale && (
                  <>
                    <span className="text-muted-foreground line-through">
                      ${product.originalPrice?.toFixed(2)}
                    </span>
                    <span className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs font-medium">
                      {discount}% OFF
                    </span>
                  </>
                )}
              </div>
              
              <p className="text-muted-foreground">{product.description}</p>
              
              {/* Key features */}
              <div className="space-y-3">
                <h3 className="font-medium">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex gap-2 items-center">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{product.specs.processor}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{product.specs.graphics}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{product.specs.memory}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{product.specs.storage}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{product.specs.display}</span>
                  </div>
                </div>
              </div>
              
              {/* Quantity selection */}
              <div className="flex items-center gap-4">
                <h3 className="font-medium">Quantity:</h3>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className="h-10 w-10"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={incrementQuantity}
                    className="h-10 w-10"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Add to cart button */}
              <div className="flex gap-4">
                <Button 
                  onClick={handleAddToCart} 
                  className="flex-1 gap-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Delivery info */}
              <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-sm">
                <div className="flex gap-2 items-center">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Free shipping on orders over $1500</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Check className="h-4 w-4 text-primary" />
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Check className="h-4 w-4 text-primary" />
                  <span>24/7 technical support</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product tabs */}
          <div className="mt-16">
            <Tabs defaultValue="specifications">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="specifications" className="pt-6">
                <div className="border border-border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 bg-muted/50 font-medium">Processor</td>
                        <td className="py-3 px-4">{product.specs.processor}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 bg-muted/50 font-medium">Graphics</td>
                        <td className="py-3 px-4">{product.specs.graphics}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 bg-muted/50 font-medium">Memory</td>
                        <td className="py-3 px-4">{product.specs.memory}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 bg-muted/50 font-medium">Storage</td>
                        <td className="py-3 px-4">{product.specs.storage}</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 bg-muted/50 font-medium">Display</td>
                        <td className="py-3 px-4">{product.specs.display}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="description" className="pt-6">
                <div className="prose prose-sm max-w-none">
                  <p className="mb-4">{product.description}</p>
                  <p>
                    Experience gaming like never before with the {product.name}. This high-performance 
                    laptop is designed for serious gamers and content creators who demand the best in
                    class performance, visuals, and reliability.
                  </p>
                  <p>
                    Featuring the powerful {product.specs.processor} processor and {product.specs.graphics}
                    graphics card, this laptop can handle the most demanding games and creative applications
                    with ease. The {product.specs.display} display delivers stunning visuals with smooth
                    frame rates and accurate colors.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-5xl font-bold">{product.rating.toFixed(1)}</div>
                      <div className="flex justify-center mt-2">
                        {[1, 2, 3, 4, 5].map(star => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= Math.round(product.rating)
                                ? 'text-yellow-500 fill-yellow-500'
                                : 'text-muted'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Based on 24 reviews</p>
                    </div>
                    
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map(rating => (
                        <div key={rating} className="flex items-center gap-2 mb-1">
                          <div className="text-sm font-medium w-2">{rating}</div>
                          <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                            <div 
                              className="bg-yellow-500 h-full" 
                              style={{ 
                                width: `${rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 5 : rating === 2 ? 3 : 2}%` 
                              }}
                            ></div>
                          </div>
                          <div className="text-xs text-muted-foreground w-8">
                            {rating === 5 ? '70%' : rating === 4 ? '20%' : rating === 3 ? '5%' : rating === 2 ? '3%' : '2%'}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">Write a Review</Button>

                  {/* Sample reviews */}
                  <div className="space-y-4 pt-4">
                    <div className="border border-border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium">Alex S.</h4>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map(star => (
                              <Star
                                key={star}
                                className={`w-3 h-3 ${star <= 5 ? 'text-yellow-500 fill-yellow-500' : 'text-muted'}`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">2 weeks ago</span>
                      </div>
                      <p className="text-sm mt-2">
                        Absolutely love this laptop! The performance is incredible and it handles all my games at max settings without breaking a sweat.
                      </p>
                    </div>
                    
                    <div className="border border-border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium">Jamie T.</h4>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map(star => (
                              <Star
                                key={star}
                                className={`w-3 h-3 ${star <= 4 ? 'text-yellow-500 fill-yellow-500' : 'text-muted'}`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">1 month ago</span>
                      </div>
                      <p className="text-sm mt-2">
                        Great gaming laptop with excellent performance. The only drawback is the fans get a bit loud under heavy load, but that's expected with this much power.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
