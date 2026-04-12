import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../theme/colors';
import { styles } from './Header.styles';
import { useTranslation } from 'react-i18next';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface HeaderProps {
  isConnecting: boolean;
  isOffline: boolean;
  lastUpdate: string;
  onSettingsPress: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isConnecting,
  isOffline,
  lastUpdate,
  onSettingsPress,
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
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {t('header.title')}
        </Text>
        <Text
          style={[styles.statusSubtitle, isOffline && styles.errorText]}
          numberOfLines={1}
        >
          {getStatusText()}
        </Text>
      </View>
      <View style={styles.rightActions}>
        <TouchableOpacity
          onPress={onSettingsPress}
          style={styles.settingsButton}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons
            name="cog-outline"
            size={22}
            color={Colors.textSecondary}
          />
        </TouchableOpacity>
        <View
          style={[
            styles.statusDot,
            { backgroundColor: isOffline ? Colors.error : Colors.success },
          ]}
        />
      </View>
    </View>
  );
};
