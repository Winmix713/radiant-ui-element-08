
import React from 'react';
import { CardSettings } from '@/types/templates';
import CardContainer from '../card/CardContainer';
import LightbulbIcon from '../card/icons/LightbulbIcon';
import { generateInnovationCardBackground } from '@/utils/cardStyles';

interface InnovationCardProps {
  settings: CardSettings;
}

const InnovationCard = ({ settings }: InnovationCardProps) => {
  const background = generateInnovationCardBackground(settings);

  const hoverOverlayStyle = {
    background: `
      radial-gradient(50% 50% at 40% 30%, rgba(251, 191, 36, 0.2) 0%, rgba(251, 191, 36, 0.06) 100%),
      radial-gradient(80% 80% at 60% 70%, rgba(245, 158, 11, 0.12) 0%, rgba(245, 158, 11, 0.03) 100%),
      linear-gradient(108.98deg, rgba(255, 193, 7, 0.6) 27.06%, rgba(255, 152, 0, 0.6) 90.91%),
      linear-gradient(0deg, rgba(255, 248, 220, 0.12), rgba(255, 248, 220, 0.12)),
      #f59e0b
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
      
      {/* Background innovation elements */}
      <div className="absolute top-[40px] left-[30px] w-[176px] h-[140px]">
        {/* Gear shape representing innovation */}
        <div className="absolute w-[45px] h-[45px] top-[30px] left-[25px]">
          <div className="absolute w-[40px] h-[40px] border-4 border-yellow-300/40 rounded-full top-[2px] left-[2px]" />
          <div className="absolute w-[20px] h-[20px] bg-gradient-to-br from-yellow-200/60 to-yellow-400/40 rounded-full top-[12px] left-[12px]" />
          {/* Gear teeth */}
          <div className="absolute w-[6px] h-[6px] bg-yellow-300/50 rounded-sm top-[-3px] left-[19px]" />
          <div className="absolute w-[6px] h-[6px] bg-yellow-300/50 rounded-sm top-[42px] left-[19px]" />
          <div className="absolute w-[6px] h-[6px] bg-yellow-300/50 rounded-sm top-[19px] left-[-3px]" />
          <div className="absolute w-[6px] h-[6px] bg-yellow-300/50 rounded-sm top-[19px] left-[42px]" />
        </div>
        
        {/* Brain/thought cloud */}
        <div className="absolute w-[55px] h-[35px] bg-gradient-to-br from-amber-200/30 to-amber-400/20 rounded-full top-[50px] left-[100px]" />
        <div className="absolute w-[35px] h-[25px] bg-gradient-to-br from-yellow-200/40 to-yellow-400/30 rounded-full top-[55px] left-[110px]" />
        
        {/* Thought bubbles */}
        <div className="absolute w-[8px] h-[8px] bg-gradient-to-br from-yellow-300/60 to-yellow-500/40 rounded-full top-[90px] left-[120px]" />
        <div className="absolute w-[5px] h-[5px] bg-gradient-to-br from-yellow-300/50 to-yellow-500/30 rounded-full top-[100px] left-[130px]" />
        <div className="absolute w-[3px] h-[3px] bg-gradient-to-br from-yellow-300/40 to-yellow-500/20 rounded-full top-[108px] left-[135px]" />
        
        {/* Innovation sparks */}
        <div className="absolute w-[4px] h-[4px] bg-gradient-to-br from-orange-400/70 to-orange-600/50 rounded-full top-[25px] left-[80px]" />
        <div className="absolute w-[3px] h-[3px] bg-gradient-to-br from-yellow-400/60 to-yellow-600/40 rounded-full top-[85px] left-[60px]" />
        <div className="absolute w-[5px] h-[5px] bg-gradient-to-br from-amber-400/60 to-amber-600/40 rounded-full top-[20px] left-[140px]" />
      </div>

      {/* Text */}
      <div className="absolute left-[20px] top-[218px] w-[150px]">
        <h3 className="text-gray-800 group-hover:text-white font-semibold text-lg transition-colors duration-300">
          Ideas & Inspirations
        </h3>
      </div>

      <LightbulbIcon />
    </CardContainer>
  );
};

export default InnovationCard;
