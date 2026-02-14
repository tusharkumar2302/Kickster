import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import { fontFamily, fontSize } from '../../../theme/typography';

const LiveMatchScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* Header */}
        <View style={styles.header}>
          <Pressable style={styles.back} onPress={() => navigation.goBack()}>
            <Text style={styles.backIcon}>←</Text>
          </Pressable>

          <Text style={styles.headerTitle}>Live Match</Text>

          <Pressable style={styles.more}>
            <Text style={styles.moreText}>⋮</Text>
          </Pressable>
        </View>

        {/* League */}
        <View style={styles.leagueRow}>
          <Text style={styles.leagueText}>Premier League</Text>
        </View>

        {/* Top Cards */}
        <View style={styles.topRow}>
          <View style={styles.recentCard}>
            <Text style={styles.cardTitle}>Recent Match</Text>

            <View style={styles.scoreRow}>
              <Text style={styles.team}>N Forest</Text>
              <Text style={styles.score}>0</Text>
            </View>

            <View style={styles.scoreRow}>
              <Text style={styles.team}>Liverpool</Text>
              <Text style={styles.score}>2</Text>
            </View>
          </View>

          <View style={styles.scorerCard}>
            <Text style={styles.scorerTitle}>Top Scorer</Text>
            <Text style={styles.goals}>24</Text>
            <Text style={styles.goalsText}>Goals</Text>
            <Text style={styles.teamWhite}>Liverpool</Text>
          </View>
        </View>

        {/* Live Match */}
        <Text style={styles.section}>Live Matches</Text>

        <Pressable
          style={styles.liveCard}
          onPress={() => navigation.navigate('LiveMatches')}
        >
          <View style={styles.liveHeader}>
            <Text style={styles.leagueSmall}>Premier League</Text>
            <View style={styles.timer}>
              <Text style={styles.timerText}>56:19</Text>
            </View>
          </View>

          <View style={styles.matchRow}>
            <Text style={styles.teamName}>Wolves</Text>
            <Text style={styles.matchScore}>2 : 0</Text>
            <Text style={styles.teamName}>Leichester</Text>
          </View>

          <Text style={styles.matchDate}>15 Dec</Text>
        </Pressable>

        {/* Standings */}
        <Pressable
          style={styles.standingHeader}
          onPress={() => navigation.navigate('Standings')}
        >
          <Text style={styles.section}>Standings</Text>
          <Text style={styles.gameweek}>Gameweek 14</Text>
        </Pressable>

        <View style={styles.table}>
          <Row pos="1" team="Liverpool" pts="38" />
          <Row pos="2" team="Leicester City" pts="29" />
          <Row pos="3" team="Nottingham Forest" pts="28" />
          <Row pos="4" team="Wolverhampton" pts="24" />
        </View>

        {/* Upcoming */}
        <Text style={styles.section}>Upcoming matches</Text>

        <View style={styles.upcomingCard}>
          <Text style={styles.teamName}>Man City</Text>
          <Text style={styles.time}>07:30</Text>
          <Text style={styles.teamName}>Brighton</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LiveMatchScreen;

/* ---------- Small row ---------- */

const Row = ({ pos, team, pts }: any) => (
  <View style={styles.row}>
    <Text style={styles.pos}>{pos}</Text>
    <Text style={styles.rowTeam}>{team}</Text>
    <Text style={styles.pts}>{pts}</Text>
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
    marginTop: spacing.md,
    alignItems: 'center',
  },
  back: {
    position: 'absolute',
    left: 0,
  },
  backIcon: {
    fontSize: 18,
  },
  more: {
    position: 'absolute',
    right: 0,
  },
  moreText: {
    fontSize: 20,
  },
  headerTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.h5,
  },

  leagueRow: {
    marginTop: spacing.xl,
  },
  leagueText: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.lg,
  },

  topRow: {
    flexDirection: 'row',
    marginTop: spacing.md,
  },
  recentCard: {
    flex: 1,
    padding: spacing.md,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.line,
    marginRight: spacing.sm,
  },
  scorerCard: {
    flex: 1,
    padding: spacing.md,
    borderRadius: 16,
    backgroundColor: colors.primary,
  },

  cardTitle: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.sm,
    marginBottom: spacing.sm,
  },
  scoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  team: {
    fontFamily: fontFamily.regular,
  },
  score: {
    fontFamily: fontFamily.semiBold,
  },

  scorerTitle: {
    color: colors.white,
    fontFamily: fontFamily.medium,
  },
  goals: {
    color: colors.white,
    fontFamily: fontFamily.bold,
    fontSize: fontSize.h3,
    marginTop: spacing.sm,
  },
  goalsText: {
    color: colors.white,
  },
  teamWhite: {
    color: colors.white,
    marginTop: spacing.xs,
  },

  section: {
    marginTop: spacing.xl,
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.lg,
  },

  liveCard: {
    marginTop: spacing.md,
    padding: spacing.md,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.line,
  },
  liveHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leagueSmall: {
    fontFamily: fontFamily.medium,
  },
  timer: {
    backgroundColor: '#E84C3D',
    paddingHorizontal: spacing.sm,
    borderRadius: 12,
  },
  timerText: {
    color: colors.white,
    fontSize: fontSize.sm,
  },
  matchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.md,
  },
  teamName: {
    fontFamily: fontFamily.medium,
  },
  matchScore: {
    fontFamily: fontFamily.bold,
  },
  matchDate: {
    marginTop: spacing.xs,
    textAlign: 'center',
    color: colors.grayscale[60],
  },

  standingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gameweek: {
    color: colors.grayscale[60],
  },

  table: {
    marginTop: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: spacing.sm,
  },
  pos: {
    width: 24,
  },
  rowTeam: {
    flex: 1,
  },
  pts: {
    fontFamily: fontFamily.semiBold,
  },

  upcomingCard: {
    marginTop: spacing.md,
    padding: spacing.md,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.line,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    fontFamily: fontFamily.semiBold,
  },
});
