
import { useState, useCallback } from 'react';
import { CardSettings } from '@/types/templates';
import { DEFAULT_CARD_SETTINGS } from '@/constants/cardDefaults';

export const useCardSettings = (initialSettings: CardSettings = DEFAULT_CARD_SETTINGS) => {
  const [settings, setSettings] = useState<CardSettings>(initialSettings);

  const updateSetting = useCallback((key: keyof CardSettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  }, []);

  const resetSettings = useCallback(() => {
    setSettings(DEFAULT_CARD_SETTINGS);
  }, []);

  const updateAllSettings = useCallback((newSettings: CardSettings) => {
    setSettings(newSettings);
  }, []);

  return {
    settings,
    updateSetting,
    resetSettings,
    updateAllSettings,
  };
};
