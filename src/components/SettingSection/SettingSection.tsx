import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { styles } from './SettingSection.styles';

interface SettingSectionProps {
  title: string;
  children: ReactNode;
}

export const SettingSection = ({ title, children }: SettingSectionProps) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View>{children}</View>
    </View>
  );
};
