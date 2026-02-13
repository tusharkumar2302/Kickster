import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import spacing from '../theme/spacing';
import { fontFamily, fontSize } from '../theme/typography';

const UpcomingMatches = () => {
  return (
    <>
      {/* <View style={styles.header}>
        <Text style={styles.title}>Upcoming Matches</Text>
        <Text style={styles.link}>See All</Text>
      </View> */}

      <View style={styles.card}>
        <Text style={styles.team}>Man City</Text>
        <Text style={styles.time}>07:30</Text>
        <Text style={styles.team}>Brighton</Text>
      </View>
    </>
  );
};

export default UpcomingMatches;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.xl,
    marginBottom: spacing.md,
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.lg,
  },
  link: {
    color: colors.primary,
    fontFamily: fontFamily.medium,
  },
  card: {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 16,
    padding: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  team: {
    fontFamily: fontFamily.medium,
  },
  time: {
    fontFamily: fontFamily.bold,
  },
});
