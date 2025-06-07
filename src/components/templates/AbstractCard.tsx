
import React from 'react';
import { CardSettings } from '@/types/templates';
import CardContainer from '../card/CardContainer';

interface AbstractCardProps {
  settings: CardSettings;
}

const AbstractCard = ({ settings }: AbstractCardProps) => {
  const background = `
    radial-gradient(50% 50% at 30% 70%, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0.05) 100%),
    radial-gradient(80% 80% at 80% 20%, rgba(147, 51, 234, 0.1) 0%, rgba(147, 51, 234, 0.02) 100%),
    linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(124, 58, 237, 0.08) 100%),
    ${settings.color}
  `;

  return (
    <CardContainer settings={settings} background={background}>
      {/* Geometric shapes */}
      <div className="absolute top-[40px] left-[30px] w-[176px] h-[140px]">
        {/* Large diamond */}
        <div className="absolute w-[60px] h-[60px] left-[20px] top-[20px] transform rotate-45"
             style={{
               background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(124, 58, 237, 0.1) 100%)',
               border: '1px solid rgba(168, 85, 247, 0.2)'
             }} />
        
        {/* Medium circle */}
        <div className="absolute w-[40px] h-[40px] left-[100px] top-[10px] rounded-full"
             style={{
               background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.25) 0%, rgba(124, 58, 237, 0.08) 100%)',
               border: '1px solid rgba(147, 51, 234, 0.15)'
             }} />
        
        {/* Small triangle */}
        <div className="absolute w-[30px] h-[30px] left-[140px] top-[60px]"
             style={{
               background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(124, 58, 237, 0.06) 100%)',
               clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
               border: '1px solid rgba(168, 85, 247, 0.1)'
             }} />
        
        {/* Hexagon */}
        <div className="absolute w-[35px] h-[35px] left-[60px] top-[80px]"
             style={{
               background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.3) 0%, rgba(124, 58, 237, 0.1) 100%)',
               clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)',
               border: '1px solid rgba(147, 51, 234, 0.2)'
             }} />

        {/* Floating particles */}
        <div className="absolute w-[8px] h-[8px] left-[40px] top-[40px] rounded-full"
             style={{
               background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.6) 0%, rgba(124, 58, 237, 0.3) 100%)'
             }} />
        
        <div className="absolute w-[6px] h-[6px] left-[120px] top-[90px] rounded-full"
             style={{
               background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.5) 0%, rgba(124, 58, 237, 0.2) 100%)'
             }} />
        
        <div className="absolute w-[10px] h-[10px] left-[160px] top-[30px] rounded-full"
             style={{
               background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(124, 58, 237, 0.15) 100%)'
             }} />
      </div>

      {/* Text */}
      <div className="absolute left-[20px] bottom-[40px] w-[150px]">
        <h3 className="text-white font-medium text-lg opacity-90">Abstract</h3>
        <p className="text-white/70 text-sm mt-1">Creative Patterns</p>
      </div>

      {/* Action button */}
      <div className="absolute right-[20px] bottom-[20px] w-[32px] h-[32px] rounded-full border border-purple-300/20 flex items-center justify-center"
           style={{
             background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(124, 58, 237, 0.1) 100%)',
             backdropFilter: 'blur(10px)'
           }}>
        <div className="w-3 h-3 border-r-2 border-b-2 border-white/60 transform rotate-[-45deg] translate-x-[-1px]" />
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           style={{ borderRadius: `${settings.roundness}px` }} />
    </CardContainer>
  );
};

export default AbstractCard;
