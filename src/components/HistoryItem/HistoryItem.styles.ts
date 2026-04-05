import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 10,
    backgroundColor: Colors.surface,
    borderRadius: 20,
    elevation: 2,
  },
  leftContent: {
    flex: 1,
  },
  note: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  subText: {
    color: Colors.textSecondary,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  rightContent: {
    alignItems: 'flex-end',
  },
  hours: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '700',
    fontVariant: ['tabular-nums'],
  },
});
