
import React from 'react';
import { CardSettings } from '@/types/templates';
import CardContainer from '../card/CardContainer';
import { generateMinimalistCardBackground } from '@/utils/cardStyles';

interface MinimalistCardProps {
  settings: CardSettings;
}

const MinimalistCard = ({ settings }: MinimalistCardProps) => {
  const background = generateMinimalistCardBackground(settings);

  return (
    <CardContainer settings={settings} background={background}>
      {/* Geometric shapes */}
      <div className="absolute top-[60px] left-[50px] w-[136px] h-[100px]">
        {/* Large circle */}
        <div className="absolute w-[80px] h-[80px] rounded-full"
             style={{
               background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)',
               border: '1px solid rgba(255, 255, 255, 0.2)'
             }} />
        
        {/* Small circles */}
        <div className="absolute top-[20px] left-[90px] w-[30px] h-[30px] rounded-full"
             style={{
               background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.08) 100%)',
               border: '1px solid rgba(255, 255, 255, 0.15)'
             }} />
        
        <div className="absolute top-[60px] left-[100px] w-[20px] h-[20px] rounded-full"
             style={{
               background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.06) 100%)',
               border: '1px solid rgba(255, 255, 255, 0.1)'
             }} />
      </div>

      {/* Text */}
      <div className="absolute left-[20px] top-[200px] w-[150px]">
        <h3 className="text-white font-medium text-lg opacity-90">Minimal</h3>
        <p className="text-white/70 text-sm mt-1">Clean & Simple</p>
      </div>

      {/* Action button */}
      <div className="absolute right-[20px] bottom-[20px] w-[32px] h-[32px] rounded-full border border-white/20 flex items-center justify-center"
           style={{
             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
             backdropFilter: 'blur(10px)'
           }}>
        <div className="w-3 h-3 border-r-2 border-b-2 border-white/60 transform rotate-[-45deg] translate-x-[-1px]" />
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           style={{ borderRadius: `${settings.roundness}px` }} />
    </CardContainer>
  );
};

export default MinimalistCard;
