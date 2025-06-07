
import { CardSettings } from '@/types/templates';

export const getShadowByDirection = (settings: CardSettings): string => {
  const depth = settings.depth;
  switch (settings.shadowDirection) {
    case 'up':
      return `0px -${depth}px ${depth * 2}px rgba(113, 144, 175, 0.15)`;
    case 'down':
      return `0px ${depth}px ${depth * 2}px rgba(113, 144, 175, 0.15)`;
    default:
      return `0px ${depth/2}px ${depth * 3}px rgba(113, 144, 175, 0.1)`;
  }
};
