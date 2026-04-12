import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 14,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  optionActive: {
    backgroundColor: `${Colors.primary}26`,
    borderColor: `${Colors.primary}4D`,
  },
  optionText: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: '500',
  },
  optionTextActive: {
    color: Colors.primary,
    fontWeight: '700',
  },
});
