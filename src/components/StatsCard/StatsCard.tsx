import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './StatsCard.styles';

interface StatsCardProps {
  label: string;
  value: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ label, value }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};
