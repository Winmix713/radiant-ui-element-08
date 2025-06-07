import React from 'react';
import { ArrowRight } from 'lucide-react';

const CreateImageCard = () => {
  return (
    <div className="relative w-[236px] h-[273px] mx-auto group cursor-pointer">
      {/* Main Card Container */}
      <div className="relative w-full h-full rounded-3xl border border-[#E2E8FF] overflow-hidden transition-all duration-300 ease-out
                      group-hover:border-[#CCC4FF] group-hover:bg-[#6654D3]"
           style={{
             background: `
               radial-gradient(50% 50% at 50% 50%, rgba(118, 146, 255, 0.06) 80.55%, rgba(122, 150, 255, 0.024) 100%),
               radial-gradient(50% 50% at 50% 50%, rgba(226, 232, 255, 0) 33.78%, rgba(226, 232, 255, 0.056) 100%),
               linear-gradient(0deg, rgba(226, 232, 255, 0.12), rgba(226, 232, 255, 0.12)),
               #F1F2F5
             `,
             boxShadow: `
               0px 5px 40px rgba(113, 144, 175, 0.1),
               inset 0px 0px 30px 5px rgba(255, 255, 255, 0.5),
               inset 0px 0px 12px 0.5px rgba(255, 255, 255, 0.8),
               inset 0px -14px 42px -12px rgba(226, 232, 255, 0.5)
             `
           }}
           className="group-hover:shadow-[0px_7px_22px_rgba(113,144,175,0.4),_inset_0px_-1px_12px_1px_rgba(255,255,255,0.4),_inset_0px_0px_30px_5px_rgba(255,255,255,0.3),_inset_0px_0px_12px_0.5px_rgba(255,255,255,0.5),_inset_0px_-14px_42px_-12px_rgba(226,232,255,0.5),_inset_0px_0px_12px_2px_rgba(148,82,255,0.6),_inset_0px_-14px_42px_-12px_rgba(226,232,255,0.4),_inset_0px_0px_44px_10px_#D094FF]
                      group-hover:bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(118,146,255,0.06)_80.55%,_rgba(122,150,255,0.024)_100%),_radial-gradient(50%_50%_at_50%_50%,_rgba(226,232,255,0)_33.78%,_rgba(226,232,255,0.056)_100%),_linear-gradient(108.98deg,_rgba(145,127,251,0.6)_27.06%,_rgba(63,45,175,0.6)_90.91%),_linear-gradient(0deg,_rgba(226,232,255,0.12),_rgba(226,232,255,0.12)),_#6654D3]">
        
        {/* Background Frame Layers */}
        <div className="absolute top-[50px] left-[38px] w-[162px] h-[142px]">
          {/* Back layer */}
          <div className="absolute w-[140px] h-[110px] left-0 top-0 rounded-3xl group-hover:bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(118,146,255,0.06)_80.55%,_rgba(122,150,255,0.024)_100%),_linear-gradient(0deg,_rgba(226,232,255,0.04),_rgba(226,232,255,0.04)),_linear-gradient(108.98deg,_#7865E7_27.06%,_#2B1B8F_90.91%)]"
               style={{
                 background: `
                   radial-gradient(50% 50% at 50% 50%, rgba(118, 146, 255, 0.06) 80.55%, rgba(122, 150, 255, 0.024) 100%),
                   linear-gradient(0deg, rgba(226, 232, 255, 0.74), rgba(226, 232, 255, 0.74)),
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
          
          {/* Overlay effects */}
          <div className="absolute w-[140px] h-[110px] left-[22px] top-[32px] rounded-3xl opacity-60"
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
          <div className="w-full h-full rounded-3xl"
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

        {/* Text */}
        <div className="absolute left-[20px] top-[218px] w-[138px] h-[32px] flex items-center">
          <span className="text-[18px] font-semibold leading-[90%] text-[#141C23] group-hover:text-white transition-colors duration-300"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Create an Image
          </span>
        </div>

        {/* Arrow Button */}
        <div className="absolute w-[32px] h-[32px] left-[184px] top-[218px] rounded-full transition-all duration-300
                        group-hover:shadow-[0px_0px_3.0897px_4.63456px_#B67EFF] 
                        group-hover:[filter:drop-shadow(4px_4px_8px_rgba(25,9,45,0.4))_drop-shadow(0px_0px_5.40698px_rgba(182,127,255,0.6))_drop-shadow(0px_0px_36.304px_rgba(216,186,255,0.6))]"
             style={{
               boxShadow: `
                 0px 0px 3.0897px 4.63456px #FFFFFF,
                 4px 4px 8px rgba(0, 0, 0, 0.11),
                 0px 0px 5.40698px rgba(255, 255, 255, 0.9),
                 0px 0px 36.304px #FFFFFF
               `
             }}>
          <div className="w-full h-full rounded-full flex items-center justify-center transition-all duration-300
                          group-hover:bg-[linear-gradient(154.18deg,_rgba(255,255,255,0)_29.02%,_rgba(55,16,118,0.324)_89.23%),_radial-gradient(50%_50%_at_50%_50%,_rgba(118,146,255,0)_80.55%,_rgba(122,150,255,0.024)_100%),_radial-gradient(50%_50%_at_50%_50%,_rgba(226,232,255,0)_33.78%,_rgba(226,232,255,0.048)_100%),_linear-gradient(0deg,_rgba(226,232,255,0.38),_rgba(226,232,255,0.38)),_linear-gradient(0deg,_rgba(201,213,255,0.59),_rgba(201,213,255,0.59)),_linear-gradient(108.98deg,_#917FFB_27.06%,_#3F2DAF_90.91%)]
                          group-hover:shadow-[inset_0px_0px_0.5px_1.2px_rgba(0,0,0,0.08),_inset_2px_3px_3px_-3px_rgba(0,0,0,0.25),_inset_0px_0px_24px_1px_rgba(255,255,255,0.46),_inset_0px_-28px_84px_-24px_rgba(226,232,255,0.36)]"
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
            <ArrowRight className="w-3 h-3 text-[#141C23] opacity-70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateImageCard;
