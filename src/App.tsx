
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const App = () => {
  const handleCardClick = () => {
    console.log('Create Image clicked');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      {/* Navigation */}
      <div className="absolute top-8 left-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:bg-white/90 transition-all"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to Editor
        </Link>
      </div>

      {/* Glass Card Container */}
      <div className="group cursor-pointer relative w-[236px] h-[273px] glass-card overflow-hidden mx-auto"
           onClick={handleCardClick}>
        
        {/* Glass Card Hover Overlay */}
        <div className="glass-card-hover-overlay" />

        {/* Background Frames */}
        <div className="absolute top-[50px] left-[38px] w-[162px] h-[142px]">
          {/* Back layer - with hover effect */}
          <div className="absolute w-[140px] h-[110px] left-0 top-0 rounded-[24px] transition-all duration-300 ease-out"
               style={{
                 background: `
                   radial-gradient(50% 50% at 50% 50%, rgba(118, 146, 255, 0.06) 80.55%, rgba(122, 150, 255, 0.024) 100%),
                   linear-gradient(0deg, rgba(226, 232, 255, 0.74), rgba(226, 232, 255, 0.74)),
                   linear-gradient(108.98deg, #7865E7 27.06%, #2B1B8F 90.91%)
                 `
               }} />
          
          {/* Hover state for back layer */}
          <div className="absolute w-[140px] h-[110px] left-0 top-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"
               style={{
                 background: `
                   radial-gradient(50% 50% at 50% 50%, rgba(118, 146, 255, 0.06) 80.55%, rgba(122, 150, 255, 0.024) 100%),
                   linear-gradient(0deg, rgba(226, 232, 255, 0.04), rgba(226, 232, 255, 0.04)),
                   linear-gradient(108.98deg, #7865E7 27.06%, #2B1B8F 90.91%)
                 `
               }} />
          
          {/* Middle layer */}
          <div className="absolute w-[140px] h-[110px] left-[8px] top-[13px] rounded-[24px]"
               style={{
                 background: 'linear-gradient(108.98deg, #917FFB 27.06%, #3F2DAF 90.91%)',
                 backdropFilter: 'blur(10px)'
               }} />
          
          {/* Glass layers */}
          <div className="absolute w-[140px] h-[110px] left-[20px] top-[30px] rounded-[24px]"
               style={{
                 background: 'rgba(191, 181, 255, 0.01)',
                 backdropFilter: 'blur(8px)'
               }} />
          
          <div className="absolute w-[140px] h-[112px] left-[22px] top-[30px] rounded-[24px]"
               style={{
                 background: 'rgba(191, 181, 255, 0.01)',
                 boxShadow: '-2px -2px 1px rgba(255, 255, 255, 0.18), inset -3px -2px 2px rgba(255, 255, 255, 0.35)',
                 backdropFilter: 'blur(4px)'
               }} />
          
          {/* Additional hover effect layers */}
          <div className="absolute w-[140px] h-[110px] left-[162px] top-[32px] rounded-[24px] opacity-0 group-hover:opacity-20 transition-all duration-300 ease-out"
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
          <div className="absolute w-[140px] h-[110px] left-[22px] top-[32px] rounded-[24px] opacity-60 group-hover:opacity-100 transition-all duration-300 ease-out"
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

        {/* Mountains */}
        <div className="absolute top-[122px] left-[67px] w-[128px] h-[57px]">
          <div className="w-full h-full rounded-[24px]"
               style={{
                 background: `
                   radial-gradient(25.7% 89.75% at 45.97% 69.09%, rgba(151, 71, 255, 0.2) 32.2%, rgba(123, 97, 255, 0) 100%),
                   linear-gradient(100.24deg, rgba(255, 255, 255, 0.7) 35.91%, rgba(255, 255, 255, 0) 88.68%),
                   linear-gradient(123.51deg, rgba(101, 92, 220, 0.9) 32.7%, rgba(255, 255, 255, 0) 172.35%),
                   linear-gradient(72.79deg, rgba(90, 117, 215, 0.7) 29.23%, rgba(157, 175, 157, 0.7) 49.74%, rgba(38, 104, 119, 0.7) 78.92%)
                 `,
                 boxShadow: `
                   inset 0px 0px 16px rgba(255, 255, 255, 0.8),
                   inset 0px -28px 84px rgba(226, 232, 255, 0.5),
                   inset 0px 0px 2px #EDF7E9,
                   inset 0px 0px 8px rgba(237, 247, 233, 0.4)
                 `
               }} />
          
          {/* Mountain highlight */}
          <div className="absolute w-[42px] h-[54px] left-[4px] top-[2px] opacity-60"
               style={{
                 background: 'linear-gradient(117.46deg, #FFFFFF 39.42%, rgba(255, 255, 255, 0) 55.93%)',
                 mixBlendMode: 'color-dodge',
                 filter: 'blur(1.5px)'
               }} />
        </div>

        {/* Moon */}
        <div className="absolute top-[63px] left-[106px] w-[110px] h-[110px]">
          {/* Moon outer rings */}
          <div className="absolute w-[110px] h-[110px] rounded-full border-2 border-white opacity-40"
               style={{ filter: 'blur(6px)' }} />
          <div className="absolute w-[70px] h-[70px] left-[20px] top-[20px] rounded-full border-2 border-white opacity-40"
               style={{ filter: 'blur(4px)' }} />
          <div className="absolute w-[46px] h-[46px] left-[32px] top-[32px] rounded-full border-2 border-white opacity-40"
               style={{ filter: 'blur(3px)' }} />
          
          {/* Moon glow */}
          <div className="absolute w-[89px] h-[89px] left-[11px] top-[11px] rounded-full opacity-20"
               style={{
                 background: `
                   linear-gradient(90deg, rgba(255, 255, 255, 0.25) 49.17%, rgba(0, 0, 0, 0.25) 49.44%),
                   linear-gradient(19.74deg, rgba(255, 72, 149, 0.98) 30.29%, rgba(27, 0, 254, 0.98) 57.01%)
                 `,
                 mixBlendMode: 'color-dodge',
                 filter: 'blur(6px)'
               }} />
          
          {/* Moon body */}
          <div className="absolute w-[28px] h-[28px] left-[41px] top-[41px] rounded-[20px]"
               style={{
                 background: `
                   radial-gradient(62.5% 62.5% at 73.21% 37.5%, rgba(151, 71, 255, 0.2) 32.2%, rgba(123, 97, 255, 0) 100%),
                   linear-gradient(123.51deg, rgba(101, 92, 220, 0.9) 32.7%, rgba(255, 255, 255, 0) 172.35%),
                   linear-gradient(72.79deg, rgba(90, 117, 215, 0.7) 29.23%, rgba(157, 175, 157, 0.7) 49.74%, rgba(38, 104, 119, 0.7) 78.92%)
                 `,
                 boxShadow: `
                   inset 0px 0px 16px 1px rgba(255, 255, 255, 0.8),
                   inset 0px -28px 84px -24px rgba(226, 232, 255, 0.5),
                   inset 0px 0px 2px 2px #EDF7E9,
                   inset 0px 0px 8px 5px rgba(237, 247, 233, 0.4)
                 `,
                 backdropFilter: 'blur(9px)'
               }} />
        </div>

        {/* Paint Brush */}
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

        {/* Card Text */}
        <div className="absolute left-[20px] top-[218px] w-[138px] h-[32px] flex items-center z-10">
          <span className="card-text">Create an Image</span>
        </div>

        {/* Glass Button */}
        <div className="glass-button z-10 absolute left-[184px] top-[218px]" onClick={handleCardClick}>
          <div className="glass-button-hover-glow" />
          
          <div className="relative w-full h-full rounded-full flex items-center justify-center transition-all duration-300 ease-out z-10"
               style={{
                 background: `
                   linear-gradient(154.18deg, rgba(255, 255, 255, 0) 29.02%, rgba(20, 28, 35, 0.24) 89.23%),
                   linear-gradient(278.42deg, rgba(222, 223, 225, 0) 7.22%, rgba(242, 159, 46, 0.03) 90.9%),
                   radial-gradient(50% 50% at 50% 50%, rgba(118, 146, 255, 0) 80.55%, rgba(122, 150, 255, 0.024) 100%),
                   radial-gradient(50% 50% at 50% 50%, rgba(226, 232, 255, 0) 33.78%, rgba(226, 232, 255, 0.048) 100%),
                   linear-gradient(0deg, rgba(226, 232, 255, 0.41), rgba(226, 232, 255, 0.41)),
                   linear-gradient(0deg, rgba(28, 30, 33, 0.06), rgba(28, 30, 33, 0.06)),
                   rgba(2, 12, 38, 0.02)
                 `,
                 boxShadow: `
                   inset 0px 0px 0.5px 1.2px rgba(0, 0, 0, 0.08),
                   inset 2px 3px 3px -3px rgba(0, 0, 0, 0.25),
                   inset 0px 0px 24px 1px rgba(255, 255, 255, 0.06),
                   inset 0px -28px 84px -24px rgba(226, 232, 255, 0.06)
                 `
               }}>
            
            {/* Enhanced hover overlay with blend modes */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out blend-hard-light"
                 style={{
                   background: `
                     linear-gradient(154.18deg, rgba(255, 255, 255, 0) 29.02%, rgba(55, 16, 118, 0.324) 89.23%),
                     radial-gradient(50% 50% at 50% 50%, rgba(118, 146, 255, 0) 80.55%, rgba(122, 150, 255, 0.024) 100%),
                     radial-gradient(50% 50% at 50% 50%, rgba(226, 232, 255, 0) 33.78%, rgba(226, 232, 255, 0.048) 100%),
                     linear-gradient(0deg, rgba(226, 232, 255, 0.38), rgba(226, 232, 255, 0.38)),
                     linear-gradient(0deg, rgba(201, 213, 255, 0.59), rgba(201, 213, 255, 0.59)),
                     linear-gradient(108.98deg, #917FFB 27.06%, #3F2DAF 90.91%)
                   `,
                   boxShadow: `
                     inset 0px 0px 0.5px 1.2px rgba(0, 0, 0, 0.08),
                     inset 2px 3px 3px -3px rgba(0, 0, 0, 0.25),
                     inset 0px 0px 24px 1px rgba(255, 255, 255, 0.46),
                     inset 0px -28px 84px -24px rgba(226, 232, 255, 0.36)
                   `
                 }} />
            
            {/* Additional texture layer with color-burn blend mode */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-300 ease-out blend-color-burn texture-rotate" />
            
            <ArrowRight className="w-3 h-3 text-[#141C23] opacity-70 relative z-10 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
      </div>

      {/* Demo Label */}
      <div className="mt-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Glass Card Demo</h1>
        <p className="text-gray-600">This is a static preview of the glass card design</p>
      </div>
    </div>
  );
};

export default App;
