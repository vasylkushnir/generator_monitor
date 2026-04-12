import { useState } from 'react';
import { Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import { resetOil } from '../api/generatorApi';

export const useServiceForm = (onSuccess: () => void) => {
  const { t } = useTranslation();
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleServiceSubmit = async () => {
    if (!note.trim()) {
      Alert.alert(t('alerts.attention'), t('alerts.enterData'));
      return;
    }

    setIsSubmitting(true);

    try {
      const success = await resetOil(note);

      console.log(success);

      if (success) {
        setNote('');
        onSuccess();

        Alert.alert(t('alerts.success'), t('alerts.saveSuccess'));
      } else {
        throw new Error(t('alerts.deviceError'));
      }
    } catch (error: any) {
      Alert.alert(
        t('alerts.writeError'),
        error.message || t('alerts.connectionError'),
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    note,
    setNote,
    isSubmitting,
    handleServiceSubmit,
  };
};
