import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './ServiceForm.styles';
import { Colors } from '../../theme/colors';
import { useTranslation } from 'react-i18next';

interface ServiceFormProps {
  value: string;
  onChange: (text: string) => void;
  onSubmit: () => void;
  isOffline: boolean;
}

export const ServiceForm: React.FC<ServiceFormProps> = ({
  value,
  onChange,
  onSubmit,
  isOffline,
}) => {
  const { t } = useTranslation();

  const isInputEmpty = !value.trim();
  const isButtonDisabled = isInputEmpty || isOffline;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{t('form.title')}</Text>

      <TextInput
        style={styles.input}
        placeholder={t('form.placeholder')}
        placeholderTextColor={Colors.placeholder}
        value={value}
        onChangeText={onChange}
        autoCorrect={false}
      />

      <TouchableOpacity
        style={[styles.button, isButtonDisabled && styles.buttonDisabled]}
        onPress={onSubmit}
        disabled={isButtonDisabled}
      >
        <Text style={styles.buttonText}>
          {isOffline ? t('form.buttonOffline') : t('form.buttonSubmit')}
        </Text>
      </TouchableOpacity>

      {isOffline && (
        <Text style={styles.offlineWarning}>{t('form.warning')}</Text>
      )}
    </View>
  );
};
