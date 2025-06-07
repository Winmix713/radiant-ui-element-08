
import React from 'react';
import { CardSettings } from '@/types/templates';
import CardContainer from '../card/CardContainer';
import TargetIcon from '../card/icons/TargetIcon';
import { generateStrategyCardBackground } from '@/utils/cardStyles';

interface StrategyCardProps {
  settings: CardSettings;
}

const StrategyCard = ({ settings }: StrategyCardProps) => {
  const background = generateStrategyCardBackground(settings);

  const hoverOverlayStyle = {
    background: `
      radial-gradient(50% 50% at 35% 25%, rgba(34, 197, 94, 0.2) 0%, rgba(34, 197, 94, 0.06) 100%),
      radial-gradient(80% 80% at 65% 75%, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0.03) 100%),
      linear-gradient(108.98deg, rgba(5, 150, 105, 0.6) 27.06%, rgba(6, 182, 212, 0.6) 90.91%),
      linear-gradient(0deg, rgba(236, 253, 245, 0.12), rgba(236, 253, 245, 0.12)),
      #10b981
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
      
      {/* Background strategy elements */}
      <div className="absolute top-[40px] left-[30px] w-[176px] h-[140px]">
        {/* Strategic planning grid */}
        <div className="absolute w-[50px] h-[50px] top-[25px] left-[30px]">
          <div className="absolute w-full h-[1px] bg-green-300/40 top-[16px]" />
          <div className="absolute w-full h-[1px] bg-green-300/40 top-[33px]" />
          <div className="absolute w-[1px] h-full bg-green-300/40 left-[16px]" />
          <div className="absolute w-[1px] h-full bg-green-300/40 left-[33px]" />
          
          {/* Strategic markers */}
          <div className="absolute w-[6px] h-[6px] bg-gradient-to-br from-green-400/70 to-green-600/50 rounded-full top-[13px] left-[13px]" />
          <div className="absolute w-[6px] h-[6px] bg-gradient-to-br from-emerald-400/70 to-emerald-600/50 rounded-full top-[30px] left-[30px]" />
          <div className="absolute w-[6px] h-[6px] bg-gradient-to-br from-teal-400/70 to-teal-600/50 rounded-full top-[13px] left-[36px]" />
        </div>
        
        {/* Success path/trajectory */}
        <div className="absolute w-[70px] h-[45px] top-[50px] left-[100px]">
          <div className="absolute w-[60px] h-[2px] bg-gradient-to-r from-green-300/60 to-green-500/40 rounded-full top-[20px] transform rotate-12" />
          
          {/* Progress milestones */}
          <div className="absolute w-[8px] h-[8px] bg-gradient-to-br from-green-400/70 to-green-600/50 rounded-full top-[16px] left-[5px]" />
          <div className="absolute w-[8px] h-[8px] bg-gradient-to-br from-emerald-400/70 to-emerald-600/50 rounded-full top-[20px] left-[25px]" />
          <div className="absolute w-[8px] h-[8px] bg-gradient-to-br from-green-500/70 to-green-700/50 rounded-full top-[24px] left-[45px]" />
          
          {/* Upward arrow indicating growth */}
          <div className="absolute w-[12px] h-[2px] bg-green-400/60 rounded-full top-[8px] left-[50px] transform rotate-45" />
          <div className="absolute w-[6px] h-[6px] border-r-2 border-t-2 border-green-400/60 transform rotate-45 top-[5px] left-[55px]" />
        </div>
        
        {/* Strategic focus points */}
        <div className="absolute w-[4px] h-[4px] bg-gradient-to-br from-green-400/70 to-green-600/50 rounded-full top-[20px] left-[90px]" />
        <div className="absolute w-[3px] h-[3px] bg-gradient-to-br from-emerald-400/60 to-emerald-600/40 rounded-full top-[100px] left-[50px]" />
        <div className="absolute w-[5px] h-[5px] bg-gradient-to-br from-teal-400/60 to-teal-600/40 rounded-full top-[110px] left-[140px]" />
      </div>

      {/* Text */}
      <div className="absolute left-[20px] top-[218px] w-[150px]">
        <h3 className="text-gray-800 group-hover:text-white font-semibold text-lg transition-colors duration-300">
          Make a Strategic Plan
        </h3>
      </div>

      <TargetIcon />
    </CardContainer>
  );
};

export default StrategyCard;
