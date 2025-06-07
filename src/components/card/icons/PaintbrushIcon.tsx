
import React from 'react';

const PaintbrushIcon = () => {
  return (
    <div className="absolute left-[184px] top-[218px] w-[32px] h-[32px]">
      {/* Main brush handle */}
      <div className="absolute w-[20px] h-[3px] bg-white/80 rounded-full transform rotate-45 top-[14px] left-[6px]" />
      
      {/* Brush ferrule (metal part) */}
      <div className="absolute w-[8px] h-[8px] bg-gradient-to-br from-white/60 to-white/30 rounded-sm transform rotate-45 top-[12px] left-[12px]" />
      
      {/* Brush bristles */}
      <div className="absolute w-[10px] h-[10px] bg-gradient-to-br from-white/70 to-white/40 rounded-full top-[8px] left-[14px]" />
      
      {/* Paint drop */}
      <div className="absolute w-[4px] h-[4px] bg-gradient-to-br from-purple-300/80 to-purple-500/60 rounded-full top-[20px] left-[20px]" />
      
      {/* Sparkle effects */}
      <div className="absolute w-[2px] h-[2px] bg-white/90 rounded-full top-[6px] left-[8px]" />
      <div className="absolute w-[1px] h-[1px] bg-white/70 rounded-full top-[22px] left-[10px]" />
    </div>
  );
};

export default PaintbrushIcon;
