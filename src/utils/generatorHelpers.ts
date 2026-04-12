import { SETTINGS_DEFAULTS } from '../services/storage';

export const calculateOilPercent = (
  seconds: number | undefined,
  limitHours: number = Number(SETTINGS_DEFAULTS.OIL_LIMIT),
): number => {
  if (!seconds || seconds <= 0) return 0;

  const limitSeconds = limitHours * 3600;

  const percentRemaining = Math.round(100 - (seconds / limitSeconds) * 100);

  return Math.max(0, Math.min(100, percentRemaining));
};

export const formatLastUpdate = (date: Date): string => {
  return date
    .toLocaleString('uk-UA', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
    .replace(',', '');
};

export const formatBackendTime = (timeString: string | undefined, t: any) => {
  if (!timeString) return '--';

  const numbers = timeString.match(/\d+/g);

  if (!numbers || numbers.length < 2) {
    return timeString;
  }

  const hours = numbers[0];
  const minutes = numbers[1];

  return `${hours}${t('units.hours')} ${minutes}${t('units.minutes')}`;
};
