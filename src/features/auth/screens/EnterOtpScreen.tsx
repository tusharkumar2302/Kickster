import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import { BlurView } from '@react-native-community/blur';
import { useNavigation } from '@react-navigation/native';

import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import { fontFamily, fontSize } from '../../../theme/typography';

export default function EnterOtpScreen() {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [visible, setVisible] = useState(false);

  const onChange = (value: string, index: number) => {
    const arr = [...otp];
    arr[index] = value;
    setOtp(arr);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.back} onPress={() => navigation.goBack()}>
        <Text style={styles.backIcon}>←</Text>
      </Pressable>

      <Text style={styles.title}>Enter OTP</Text>

      <Text style={styles.sub}>
        We have just sent you 4 digit code via your email example@gmail.com
      </Text>

      <View style={styles.otpRow}>
        {otp.map((v, i) => (
          <TextInput
            key={i}
            value={v}
            maxLength={1}
            keyboardType="number-pad"
            onChangeText={t => onChange(t, i)}
            style={styles.otpBox}
          />
        ))}
      </View>

      <Pressable style={styles.btn} onPress={() => setVisible(true)}>
        <Text style={styles.btnText}>Continue</Text>
      </Pressable>

      <Text style={styles.resend}>
        Didn’t receive code? <Text style={styles.link}>Resend Code</Text>
      </Text>

      <Modal
        isVisible={visible}
        backdropOpacity={0}
        style={styles.modalWrapper}
        onBackdropPress={() => setVisible(false)}
        onBackButtonPress={() => setVisible(false)}
      >
        <BlurView
          style={StyleSheet.absoluteFill}
          blurType="dark"
          blurAmount={2}
        />

        <View style={styles.modalContainer}>
          <View style={styles.modalHandle} />

          <View style={styles.tick}>
            <Text style={styles.tickText}>✓</Text>
          </View>

          <Text style={styles.modalTitle}>
            You have logged in successfully
          </Text>

          <Text style={styles.modalSub}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Text>

          <Pressable
            style={styles.modalBtn}
            onPress={() => setVisible(false)}
          >
            <Text style={styles.btnText}>Continue</Text>
          </Pressable>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: spacing.md,
  },

  back: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: colors.grayscale[20],
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.vertical.md,
  },

  backIcon: {
    fontSize: fontSize.lg,
    fontFamily: fontFamily.medium,
    color: colors.black,
  },

  title: {
    fontSize: fontSize.h4,
    fontFamily: fontFamily.bold,
    textAlign: 'center',
    marginTop: spacing.vertical.lg,
    color: colors.black,
  },

  sub: {
    textAlign: 'center',
    color: colors.grayscale[70],
    marginTop: spacing.vertical.sm,
    lineHeight: 22,
    fontSize: fontSize.md,
    fontFamily: fontFamily.regular,
  },

  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.vertical.lg,
    paddingHorizontal: spacing.lg,
  },

  otpBox: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1.5,
    borderColor: colors.primary,
    textAlign: 'center',
    fontSize: fontSize.lg,
    fontFamily: fontFamily.semiBold,
    color: colors.black,
  },

  btn: {
    backgroundColor: colors.primary,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.vertical.lg,
    marginHorizontal: spacing.lg,
  },

  btnText: {
    color: colors.white,
    fontSize: fontSize.lg,
    fontFamily: fontFamily.semiBold,
  },

  resend: {
    textAlign: 'center',
    marginTop: spacing.vertical.md,
    color: colors.grayscale[70],
    fontSize: fontSize.lg,
    fontFamily: fontFamily.regular,
  },

  link: {
    color: colors.primary,
    fontFamily: fontFamily.semiBold,
  },

  modalWrapper: {
    margin: 0,
    justifyContent: 'flex-end',
  },

  modalContainer: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: spacing.md,
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
  },

  modalHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.grayscale[40],
    marginBottom: spacing.md,
  },

  tick: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.success,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tickText: {
    color: colors.white,
    fontSize: 36,
    fontFamily: fontFamily.bold,
  },

  modalTitle: {
    fontSize: fontSize.h5,
    fontFamily: fontFamily.semiBold,
    textAlign: 'center',
    marginTop: spacing.vertical.md,
    color: colors.black,
  },

  modalSub: {
    textAlign: 'center',
    color: colors.grayscale[70],
    marginTop: spacing.vertical.sm,
    lineHeight: 22,
    fontSize: fontSize.md,
    fontFamily: fontFamily.regular,
  },

  modalBtn: {
    backgroundColor: colors.primary,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.vertical.lg,
    width: '100%',
  },
});
