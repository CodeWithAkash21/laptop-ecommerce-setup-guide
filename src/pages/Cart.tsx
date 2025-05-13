
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { X, Minus, Plus, ShoppingCart, ArrowRight } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, subtotal } = useCart();

  const shippingCost = subtotal >= 1500 ? 0 : 49.99;
  const taxRate = 0.08; // 8% tax
  const taxAmount = subtotal * taxRate;
  const total = subtotal + shippingCost + taxAmount;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container py-12">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center mb-6">
              <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button asChild>
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="border border-border rounded-lg overflow-hidden">
                {cartItems.map(item => (
                  <div
                    key={item.product.id}
                    className="flex flex-col sm:flex-row border-b border-border last:border-b-0"
                  >
                    {/* Product image */}
                    <div className="sm:w-32 h-32 bg-muted">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product details */}
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div className="flex justify-between">
                        <div>
                          <Link
                            to={`/products/${item.product.id}`}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-sm text-muted-foreground">{item.product.brand}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.product.id)}
                          className="h-8 w-8"
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="h-8 w-8"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-10 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</div>
                          <div className="text-xs text-muted-foreground">
                            ${item.product.price.toFixed(2)} each
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <Button variant="ghost" size="sm" onClick={clearCart}>
                  Clear Cart
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/products">Continue Shopping</Link>
                </Button>
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <div className="border border-border rounded-lg p-6 space-y-4 sticky top-20">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>
                      {shippingCost === 0 ? (
                        <span className="text-primary">Free</span>
                      ) : (
                        `$${shippingCost.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${taxAmount.toFixed(2)}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Button className="w-full mt-4 gap-2">
                  Checkout <ArrowRight className="h-4 w-4" />
                </Button>

                <div className="text-xs text-muted-foreground text-center mt-4 space-y-2">
                  <p>Free shipping on orders over $1,500</p>
                  <div className="flex items-center justify-center gap-1">
                    <p>Secure checkout</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
