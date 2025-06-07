
import React from 'react';
import { CardSettings } from '@/types/templates';
import CardContainer from '../card/CardContainer';
import CardContent from '../card/CardContent';
import CardText from '../card/CardText';
import CardButton from '../card/CardButton';
import { generateGlassCardBackground, generateGlassCardHoverBackground } from '@/utils/cardStyles';

interface GlassCardProps {
  settings: CardSettings;
}

const GlassCard = ({ settings }: GlassCardProps) => {
  const background = generateGlassCardBackground(settings);
  const hoverBackground = generateGlassCardHoverBackground(settings);

  return (
    <CardContainer 
      settings={settings} 
      background={background}
      hoverBackground={hoverBackground}
    >
      <CardContent />
      
      <CardText>Create an Image</CardText>
      
      <CardButton className="absolute left-[184px] top-[218px] z-10" />
    </CardContainer>
  );
};

export default GlassCard;
