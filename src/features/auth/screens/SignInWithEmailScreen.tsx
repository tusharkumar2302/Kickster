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

const SignInWithEmailScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable style={styles.backButton}>
            <Text style={styles.backIcon}>←</Text>
          </Pressable>

          <Text style={styles.headerTitle}>Sign In</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email address"
            placeholderTextColor={colors.grayscale[60]}
            keyboardType="email-address"
            style={styles.input}
          />

          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordWrapper}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              placeholderTextColor={colors.grayscale[60]}
              secureTextEntry={secure}
              style={styles.passwordInput}
            />
            <Pressable onPress={() => setSecure(!secure)}>
              <Text style={styles.eye}>👁</Text>
            </Pressable>
          </View>

          <View style={styles.row}>
            <Text style={styles.remember}>◯ Remember Me</Text>

            <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgot}>Forgot Password</Text>
            </Pressable>
          </View>

          <Pressable style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Sign In</Text>
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

export default SignInWithEmailScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.white,
  },

  container: {
    flex: 1,
    backgroundColor: colors.white,
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
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    marginBottom: spacing.lg,
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

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },

  remember: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    color: colors.grayscale[80],
  },

  forgot: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
    color: colors.error,
  },

  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: 32,
    alignItems: 'center',
    marginBottom: spacing.xl,
  },

  primaryButtonText: {
    color: colors.white,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.lg,
  },

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
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
