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

const FILTERS = ['All league', 'Premier league', 'La Liga', 'Serie A'];

const PREMIER = [
  { pos: 1, team: 'Arsenal', p: 12, w: 10, pts: 31 },
  { pos: 2, team: 'Man City', p: 12, w: 9, pts: 29 },
  { pos: 3, team: 'Spurs', p: 13, w: 8, pts: 26 },
  { pos: 4, team: 'Newcastle', p: 13, w: 6, pts: 24 },
  { pos: 5, team: 'Man Utd', p: 12, w: 7, pts: 23 },
  { pos: 6, team: 'Chelsea', p: 12, w: 6, pts: 21 },
  { pos: 7, team: 'Fulham', p: 13, w: 5, pts: 19 },
];

const LALIGA = [
  { pos: 1, team: 'Spurs', p: 13, w: 8, pts: 26 },
  { pos: 2, team: 'Man City', p: 12, w: 9, pts: 29 },
];

const StandingsScreen = () => {
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
            <Text style={styles.backText}>←</Text>
          </Pressable>

          <Text style={styles.title}>Standings</Text>

          <Pressable style={styles.menu}>
            <Text style={styles.menuText}>⋮</Text>
          </Pressable>
        </View>

        {/* Filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filters}
        >
          {FILTERS.map((f, i) => (
            <View
              key={f}
              style={[
                styles.filter,
                i === 0 && styles.filterActive,
              ]}
            >
              <Text
                style={[
                  styles.filterText,
                  i === 0 && styles.filterTextActive,
                ]}
              >
                {f}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Premier League */}
        <Section
          title="Premier league"
          data={PREMIER}
          onSeeAll={() => navigation.navigate('ClubProfile')
          }
        />

        {/* La Liga */}
        <Section
          title="La Liga"
          data={LALIGA}
          onSeeAll={() => navigation.navigate('ClubProfile')
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default StandingsScreen;

/* ---------- Section ---------- */

const Section = ({
  title,
  data,
  onSeeAll,
}: {
  title: string;
  data: any[];
  onSeeAll: () => void;
}) => (
  <View style={{ marginTop: spacing.xl }}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>

      <Pressable onPress={onSeeAll}>
        <Text style={styles.seeAll}>See All</Text>
      </Pressable>
    </View>

    <View style={styles.table}>
      <View style={styles.tableHead}>
        <Text style={[styles.th, { flex: 1 }]}>Pos</Text>
        <Text style={[styles.th, { flex: 4 }]}>Team</Text>
        <Text style={styles.th}>P</Text>
        <Text style={styles.th}>W</Text>
        <Text style={styles.th}>Pts</Text>
      </View>

      {data.map((row, index) => (
        <View
          key={row.team}
          style={[
            styles.tr,
            index % 2 !== 0 && styles.altRow,
          ]}
        >
          <Text style={[styles.td, { flex: 1 }]}>{row.pos}</Text>
          <Text style={[styles.td, { flex: 4 }]}>{row.team}</Text>
          <Text style={styles.td}>{row.p}</Text>
          <Text style={styles.td}>{row.w}</Text>
          <Text style={styles.td}>{row.pts}</Text>
        </View>
      ))}
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
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.grayscale[20],
    alignItems: 'center',
    justifyContent: 'center',
  },

  backText: {
    fontSize: 18,
    color: colors.black,
  },

  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.h5,
    color: colors.black,
  },

  menu: {
    position: 'absolute',
    right: 0,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuText: {
    fontSize: 22,
    color: colors.black,
  },

  filters: {
    paddingVertical: spacing.md,
  },

  filter: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.line,
    marginRight: spacing.sm,
  },

  filterActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  filterText: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
    color: colors.grayscale[70],
  },

  filterTextActive: {
    color: colors.white,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
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

  table: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: colors.white,
  },

  tableHead: {
    flexDirection: 'row',
    backgroundColor: colors.grayscale[20],
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },

  th: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.sm,
    color: colors.grayscale[80],
    width: 40,
    textAlign: 'center',
  },

  tr: {
    flexDirection: 'row',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
  },

  altRow: {
    backgroundColor: '#F6F8FE',
  },

  td: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
    color: colors.black,
    width: 40,
    textAlign: 'center',
  },
});
