import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  TextInput,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import { fontFamily, fontSize } from '../../../theme/typography';
import ArrowRight from '../../../assets/icons/ArrowRight';

const DATA = [
  {
    title: 'Lorem ipsum dolor sit amet',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
  { title: 'Lorem ipsum dolor sit amet', content: '' },
  { title: 'Lorem ipsum dolor sit amet', content: '' },
  { title: 'Lorem ipsum dolor sit amet', content: '' },
  { title: 'Lorem ipsum dolor sit amet', content: '' },
];

const HelpSupportScreen = ({ navigation }: any) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(2);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Pressable style={styles.back} onPress={() => navigation.goBack()}>
            <Text style={styles.backIcon}>←</Text>
          </Pressable>
          <Text style={styles.headerTitle}>Help and Support</Text>
        </View>

        {/* Search */}
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search..."
            placeholderTextColor={colors.grayscale[60]}
            style={styles.searchInput}
          />
        </View>

        {/* Accordion */}
        {DATA.map((item, index) => {
          const open = activeIndex === index;

          return (
            <View key={index} style={styles.accordionItem}>
              <Pressable
                style={styles.accordionHeader}
                onPress={() =>
                  setActiveIndex(open ? null : index)
                }
              >
                <Text style={styles.accordionTitle}>{item.title}</Text>
                <ArrowRight
                  width={12}
                  height={12}
                  style={{
                    transform: [{ rotate: open ? '-90deg' : '90deg' }],
                  }}
                />
              </Pressable>

              <Collapsible collapsed={!open}>
                {item.content ? (
                  <Text style={styles.accordionContent}>
                    {item.content}
                  </Text>
                ) : null}
              </Collapsible>

              <View style={styles.divider} />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpSupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  content: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xl,
  },

  header: {
    alignItems: 'center',
    marginTop: spacing.md,
  },

  back: {
    position: 'absolute',
    left: 0,
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

  searchBox: {
    marginTop: spacing.xl,
    backgroundColor: colors.secondary,
    borderRadius: 28,
    paddingHorizontal: spacing.lg,
    height: 52,
    justifyContent: 'center',
  },

  searchInput: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    color: colors.black,
  },

  accordionItem: {
    marginTop: spacing.lg,
  },

  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  accordionTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.lg,
    color: colors.black,
  },

  accordionContent: {
    marginTop: spacing.sm,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    color: colors.grayscale[70],
    lineHeight: 22,
  },

  divider: {
    marginTop: spacing.lg,
    height: 1,
    backgroundColor: colors.line,
  },
});
