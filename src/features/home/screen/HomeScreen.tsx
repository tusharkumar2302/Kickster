import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import { fontFamily, fontSize } from '../../../theme/typography';

import Header from '../../../components/Header';
import MatchCarousel from '../../../components/MatchCarousel';
import SportsTabs from '../../../components/SportsTabs';
import LiveMatches from '../../../components/LiveMatches';
import UpcomingMatches from '../../../components/UpcomingMatches';
import Highlights from '../../../components/Highlights';
import SubscribeBanner from '../../../components/SubscribeBanner';
import LatestNews from '../../../components/LatestNews';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* Header */}
        <Header />

        {/* Match Carousel */}
        <MatchCarousel />

        {/* Sports Tabs */}
        <SportsTabs />

        {/* Live Matches */}
        <SectionHeader title="Live Matches" />
        <LiveMatches />

        {/* Upcoming Matches */}
        <SectionHeader title="Upcoming matches" />
        <UpcomingMatches />

        {/* Best Highlights */}
        <SectionHeader title="Best Highlights" />
        <Highlights />

        {/* Subscribe Banner */}
        <SubscribeBanner />

        {/* Latest News */}
        <SectionHeader title="Latest News" />
        <LatestNews />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

/* ---------- Small reusable header ---------- */

const SectionHeader = ({ title }: { title: string }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.seeAll}>See All</Text>
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

  sectionHeader: {
    marginTop: spacing.xl,
    marginBottom: spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.h5,
    color: colors.black,
  },

  seeAll: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
    color: colors.primary,
  },
});
