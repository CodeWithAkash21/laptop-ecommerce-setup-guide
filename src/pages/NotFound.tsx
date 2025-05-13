
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-7xl font-bold mb-6 text-primary">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          We couldn't find the page you were looking for. It may have been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
