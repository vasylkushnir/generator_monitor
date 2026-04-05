import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useMMKVObject, useMMKVString } from 'react-native-mmkv';
import { fetchGeneratorData, GeneratorData } from '../api/generatorApi';
import {
  formatLastUpdate,
  calculateOilPercent,
} from '../utils/generatorHelpers';
import { useInterval } from '../hooks/useInterval';

export const useGenerator = () => {
  const [data, setData] = useMMKVObject<GeneratorData>('@gen_cache');
  const [lastUpdate, setLastUpdate] = useMMKVString('@last_time');
  const [isConnecting, setIsConnecting] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  const isFetchingRef = useRef(false);

  const loadData = useCallback(
    async (isManual = false) => {
      if (isFetchingRef.current) return;
      isFetchingRef.current = true;

      if (isManual) setIsConnecting(true);

      try {
        const result = await fetchGeneratorData();
        setData(result);
        setIsOffline(false);
        setLastUpdate(formatLastUpdate(new Date()));
      } catch {
        setIsOffline(true);
      } finally {
        setIsConnecting(false);
        isFetchingRef.current = false;
      }
    },
    [setData, setLastUpdate],
  );

  useInterval(() => loadData(false), 10000);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const oilPercent = useMemo(
    () => calculateOilPercent(data?.oil_service_seconds),
    [data?.oil_service_seconds],
  );

  return {
    data: data || null,
    oilPercent,
    lastUpdate: lastUpdate || '--:--',
    isConnecting,
    isOffline,
    onRefresh: () => loadData(true),
    mutate: () => loadData(false),
  };
};
