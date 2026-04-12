import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMMKVString } from 'react-native-mmkv';

import { AppBottomSheet } from '../SettingBottomSheet/SettingBottomSheet';
import { OptionsPicker } from '../OptionsPicker/OptionsPicker';
import {
  storage,
  STORAGE_KEYS,
  SETTINGS_DEFAULTS,
  UPDATE_INTERVAL_OPTIONS,
} from '../../services/storage';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

export const UpdateIntervalBottomSheet = ({ isVisible, onClose }: Props) => {
  const { t } = useTranslation();

  const [interval, setInterval] = useMMKVString(
    STORAGE_KEYS.UPDATE_INTERVAL,
    storage,
  );

  return (
    <AppBottomSheet
      isVisible={isVisible}
      onClose={onClose}
      title={t('settings.items.updateInterval')}
    >
      <OptionsPicker
        options={UPDATE_INTERVAL_OPTIONS}
        selectedValue={interval || SETTINGS_DEFAULTS.UPDATE_INTERVAL}
        keyExtractor={item => item}
        renderLabel={item => `${item} ${t('units.minutes')}`}
        onSelect={val => {
          setInterval(val);
          onClose();
        }}
      />
    </AppBottomSheet>
  );
};
