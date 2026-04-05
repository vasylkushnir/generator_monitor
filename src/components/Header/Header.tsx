import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from '../../theme/colors';
import { styles } from './Header.styles';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  isConnecting: boolean;
  isOffline: boolean;
  lastUpdate: string;
}

export const Header: React.FC<HeaderProps> = ({
  isConnecting,
  isOffline,
  lastUpdate,
}) => {
  const { t } = useTranslation();

  const getStatusText = () => {
    if (isConnecting) return t('header.updating');

    if (isOffline) {
      return t('header.offlineWithTime', { time: lastUpdate });
    }

    return t('header.lastSeen', { time: lastUpdate });
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.title}>{t('header.title')}</Text>

        <Text style={[styles.statusSubtitle, isOffline && styles.errorText]}>
          {getStatusText()}
        </Text>
      </View>

      <View
        style={[
          styles.statusDot,
          { backgroundColor: isOffline ? Colors.error : Colors.success },
        ]}
      />
    </View>
  );
};
