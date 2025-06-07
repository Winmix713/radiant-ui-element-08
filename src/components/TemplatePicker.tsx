
import React from 'react';
import { Button } from '@/components/ui/button';
import { cardTemplates } from '@/lib/templates';

interface TemplatePickerProps {
  selectedTemplateId: string;
  onTemplateChange: (templateId: string) => void;
}

const TemplatePicker = ({ selectedTemplateId, onTemplateChange }: TemplatePickerProps) => {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-gray-700">Template</label>
      <div className="grid grid-cols-2 gap-2">
        {cardTemplates.map((template) => (
          <Button
            key={template.id}
            variant={selectedTemplateId === template.id ? 'default' : 'outline'}
            size="sm"
            onClick={() => onTemplateChange(template.id)}
            className="flex flex-col h-auto p-3 space-y-1"
          >
            <span className="text-lg">{template.thumbnail}</span>
            <span className="text-xs font-medium">{template.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TemplatePicker;
