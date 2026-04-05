const OIL_LIMIT_SECONDS = 50 * 3600;

export const calculateOilPercent = (seconds: number | undefined): number => {
  if (seconds === undefined || seconds === null) return 0;
  const percent = Math.round(100 - (seconds / OIL_LIMIT_SECONDS) * 100);
  return Math.max(0, Math.min(100, percent));
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
