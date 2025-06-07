
import React from 'react';

const TargetIcon = () => {
  return (
    <div className="absolute left-[184px] top-[218px] w-[32px] h-[32px]">
      {/* Outer ring */}
      <div className="absolute w-[24px] h-[24px] border-2 border-white/60 rounded-full top-[4px] left-[4px]" />
      
      {/* Middle ring */}
      <div className="absolute w-[16px] h-[16px] border-2 border-white/70 rounded-full top-[8px] left-[8px]" />
      
      {/* Inner bullseye */}
      <div className="absolute w-[8px] h-[8px] bg-gradient-to-br from-green-200/80 to-green-400/60 rounded-full top-[12px] left-[12px]" />
      
      {/* Center dot */}
      <div className="absolute w-[4px] h-[4px] bg-white/90 rounded-full top-[14px] left-[14px]" />
      
      {/* Arrow pointing to target */}
      <div className="absolute w-[12px] h-[2px] bg-gradient-to-r from-white/80 to-white/60 rounded-full top-[15px] left-[-2px] transform -rotate-12" />
      
      {/* Arrow head */}
      <div className="absolute w-[4px] h-[4px] border-l-2 border-b-2 border-white/70 transform rotate-45 top-[13px] left-[8px]" />
      
      {/* Success indicators */}
      <div className="absolute w-[2px] h-[2px] bg-green-300/80 rounded-full top-[2px] left-[26px]" />
      <div className="absolute w-[1px] h-[1px] bg-green-200/70 rounded-full top-[26px] left-[6px]" />
      <div className="absolute w-[1px] h-[1px] bg-green-300/60 rounded-full top-[28px] left-[24px]" />
    </div>
  );
};

export default TargetIcon;
