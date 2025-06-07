import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown, Move } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import TemplatePicker from './TemplatePicker';
import { CardSettings } from '@/types/templates';
import { getTemplateById } from '@/lib/templates';

interface ControlPanelProps {
  onSettingsChange: (settings: CardSettings) => void;
  onTemplateChange: (templateId: string) => void;
}

const ControlPanel = ({ onSettingsChange, onTemplateChange }: ControlPanelProps) => {
  const { toast } = useToast();
  
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('glass');
  const [settings, setSettings] = useState<CardSettings>({
    roundness: 24,
    opacity: 1.0,
    depth: 8,
    backgroundBlur: 5,
    color: '#6654D3',
    shadowDirection: 'center'
  });

  const updateSetting = (key: keyof CardSettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    onSettingsChange(newSettings);
  };

  const handleTemplateChange = (templateId: string) => {
    const template = getTemplateById(templateId);
    if (template) {
      setSelectedTemplateId(templateId);
      setSettings(template.defaultSettings);
      onTemplateChange(templateId);
      onSettingsChange(template.defaultSettings);
    }
  };

  const generateCSS = () => {
    return `
/* Glass Card CSS */
.glass-card {
  width: 236px;
  height: 273px;
  border-radius: ${settings.roundness}px;
  opacity: ${settings.opacity};
  background: radial-gradient(50% 50% at 50% 50%, rgba(118, 146, 255, 0.06) 80.55%, rgba(122, 150, 255, 0.024) 100%),
             radial-gradient(50% 50% at 50% 50%, rgba(226, 232, 255, 0) 33.78%, rgba(226, 232, 255, 0.056) 100%),
             linear-gradient(0deg, rgba(226, 232, 255, 0.12), rgba(226, 232, 255, 0.12)),
             ${settings.color};
  backdrop-filter: blur(${settings.backgroundBlur}px);
  box-shadow: ${getShadowByDirection()};
  border: 1px solid rgba(226, 232, 255, 0.2);
  transition: all 0.3s ease-out;
}`;
  };

  const getShadowByDirection = () => {
    const depth = settings.depth;
    switch (settings.shadowDirection) {
      case 'up':
        return `0px -${depth}px ${depth * 2}px rgba(113, 144, 175, 0.15)`;
      case 'down':
        return `0px ${depth}px ${depth * 2}px rgba(113, 144, 175, 0.15)`;
      default:
        return `0px ${depth/2}px ${depth * 3}px rgba(113, 144, 175, 0.1)`;
    }
  };

  const copyCSS = async () => {
    try {
      await navigator.clipboard.writeText(generateCSS());
      toast({
        title: "CSS copied!",
        description: "The CSS code has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Could not copy CSS to clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-80 p-6 bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">
          generator
        </h2>
        <h3 className="text-xl font-semibold text-gray-900">Card Customizer</h3>
      </div>

      {/* Settings */}
      <div className="space-y-6">
        {/* Template Picker */}
        <TemplatePicker 
          selectedTemplateId={selectedTemplateId}
          onTemplateChange={handleTemplateChange}
        />

        {/* Roundness */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">Roundness</label>
            <span className="text-xs text-gray-500">{settings.roundness}px</span>
          </div>
          <Slider
            value={[settings.roundness]}
            onValueChange={([value]) => updateSetting('roundness', value)}
            min={0}
            max={50}
            step={1}
            className="w-full"
          />
        </div>

        {/* Opacity */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">Opacity</label>
            <span className="text-xs text-gray-500">{settings.opacity.toFixed(1)}</span>
          </div>
          <Slider
            value={[settings.opacity]}
            onValueChange={([value]) => updateSetting('opacity', value)}
            min={0}
            max={1}
            step={0.1}
            className="w-full"
          />
        </div>

        {/* Depth */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">Depth</label>
            <span className="text-xs text-gray-500">{settings.depth}px</span>
          </div>
          <Slider
            value={[settings.depth]}
            onValueChange={([value]) => updateSetting('depth', value)}
            min={0}
            max={20}
            step={1}
            className="w-full"
          />
        </div>

        {/* Background blur */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">Background blur</label>
            <span className="text-xs text-gray-500">{settings.backgroundBlur}px</span>
          </div>
          <Slider
            value={[settings.backgroundBlur]}
            onValueChange={([value]) => updateSetting('backgroundBlur', value)}
            min={0}
            max={10}
            step={1}
            className="w-full"
          />
        </div>

        {/* Color Picker */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Color</label>
          <div className="flex items-center space-x-2">
            <input
              type="color"
              value={settings.color}
              onChange={(e) => updateSetting('color', e.target.value)}
              className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
            />
            <span className="text-xs text-gray-500 font-mono">{settings.color}</span>
          </div>
        </div>

        {/* Shadow Direction */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Shadow Direction</label>
          <div className="flex space-x-2">
            <Button
              variant={settings.shadowDirection === 'up' ? 'default' : 'outline'}
              size="sm"
              onClick={() => updateSetting('shadowDirection', 'up')}
              className="flex-1"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
            <Button
              variant={settings.shadowDirection === 'center' ? 'default' : 'outline'}
              size="sm"
              onClick={() => updateSetting('shadowDirection', 'center')}
              className="flex-1"
            >
              <Move className="w-4 h-4" />
            </Button>
            <Button
              variant={settings.shadowDirection === 'down' ? 'default' : 'outline'}
              size="sm"
              onClick={() => updateSetting('shadowDirection', 'down')}
              className="flex-1"
            >
              <ArrowDown className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* CSS Output */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Generated CSS</label>
          <textarea
            value={generateCSS()}
            readOnly
            className="w-full h-32 p-3 text-xs font-mono bg-gray-50 border border-gray-200 rounded-lg resize-none"
          />
          <Button onClick={copyCSS} className="w-full">
            Copy CSS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
