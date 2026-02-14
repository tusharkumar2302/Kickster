import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';

import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import { fontFamily, fontSize } from '../../../theme/typography';
import { useNavigation } from '@react-navigation/native';

const MatchDetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* Header */}
        <View style={styles.header}>
          <Pressable style={styles.back}>
            <Text style={styles.backText}>←</Text>
          </Pressable>

          <Text style={styles.title}>Matches</Text>

          <Pressable style={styles.menu}>
            <Text style={styles.menuText}>⋮</Text>
          </Pressable>
        </View>

        {/* Match Card */}
        <View style={styles.matchCard}>
          <Text style={styles.league}>Premier League</Text>

          <View style={styles.scoreRow}>
            <Text style={styles.team}>Wolves</Text>
            <Text style={styles.score}>2 VS 0</Text>
            <Text style={styles.team}>Leichester</Text>
          </View>

          <View style={styles.timeRow}>
            <View style={styles.timer}>
              <Text style={styles.timerText}>56:19</Text>
            </View>
            <Text style={styles.date}>Sun, 18 Feb 25</Text>
          </View>

          <Pressable style={styles.watchBtn} onPress={() => {navigation.navigate('Streaming')}}>
            <Text style={styles.watchText}>Watch Now</Text>
          </Pressable>
        </View>

        {/* Lineups */}
        <Text style={styles.section}>Line Ups</Text>

        <View style={styles.pitch}>
          <Text style={styles.pitchText}>Pitch View Placeholder</Text>
        </View>

        {/* Summary */}
        <Text style={styles.section}>Summary</Text>

        <View style={styles.timeline}>
          <TimelineItem time="90’+5’" title="Serge Aurier" sub="Yellow Card" />
          <TimelineItem time="65’" title="Luis Díaz" sub="Goal" />
          <TimelineItem time="41’" title="Callum Hudson" sub="Yellow Card" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MatchDetailsScreen;

/* ---------- Timeline Item ---------- */

const TimelineItem = ({
  time,
  title,
  sub,
}: {
  time: string;
  title: string;
  sub: string;
}) => (
  <View style={styles.timelineItem}>
    <Text style={styles.time}>{time}</Text>
    <View style={styles.dot} />
    <View>
      <Text style={styles.eventTitle}>{title}</Text>
      <Text style={styles.eventSub}>{sub}</Text>
    </View>
  </View>
);

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.white,
  },

  container: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },

  header: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },

  back: {
    position: 'absolute',
    left: 0,
  },

  backText: {
    fontSize: 18,
    color: colors.black,
  },

  menu: {
    position: 'absolute',
    right: 0,
  },

  menuText: {
    fontSize: 22,
    color: colors.black,
  },

  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.h5,
    color: colors.black,
  },

  matchCard: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: spacing.lg,
  },

  league: {
    color: colors.white,
    fontFamily: fontFamily.medium,
    marginBottom: spacing.md,
  },

  scoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  team: {
    color: colors.white,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
  },

  score: {
    color: colors.white,
    fontFamily: fontFamily.bold,
    fontSize: fontSize.h4,
  },

  timeRow: {
    alignItems: 'center',
    marginTop: spacing.sm,
  },

  timer: {
    backgroundColor: '#E84C3D',
    borderRadius: 12,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },

  timerText: {
    color: colors.white,
    fontSize: fontSize.sm,
  },

  date: {
    marginTop: spacing.xs,
    color: colors.white,
    fontSize: fontSize.sm,
  },

  watchBtn: {
    marginTop: spacing.lg,
    backgroundColor: '#59C36A',
    paddingVertical: spacing.md,
    borderRadius: 24,
    alignItems: 'center',
  },

  watchText: {
    color: colors.white,
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.md,
  },

  section: {
    marginTop: spacing.xl,
    marginBottom: spacing.md,
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.h5,
    color: colors.black,
  },

  pitch: {
    height: 220,
    borderRadius: 16,
    backgroundColor: '#4FAE6E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pitchText: {
    color: colors.white,
    fontFamily: fontFamily.medium,
  },

  timeline: {
    marginTop: spacing.md,
  },

  timelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },

  time: {
    width: 60,
    fontFamily: fontFamily.medium,
    color: colors.primary,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
    marginRight: spacing.md,
  },

  eventTitle: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
    color: colors.black,
  },

  eventSub: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    color: colors.grayscale[60],
  },
});
