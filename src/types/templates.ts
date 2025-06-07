
export interface HoverSettings {
  opacity: number;
  backgroundBlur: number;
  color: string;
  shadowIntensity: number;
}

export interface CardSettings {
  roundness: number;
  opacity: number;
  depth: number;
  backgroundBlur: number;
  color: string;
  shadowDirection: 'up' | 'down' | 'center';
  centerImage?: string;
  hover: HoverSettings;
  textColor: string;
  borderWidth: number;
  borderColor: string;
}

export interface CardTemplate {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  defaultSettings: CardSettings;
  component: React.ComponentType<{ settings: CardSettings }>;
}
