
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GlassCard = ({ children, className, onClick }: GlassCardProps) => {
  return (
    <div 
      className={cn(
        "group cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className="relative w-full h-full glass-card overflow-hidden">
        <div className="glass-card-hover-overlay" />
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
