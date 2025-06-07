
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SettingsSlider from './SettingsSlider';
import ColorPicker from './ColorPicker';
import ShadowDirectionPicker from './ShadowDirectionPicker';
import ImageUploader from './ImageUploader';
import { CardSettings } from '@/types/templates';
import { SLIDER_CONFIGS } from '@/constants/cardDefaults';

interface SettingsAccordionProps {
  settings: CardSettings;
  updateSetting: (key: keyof CardSettings, value: any) => void;
}

const SettingsAccordion = ({ settings, updateSetting }: SettingsAccordionProps) => {
  const updateHoverSetting = (key: keyof CardSettings['hover'], value: any) => {
    updateSetting('hover', { ...settings.hover, [key]: value });
  };

  return (
    <Accordion type="multiple" defaultValue={['basic']} className="w-full">
      <AccordionItem value="basic">
        <AccordionTrigger>Basic Settings</AccordionTrigger>
        <AccordionContent className="space-y-4">
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
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="hover">
        <AccordionTrigger>Hover Effects</AccordionTrigger>
        <AccordionContent className="space-y-4">
          <SettingsSlider
            label="Hover Opacity"
            value={settings.hover.opacity}
            min={0}
            max={1}
            step={0.1}
            unit=""
            onChange={(value) => updateHoverSetting('opacity', value)}
          />
          
          <SettingsSlider
            label="Hover Blur"
            value={settings.hover.backgroundBlur}
            min={0}
            max={15}
            step={1}
            unit="px"
            onChange={(value) => updateHoverSetting('backgroundBlur', value)}
          />
          
          <ColorPicker
            value={settings.hover.color}
            onChange={(value) => updateHoverSetting('color', value)}
          />
          
          <SettingsSlider
            label="Shadow Intensity"
            value={settings.hover.shadowIntensity}
            min={0}
            max={2}
            step={0.1}
            unit=""
            onChange={(value) => updateHoverSetting('shadowIntensity', value)}
          />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="styling">
        <AccordionTrigger>Advanced Styling</AccordionTrigger>
        <AccordionContent className="space-y-4">
          <ColorPicker
            value={settings.textColor}
            onChange={(value) => updateSetting('textColor', value)}
          />
          
          <SettingsSlider
            label="Border Width"
            value={settings.borderWidth}
            min={0}
            max={5}
            step={1}
            unit="px"
            onChange={(value) => updateSetting('borderWidth', value)}
          />
          
          <ColorPicker
            value={settings.borderColor}
            onChange={(value) => updateSetting('borderColor', value)}
          />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="image">
        <AccordionTrigger>Center Image</AccordionTrigger>
        <AccordionContent>
          <ImageUploader
            value={settings.centerImage}
            onChange={(value) => updateSetting('centerImage', value)}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SettingsAccordion;
