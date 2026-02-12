import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import { fontFamily, fontSize } from '../../../theme/typography';

const SignUpFormScreen = () => {
  const navigation = useNavigation();

  const [secure1, setSecure1] = useState(true);
  const [secure2, setSecure2] = useState(true);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backIcon}>←</Text>
          </Pressable>

          <Text style={styles.headerTitle}>Sign Up</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>Complete your account</Text>
        <Text style={styles.subtitle}>Lorem ipsum dolor sit amet</Text>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            placeholder="Enter your first name"
            style={styles.input}
            placeholderTextColor={colors.grayscale[60]}
          />

          <Text style={styles.label}>Last Name</Text>
          <TextInput
            placeholder="Enter your last name"
            style={styles.input}
            placeholderTextColor={colors.grayscale[60]}
          />

          <Text style={styles.label}>E-mail</Text>
          <TextInput
            placeholder="Enter your email"
            keyboardType="email-address"
            style={styles.input}
            placeholderTextColor={colors.grayscale[60]}
          />

          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordWrapper}>
            <TextInput
              placeholder="Enter your password"
              secureTextEntry={secure1}
              style={styles.passwordInput}
              placeholderTextColor={colors.grayscale[60]}
            />
            <Pressable onPress={() => setSecure1(!secure1)}>
              <Text style={styles.eye}>👁</Text>
            </Pressable>
          </View>

          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.passwordWrapper}>
            <TextInput
              placeholder="Enter your password"
              secureTextEntry={secure2}
              style={styles.passwordInput}
              placeholderTextColor={colors.grayscale[60]}
            />
            <Pressable onPress={() => setSecure2(!secure2)}>
              <Text style={styles.eye}>👁</Text>
            </Pressable>
          </View>

          <Pressable style={styles.primaryButton} onPress={() => navigation.navigate('EnterOtp')}>
            <Text style={styles.primaryButtonText}>Sign Up</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.footer}>
              Already have an account? <Text style={styles.link}>Login</Text>
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpFormScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.white,
  },

  scroll: {
    paddingBottom: spacing.xl,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.lg,
  },

  backButton: {
    position: 'absolute',
    left: spacing.lg,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.grayscale[20],
    alignItems: 'center',
    justifyContent: 'center',
  },

  backIcon: {
    fontSize: 18,
    color: colors.black,
  },

  headerTitle: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.h4,
    color: colors.black,
  },

  title: {
    marginTop: spacing.lg,
    fontFamily: fontFamily.bold,
    fontSize: fontSize.h4,
    color: colors.black,
    textAlign: 'center',
  },

  subtitle: {
    marginTop: spacing.sm,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    color: colors.grayscale[80],
    textAlign: 'center',
  },

  form: {
    padding: spacing.xl,
  },

  label: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
    color: colors.grayscale[80],
    marginBottom: spacing.sm,
  },

  input: {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 28,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
  },

  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 28,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },

  passwordInput: {
    flex: 1,
    paddingVertical: spacing.md,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
  },

  eye: {
    fontSize: 18,
  },

  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: 32,
    alignItems: 'center',
    marginTop: spacing.md,
  },

  primaryButtonText: {
    color: colors.white,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.lg,
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
