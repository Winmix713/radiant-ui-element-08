
import React from 'react';

const Mountains = () => {
  return (
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
  );
};

export default Mountains;
