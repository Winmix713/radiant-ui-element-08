
import React from 'react';
import { CardSettings } from '@/types/templates';
import { getTemplateById } from '@/lib/templates';

interface CustomizableGlassCardProps {
  settings: CardSettings;
  templateId: string;
  onClick?: () => void;
  className?: string;
}

const CustomizableGlassCard = ({ settings, templateId, onClick, className = '' }: CustomizableGlassCardProps) => {
  const template = getTemplateById(templateId);
  
  if (!template) {
    return (
      <div className={`w-[236px] h-[273px] rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50 ${className}`}>
        <div className="text-center text-gray-500">
          <p className="text-sm font-medium">Template not found</p>
          <p className="text-xs">ID: {templateId}</p>
        </div>
      </div>
    );
  }

  const TemplateComponent = template.component;

  return (
    <div className={className} onClick={onClick}>
      <TemplateComponent settings={settings} />
    </div>
  );
};

export default CustomizableGlassCard;
