
export interface CardSettings {
  roundness: number;
  opacity: number;
  depth: number;
  backgroundBlur: number;
  color: string;
  shadowDirection: 'up' | 'down' | 'center';
}

export interface CardTemplate {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  defaultSettings: CardSettings;
  component: React.ComponentType<{ settings: CardSettings }>;
}
