
import React from 'react';

const Moon = () => {
  return (
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
  );
};

export default Moon;
