
import React from 'react';
import { CardSettings } from '@/types/templates';
import CardContent from '../card/CardContent';
import CardText from '../card/CardText';
import GlassButton from '../ui/glass-button';

interface GlassCardProps {
  settings: CardSettings;
}

const GlassCard = ({ settings }: GlassCardProps) => {
  const getShadowByDirection = () => {
    const depth = settings.depth;
    switch (settings.shadowDirection) {
      case 'up':
        return `0px -${depth}px ${depth * 2}px rgba(113, 144, 175, 0.15)`;
      case 'down':
        return `0px ${depth}px ${depth * 2}px rgba(113, 144, 175, 0.15)`;
      default:
        return `0px ${depth/2}px ${depth * 3}px rgba(113, 144, 175, 0.1)`;
    }
  };

  const cardStyle = {
    width: '236px',
    height: '273px',
    borderRadius: `${settings.roundness}px`,
    opacity: settings.opacity,
    background: `
      radial-gradient(50% 50% at 50% 50%, rgba(118, 146, 255, 0.06) 80.55%, rgba(122, 150, 255, 0.024) 100%),
      radial-gradient(50% 50% at 50% 50%, rgba(226, 232, 255, 0) 33.78%, rgba(226, 232, 255, 0.056) 100%),
      linear-gradient(0deg, rgba(226, 232, 255, 0.12), rgba(226, 232, 255, 0.12)),
      ${settings.color}
    `,
    backdropFilter: `blur(${settings.backgroundBlur}px)`,
    boxShadow: getShadowByDirection(),
    border: '1px solid rgba(226, 232, 255, 0.2)',
    transition: 'all 0.3s ease-out',
    position: 'relative' as const,
    overflow: 'hidden' as const,
    cursor: 'pointer'
  };

  const hoverOverlayStyle = {
    background: `
      radial-gradient(50% 50% at 50% 50%, rgba(118, 146, 255, 0.06) 80.55%, rgba(122, 150, 255, 0.024) 100%),
      radial-gradient(50% 50% at 50% 50%, rgba(226, 232, 255, 0) 33.78%, rgba(226, 232, 255, 0.056) 100%),
      linear-gradient(108.98deg, rgba(145, 127, 251, 0.6) 27.06%, rgba(63, 45, 175, 0.6) 90.91%),
      linear-gradient(0deg, rgba(226, 232, 255, 0.12), rgba(226, 232, 255, 0.12)),
      #6654D3
    `,
    borderRadius: `${settings.roundness}px`,
    position: 'absolute' as const,
    inset: '0',
    opacity: 0,
    transition: 'opacity 0.3s ease-out'
  };

  return (
    <div className="group">
      <div style={cardStyle}>
        <div style={hoverOverlayStyle} className="group-hover:opacity-100" />
        <CardContent />
        
        <CardText>Create an Image</CardText>
        
        <GlassButton className="absolute left-[184px] top-[218px] z-10" />
      </div>
    </div>
  );
};

export default GlassCard;
