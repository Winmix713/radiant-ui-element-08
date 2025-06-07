
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CustomizableGlassCard from '@/components/CustomizableGlassCard';
import { Button } from '@/components/ui/button';
import { CardSettings } from '@/types/templates';
import { cardTemplates } from '@/lib/templates';

const App = () => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('glass');
  const [cardSettings] = useState<CardSettings>({
    roundness: 24,
    opacity: 1.0,
    depth: 8,
    backgroundBlur: 5,
    color: '#6654D3',
    shadowDirection: 'center'
  });

  const handleCardClick = () => {
    console.log('Create Image clicked');
  };

  const currentTemplate = cardTemplates.find(t => t.id === selectedTemplateId);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      {/* Navigation */}
      <div className="absolute top-8 left-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:bg-white/90 transition-all"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to Editor
        </Link>
      </div>

      {/* Template Selector */}
      <div className="absolute top-8 right-8">
        <div className="flex gap-2 bg-white/80 backdrop-blur-sm rounded-lg p-2">
          {cardTemplates.map((template) => (
            <Button
              key={template.id}
              variant={selectedTemplateId === template.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedTemplateId(template.id)}
              className="flex flex-col h-auto p-2 space-y-1"
            >
              <span className="text-sm">{template.thumbnail}</span>
              <span className="text-xs">{template.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Card Preview */}
      <div className="flex flex-col items-center gap-8">
        <CustomizableGlassCard 
          settings={cardSettings}
          templateId={selectedTemplateId}
          onClick={handleCardClick}
        />

        {/* Demo Info */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {currentTemplate?.name} Card Demo
          </h1>
          <p className="text-gray-600">{currentTemplate?.description}</p>
          <p className="text-sm text-gray-500 mt-2">
            Switch between templates using the buttons above
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
