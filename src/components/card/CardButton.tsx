
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CardButtonProps {
  className?: string;
  onClick?: () => void;
}

const CardButton = ({ className = '', onClick }: CardButtonProps) => {
  return (
    <div className={`w-[32px] h-[32px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ease-out ${className}`}
         onClick={onClick}
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
      
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"
           style={{
             background: `
               linear-gradient(154.18deg, rgba(255, 255, 255, 0) 29.02%, rgba(55, 16, 118, 0.324) 89.23%),
               radial-gradient(50% 50% at 50% 50%, rgba(118, 146, 255, 0) 80.55%, rgba(122, 150, 255, 0.024) 100%),
               radial-gradient(50% 50% at 50% 50%, rgba(226, 232, 255, 0) 33.78%, rgba(226, 232, 255, 0.048) 100%),
               linear-gradient(0deg, rgba(226, 232, 255, 0.38), rgba(226, 232, 255, 0.38)),
               linear-gradient(0deg, rgba(201, 213, 255, 0.59), rgba(201, 213, 255, 0.59)),
               linear-gradient(108.98deg, #917FFB 27.06%, #3F2DAF 90.91%)
             `,
           }} />
      
      <ArrowRight className="w-3 h-3 text-[#141C23] opacity-70 relative z-10 group-hover:text-white transition-colors duration-300" />
    </div>
  );
};

export default CardButton;
