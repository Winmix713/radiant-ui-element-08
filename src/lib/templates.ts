
import { CardTemplate } from '@/types/templates';
import GlassCard from '@/components/templates/GlassCard';
import MinimalistCard from '@/components/templates/MinimalistCard';
import NatureCard from '@/components/templates/NatureCard';
import AbstractCard from '@/components/templates/AbstractCard';
import CreativeCard from '@/components/templates/CreativeCard';
import InnovationCard from '@/components/templates/InnovationCard';
import StrategyCard from '@/components/templates/StrategyCard';

const defaultHoverSettings = {
  opacity: 1.0,
  backgroundBlur: 8,
  color: '#8b5cf6',
  shadowIntensity: 1.5,
};

export const cardTemplates: CardTemplate[] = [
  {
    id: 'glass',
    name: 'Glass Morphism',
    description: 'Original glass card with artistic elements',
    thumbnail: '🎨',
    defaultSettings: {
      roundness: 24,
      opacity: 1.0,
      depth: 8,
      backgroundBlur: 5,
      color: '#6654D3',
      shadowDirection: 'center',
      centerImage: undefined,
      hover: defaultHoverSettings,
      textColor: '#374151',
      borderWidth: 1,
      borderColor: 'rgba(226, 232, 255, 0.2)',
    },
    component: GlassCard
  },
  {
    id: 'creative',
    name: 'Creative Studio',
    description: 'Purple-themed card for artistic projects',
    thumbnail: '🎭',
    defaultSettings: {
      roundness: 24,
      opacity: 1.0,
      depth: 8,
      backgroundBlur: 5,
      color: '#8b5cf6',
      shadowDirection: 'center',
      centerImage: undefined,
      hover: { ...defaultHoverSettings, color: '#a855f7' },
      textColor: '#374151',
      borderWidth: 1,
      borderColor: 'rgba(226, 232, 255, 0.2)',
    },
    component: CreativeCard
  },
  {
    id: 'innovation',
    name: 'Innovation Hub',
    description: 'Golden-themed card for ideas and inspiration',
    thumbnail: '💡',
    defaultSettings: {
      roundness: 24,
      opacity: 1.0,
      depth: 8,
      backgroundBlur: 5,
      color: '#f59e0b',
      shadowDirection: 'center',
      centerImage: undefined,
      hover: { ...defaultHoverSettings, color: '#fbbf24' },
      textColor: '#374151',
      borderWidth: 1,
      borderColor: 'rgba(226, 232, 255, 0.2)',
    },
    component: InnovationCard
  },
  {
    id: 'strategy',
    name: 'Strategy Board',
    description: 'Green-themed card for strategic planning',
    thumbnail: '🎯',
    defaultSettings: {
      roundness: 24,
      opacity: 1.0,
      depth: 8,
      backgroundBlur: 5,
      color: '#10b981',
      shadowDirection: 'center',
      centerImage: undefined,
      hover: { ...defaultHoverSettings, color: '#34d399' },
      textColor: '#374151',
      borderWidth: 1,
      borderColor: 'rgba(226, 232, 255, 0.2)',
    },
    component: StrategyCard
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Clean and simple geometric design',
    thumbnail: '⚪',
    defaultSettings: {
      roundness: 16,
      opacity: 0.9,
      depth: 6,
      backgroundBlur: 8,
      color: '#64748b',
      shadowDirection: 'center',
      centerImage: undefined,
      hover: defaultHoverSettings,
      textColor: '#374151',
      borderWidth: 1,
      borderColor: 'rgba(226, 232, 255, 0.2)',
    },
    component: MinimalistCard
  },
  {
    id: 'nature',
    name: 'Nature',
    description: 'Organic design with natural elements',
    thumbnail: '🌿',
    defaultSettings: {
      roundness: 20,
      opacity: 0.95,
      depth: 10,
      backgroundBlur: 4,
      color: '#059669',
      shadowDirection: 'down',
      centerImage: undefined,
      hover: { ...defaultHoverSettings, color: '#10b981' },
      textColor: '#374151',
      borderWidth: 1,
      borderColor: 'rgba(226, 232, 255, 0.2)',
    },
    component: NatureCard
  },
  {
    id: 'abstract',
    name: 'Abstract',
    description: 'Creative geometric patterns',
    thumbnail: '🔮',
    defaultSettings: {
      roundness: 28,
      opacity: 0.85,
      depth: 12,
      backgroundBlur: 6,
      color: '#7c3aed',
      shadowDirection: 'center',
      centerImage: undefined,
      hover: { ...defaultHoverSettings, color: '#8b5cf6' },
      textColor: '#374151',
      borderWidth: 1,
      borderColor: 'rgba(226, 232, 255, 0.2)',
    },
    component: AbstractCard
  }
];

export const getTemplateById = (id: string): CardTemplate | undefined => {
  return cardTemplates.find(template => template.id === id);
};
