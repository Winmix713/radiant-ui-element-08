
import React from 'react';
import TemplatePicker from './TemplatePicker';
import SettingsAccordion from './settings/SettingsAccordion';
import CSSExporter from './settings/CSSExporter';
import { CardSettings } from '@/types/templates';
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
    shadowDirection: 'center',
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
    <div className="w-80 p-6 bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl max-h-screen overflow-y-auto">
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

        <SettingsAccordion 
          settings={settings}
          updateSetting={updateSetting}
        />

        <CSSExporter settings={settings} />
      </div>
    </div>
  );
};

export default ControlPanel;
