
import React from 'react';
import { CardSettings } from '@/types/templates';
import CardContainer from '../card/CardContainer';
import CardContent from '../card/CardContent';
import CardText from '../card/CardText';
import CardButton from '../card/CardButton';
import { generateGlassCardBackground } from '@/utils/cardStyles';

interface GlassCardProps {
  settings: CardSettings;
}

const GlassCard = ({ settings }: GlassCardProps) => {
  const background = generateGlassCardBackground(settings);

  const hoverOverlayStyle = {
    background: `
      radial-gradient(50% 50% at 50% 50%, rgba(118, 146, 255, 0.06) 80.55%, rgba(122, 150, 255, 0.024) 100%),
      radial-gradient(50% 50% at 50% 50%, rgba(226, 232, 255, 0) 33.78%, rgba(226, 232, 255, 0.056) 100%),
      linear-gradient(108.98deg, rgba(145, 127, 251, 0.6) 27.06%, rgba(63, 45, 175, 0.6) 90.91%),
      linear-gradient(0deg, rgba(226, 232, 255, 0.12), rgba(226, 232, 255, 0.12)),
      #6654D3
    `,
    borderRadius: `${settings.roundness}px`,
    position: 'absolute' as const,
    inset: '0',
    opacity: 0,
    transition: 'opacity 0.3s ease-out'
  };

  return (
    <CardContainer settings={settings} background={background}>
      <div style={hoverOverlayStyle} className="group-hover:opacity-100" />
      <CardContent />
      
      <CardText>Create an Image</CardText>
      
      <CardButton className="absolute left-[184px] top-[218px] z-10" />
    </CardContainer>
  );
};

export default GlassCard;
