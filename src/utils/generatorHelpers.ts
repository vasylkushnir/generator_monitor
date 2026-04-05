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
