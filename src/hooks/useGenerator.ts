import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useMMKVObject, useMMKVString } from 'react-native-mmkv';
import { fetchGeneratorData, GeneratorData } from '../api/generatorApi';
import {
  formatLastUpdate,
  calculateOilPercent,
} from '../utils/generatorHelpers';
import { useInterval } from '../hooks/useInterval';
import { SETTINGS_DEFAULTS, storage, STORAGE_KEYS } from '../services/storage';

export const useGenerator = () => {
  const [data, setData] = useMMKVObject<GeneratorData>(
    STORAGE_KEYS.GEN_CACHE,
    storage,
  );
  const [lastUpdate, setLastUpdate] = useMMKVString(
    STORAGE_KEYS.LAST_TIME,
    storage,
  );
  const [isConnecting, setIsConnecting] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  const [oilLimit] = useMMKVString(STORAGE_KEYS.OIL_LIMIT, storage);
  const currentLimit = Number(oilLimit || SETTINGS_DEFAULTS.OIL_LIMIT);

  const [updateInterval] = useMMKVString(STORAGE_KEYS.UPDATE_INTERVAL, storage);
  const pollingDelay =
    Number(updateInterval || SETTINGS_DEFAULTS.UPDATE_INTERVAL) * 1000;

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

  useInterval(() => loadData(false), pollingDelay);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const oilPercent = useMemo(
    () => calculateOilPercent(data?.oil_service_seconds, currentLimit),
    [data?.oil_service_seconds, currentLimit],
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
