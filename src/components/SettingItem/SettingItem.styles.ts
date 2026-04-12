import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingLabel: {
    color: Colors.text,
    fontSize: 16,
    marginLeft: 12,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValue: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
});
