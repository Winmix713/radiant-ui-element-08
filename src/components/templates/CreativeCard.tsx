
import React from 'react';
import { CardSettings } from '@/types/templates';
import CardContainer from '../card/CardContainer';
import PaintbrushIcon from '../card/icons/PaintbrushIcon';
import { generateCreativeCardBackground } from '@/utils/cardStyles';

interface CreativeCardProps {
  settings: CardSettings;
}

const CreativeCard = ({ settings }: CreativeCardProps) => {
  const background = generateCreativeCardBackground(settings);

  const hoverOverlayStyle = {
    background: `
      radial-gradient(50% 50% at 30% 20%, rgba(147, 51, 234, 0.25) 0%, rgba(147, 51, 234, 0.08) 100%),
      radial-gradient(80% 80% at 70% 80%, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.03) 100%),
      linear-gradient(108.98deg, rgba(168, 85, 247, 0.6) 27.06%, rgba(139, 69, 19, 0.6) 90.91%),
      linear-gradient(0deg, rgba(226, 232, 255, 0.12), rgba(226, 232, 255, 0.12)),
      #8b5cf6
    `,
    borderRadius: `${settings.roundness}px`,
    position: 'absolute' as const,
    inset: '0',
    opacity: 0,
    transition: 'opacity 0.3s ease-out'
  };

  return (
    <CardContainer settings={settings} background={background}>
      <div style={hoverOverlayStyle} className="group-hover:opacity-100" />
      
      {/* Background artistic elements */}
      <div className="absolute top-[40px] left-[30px] w-[176px] h-[140px]">
        {/* Paint palette shape */}
        <div className="absolute w-[60px] h-[40px] bg-gradient-to-br from-purple-300/30 to-purple-500/20 rounded-full top-[20px] left-[20px]" />
        
        {/* Color dots representing paint */}
        <div className="absolute w-[8px] h-[8px] bg-gradient-to-br from-red-400/60 to-red-600/40 rounded-full top-[25px] left-[30px]" />
        <div className="absolute w-[6px] h-[6px] bg-gradient-to-br from-blue-400/60 to-blue-600/40 rounded-full top-[35px] left-[45px]" />
        <div className="absolute w-[7px] h-[7px] bg-gradient-to-br from-yellow-400/60 to-yellow-600/40 rounded-full top-[30px] left-[55px]" />
        
        {/* Canvas frame */}
        <div className="absolute w-[50px] h-[35px] border-2 border-white/30 rounded-sm top-[60px] left-[100px]" />
        <div className="absolute w-[44px] h-[29px] bg-gradient-to-br from-white/20 to-white/10 rounded-sm top-[63px] left-[103px]" />
        
        {/* Floating creative particles */}
        <div className="absolute w-[4px] h-[4px] bg-gradient-to-br from-purple-400/70 to-purple-600/50 rounded-full top-[15px] left-[50px]" />
        <div className="absolute w-[3px] h-[3px] bg-gradient-to-br from-pink-400/60 to-pink-600/40 rounded-full top-[80px] left-[40px]" />
        <div className="absolute w-[5px] h-[5px] bg-gradient-to-br from-indigo-400/60 to-indigo-600/40 rounded-full top-[100px] left-[140px]" />
      </div>

      {/* Text */}
      <div className="absolute left-[20px] top-[218px] w-[150px]">
        <h3 className="text-gray-800 group-hover:text-white font-semibold text-lg transition-colors duration-300">
          Create an Image
        </h3>
      </div>

      <PaintbrushIcon />
    </CardContainer>
  );
};

export default CreativeCard;
