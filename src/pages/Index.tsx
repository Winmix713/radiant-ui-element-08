
import React, { useState } from 'react';
import ControlPanel from '@/components/ControlPanel';
import CustomizableGlassCard from '@/components/CustomizableGlassCard';
import { Toaster } from '@/components/ui/toaster';

interface CardSettings {
  roundness: number;
  opacity: number;
  depth: number;
  backgroundBlur: number;
  color: string;
  shadowDirection: 'up' | 'down' | 'center';
}

const Index = () => {
  const [cardSettings, setCardSettings] = useState<CardSettings>({
    roundness: 24,
    opacity: 1.0,
    depth: 8,
    backgroundBlur: 5,
    color: '#6654D3',
    shadowDirection: 'center'
  });

  const handleSettingsChange = (newSettings: CardSettings) => {
    setCardSettings(newSettings);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
          {/* Control Panel */}
          <div className="w-full lg:w-auto flex-shrink-0">
            <ControlPanel onSettingsChange={handleSettingsChange} />
          </div>
          
          {/* Card Preview */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start">
            <CustomizableGlassCard 
              settings={cardSettings}
              onClick={() => console.log('Card clicked')}
            />
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Index;
