import React, { useState } from 'react';
import { View, ScrollView, Linking, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { styles } from './SettingsScreen.styles';
import { Colors } from '../../theme/colors';
import { SettingItem } from '../SettingItem/SettingItem';
import { SettingSection } from '../SettingSection/SettingSection';
import { SettingsHeader } from '../SettingsHeader/SettingsHeader';
import { useTranslation } from 'react-i18next';
import { useAppLanguage } from '../../hooks/useAppLanguage';
import { useMMKVString } from 'react-native-mmkv';
import {
  SETTINGS_DEFAULTS,
  STORAGE_KEYS,
  storage,
} from '../../services/storage';
import { OilLimitBottomSheet } from '../BottomSheetOptions/OilLimitBottomSheet';
import { UpdateIntervalBottomSheet } from '../BottomSheetOptions/UpdateIntervalBottomSheet';
import { LanguageBottomSheet } from '../BottomSheetOptions/LanguageBottomSheet';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export const SettingsScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const { currentLanguage } = useAppLanguage();

  const [isLanguageSheetVisible, setLanguageSheetVisible] = useState(false);
  const [isOilSheetVisible, setOilSheetVisible] = useState(false);
  const [isUpdateIntervalVisible, setUpdateIntervalVisible] = useState(false);

  const [oilLimit] = useMMKVString(STORAGE_KEYS.OIL_LIMIT, storage);
  const [updateInterval] = useMMKVString(STORAGE_KEYS.UPDATE_INTERVAL, storage);

  return (
    <View style={styles.container}>
      <SettingsHeader
        title={t('settings.title')}
        onBack={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <SettingSection title={t('settings.sections.interface')}>
          <SettingItem
            icon="translate"
            label={t('settings.items.language')}
            value={currentLanguage.label}
            onPress={() => setLanguageSheetVisible(true)}
          />
        </SettingSection>

        <SettingSection title={t('settings.sections.generator')}>
          <SettingItem
            icon="sync"
            label={t('settings.items.updateInterval')}
            value={`${updateInterval || SETTINGS_DEFAULTS.UPDATE_INTERVAL} ${t(
              'units.minutes',
            )}`}
            onPress={() => setUpdateIntervalVisible(true)}
          />
          <SettingItem
            icon="oil"
            label={t('settings.items.oilLimit')}
            value={`${oilLimit || SETTINGS_DEFAULTS.OIL_LIMIT} ${t(
              'units.hours',
            )}`}
            onPress={() => setOilSheetVisible(true)}
          />
        </SettingSection>
        <SettingSection title={t('settings.sections.about')}>
          <SettingItem
            icon="github"
            label={t('settings.items.github')}
            iconColor={Colors.text}
            onPress={() => {
              Linking.openURL('https://github.com/vasylkushnir');
            }}
            showChevron={true}
          />

          <View style={styles.versionContainer}>
            <Text style={styles.versionText}>{t('common.version')} 2.0.0</Text>
          </View>
        </SettingSection>
      </ScrollView>

      <LanguageBottomSheet
        isVisible={isLanguageSheetVisible}
        onClose={() => setLanguageSheetVisible(false)}
      />
      <OilLimitBottomSheet
        isVisible={isOilSheetVisible}
        onClose={() => setOilSheetVisible(false)}
      />
      <UpdateIntervalBottomSheet
        isVisible={isUpdateIntervalVisible}
        onClose={() => setUpdateIntervalVisible(false)}
      />
    </View>
  );
};
