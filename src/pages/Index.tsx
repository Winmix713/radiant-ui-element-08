
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ControlPanel from '@/components/ControlPanel';
import CustomizableGlassCard from '@/components/CustomizableGlassCard';
import { Toaster } from '@/components/ui/toaster';
import { CardSettings } from '@/types/templates';
import { useCardSettings } from '@/hooks/useCardSettings';

const Index = () => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('glass');
  const { settings, updateAllSettings } = useCardSettings();

  const handleSettingsChange = (newSettings: CardSettings) => {
    updateAllSettings(newSettings);
  };

  const handleTemplateChange = (templateId: string) => {
    setSelectedTemplateId(templateId);
  };

  const handleCardClick = () => {
    console.log('Card clicked - Template:', selectedTemplateId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <div className="absolute top-8 right-8 z-10">
        <Link 
          to="/demo" 
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:bg-white/90 transition-all"
        >
          View Demo
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="container mx-auto px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
          {/* Control Panel */}
          <div className="w-full lg:w-auto flex-shrink-0">
            <ControlPanel 
              onSettingsChange={handleSettingsChange} 
              onTemplateChange={handleTemplateChange}
            />
          </div>
          
          {/* Card Preview */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start">
            <CustomizableGlassCard 
              settings={settings}
              templateId={selectedTemplateId}
              onClick={handleCardClick}
            />
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Index;
