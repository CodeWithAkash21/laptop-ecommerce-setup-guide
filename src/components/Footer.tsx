
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-primary">G</span>
                <div className="absolute inset-0 rounded-full border border-primary/50"></div>
              </div>
              <span className="text-xl font-bold">GamingTech</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your destination for the latest gaming laptops with cutting-edge technology.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?brand=TechX" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  TechX
                </Link>
              </li>
              <li>
                <Link to="/products?brand=Razen" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Razen
                </Link>
              </li>
              <li>
                <Link to="/products?brand=Onyx" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Onyx
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Stay Connected</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-border hover:bg-accent hover:text-accent-foreground transition-colors">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-border hover:bg-accent hover:text-accent-foreground transition-colors">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-border hover:bg-accent hover:text-accent-foreground transition-colors">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-border hover:bg-accent hover:text-accent-foreground transition-colors">
                <span className="sr-only">YouTube</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
            <div className="mt-4">
              <h3 className="font-medium mb-2">Newsletter</h3>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="bg-background text-foreground border border-border rounded px-3 py-2 text-sm flex-1 focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="bg-primary text-primary-foreground rounded px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GamingTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
