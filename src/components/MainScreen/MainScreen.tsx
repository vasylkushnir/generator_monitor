import React from 'react';
import { ScrollView, RefreshControl, View, Text } from 'react-native';
import { Colors } from '../../theme/colors';
import { styles } from './MainScreen.styles';
import { useGenerator } from '../../hooks/useGenerator';

import { StatsCard } from '../../components/StatsCard/StatsCard';
import { OilResourceCard } from '../../components/OilResourceCard/OilResourceCard';
import { ServiceForm } from '../../components/ServiceForm/ServiceForm';
import { HistoryItem } from '../../components/HistoryItem/HistoryItem';
import { useServiceForm } from '../../hooks/useServiceForm';
import { Header } from '../Header/Header';
import { useTranslation } from 'react-i18next';

export const MainScreen = () => {
  const {
    data,
    isConnecting,
    onRefresh,
    oilPercent,
    lastUpdate,
    isOffline,
    mutate,
  } = useGenerator();

  const { note, setNote, isSubmitting, handleServiceSubmit } =
    useServiceForm(mutate);

  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isConnecting}
            onRefresh={onRefresh}
            tintColor={Colors.primary}
          />
        }
      >
        <Header
          isConnecting={isConnecting}
          isOffline={isOffline}
          lastUpdate={lastUpdate}
        />

        <View style={isOffline ? styles.cardsOffline : styles.cardsOnline}>
          <StatsCard
            label={t('stats.totalWorkLabel')}
            value={data?.total_work_time || t('stats.defaultTime')}
          />
          <OilResourceCard
            time={data?.oil_service_time || t('stats.defaultTime')}
            percent={oilPercent}
          />
        </View>

        <ServiceForm
          value={note}
          onChange={setNote}
          onSubmit={handleServiceSubmit}
          isOffline={isOffline || isSubmitting}
        />

        <Text style={styles.historyTitle}>{t('main.historyTitle')}</Text>

        {data?.service_history
          ?.slice()
          .reverse()
          .map(item => (
            <HistoryItem key={item.id} {...item} />
          ))}

        <View style={styles.footerSpacer} />
      </ScrollView>
    </View>
  );
};
