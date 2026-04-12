import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../theme/colors';
import { styles } from './SettingItem.styles';

interface SettingItemProps {
  icon: string;
  label: string;
  value?: string;
  onPress?: () => void;
  showChevron?: boolean;
  iconColor?: string;
}

export const SettingItem = ({
  icon,
  label,
  value,
  onPress,
  showChevron = false,
  iconColor = Colors.primary,
}: SettingItemProps) => {
  const Container = onPress ? TouchableOpacity : View;

  return (
    <Container style={styles.settingRow} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.settingInfo}>
        <MaterialCommunityIcons name={icon} size={24} color={iconColor} />
        <Text style={styles.settingLabel}>{label}</Text>
      </View>

      <View style={styles.rightContainer}>
        {value && <Text style={styles.settingValue}>{value}</Text>}

        {showChevron && (
          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color={Colors.textSecondary}
          />
        )}
      </View>
    </Container>
  );
};
