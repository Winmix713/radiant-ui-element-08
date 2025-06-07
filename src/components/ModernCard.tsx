
import React from 'react';
import GlassCard from './ui/glass-card';
import CardContent from './card/CardContent';
import CardText from './card/CardText';
import CardArrowButton from './card/CardArrowButton';
import { cn } from '@/lib/utils';

interface ModernCardProps {
  title?: string;
  onClick?: () => void;
  className?: string;
}

const ModernCard = ({ title = "Create an Image", onClick, className }: ModernCardProps) => {
  return (
    <div className={cn("mx-auto", className)}>
      <GlassCard onClick={onClick}>
        <CardContent />
        <CardText>{title}</CardText>
        <CardArrowButton onClick={onClick} />
      </GlassCard>
    </div>
  );
};

export default ModernCard;
