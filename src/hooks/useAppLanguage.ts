import { useTranslation } from 'react-i18next';
import { useMMKVString } from 'react-native-mmkv';
import { useCallback } from 'react';
import { STORAGE_KEYS, storage } from '../services/storage';

export const LanguageCode = {
  UK: 'uk',
  EN: 'en',
} as const;

export type AppLanguage = (typeof LanguageCode)[keyof typeof LanguageCode];

export const SUPPORTED_LANGUAGES: { label: string; code: AppLanguage }[] = [
  { label: 'Українська', code: LanguageCode.UK },
  { label: 'English', code: LanguageCode.EN },
];

export const useAppLanguage = () => {
  const { i18n } = useTranslation();
  const [, setStoredLang] = useMMKVString(STORAGE_KEYS.USER_LANGUAGE, storage);

  const changeLanguage = useCallback(
    (lang: AppLanguage) => {
      i18n.changeLanguage(lang);
      setStoredLang(lang);
    },
    [i18n, setStoredLang],
  );

  const langCode = (i18n.language as AppLanguage) || LanguageCode.EN;

  const currentLanguage =
    SUPPORTED_LANGUAGES.find(l => l.code === langCode) ||
    SUPPORTED_LANGUAGES.find(l => l.code === LanguageCode.EN)!;

  return {
    currentLanguage,
    changeLanguage,
    languages: SUPPORTED_LANGUAGES,
  };
};
