import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../theme/colors';
import { styles } from './OptionsPicker.styles';

interface OptionsPickerProps<T> {
  options: T[];
  selectedValue: string;
  onSelect: (item: T) => void;
  keyExtractor: (item: T) => string;
  renderLabel: (item: T) => string;
}

export const OptionsPicker = <T,>({
  options,
  selectedValue,
  onSelect,
  keyExtractor,
  renderLabel,
}: OptionsPickerProps<T>) => {
  return (
    <View style={styles.container}>
      {options.map(option => {
        const key = keyExtractor(option);
        const isActive = key === selectedValue;

        return (
          <TouchableOpacity
            key={key}
            style={[styles.option, isActive && styles.optionActive]}
            onPress={() => onSelect(option)}
          >
            <Text
              style={[styles.optionText, isActive && styles.optionTextActive]}
            >
              {renderLabel(option)}
            </Text>
            {isActive && (
              <MaterialCommunityIcons
                name="check-circle"
                size={22}
                color={Colors.primary}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
