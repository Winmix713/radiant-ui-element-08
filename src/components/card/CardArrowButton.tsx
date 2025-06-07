
import React from 'react';
import GlassButton from '../ui/glass-button';

interface CardArrowButtonProps {
  onClick?: () => void;
  className?: string;
}

const CardArrowButton = ({ onClick, className = "" }: CardArrowButtonProps) => {
  return (
    <GlassButton 
      className={`absolute left-[184px] top-[218px] ${className}`}
      onClick={onClick}
    />
  );
};

export default CardArrowButton;
