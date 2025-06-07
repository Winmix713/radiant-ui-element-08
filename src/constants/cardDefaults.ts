
export const CARD_DIMENSIONS = {
  width: 236,
  height: 273,
} as const;

export const DEFAULT_CARD_SETTINGS = {
  roundness: 24,
  opacity: 1.0,
  depth: 8,
  backgroundBlur: 5,
  color: '#6654D3',
  shadowDirection: 'center' as const,
  centerImage: undefined,
  hover: {
    opacity: 1.0,
    backgroundBlur: 8,
    color: '#8b5cf6',
    shadowIntensity: 1.5,
  },
  textColor: '#374151',
  borderWidth: 1,
  borderColor: 'rgba(226, 232, 255, 0.2)',
} as const;

export const SLIDER_CONFIGS = {
  roundness: {
    min: 0,
    max: 50,
    step: 1,
    unit: 'px',
  },
  opacity: {
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  depth: {
    min: 0,
    max: 20,
    step: 1,
    unit: 'px',
  },
  backgroundBlur: {
    min: 0,
    max: 10,
    step: 1,
    unit: 'px',
  },
} as const;
