
import React from 'react';

interface CardTextProps {
  children: React.ReactNode;
  className?: string;
}

const CardText = ({ children, className = "" }: CardTextProps) => {
  return (
    <div className={`absolute left-[20px] top-[218px] w-[138px] h-[32px] flex items-center z-10 ${className}`}>
      <span className="card-text">
        {children}
      </span>
    </div>
  );
};

export default CardText;
