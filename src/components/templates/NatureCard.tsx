
import React from 'react';
import { CardSettings } from '@/types/templates';
import CardContainer from '../card/CardContainer';
import { generateMinimalistCardBackground } from '@/utils/cardStyles';

interface NatureCardProps {
  settings: CardSettings;
}

const NatureCard = ({ settings }: NatureCardProps) => {
  const background = `
    radial-gradient(50% 50% at 50% 50%, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%),
    linear-gradient(180deg, rgba(135, 206, 235, 0.1) 0%, rgba(34, 197, 94, 0.1) 100%),
    ${settings.color}
  `;

  return (
    <CardContainer settings={settings} background={background}>
      {/* Sun */}
      <div className="absolute top-[30px] right-[40px] w-[40px] h-[40px] rounded-full"
           style={{
             background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.8) 0%, rgba(245, 158, 11, 0.6) 100%)',
             boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)'
           }} />

      {/* Clouds */}
      <div className="absolute top-[40px] left-[20px] w-[60px] h-[20px] rounded-full opacity-60"
           style={{
             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)'
           }} />
      
      <div className="absolute top-[35px] left-[30px] w-[40px] h-[15px] rounded-full opacity-50"
           style={{
             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)'
           }} />

      {/* Mountains */}
      <div className="absolute bottom-[80px] left-0 right-0">
        <div className="absolute bottom-0 left-[40px] w-[80px] h-[60px] rounded-t-full"
             style={{
               background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.4) 0%, rgba(21, 128, 61, 0.3) 100%)',
               clipPath: 'polygon(20% 100%, 50% 20%, 80% 100%)'
             }} />
        
        <div className="absolute bottom-0 left-[90px] w-[70px] h-[50px] rounded-t-full"
             style={{
               background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.3) 0%, rgba(21, 128, 61, 0.2) 100%)',
               clipPath: 'polygon(25% 100%, 55% 30%, 85% 100%)'
             }} />
        
        <div className="absolute bottom-0 left-[140px] w-[60px] h-[40px] rounded-t-full"
             style={{
               background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.25) 0%, rgba(21, 128, 61, 0.15) 100%)',
               clipPath: 'polygon(30% 100%, 60% 40%, 90% 100%)'
             }} />
      </div>

      {/* Tree */}
      <div className="absolute bottom-[60px] left-[50px]">
        {/* Trunk */}
        <div className="w-[8px] h-[25px] mx-auto"
             style={{
               background: 'linear-gradient(135deg, rgba(120, 53, 15, 0.6) 0%, rgba(92, 38, 11, 0.4) 100%)'
             }} />
        
        {/* Leaves */}
        <div className="absolute top-[-15px] left-[-10px] w-[28px] h-[28px] rounded-full"
             style={{
               background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.7) 0%, rgba(21, 128, 61, 0.5) 100%)'
             }} />
      </div>

      {/* Text */}
      <div className="absolute left-[20px] bottom-[40px] w-[150px]">
        <h3 className="text-white font-medium text-lg opacity-90">Nature</h3>
        <p className="text-white/70 text-sm mt-1">Fresh & Organic</p>
      </div>

      {/* Action button */}
      <div className="absolute right-[20px] bottom-[20px] w-[32px] h-[32px] rounded-full border border-green-300/20 flex items-center justify-center"
           style={{
             background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%)',
             backdropFilter: 'blur(10px)'
           }}>
        <div className="w-3 h-3 border-r-2 border-b-2 border-white/60 transform rotate-[-45deg] translate-x-[-1px]" />
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           style={{ borderRadius: `${settings.roundness}px` }} />
    </CardContainer>
  );
};

export default NatureCard;
