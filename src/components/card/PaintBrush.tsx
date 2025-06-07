
import React from 'react';

const PaintBrush = () => {
  return (
    <div className="absolute top-[15px] left-[53.5px] w-[113.93px] h-[131.46px]">
      {/* Brush handle */}
      <div className="absolute w-[59.88px] h-[87.2px] left-[54.24px] top-0"
           style={{
             background: `
               linear-gradient(133.73deg, rgba(255, 255, 255, 0) 37.37%, rgba(73, 11, 102, 0.5) 57.32%),
               linear-gradient(132.12deg, #FAD9FF 35.44%, #B67DF8 52.92%)
             `,
             boxShadow: 'inset 0px -1px 4px rgba(255, 255, 255, 0.75)',
             transform: 'rotate(4.62deg)'
           }} />
      
      {/* Handle highlight */}
      <div className="absolute w-[9.24px] h-[82.85px] left-[97.42px] top-[7.37px] rounded-full opacity-60"
           style={{
             background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 94.66%)',
             filter: 'blur(2.5px)',
             transform: 'rotate(34.38deg)'
           }} />
      
      <div className="absolute w-[3.01px] h-[82.85px] left-[99.99px] top-[9.13px] rounded-full opacity-40"
           style={{
             background: '#FFFFFF',
             mixBlendMode: 'plus-lighter',
             filter: 'blur(2.5px)',
             transform: 'rotate(34.38deg)'
           }} />

      {/* Brush ferrule */}
      <div className="absolute w-[26px] h-[26px] left-[45.77px] top-[67.28px] rounded-md"
           style={{
             background: 'linear-gradient(145.85deg, #EDDEFF 20.68%, #B77EF9 24.96%, #B77EF9 35.87%, #6C36AB 56.12%)',
             boxShadow: 'inset -4px -5px 4px rgba(29, 13, 54, 0.25)',
             transform: 'rotate(-15deg)'
           }} />

      {/* Brush bristles - multiple layers */}
      <div className="absolute w-[49.37px] h-[52.08px] left-[22.7px] top-[73.92px]"
           style={{
             background: `
               radial-gradient(31.34% 33.52% at 27.95% 34.61%, rgba(205, 52, 241, 0.4) 7.55%, rgba(84, 52, 168, 0.4) 100%),
               radial-gradient(51.3% 54.84% at 35.47% 33.7%, #EEA5FF 7.55%, #7F53F3 100%)
             `,
             boxShadow: '17px -1px 8px rgba(0, 0, 0, 0.3), 0px 4px 16px rgba(0, 0, 0, 0.03), 0px 4px 7px rgba(0, 0, 0, 0.25), inset -3px 1px 9px #44185A',
             transform: 'rotate(4.62deg)'
           }} />
      
      {/* Additional bristle layers */}
      <div className="absolute w-[49.37px] h-[48.42px] left-[22.4px] top-[77.57px] opacity-70"
           style={{
             background: `
               radial-gradient(31.34% 36.05% at 27.95% 29.67%, rgba(205, 52, 241, 0.5) 7.55%, rgba(84, 52, 168, 0.5) 100%),
               radial-gradient(51.3% 58.98% at 35.47% 28.69%, #EEA5FF 7.55%, #7F53F3 100%)
             `,
             boxShadow: 'inset -3px -3px 9px #44185A',
             transform: 'rotate(4.62deg)'
           }} />
      
      <div className="absolute w-[67.8px] h-[47.33px] left-[3.81px] top-[78.82px] opacity-80"
           style={{
             background: `
               radial-gradient(22.82% 36.89% at 47.54% 24.55%, rgba(205, 52, 241, 0.5) 7.55%, rgba(84, 52, 168, 0.5) 100%),
               radial-gradient(37.36% 60.35% at 53.01% 23.54%, #EEA5FF 7.55%, #7F53F3 100%)
             `,
             boxShadow: 'inset -3px -3px 9px #44185A',
             transform: 'rotate(4.62deg)'
           }} />
      
      <div className="absolute w-[67.8px] h-[44.33px] left-[3.57px] top-[81.82px] opacity-60"
           style={{
             background: `
               radial-gradient(25.73% 34.92% at 46.04% 75.07%, rgba(241, 52, 219, 0.5) 7.55%, rgba(84, 52, 168, 0.5) 100%),
               radial-gradient(37.36% 64.44% at 53.01% 18.36%, #EEA5FF 7.55%, #7F53F3 100%)
             `,
             boxShadow: 'inset -3px -3px 9px #44185A',
             transform: 'rotate(4.62deg)'
           }} />

      {/* Brush highlights and details */}
      <div className="absolute w-[14.5px] h-[32px] left-[31.5px] top-[87px] rounded-[40px] border-2 border-white opacity-[0.11]"
           style={{
             mixBlendMode: 'plus-lighter',
             filter: 'blur(2px)'
           }} />
      
      <div className="absolute w-[11px] h-[14px] left-[52.5px] top-[64.5px] rounded-[40px] border border-white opacity-20"
           style={{ filter: 'blur(0.5px)' }} />
      
      <div className="absolute w-[17.5px] h-[11px] left-[49px] top-[76px] border border-white opacity-10"
           style={{
             mixBlendMode: 'hard-light',
             filter: 'blur(0.5px)'
           }} />
    </div>
  );
};

export default PaintBrush;
