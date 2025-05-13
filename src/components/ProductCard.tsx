
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const isOnSale = product.originalPrice && product.originalPrice > product.price;
  const discount = isOnSale
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300">
      {/* Sale badge */}
      {isOnSale && (
        <Badge className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground">
          {discount}% OFF
        </Badge>
      )}

      {/* Image container */}
      <Link to={`/products/${product.id}`} className="block h-48 relative overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Link>

      {/* Content */}
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs text-muted-foreground">{product.brand}</p>
            <Link to={`/products/${product.id}`} className="group-hover:text-primary transition-colors">
              <h3 className="font-semibold line-clamp-1">{product.name}</h3>
            </Link>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1 mb-1">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="text-yellow-500"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="text-xs font-medium">{product.rating.toFixed(1)}</span>
            </div>
            
            <div className="flex items-center gap-2">
              {isOnSale && <span className="text-xs text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>}
              <span className="font-bold text-primary">${product.price.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Specs */}
        <div className="pt-2 border-t border-border">
          <ul className="text-xs text-muted-foreground space-y-1">
            <li className="truncate">• {product.specs.processor}</li>
            <li className="truncate">• {product.specs.graphics}</li>
            <li className="truncate">• {product.specs.memory}</li>
          </ul>
        </div>

        {/* Action buttons */}
        <div className="pt-3 flex justify-between items-center gap-2">
          <Button 
            variant="default" 
            size="sm" 
            className="w-full gap-2"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
