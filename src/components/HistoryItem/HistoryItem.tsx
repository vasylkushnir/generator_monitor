import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './HistoryItem.styles';
import { useTranslation } from 'react-i18next';

interface HistoryItemProps {
  id: number;
  note: string;
  at_total_work: string;
}

export const HistoryItem: React.FC<HistoryItemProps> = ({
  id,
  note,
  at_total_work,
}) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Text style={styles.note} numberOfLines={1}>
          {note}
        </Text>
        <Text style={styles.subText}>{t('history.recordNumber', { id })}</Text>
      </View>

      <View style={styles.rightContent}>
        <Text style={styles.hours}>{at_total_work}</Text>
        <Text style={styles.subText}>{t('history.mileage')}</Text>
      </View>
    </View>
  );
};
