
import React from 'react';

interface CardBackgroundProps {
  children: React.ReactNode;
}

const CardBackground = ({ children }: CardBackgroundProps) => {
  return (
    <div className="relative w-full h-full glass-card overflow-hidden">
      <div className="glass-card-hover-overlay" />
      {children}
    </div>
  );
};

export default CardBackground;
