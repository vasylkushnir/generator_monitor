import React from 'react';
import { useTranslation } from 'react-i18next';

import { AppBottomSheet } from '../SettingBottomSheet/SettingBottomSheet';
import { useAppLanguage } from '../../hooks/useAppLanguage';
import { OptionsPicker } from '../OptionsPicker/OptionsPicker';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

export const LanguageBottomSheet = ({ isVisible, onClose }: Props) => {
  const { t } = useTranslation();
  const { currentLanguage, languages, changeLanguage } = useAppLanguage();

  return (
    <AppBottomSheet
      isVisible={isVisible}
      onClose={onClose}
      title={t('settings.items.language')}
    >
      <OptionsPicker
        options={languages}
        selectedValue={currentLanguage.code}
        keyExtractor={item => item.code}
        renderLabel={item => item.label}
        onSelect={item => {
          changeLanguage(item.code);
          onClose();
        }}
      />
    </AppBottomSheet>
  );
};
