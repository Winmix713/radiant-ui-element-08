
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { CardSettings } from '@/types/templates';
import { getShadowByDirection } from '@/utils/shadowCalculations';

interface CSSExporterProps {
  settings: CardSettings;
}

const CSSExporter = ({ settings }: CSSExporterProps) => {
  const { toast } = useToast();

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
  box-shadow: ${getShadowByDirection(settings)};
  border: 1px solid rgba(226, 232, 255, 0.2);
  transition: all 0.3s ease-out;
}`;
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
  );
};

export default CSSExporter;
