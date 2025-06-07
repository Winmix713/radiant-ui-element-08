
import React from 'react';

interface CardBackgroundProps {
  children: React.ReactNode;
}

const CardBackground = ({ children }: CardBackgroundProps) => {
  return (
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
      {children}
    </div>
  );
};

export default CardBackground;
