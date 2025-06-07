
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CardArrowButton = () => {
  return (
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
  );
};

export default CardArrowButton;
