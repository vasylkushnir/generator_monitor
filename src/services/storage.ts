import { createMMKV } from 'react-native-mmkv';

export const storage = createMMKV();

export const STORAGE_KEYS = {
  USER_LANGUAGE: 'user-language',
  GEN_CACHE: '@gen_cache',
  LAST_TIME: '@last_time',
  OIL_LIMIT: 'oil-limit',
  UPDATE_INTERVAL: 'update-interval',
};

export const SETTINGS_DEFAULTS = {
  OIL_LIMIT: '50',
  LANGUAGE: 'uk',
  UPDATE_INTERVAL: '10',
} as const;

export const OIL_LIMIT_OPTIONS = ['5', '50', '100', '120'];

export const UPDATE_INTERVAL_OPTIONS = ['5', '10', '30'];
