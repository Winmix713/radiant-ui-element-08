
import React from 'react';

const BackgroundFrames = () => {
  return (
    <div className="absolute top-[50px] left-[38px] w-[162px] h-[142px]">
      {/* Back layer - with hover effect */}
      <div className="absolute w-[140px] h-[110px] left-0 top-0 rounded-3xl transition-all duration-300 ease-out"
           style={{
             background: `
               radial-gradient(50% 50% at 50% 50%, rgba(118, 146, 255, 0.06) 80.55%, rgba(122, 150, 255, 0.024) 100%),
               linear-gradient(0deg, rgba(226, 232, 255, 0.74), rgba(226, 232, 255, 0.74)),
               linear-gradient(108.98deg, #7865E7 27.06%, #2B1B8F 90.91%)
             `
           }} />
      
      {/* Hover state for back layer */}
      <div className="absolute w-[140px] h-[110px] left-0 top-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"
           style={{
             background: `
               radial-gradient(50% 50% at 50% 50%, rgba(118, 146, 255, 0.06) 80.55%, rgba(122, 150, 255, 0.024) 100%),
               linear-gradient(0deg, rgba(226, 232, 255, 0.04), rgba(226, 232, 255, 0.04)),
               linear-gradient(108.98deg, #7865E7 27.06%, #2B1B8F 90.91%)
             `
           }} />
      
      {/* Middle layer */}
      <div className="absolute w-[140px] h-[110px] left-[8px] top-[13px] rounded-3xl"
           style={{
             background: 'linear-gradient(108.98deg, #917FFB 27.06%, #3F2DAF 90.91%)',
             backdropFilter: 'blur(10px)'
           }} />
      
      {/* Glass layers */}
      <div className="absolute w-[140px] h-[110px] left-[20px] top-[30px] rounded-3xl"
           style={{
             background: 'rgba(191, 181, 255, 0.01)',
             backdropFilter: 'blur(8px)'
           }} />
      
      <div className="absolute w-[140px] h-[112px] left-[22px] top-[30px] rounded-3xl"
           style={{
             background: 'rgba(191, 181, 255, 0.01)',
             boxShadow: '-2px -2px 1px rgba(255, 255, 255, 0.18), inset -3px -2px 2px rgba(255, 255, 255, 0.35)',
             backdropFilter: 'blur(4px)'
           }} />
      
      {/* Additional hover effect layers */}
      <div className="absolute w-[140px] h-[110px] left-[162px] top-[32px] rounded-3xl opacity-0 group-hover:opacity-20 transition-all duration-300 ease-out"
           style={{
             background: `
               linear-gradient(90deg, rgba(255, 255, 255, 0.25) 49.17%, rgba(0, 0, 0, 0.25) 49.44%),
               linear-gradient(67.1deg, rgba(33, 82, 254, 0.7) 26.91%, rgba(157, 175, 157, 0.7) 45.8%, rgba(38, 104, 119, 0.7) 72.67%),
               linear-gradient(108.98deg, #917FFB 27.06%, #3F2DAF 90.91%)
             `,
             mixBlendMode: 'overlay',
             filter: 'blur(41px)',
             backdropFilter: 'blur(10px)',
             transform: 'matrix(-1, 0, 0, 1, 0, 0)'
           }} />
      
      {/* Overlay effects - enhanced on hover */}
      <div className="absolute w-[140px] h-[110px] left-[22px] top-[32px] rounded-3xl opacity-60 group-hover:opacity-100 transition-all duration-300 ease-out"
           style={{
             background: `
               linear-gradient(101.85deg, rgba(0, 0, 0, 0.25) 49.33%, rgba(255, 255, 255, 0.25) 52.83%, rgba(0, 0, 0, 0.25) 63.66%),
               linear-gradient(269.97deg, rgba(255, 255, 255, 0.3) 0.03%, rgba(255, 255, 255, 0) 50.03%),
               linear-gradient(36deg, rgba(253, 78, 204, 0.7) 21.79%, rgba(157, 160, 175, 0.7) 41.78%, rgba(30, 22, 84, 0.7) 62.63%),
               linear-gradient(19.74deg, rgba(255, 105, 72, 0.98) 30.29%, rgba(27, 0, 254, 0.98) 89.99%),
               #FFFFFF
             `,
             mixBlendMode: 'color-dodge',
             filter: 'blur(6px)',
             backdropFilter: 'blur(10px)'
           }} />
    </div>
  );
};

export default BackgroundFrames;
