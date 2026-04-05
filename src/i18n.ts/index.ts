import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import uk from './locales/uk.json';

const getDeviceLanguage = (): string => {
  try {
    const locale = Intl.DateTimeFormat().resolvedOptions().locale.toLowerCase();
    return locale.startsWith('uk') ? 'uk' : 'en';
  } catch {
    return 'en';
  }
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  resources: {
    en: { translation: en.translation },
    uk: { translation: uk.translation },
  },

  lng: getDeviceLanguage(),

  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
