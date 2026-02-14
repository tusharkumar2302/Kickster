import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import { fontFamily, fontSize } from '../../../theme/typography';

const TABS = ['Overview', 'Matches', 'Players', 'News'];

const ClubProfileScreen = () => {
  const navigation = useNavigation<any>();
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.back}>←</Text>
          </Pressable>

          <Text style={styles.headerTitle}>Arsenal</Text>

          <Pressable>
            <Text style={styles.more}>⋮</Text>
          </Pressable>
        </View>

        {/* Club Info */}
        <View style={styles.clubRow}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
            }}
            style={styles.logo}
          />

          <View>
            <Text style={styles.clubName}>Arsenal F.C.</Text>
            <Text style={styles.clubType}>Football Team</Text>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabs}>
          {TABS.map(tab => (
            <Pressable
              key={tab}
              style={[
                styles.tab,
                activeTab === tab && styles.activeTab,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Live Matches */}
        <Text style={styles.section}>Live Matches</Text>

        <Pressable
          style={styles.liveCard}
          onPress={() => navigation.navigate('MatchDetails')}
        >
          <View style={styles.liveHeader}>
            <Text style={styles.league}>Premier League</Text>
            <View style={styles.timer}>
              <Text style={styles.timerText}>56:19</Text>
            </View>
          </View>

          <View style={styles.matchRow}>
            <Text style={styles.team}>Arsenal</Text>
            <Text style={styles.score}>2 : 0</Text>
            <Text style={styles.team}>Leichester</Text>
          </View>

          <Text style={styles.date}>15 Dec</Text>
        </Pressable>

        {/* Recent Match */}
        <View style={styles.sectionRow}>
          <Text style={styles.section}>Recent Match</Text>
          <Pressable onPress={() => navigation.navigate('MatchDetails')}>
            <Text style={styles.seeAll}>See All</Text>
          </Pressable>
        </View>

        <View style={styles.recentRow}>
          <RecentCard
            date="15 Dec, 2025"
            team1="N Forest"
            score1="1"
            team2="Arsenal"
            score2="2"
          />
          <RecentCard
            date="08 Dec, 2025"
            team1="Arsenal"
            score1="1"
            team2="Liverpool"
            score2="1"
          />
        </View>

        {/* Latest News */}
        <View style={styles.sectionRow}>
          <Text style={styles.section}>Latest News</Text>
          <Pressable onPress={() => navigation.navigate('News')}>
            <Text style={styles.seeAll}>See All</Text>
          </Pressable>
        </View>

        <View style={styles.newsRow}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6',
            }}
            style={styles.newsImage}
          />

          <View style={styles.newsContent}>
            <Text style={styles.newsTitle}>
              Arsenal: Will Arteta’s Revolution Lead to Premier...
            </Text>

            <View style={styles.metaRow}>
              <Text style={styles.meta}>Premier League</Text>
              <Text style={styles.meta}>💬 28</Text>
              <Text style={styles.meta}>12h</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClubProfileScreen;

/* ---------- Small Components ---------- */

const RecentCard = ({
  date,
  team1,
  score1,
  team2,
  score2,
}: any) => (
  <View style={styles.recentCard}>
    <Text style={styles.recentDate}>{date}</Text>

    <View style={styles.scoreRow}>
      <Text style={styles.team}>{team1}</Text>
      <Text style={styles.score}>{score1}</Text>
    </View>

    <View style={styles.scoreRow}>
      <Text style={styles.team}>{team2}</Text>
      <Text style={styles.score}>{score2}</Text>
    </View>
  </View>
);

/* ---------- Styles (unchanged) ---------- */

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.white },
  container: { paddingHorizontal: spacing.lg, paddingBottom: spacing.xl },

  header: {
    marginTop: spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  back: { fontSize: 18 },
  more: { fontSize: 20 },
  headerTitle: { fontFamily: fontFamily.semiBold, fontSize: fontSize.h5 },

  clubRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  logo: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginRight: spacing.md,
    backgroundColor: colors.grayscale[20],
  },
  clubName: { fontFamily: fontFamily.semiBold, fontSize: fontSize.h5 },
  clubType: {
    marginTop: spacing.xs,
    fontFamily: fontFamily.regular,
    color: colors.grayscale[70],
  },

  tabs: { flexDirection: 'row', marginTop: spacing.lg },
  tab: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.grayscale[30],
    marginRight: spacing.sm,
  },
  activeTab: { backgroundColor: colors.primary, borderColor: colors.primary },
  tabText: { fontFamily: fontFamily.medium, color: colors.grayscale[70] },
  activeTabText: { color: colors.white },

  section: {
    marginTop: spacing.xl,
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.lg,
  },
  sectionRow: {
    marginTop: spacing.xl,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAll: { color: colors.primary, fontFamily: fontFamily.medium },

  liveCard: {
    marginTop: spacing.md,
    padding: spacing.md,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.line,
  },
  liveHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  league: { fontFamily: fontFamily.medium },
  timer: {
    backgroundColor: '#E84C3D',
    paddingHorizontal: spacing.sm,
    borderRadius: 12,
  },
  timerText: { color: colors.white, fontSize: fontSize.sm },

  matchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.md,
  },
  team: { fontFamily: fontFamily.medium },
  score: { fontFamily: fontFamily.bold },
  date: {
    marginTop: spacing.xs,
    textAlign: 'center',
    color: colors.grayscale[60],
  },

  recentRow: { flexDirection: 'row', marginTop: spacing.md },
  recentCard: {
    flex: 1,
    padding: spacing.md,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.line,
    marginRight: spacing.sm,
  },
  recentDate: { marginBottom: spacing.sm, fontFamily: fontFamily.medium },

  newsRow: { flexDirection: 'row', marginTop: spacing.md },
  newsImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: spacing.md,
  },
  newsContent: { flex: 1 },
  newsTitle: { fontFamily: fontFamily.semiBold, fontSize: fontSize.md },
  metaRow: { flexDirection: 'row', marginTop: spacing.sm },
  meta: {
    marginRight: spacing.md,
    fontSize: fontSize.sm,
    color: colors.grayscale[70],
  },
});
