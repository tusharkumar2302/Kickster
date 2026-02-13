import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import colors from '../theme/colors';
import spacing from '../theme/spacing';
import { fontFamily, fontSize } from '../theme/typography';
import ArrowRight from '../assets/icons/ArrowRight';

const SubscribeBanner = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>
        👑 Subscribe Now Get the{'\n'}latest information
      </Text>

      <ArrowRight width={12} height={18} fill={colors.white} />
    </Pressable>
  );
};

export default SubscribeBanner;

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.xl,
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.lg,
    color: colors.white,
    lineHeight: 24,
  },
});
