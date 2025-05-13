
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-primary">G</span>
              <div className="absolute inset-0 rounded-full border border-primary/50 animate-pulse-slow"></div>
            </div>
            <span className="text-xl font-bold">GamingTech</span>
          </Link>

          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/products" className="text-sm font-medium transition-colors hover:text-primary">
              Products
            </Link>
            <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-white">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="flex flex-col p-4">
            <Link 
              to="/" 
              className="py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className="py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
