
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown, Move } from 'lucide-react';
import { CardSettings } from '@/types/templates';

interface ShadowDirectionPickerProps {
  value: CardSettings['shadowDirection'];
  onChange: (direction: CardSettings['shadowDirection']) => void;
}

const ShadowDirectionPicker = ({ value, onChange }: ShadowDirectionPickerProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">Shadow Direction</label>
      <div className="flex space-x-2">
        <Button
          variant={value === 'up' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onChange('up')}
          className="flex-1"
        >
          <ArrowUp className="w-4 h-4" />
        </Button>
        <Button
          variant={value === 'center' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onChange('center')}
          className="flex-1"
        >
          <Move className="w-4 h-4" />
        </Button>
        <Button
          variant={value === 'down' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onChange('down')}
          className="flex-1"
        >
          <ArrowDown className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ShadowDirectionPicker;
