import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import spacing from '../theme/spacing';
import { fontFamily, fontSize } from '../theme/typography';

const LiveMatches = () => {
  return (
    <>
      {/* <View style={styles.header}>
        <Text style={styles.title}>Live Matches</Text>
        <Text style={styles.link}>See All</Text>
      </View> */}

      <View style={styles.card}>
        <Text style={styles.team}>N Forest</Text>
        <Text style={styles.score}>0 - 2</Text>
        <Text style={styles.team}>Liverpool</Text>
      </View>
    </>
  );
};

export default LiveMatches;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  score: {
    fontFamily: fontFamily.bold,
  },
});
