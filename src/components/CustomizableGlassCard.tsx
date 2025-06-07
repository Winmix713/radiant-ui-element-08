
import React from 'react';
import { CardSettings } from '@/types/templates';
import { getTemplateById } from '@/lib/templates';

interface CustomizableGlassCardProps {
  settings: CardSettings;
  templateId: string;
  onClick?: () => void;
}

const CustomizableGlassCard = ({ settings, templateId, onClick }: CustomizableGlassCardProps) => {
  const template = getTemplateById(templateId);
  
  if (!template) {
    return <div>Template not found</div>;
  }

  const TemplateComponent = template.component;

  return (
    <div onClick={onClick}>
      <TemplateComponent settings={settings} />
    </div>
  );
};

export default CustomizableGlassCard;
