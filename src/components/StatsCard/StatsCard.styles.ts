import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 28,
    padding: 24,
    marginBottom: 16,
    elevation: 2,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  label: {
    fontSize: 12,
    color: Colors.textSecondary,
    letterSpacing: 1.2,
    marginBottom: 8,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  value: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.text,
    fontVariant: ['tabular-nums'],
  },
});
