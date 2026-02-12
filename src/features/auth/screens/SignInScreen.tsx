import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  SafeAreaView,
  Image,
} from 'react-native';

import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import { fontFamily, fontSize } from '../../../theme/typography';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerWrapper}>
          <View style={styles.header}>
            <Text style={styles.title}>Hi, Welcome Back! 👋</Text>
            <Text style={styles.subtitle}>Lorem ipsum dolor sit amet</Text>
          </View>
        </View>

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.label}>Email</Text>

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email address"
            placeholderTextColor={colors.grayscale[60]}
            style={styles.input}
          />

          <Pressable
            style={styles.primaryButton}
            onPress={() => navigation.navigate('SignInWithEmail')}
          >
            <Text style={styles.primaryButtonText}>Continue with Email</Text>
          </Pressable>

          {/* Divider */}
          <View style={styles.dividerRow}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>Or continue with</Text>
            <View style={styles.line} />
          </View>

          {/* Google */}
          <Pressable style={styles.socialButton}>
            <Image
              source={require('../../../assets/images/google.png')}
              style={styles.socialIcon}
            />
            <Text style={styles.socialText}>Continue with Google</Text>
          </Pressable>

          {/* Apple */}
          <Pressable style={styles.socialButton}>
            <Image
              source={require('../../../assets/images/apple.png')}
              style={styles.socialIcon}
            />
            <Text style={styles.socialText}>Continue with Apple</Text>
          </Pressable>

          {/* Footer */}
          <Pressable onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.footer}>
              Don’t have an account? <Text style={styles.link}>Sign Up</Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.white,
  },

  container: {
    flex: 1,
  },

  headerWrapper: {
    backgroundColor: colors.primary,
    height: 220,
    justifyContent: 'center',
  },

  header: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.vertical.lg,
    paddingBottom: spacing.xl,
  },

  title: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.h4,
    color: colors.white,
    textAlign: 'center',
  },

  subtitle: {
    marginTop: spacing.sm,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    color: colors.grayscale[20],
    textAlign: 'center',
  },

  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: spacing.xl,
    marginTop: -32,
  },

  label: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
    color: colors.grayscale[80],
    marginBottom: spacing.md,
  },

  input: {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 28,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    color: colors.black,
  },

  primaryButton: {
    marginTop: spacing.lg,
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: 32,
    alignItems: 'center',
  },

  primaryButtonText: {
    color: colors.white,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.lg,
  },

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.lg,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.grayscale[70],
  },

  dividerText: {
    marginHorizontal: spacing.sm,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    color: colors.grayscale[100],
  },

  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.lineDark,
    borderRadius: 32,
    paddingVertical: spacing.md,
    marginBottom: spacing.md,
  },

  socialIcon: {
    width: 20,
    height: 20,
    marginRight: spacing.sm,
  },

  socialText: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
    color: colors.black,
  },

  footer: {
    marginTop: spacing.xl,
    textAlign: 'center',
    fontFamily: fontFamily.regular,
    fontSize: fontSize.lg,
    color: colors.grayscale[80],
  },

  link: {
    color: colors.primary,
    fontFamily: fontFamily.medium,
  },
});
