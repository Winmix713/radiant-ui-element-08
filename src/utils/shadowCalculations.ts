
import { CardSettings } from '@/types/templates';

export const getShadowByDirection = (settings: CardSettings): string => {
  const depth = settings.depth;
  switch (settings.shadowDirection) {
    case 'up':
      return `0px -${depth}px ${depth * 8}px rgba(113, 144, 175, 0.1), 
              inset 0px 0px 30px 5px rgba(255, 255, 255, 0.5), 
              inset 0px 0px 12px 0.5px rgba(255, 255, 255, 0.8), 
              inset 0px -14px 42px -12px rgba(226, 232, 255, 0.5)`;
    case 'down':
      return `0px ${depth}px ${depth * 8}px rgba(113, 144, 175, 0.1), 
              inset 0px 0px 30px 5px rgba(255, 255, 255, 0.5), 
              inset 0px 0px 12px 0.5px rgba(255, 255, 255, 0.8), 
              inset 0px -14px 42px -12px rgba(226, 232, 255, 0.5)`;
    default:
      return `0px ${depth}px ${depth * 8}px rgba(113, 144, 175, 0.1), 
              inset 0px 0px 30px 5px rgba(255, 255, 255, 0.5), 
              inset 0px 0px 12px 0.5px rgba(255, 255, 255, 0.8), 
              inset 0px -14px 42px -12px rgba(226, 232, 255, 0.5), 
              inset 0px 0px 12px 0.5px rgba(255, 255, 255, 0.8), 
              inset 0px -14px 42px -12px rgba(226, 232, 255, 0.5)`;
  }
};

export const getHoverShadowByDirection = (settings: CardSettings): string => {
  const depth = settings.depth;
  const intensity = settings.hover.shadowIntensity;
  switch (settings.shadowDirection) {
    case 'up':
      return `0px ${-depth * intensity}px ${depth * 4.4 * intensity}px rgba(113, 144, 175, 0.4), 
              inset 0px -1px 12px 1px rgba(255, 255, 255, 0.4), 
              inset 0px 0px 30px 5px rgba(255, 255, 255, 0.3), 
              inset 0px 0px 12px 0.5px rgba(255, 255, 255, 0.5), 
              inset 0px -14px 42px -12px rgba(226, 232, 255, 0.5), 
              inset 0px 0px 12px 2px rgba(148, 82, 255, 0.6), 
              inset 0px -14px 42px -12px rgba(226, 232, 255, 0.4), 
              inset 0px 0px 44px 10px #D094FF`;
    case 'down':
      return `0px ${depth * intensity}px ${depth * 4.4 * intensity}px rgba(113, 144, 175, 0.4), 
              inset 0px -1px 12px 1px rgba(255, 255, 255, 0.4), 
              inset 0px 0px 30px 5px rgba(255, 255, 255, 0.3), 
              inset 0px 0px 12px 0.5px rgba(255, 255, 255, 0.5), 
              inset 0px -14px 42px -12px rgba(226, 232, 255, 0.5), 
              inset 0px 0px 12px 2px rgba(148, 82, 255, 0.6), 
              inset 0px -14px 42px -12px rgba(226, 232, 255, 0.4), 
              inset 0px 0px 44px 10px #D094FF`;
    default:
      return `0px ${depth * intensity}px ${depth * 4.4 * intensity}px rgba(113, 144, 175, 0.4), 
              inset 0px -1px 12px 1px rgba(255, 255, 255, 0.4), 
              inset 0px 0px 30px 5px rgba(255, 255, 255, 0.3), 
              inset 0px 0px 12px 0.5px rgba(255, 255, 255, 0.5), 
              inset 0px -14px 42px -12px rgba(226, 232, 255, 0.5), 
              inset 0px 0px 12px 2px rgba(148, 82, 255, 0.6), 
              inset 0px -14px 42px -12px rgba(226, 232, 255, 0.4), 
              inset 0px 0px 44px 10px #D094FF`;
  }
};
