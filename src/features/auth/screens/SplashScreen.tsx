import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../../../theme/colors';
import { fontFamily, fontSize } from '../../../theme/typography';
import spacing from '../../../theme/spacing';
import { STRINGS } from '../../../constants/strings';

const SplashScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <Text style={styles.heading}>{STRINGS.splash.heading}</Text>
        <Text style={styles.subHeading}>{STRINGS.splash.subHeading}</Text>
      </View>

      <Text style={styles.version}>{STRINGS.splash.version}</Text>
    </View>
  );
};

export default SplashScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },

  heading: {
    color: colors.white,
    fontFamily: fontFamily.bold,
    fontSize: fontSize.h2,
  },

  subHeading: {
    marginTop: spacing.sm,
    textAlign: 'center',
    color: colors.white,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.xl,
  },

  version: {
    textAlign: 'center',
    marginBottom: spacing.lg,
    color: colors.white,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.sm,
  },
});
