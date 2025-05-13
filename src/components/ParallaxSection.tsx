
import React, { useEffect, useState } from 'react';

interface ParallaxSectionProps {
  imageUrl: string;
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxSection = ({ 
  imageUrl, 
  children, 
  speed = 0.5,
  className = "" 
}: ParallaxSectionProps) => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transform: `translateY(${offset * speed}px)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxSection;
