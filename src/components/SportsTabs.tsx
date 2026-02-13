import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import spacing from '../theme/spacing';
import { fontFamily, fontSize } from '../theme/typography';

const SportsTabs = () => {
  return (
    <View style={styles.row}>
      <View style={styles.active}>
        <Text style={styles.activeText}>⚽ Soccer</Text>
      </View>
      {['🏀', '🏈', '⚾', '🎾'].map(i => (
        <View key={i} style={styles.circle}>
          <Text style={styles.icon}>{i}</Text>
        </View>
      ))}
    </View>
  );
};

export default SportsTabs;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.lg,
  },
  active: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: 30,
    marginRight: spacing.md,
  },
  activeText: {
    color: colors.white,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
  },
  circle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.grayscale[30],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.sm,
  },
  icon: {
    fontSize: 18,
  },
});
