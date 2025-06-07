
import React from 'react';
import GlassCard from './ui/glass-card';
import GlassButton from './ui/glass-button';
import CardContent from './card/CardContent';

interface CreateImageCardProps {
  onClick?: () => void;
}

const CreateImageCard = ({ onClick }: CreateImageCardProps) => {
  return (
    <GlassCard 
      className="relative mx-auto w-[236px] h-[273px]"
      onClick={onClick}
    >
      <CardContent />
      
      {/* Card Text - Now visible with proper styling */}
      <div className="absolute left-[20px] top-[218px] w-[138px] h-[32px] flex items-center z-10">
        <span className="card-text">
          Create an Image
        </span>
      </div>
      
      {/* Card Button - Enhanced with proper glow effects */}
      <GlassButton className="absolute left-[184px] top-[218px] z-10" />
    </GlassCard>
  );
};

export default CreateImageCard;
