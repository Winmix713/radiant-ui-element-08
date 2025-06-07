
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
    border: `${settings.borderWidth}px solid ${settings.borderColor}`,
    color: settings.textColor,
  };

  const hoverStyle = {
    opacity: settings.hover.opacity,
    backdropFilter: `blur(${settings.hover.backgroundBlur}px)`,
    background: settings.hover.color,
    boxShadow: `0 ${settings.depth * settings.hover.shadowIntensity}px ${settings.depth * 2 * settings.hover.shadowIntensity}px rgba(0, 0, 0, 0.1)`,
  };

  return (
    <div className={`group ${className}`}>
      <div style={cardStyle} onClick={onClick} className="relative overflow-hidden">
        {/* Center Image */}
        {settings.centerImage && (
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <img 
              src={settings.centerImage} 
              alt="Card center" 
              className="max-w-full max-h-full object-contain rounded-lg opacity-80"
            />
          </div>
        )}
        
        {/* Hover overlay */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
          style={hoverStyle}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
