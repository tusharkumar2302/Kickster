import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import { fontFamily, fontSize } from '../../../theme/typography';

const CreateNewPasswordScreen = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secure1, setSecure1] = useState(true);
  const [secure2, setSecure2] = useState(true);

  return (
    <SafeAreaView style={styles.safe}>
      {/* Back Button */}
      <Pressable style={styles.back} onPress={() => navigation.goBack()}>
        <Text style={styles.backIcon}>←</Text>
      </Pressable>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Create a{'\n'}New Password</Text>
        <Text style={styles.subtitle}>Enter your new password</Text>

        {/* New Password */}
        <Text style={styles.label}>New Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter new password"
            placeholderTextColor={colors.grayscale[60]}
            secureTextEntry={secure1}
            style={styles.input}
          />
          <Pressable onPress={() => setSecure1(!secure1)}>
            <Text style={styles.eye}>👁</Text>
          </Pressable>
        </View>

        {/* Confirm Password */}
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm your password"
            placeholderTextColor={colors.grayscale[60]}
            secureTextEntry={secure2}
            style={styles.input}
          />
          <Pressable onPress={() => setSecure2(!secure2)}>
            <Text style={styles.eye}>👁</Text>
          </Pressable>
        </View>

        {/* Button */}
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('SelectLanguage')}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default CreateNewPasswordScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.white,
  },

  back: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.grayscale[20],
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: spacing.lg,
    marginTop: spacing.sm,
  },

  backIcon: {
    fontSize: fontSize.lg,
    color: colors.black,
  },

  content: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
  },

  title: {
    marginTop: spacing.xl,
    fontFamily: fontFamily.bold,
    fontSize: fontSize.h4,
    color: colors.black,
    textAlign: 'center',
    lineHeight: fontSize.h4 + 6,
  },

  subtitle: {
    marginTop: spacing.sm,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    color: colors.grayscale[70],
    textAlign: 'center',
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
    color: colors.grayscale[70],
  },

  button: {
    marginTop: spacing.xl,
    backgroundColor: colors.primary,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.lg,
  },
});
