
import React from 'react';

interface CardBackgroundProps {
  children: React.ReactNode;
}

const CardBackground = ({ children }: CardBackgroundProps) => {
  return (
    <div className="relative w-full h-full rounded-3xl border border-[#E2E8FF] overflow-hidden transition-all duration-300 ease-out
                    group-hover:border-[#CCC4FF] group-hover:shadow-[0px_7px_22px_rgba(113,144,175,0.4)]"
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
         }}>
      
      {/* Hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out rounded-3xl"
           style={{
             background: `
               radial-gradient(50% 50% at 50% 50%, rgba(118, 146, 255, 0.06) 80.55%, rgba(122, 150, 255, 0.024) 100%),
               radial-gradient(50% 50% at 50% 50%, rgba(226, 232, 255, 0) 33.78%, rgba(226, 232, 255, 0.056) 100%),
               linear-gradient(108.98deg, rgba(145, 127, 251, 0.6) 27.06%, rgba(63, 45, 175, 0.6) 90.91%),
               linear-gradient(0deg, rgba(226, 232, 255, 0.12), rgba(226, 232, 255, 0.12)),
               #6654D3
             `,
             boxShadow: `
               inset 0px -1px 12px 1px rgba(255, 255, 255, 0.4),
               inset 0px 0px 30px 5px rgba(255, 255, 255, 0.3),
               inset 0px 0px 12px 0.5px rgba(255, 255, 255, 0.5),
               inset 0px -14px 42px -12px rgba(226, 232, 255, 0.5),
               inset 0px 0px 12px 2px rgba(148, 82, 255, 0.6),
               inset 0px -14px 42px -12px rgba(226, 232, 255, 0.4),
               inset 0px 0px 44px 10px #D094FF
             `
           }} />
      
      {children}
    </div>
  );
};

export default CardBackground;
