import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './OilResourceCard.styles';
import { Colors } from '../../theme/colors';
import { useTranslation } from 'react-i18next';

interface OilResourceCardProps {
  time: string;
  percent: number;
}

export const OilResourceCard: React.FC<OilResourceCardProps> = ({
  time,
  percent,
}) => {
  const { t } = useTranslation();

  const getStatusColor = () => {
    if (percent > 50) return Colors.success;
    if (percent > 20) return Colors.warning;
    return Colors.error;
  };

  const activeColor = getStatusColor();

  return (
    <View style={[styles.card, { borderLeftColor: activeColor }]}>
      <View style={styles.row}>
        <View>
          <Text style={styles.label}>{t('stats.oilResourceLabel')}</Text>
          <Text style={[styles.value, { color: activeColor }]}>{time}</Text>
        </View>
        <View style={styles.badge}>
          <Text style={[styles.percentText, { color: activeColor }]}>
            {percent}%
          </Text>
        </View>
      </View>

      <View style={styles.progressTrack}>
        <View
          style={[
            styles.progressFill,
            { width: `${percent}%`, backgroundColor: activeColor },
          ]}
        />
      </View>
    </View>
  );
};
