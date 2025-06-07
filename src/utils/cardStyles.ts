
import { CardSettings } from '@/types/templates';
import { getShadowByDirection } from './shadowCalculations';
import { CARD_DIMENSIONS } from '@/constants/cardDefaults';

export const generateBaseCardStyle = (settings: CardSettings) => ({
  width: `${CARD_DIMENSIONS.width}px`,
  height: `${CARD_DIMENSIONS.height}px`,
  borderRadius: `${settings.roundness}px`,
  opacity: settings.opacity,
  backdropFilter: `blur(${settings.backgroundBlur}px)`,
  boxShadow: getShadowByDirection(settings),
  transition: 'all 0.3s ease-out',
  position: 'relative' as const,
  overflow: 'hidden' as const,
  cursor: 'pointer',
});

export const generateGlassCardBackground = (settings: CardSettings) => `
  radial-gradient(50% 50% at 50% 50%, rgba(118, 146, 255, 0.06) 80.55%, rgba(122, 150, 255, 0.024) 100%),
  radial-gradient(50% 50% at 50% 50%, rgba(226, 232, 255, 0) 33.78%, rgba(226, 232, 255, 0.056) 100%),
  linear-gradient(0deg, rgba(226, 232, 255, 0.12), rgba(226, 232, 255, 0.12)),
  ${settings.color}
`;

export const generateMinimalistCardBackground = (settings: CardSettings) => `
  linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%),
  ${settings.color}
`;
