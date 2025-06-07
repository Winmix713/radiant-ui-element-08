
import { CardTemplate } from '@/types/templates';
import GlassCard from '@/components/templates/GlassCard';
import MinimalistCard from '@/components/templates/MinimalistCard';
import CreativeCard from '@/components/templates/CreativeCard';
import InnovationCard from '@/components/templates/InnovationCard';
import StrategyCard from '@/components/templates/StrategyCard';
import { DEFAULT_CARD_SETTINGS } from '@/constants/cardDefaults';

export const cardTemplates: CardTemplate[] = [
  {
    id: 'glass',
    name: 'Glass',
    description: 'Modern glassmorphism card with elegant backdrop blur effects',
    thumbnail: '🔮',
    defaultSettings: {
      ...DEFAULT_CARD_SETTINGS,
      color: '#F1F2F5',
      hover: {
        ...DEFAULT_CARD_SETTINGS.hover,
        color: '#6654D3',
      },
      textColor: '#141C23',
      borderColor: '#E2E8FF',
    },
    component: GlassCard,
  },
  {
    id: 'minimalist',
    name: 'Minimal',
    description: 'Clean and simple design with geometric elements',
    thumbnail: '⚪',
    defaultSettings: {
      ...DEFAULT_CARD_SETTINGS,
      color: '#f8fafc',
      hover: {
        ...DEFAULT_CARD_SETTINGS.hover,
        color: '#e2e8f0',
      },
      textColor: '#ffffff',
    },
    component: MinimalistCard,
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Artistic design with vibrant purple gradients and paintbrush elements',
    thumbnail: '🎨',
    defaultSettings: {
      ...DEFAULT_CARD_SETTINGS,
      color: '#8b5cf6',
      hover: {
        ...DEFAULT_CARD_SETTINGS.hover,
        color: '#7c3aed',
      },
      textColor: '#374151',
    },
    component: CreativeCard,
  },
  {
    id: 'innovation',
    name: 'Innovation',
    description: 'Forward-thinking design with golden accents and lightbulb inspiration',
    thumbnail: '💡',
    defaultSettings: {
      ...DEFAULT_CARD_SETTINGS,
      color: '#f59e0b',
      hover: {
        ...DEFAULT_CARD_SETTINGS.hover,
        color: '#d97706',
      },
      textColor: '#374151',
    },
    component: InnovationCard,
  },
  {
    id: 'strategy',
    name: 'Strategy',
    description: 'Professional design with green tones and strategic target elements',
    thumbnail: '🎯',
    defaultSettings: {
      ...DEFAULT_CARD_SETTINGS,
      color: '#10b981',
      hover: {
        ...DEFAULT_CARD_SETTINGS.hover,
        color: '#059669',
      },
      textColor: '#374151',
    },
    component: StrategyCard,
  },
];

export const getTemplateById = (id: string): CardTemplate | undefined => {
  return cardTemplates.find(template => template.id === id);
};
