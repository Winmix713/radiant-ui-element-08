
import React from 'react';
import { CardSettings } from '@/types/templates';

interface AbstractCardProps {
  settings: CardSettings;
}

const AbstractCard = ({ settings }: AbstractCardProps) => {
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
      conic-gradient(from 45deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 25%, rgba(59, 130, 246, 0.1) 50%, rgba(168, 85, 247, 0.1) 100%),
      ${settings.color}
    `,
    backdropFilter: `blur(${settings.backgroundBlur}px)`,
    boxShadow: getShadowByDirection(),
    border: '1px solid rgba(168, 85, 247, 0.2)',
    transition: 'all 0.3s ease-out',
    position: 'relative' as const,
    overflow: 'hidden' as const,
    cursor: 'pointer'
  };

  return (
    <div className="group">
      <div style={cardStyle}>
        {/* Geometric pattern */}
        <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: `${settings.roundness}px` }}>
          {/* Large triangle */}
          <div className="absolute top-[40px] left-[60px] w-[80px] h-[80px]"
               style={{
                 background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(236, 72, 153, 0.2) 100%)',
                 clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                 transform: 'rotate(15deg)'
               }} />

          {/* Circles */}
          <div className="absolute top-[80px] right-[40px] w-[50px] h-[50px] rounded-full"
               style={{
                 background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(147, 51, 234, 0.15) 100%)',
                 transform: 'scale(1.2)'
               }} />

          <div className="absolute top-[120px] left-[40px] w-[30px] h-[30px] rounded-full"
               style={{
                 background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.3) 0%, rgba(168, 85, 247, 0.2) 100%)'
               }} />

          {/* Rectangle */}
          <div className="absolute bottom-[80px] right-[50px] w-[60px] h-[40px]"
               style={{
                 background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.2) 0%, rgba(168, 85, 247, 0.15) 100%)',
                 borderRadius: '8px',
                 transform: 'rotate(-20deg)'
               }} />

          {/* Hexagon */}
          <div className="absolute bottom-[120px] left-[50px] w-[40px] h-[40px]"
               style={{
                 background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.25) 0%, rgba(236, 72, 153, 0.15) 100%)',
                 clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
               }} />

          {/* Floating dots */}
          <div className="absolute top-[160px] left-[80px] w-[6px] h-[6px] rounded-full"
               style={{ background: 'rgba(168, 85, 247, 0.4)' }} />
          
          <div className="absolute top-[180px] left-[120px] w-[4px] h-[4px] rounded-full"
               style={{ background: 'rgba(236, 72, 153, 0.5)' }} />
          
          <div className="absolute top-[140px] right-[80px] w-[5px] h-[5px] rounded-full"
               style={{ background: 'rgba(59, 130, 246, 0.4)' }} />
        </div>

        {/* Text */}
        <div className="absolute left-[20px] bottom-[40px] w-[150px]">
          <h3 className="text-white font-medium text-lg opacity-90">Abstract</h3>
          <p className="text-white/70 text-sm mt-1">Creative & Unique</p>
        </div>

        {/* Action button */}
        <div className="absolute right-[20px] bottom-[20px] w-[32px] h-[32px] rounded-full border border-purple-300/20 flex items-center justify-center"
             style={{
               background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(168, 85, 247, 0.1) 100%)',
               backdropFilter: 'blur(10px)'
             }}>
          <div className="w-3 h-3 border-r-2 border-b-2 border-white/60 transform rotate-[-45deg] translate-x-[-1px]" />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
             style={{ borderRadius: `${settings.roundness}px` }} />
      </div>
    </div>
  );
};

export default AbstractCard;
