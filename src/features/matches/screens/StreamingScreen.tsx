import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';

import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import { fontFamily, fontSize } from '../../../theme/typography';

const StreamingScreen = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Video */}
        <View style={styles.videoWrapper}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2',
            }}
            style={styles.video}
          />

          {/* Header */}
          <View style={styles.videoHeader}>
            <Pressable>
              <Text style={styles.icon}>←</Text>
            </Pressable>

            <View style={styles.headerRight}>
              <Pressable>
                <Text style={styles.icon}>⤴</Text>
              </Pressable>
              <Pressable>
                <Text style={styles.icon}>⚙</Text>
              </Pressable>
            </View>
          </View>

          {/* Controls */}
          <View style={styles.controls}>
            <Text style={styles.control}>⏪</Text>
            <Text style={styles.play}>▶</Text>
            <Text style={styles.control}>⏩</Text>
          </View>

          {/* Duration */}
          <View style={styles.duration}>
            <Text style={styles.durationText}>08:23:21</Text>
          </View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              Matchday - Premier League 2025
            </Text>
          </View>

          <Text style={styles.title}>
            Leicester vs. Wolves: A Clash of Determination and Passion! ⚽🔥
          </Text>

          <View style={styles.meta}>
            <Text style={styles.metaText}>78.4K Viewers</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.metaText}>1 hour ago</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.metaText}>2k liked</Text>
          </View>

          {/* Tags */}
          <View style={styles.tags}>
            <Tag text="Football" />
            <Tag text="Premier" />
            <Tag text="Final" />
          </View>

          {/* Channel */}
          <View style={styles.channel}>
            <Text style={styles.channelText}>⚽ Kickster Live</Text>

            <View style={styles.actions}>
              <Text style={styles.action}>♡ 1.2K</Text>
              <Text style={styles.action}>💬 28</Text>
            </View>
          </View>

          {/* Tabs */}
          <View style={styles.tabs}>
            <Tab active text="Statistic" />
            <Tab text="Formation" />
            <Tab text="Timeline" />
          </View>

          {/* Stats */}
          <Stat label="Total Shots" left="20" right="10" />
          <Stat label="Shots On Target" left="10" right="5" />
          <Stat label="Possession" left="54%" right="46%" />
          <Stat label="Corner Kicks" left="6" right="5" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StreamingScreen;

/* ---------- Small components ---------- */

const Tag = ({ text }: { text: string }) => (
  <View style={styles.tag}>
    <Text style={styles.tagText}>{text}</Text>
  </View>
);

const Tab = ({ text, active }: any) => (
  <View style={[styles.tab, active && styles.tabActive]}>
    <Text style={[styles.tabText, active && styles.tabTextActive]}>
      {text}
    </Text>
  </View>
);

const Stat = ({ label, left, right }: any) => (
  <View style={styles.stat}>
    <Text style={styles.statValue}>{left}</Text>
    <Text style={styles.statLabel}>{label}</Text>
    <Text style={[styles.statValue, styles.right]}>{right}</Text>
  </View>
);

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.white,
  },

  videoWrapper: {
    height: 260,
    backgroundColor: colors.black,
  },

  video: {
    width: '100%',
    height: '100%',
  },

  videoHeader: {
    position: 'absolute',
    top: spacing.md,
    left: spacing.md,
    right: spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headerRight: {
    flexDirection: 'row',
  },

  icon: {
    fontSize: 18,
    color: colors.white,
    marginLeft: spacing.md,
  },

  controls: {
    position: 'absolute',
    top: '45%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  control: {
    fontSize: 22,
    color: colors.white,
    marginHorizontal: spacing.lg,
  },

  play: {
    fontSize: 36,
    color: colors.white,
  },

  duration: {
    position: 'absolute',
    bottom: spacing.md,
    left: spacing.md,
  },

  durationText: {
    color: colors.white,
    fontSize: fontSize.sm,
  },

  content: {
    padding: spacing.lg,
  },

  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.secondary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 20,
    marginBottom: spacing.sm,
  },

  badgeText: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.sm,
    color: colors.primary,
  },

  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.lg,
    marginBottom: spacing.sm,
  },

  meta: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  metaText: {
    fontSize: fontSize.sm,
    color: colors.grayscale[70],
  },

  dot: {
    marginHorizontal: spacing.xs,
    color: colors.grayscale[60],
  },

  tags: {
    flexDirection: 'row',
    marginTop: spacing.md,
  },

  tag: {
    backgroundColor: colors.grayscale[20],
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 16,
    marginRight: spacing.sm,
  },

  tagText: {
    fontSize: fontSize.sm,
    color: colors.grayscale[80],
  },

  channel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.lg,
    alignItems: 'center',
  },

  channelText: {
    fontFamily: fontFamily.semiBold,
  },

  actions: {
    flexDirection: 'row',
  },

  action: {
    marginLeft: spacing.md,
    color: colors.grayscale[70],
  },

  tabs: {
    flexDirection: 'row',
    marginTop: spacing.lg,
  },

  tab: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.line,
    marginRight: spacing.sm,
  },

  tabActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  tabText: {
    fontFamily: fontFamily.medium,
    color: colors.grayscale[70],
  },

  tabTextActive: {
    color: colors.white,
  },

  stat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.md,
  },

  statLabel: {
    color: colors.grayscale[70],
  },

  statValue: {
    fontFamily: fontFamily.semiBold,
  },

  right: {
    color: '#FACC15',
  },
});
