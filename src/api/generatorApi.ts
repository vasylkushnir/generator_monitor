import i18n from '../i18n.ts';
const BASE_URL = 'http://192.168.4.1';

export interface GeneratorData {
  total_work_time: string;
  oil_service_time: string;
  total_work_seconds: number;
  oil_service_seconds: number;
  service_history: Array<{
    id: number;
    at_total_work: string;
    note: string;
  }>;
}

export const fetchGeneratorData = async (): Promise<GeneratorData> => {
  const controller = new AbortController();

  const timeoutId = setTimeout(() => controller.abort(), 2000);

  try {
    const response = await fetch(`${BASE_URL}/api`, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(i18n.t('api.serverError', { status: response.status }));
    }

    return await response.json();
  } catch (error: any) {
    clearTimeout(timeoutId);

    if (error.name === 'AbortError') {
      throw new Error(i18n.t('api.timeout'));
    }

    throw error;
  }
};

export const resetOil = async (note: string): Promise<boolean> => {
  const controller = new AbortController();

  const timeoutId = setTimeout(() => controller.abort(), 6000);

  try {
    const response = await fetch(`${BASE_URL}/reset-oil`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ note }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) throw new Error(i18n.t('api.resetFailed'));

    return true;
  } catch (error: any) {
    clearTimeout(timeoutId);

    if (error.name === 'AbortError') {
      throw new Error(i18n.t('api.resetTimeout'));
    }

    throw error;
  }
};
