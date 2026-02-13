import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import { fontFamily, fontSize } from '../../../theme/typography';
import { useNavigation } from '@react-navigation/native';

const ChangePasswordScreen = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [secure1, setSecure1] = useState(true);
  const [secure2, setSecure2] = useState(true);

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
          <Text style={styles.headerTitle}>Change Password</Text>
        </View>

        {/* Info */}
        <Text style={styles.info}>
          The new password must be different from the current password
        </Text>

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            placeholderTextColor={colors.grayscale[60]}
            secureTextEntry={secure1}
            style={styles.input}
          />
          <Pressable onPress={() => setSecure1(!secure1)}>
            <Text style={styles.eye}>👁</Text>
          </Pressable>
        </View>

        {/* Rules */}
        <View style={styles.ruleRow}>
          <Text style={styles.check}>✓</Text>
          <Text style={styles.ruleText}>
            There must be at least 8 characters
          </Text>
        </View>

        <View style={styles.ruleRow}>
          <Text style={styles.check}>✓</Text>
          <Text style={styles.ruleText}>
            There must be a unique code like @!#
          </Text>
        </View>

        {/* Confirm */}
        <Text style={[styles.label, { marginTop: spacing.lg }]}>
          Confirm Password
        </Text>
        <View style={styles.inputWrapper}>
          <TextInput
            value={confirm}
            onChangeText={setConfirm}
            placeholder="Enter your password"
            placeholderTextColor={colors.grayscale[60]}
            secureTextEntry={secure2}
            style={styles.input}
          />
          <Pressable onPress={() => setSecure2(!secure2)}>
            <Text style={styles.eye}>👁</Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* Button */}
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;

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
    alignItems: 'center',
    justifyContent: 'center',
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

  info: {
    marginTop: spacing.xl,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.lg,
    color: colors.black,
    lineHeight: 22,
  },

  label: {
    marginTop: spacing.xl,
    marginBottom: spacing.sm,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
    color: colors.grayscale[80],
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 28,
    paddingHorizontal: spacing.lg,
  },

  input: {
    flex: 1,
    paddingVertical: spacing.md,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    color: colors.black,
  },

  eye: {
    fontSize: 18,
    color: colors.grayscale[60],
  },

  ruleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.sm,
  },

  check: {
    color: colors.success,
    fontSize: 16,
    marginRight: spacing.sm,
  },

  ruleText: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    color: colors.success,
  },

  button: {
    marginHorizontal: spacing.xl,
    marginBottom: spacing.lg,
    backgroundColor: colors.primary,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.lg,
    color: colors.white,
  },
});
