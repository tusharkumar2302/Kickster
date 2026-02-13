import React, { useState } from 'react';
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

const SUGGESTED = ['English (UK)', 'English', 'Bahasa Indonesia'];
const OTHERS = [
  'Chineses',
  'Croatian',
  'Czech',
  'Danish',
  'Filipino',
  'Finland',
];

const LanguageScreen = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState('English (UK)');

  const renderItem = (item: string, last?: boolean) => {
    const isActive = selected === item;

    return (
      <Pressable
        key={item}
        style={[styles.row, last && styles.noBorder]}
        onPress={() => setSelected(item)}
      >
        <Text style={styles.rowText}>{item}</Text>

        {isActive && (
          <View style={styles.check}>
            <Text style={styles.checkText}>✓</Text>
          </View>
        )}
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.back} onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>←</Text>
        </Pressable>

        <Text style={styles.headerTitle}>Language</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Suggested */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Suggested Languages</Text>

          {SUGGESTED.map((item, i) =>
            renderItem(item, i === SUGGESTED.length - 1),
          )}
        </View>

        {/* Other */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Other Languages</Text>

          {OTHERS.map((item, i) =>
            renderItem(item, i === OTHERS.length - 1),
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  header: {
    alignItems: 'center',
    paddingVertical: spacing.md,
  },

  back: {
    position: 'absolute',
    left: spacing.xl,
    top: spacing.md,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.grayscale[20],
    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon: {
    fontSize: 18,
    color: colors.black,
  },

  headerTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.h5,
    color: colors.black,
  },

  content: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xl,
  },

  card: {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 16,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    marginTop: spacing.xl,
  },

  cardTitle: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    color: colors.grayscale[70],
    marginBottom: spacing.sm,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },

  noBorder: {
    borderBottomWidth: 0,
  },

  rowText: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.lg,
    color: colors.black,
  },

  check: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
});
