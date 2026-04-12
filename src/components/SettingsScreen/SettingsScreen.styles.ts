import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  versionContainer: {
    marginTop: 8,
    alignItems: 'center',
    width: '100%',
  },
  versionText: {
    color: Colors.textSecondary,
    fontSize: 12,
  },
  languageOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 4,
  },
  languageOptionActive: {
    backgroundColor: Colors.background,
  },
  languageOptionText: {
    fontSize: 16,
    color: Colors.text,
  },
});
