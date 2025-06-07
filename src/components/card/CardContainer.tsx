
import React from 'react';
import { CardSettings } from '@/types/templates';
import { generateBaseCardStyle } from '@/utils/cardStyles';

interface CardContainerProps {
  settings: CardSettings;
  children: React.ReactNode;
  background: string;
  className?: string;
  onClick?: () => void;
}

const CardContainer = ({ settings, children, background, className = '', onClick }: CardContainerProps) => {
  const baseStyle = generateBaseCardStyle(settings);
  
  const cardStyle = {
    ...baseStyle,
    background,
    border: '1px solid rgba(226, 232, 255, 0.2)',
  };

  return (
    <div className={`group ${className}`}>
      <div style={cardStyle} onClick={onClick}>
        {children}
      </div>
    </div>
  );
};

export default CardContainer;
