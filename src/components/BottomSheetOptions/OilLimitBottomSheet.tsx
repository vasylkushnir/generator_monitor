import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMMKVString } from 'react-native-mmkv';

import { AppBottomSheet } from '../SettingBottomSheet/SettingBottomSheet';
import { OptionsPicker } from '../OptionsPicker/OptionsPicker';
import {
  storage,
  STORAGE_KEYS,
  SETTINGS_DEFAULTS,
  OIL_LIMIT_OPTIONS,
} from '../../services/storage';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

export const OilLimitBottomSheet = ({ isVisible, onClose }: Props) => {
  const { t } = useTranslation();

  const [oilLimit, setOilLimit] = useMMKVString(
    STORAGE_KEYS.OIL_LIMIT,
    storage,
  );

  return (
    <AppBottomSheet
      isVisible={isVisible}
      onClose={onClose}
      title={t('settings.items.oilLimit')}
    >
      <OptionsPicker
        options={OIL_LIMIT_OPTIONS}
        selectedValue={oilLimit || SETTINGS_DEFAULTS.OIL_LIMIT}
        keyExtractor={item => item}
        renderLabel={item => `${item} ${t('units.hours')}`}
        onSelect={val => {
          setOilLimit(val);
          onClose();
        }}
      />
    </AppBottomSheet>
  );
};
