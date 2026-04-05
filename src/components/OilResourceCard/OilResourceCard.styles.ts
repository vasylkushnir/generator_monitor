import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 28,
    padding: 24,
    marginBottom: 16,
    borderLeftWidth: 8,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
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
    fontVariant: ['tabular-nums'],
  },
  badge: {
    backgroundColor: Colors.overlayDark,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  percentText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressTrack: {
    height: 8,
    backgroundColor: Colors.overlayLight,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
});
