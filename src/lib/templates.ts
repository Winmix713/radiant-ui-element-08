
import { CardTemplate } from '@/types/templates';
import GlassCard from '@/components/templates/GlassCard';
import MinimalistCard from '@/components/templates/MinimalistCard';
import NatureCard from '@/components/templates/NatureCard';
import AbstractCard from '@/components/templates/AbstractCard';
import CreativeCard from '@/components/templates/CreativeCard';
import InnovationCard from '@/components/templates/InnovationCard';
import StrategyCard from '@/components/templates/StrategyCard';

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
      shadowDirection: 'center'
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
      shadowDirection: 'center'
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
      shadowDirection: 'center'
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
      shadowDirection: 'center'
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
      shadowDirection: 'center'
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
      shadowDirection: 'down'
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
      shadowDirection: 'center'
    },
    component: AbstractCard
  }
];

export const getTemplateById = (id: string): CardTemplate | undefined => {
  return cardTemplates.find(template => template.id === id);
};
