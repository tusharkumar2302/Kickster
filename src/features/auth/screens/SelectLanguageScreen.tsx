import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import { fontFamily, fontSize } from '../../../theme/typography';

const SelectLanguageScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const [items, setItems] = useState([
    { label: 'English', value: 'en' },
    { label: 'Hindi', value: 'hi' },
    { label: 'Spanish', value: 'es' },
    { label: 'French', value: 'fr' },
  ]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Select your Language</Text>

        <Text style={styles.subtitle}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>

        <Text style={styles.label}>Language</Text>

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Select"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          textStyle={styles.dropdownText}
          placeholderStyle={styles.placeholder}
          arrowIconStyle={{ tintColor: colors.grayscale[70] }}
        />
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SelectLanguageScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.white,
  },

  container: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
  },

  title: {
    marginTop: spacing.xl,
    fontFamily: fontFamily.bold,
    fontSize: fontSize.h4,
    color: colors.black,
    textAlign: 'center',
  },

  subtitle: {
    marginTop: spacing.sm,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    color: colors.grayscale[70],
    textAlign: 'center',
    lineHeight: 20,
  },

  label: {
    marginTop: spacing.xl,
    marginBottom: spacing.sm,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
    color: colors.grayscale[80],
  },

  dropdown: {
    borderRadius: 28,
    borderColor: 'transparent',
    backgroundColor: colors.secondary,
    paddingHorizontal: spacing.lg,
    minHeight: 52,
  },

  dropdownContainer: {
    borderRadius: 20,
    borderColor: colors.line,
  },

  dropdownText: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    color: colors.black,
  },

  placeholder: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    color: colors.grayscale[60],
  },

  button: {
    marginHorizontal: spacing.xl,
    marginBottom: spacing.lg,
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
