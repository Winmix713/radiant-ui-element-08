
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

export const generateCreativeCardBackground = (settings: CardSettings) => `
  radial-gradient(50% 50% at 30% 20%, rgba(147, 51, 234, 0.15) 0%, rgba(147, 51, 234, 0.05) 100%),
  radial-gradient(80% 80% at 70% 80%, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0.02) 100%),
  linear-gradient(135deg, rgba(139, 69, 19, 0.08) 0%, rgba(160, 82, 45, 0.08) 100%),
  linear-gradient(0deg, rgba(226, 232, 255, 0.12), rgba(226, 232, 255, 0.12)),
  ${settings.color}
`;

export const generateInnovationCardBackground = (settings: CardSettings) => `
  radial-gradient(50% 50% at 40% 30%, rgba(251, 191, 36, 0.12) 0%, rgba(251, 191, 36, 0.04) 100%),
  radial-gradient(80% 80% at 60% 70%, rgba(245, 158, 11, 0.08) 0%, rgba(245, 158, 11, 0.02) 100%),
  linear-gradient(135deg, rgba(255, 193, 7, 0.06) 0%, rgba(255, 152, 0, 0.06) 100%),
  linear-gradient(0deg, rgba(255, 248, 220, 0.10), rgba(255, 248, 220, 0.10)),
  ${settings.color}
`;

export const generateStrategyCardBackground = (settings: CardSettings) => `
  radial-gradient(50% 50% at 35% 25%, rgba(34, 197, 94, 0.12) 0%, rgba(34, 197, 94, 0.04) 100%),
  radial-gradient(80% 80% at 65% 75%, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.02) 100%),
  linear-gradient(135deg, rgba(5, 150, 105, 0.06) 0%, rgba(6, 182, 212, 0.06) 100%),
  linear-gradient(0deg, rgba(236, 253, 245, 0.10), rgba(236, 253, 245, 0.10)),
  ${settings.color}
`;
