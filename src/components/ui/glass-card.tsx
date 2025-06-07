
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
        "group cursor-pointer relative",
        "w-[236px] h-[273px]",
        "glass-card overflow-hidden",
        className
      )}
      onClick={onClick}
    >
      <div className="glass-card-hover-overlay" />
      {children}
    </div>
  );
};

export default GlassCard;
