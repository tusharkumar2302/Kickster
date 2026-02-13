import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Switch,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import { fontFamily, fontSize } from '../../../theme/typography';

const SecurityScreen = () => {
  const navigation = useNavigation();

  const [faceId, setFaceId] = useState(true);
  const [remember, setRemember] = useState(true);
  const [touchId, setTouchId] = useState(true);

  const Row = ({
    label,
    value,
    onChange,
    last,
  }: {
    label: string;
    value: boolean;
    onChange: (v: boolean) => void;
    last?: boolean;
  }) => (
    <View style={[styles.row, last && styles.noBorder]}>
      <Text style={styles.rowText}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{
          false: colors.grayscale[30],
          true: colors.primary,
        }}
        thumbColor={colors.white}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.back} onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>←</Text>
        </Pressable>

        <Text style={styles.headerTitle}>Security</Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <Row label="Face ID" value={faceId} onChange={setFaceId} />
        <Row
          label="Remember Password"
          value={remember}
          onChange={setRemember}
        />
        <Row label="Touch ID" value={touchId} onChange={setTouchId} last />
      </View>
    </SafeAreaView>
  );
};

export default SecurityScreen;

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

  card: {
    marginTop: spacing.xl,
    marginHorizontal: spacing.xl,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 16,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xs,
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
});
