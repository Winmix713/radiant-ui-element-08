
import React from 'react';
import TemplatePicker from './TemplatePicker';
import SettingsSlider from './settings/SettingsSlider';
import ColorPicker from './settings/ColorPicker';
import ShadowDirectionPicker from './settings/ShadowDirectionPicker';
import CSSExporter from './settings/CSSExporter';
import { CardSettings } from '@/types/templates';
import { SLIDER_CONFIGS } from '@/constants/cardDefaults';
import { getTemplateById } from '@/lib/templates';

interface ControlPanelProps {
  onSettingsChange: (settings: CardSettings) => void;
  onTemplateChange: (templateId: string) => void;
}

const ControlPanel = ({ onSettingsChange, onTemplateChange }: ControlPanelProps) => {
  const [selectedTemplateId, setSelectedTemplateId] = React.useState<string>('glass');
  const [settings, setSettings] = React.useState<CardSettings>({
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
        <TemplatePicker 
          selectedTemplateId={selectedTemplateId}
          onTemplateChange={handleTemplateChange}
        />

        <SettingsSlider
          label="Roundness"
          value={settings.roundness}
          {...SLIDER_CONFIGS.roundness}
          onChange={(value) => updateSetting('roundness', value)}
        />

        <SettingsSlider
          label="Opacity"
          value={settings.opacity}
          {...SLIDER_CONFIGS.opacity}
          onChange={(value) => updateSetting('opacity', value)}
        />

        <SettingsSlider
          label="Depth"
          value={settings.depth}
          {...SLIDER_CONFIGS.depth}
          onChange={(value) => updateSetting('depth', value)}
        />

        <SettingsSlider
          label="Background blur"
          value={settings.backgroundBlur}
          {...SLIDER_CONFIGS.backgroundBlur}
          onChange={(value) => updateSetting('backgroundBlur', value)}
        />

        <ColorPicker
          value={settings.color}
          onChange={(value) => updateSetting('color', value)}
        />

        <ShadowDirectionPicker
          value={settings.shadowDirection}
          onChange={(value) => updateSetting('shadowDirection', value)}
        />

        <CSSExporter settings={settings} />
      </div>
    </div>
  );
};

export default ControlPanel;
