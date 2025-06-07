
import React from 'react';

const LightbulbIcon = () => {
  return (
    <div className="absolute left-[184px] top-[218px] w-[32px] h-[32px]">
      {/* Bulb body */}
      <div className="absolute w-[16px] h-[20px] bg-gradient-to-br from-yellow-200/80 to-yellow-400/60 rounded-t-full top-[2px] left-[8px]" />
      
      {/* Bulb base/screw */}
      <div className="absolute w-[12px] h-[6px] bg-gradient-to-br from-white/60 to-white/30 rounded-sm top-[22px] left-[10px]" />
      
      {/* Inner glow */}
      <div className="absolute w-[10px] h-[14px] bg-gradient-to-br from-yellow-100/90 to-yellow-300/50 rounded-t-full top-[5px] left-[11px]" />
      
      {/* Sparkle effects around the bulb */}
      <div className="absolute w-[3px] h-[1px] bg-yellow-300/80 rounded-full top-[4px] left-[6px] transform rotate-45" />
      <div className="absolute w-[1px] h-[3px] bg-yellow-300/80 rounded-full top-[2px] left-[8px] transform rotate-45" />
      
      <div className="absolute w-[2px] h-[1px] bg-yellow-200/70 rounded-full top-[6px] left-[26px] transform -rotate-45" />
      <div className="absolute w-[1px] h-[2px] bg-yellow-200/70 rounded-full top-[4px] left-[28px] transform -rotate-45" />
      
      <div className="absolute w-[2px] h-[1px] bg-yellow-300/60 rounded-full top-[16px] left-[4px] transform rotate-12" />
      <div className="absolute w-[2px] h-[1px] bg-yellow-300/60 rounded-full top-[14px] left-[28px] transform -rotate-12" />
    </div>
  );
};

export default LightbulbIcon;
