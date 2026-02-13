import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import { fontFamily, fontSize } from '../../../theme/typography';
import { useNavigation } from '@react-navigation/native';

const ProfileInfoScreen = () => {
  const navigation = useNavigation();

  const [gender, setGender] = useState<'male' | 'female'>('male');

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
          <Text style={styles.headerTitle}>Profile</Text>
        </View>

        {/* Avatar */}
        <View style={styles.avatarWrapper}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/200' }}
            style={styles.avatar}
          />
          <Pressable style={styles.editAvatar}>
            <Text style={styles.editIcon}>✎</Text>
          </Pressable>
        </View>

        {/* Form */}
        <Label text="First Name" />
        <TextInput value="Andy" style={styles.input} />

        <Label text="Last Name" />
        <TextInput value="Lexsian" style={styles.input} />

        <Label text="E-mail" />
        <TextInput
          value="Andylexian22@gmail.com"
          style={styles.input}
          keyboardType="email-address"
        />

        <Label text="Date of Birth" />
        <View style={styles.inputWithIcon}>
          <TextInput value="24 february 1996" style={styles.flexInput} />
          <Text style={styles.calendar}>📅</Text>
        </View>

        <Label text="Gender" />
        <View style={styles.genderRow}>
          <Pressable
            style={[
              styles.genderBtn,
              gender === 'male' && styles.genderActive,
            ]}
            onPress={() => setGender('male')}
          >
            <Text
              style={[
                styles.genderText,
                gender === 'male' && styles.genderTextActive,
              ]}
            >
              Male
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.genderBtn,
              gender === 'female' && styles.genderActive,
            ]}
            onPress={() => setGender('female')}
          >
            <Text
              style={[
                styles.genderText,
                gender === 'female' && styles.genderTextActive,
              ]}
            >
              Female
            </Text>
          </Pressable>
        </View>

        <Label text="Location" />
        <TextInput
          multiline
          numberOfLines={4}
          value="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          style={styles.textArea}
        />

        {/* Save */}
        <Pressable style={styles.saveBtn} disabled>
          <Text style={styles.saveText}>Save Changes</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileInfoScreen;

/* ---------- Small helper ---------- */
const Label = ({ text }: { text: string }) => (
  <Text style={styles.label}>{text}</Text>
);

/* ---------- Styles ---------- */
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

  avatarWrapper: {
    alignItems: 'center',
    marginTop: spacing.xl,
    marginBottom: spacing.xl,
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },

  editAvatar: {
    position: 'absolute',
    bottom: 4,
    right: '38%',
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  editIcon: {
    color: colors.white,
    fontSize: 14,
  },

  label: {
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    color: colors.grayscale[70],
  },

  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 28,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
    color: colors.black,
  },

  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 28,
    paddingHorizontal: spacing.lg,
  },

  flexInput: {
    flex: 1,
    paddingVertical: spacing.md,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
    color: colors.black,
  },

  calendar: {
    fontSize: 18,
    color: colors.primary,
  },

  genderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.sm,
  },

  genderBtn: {
    width: '48%',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 28,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },

  genderActive: {
    backgroundColor: colors.primary,
  },

  genderText: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
    color: colors.primary,
  },

  genderTextActive: {
    color: colors.white,
  },

  textArea: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 20,
    padding: spacing.lg,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    color: colors.grayscale[70],
    textAlignVertical: 'top',
  },

  saveBtn: {
    marginTop: spacing.xl,
    backgroundColor: colors.grayscale[30],
    borderRadius: 32,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },

  saveText: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.lg,
    color: colors.grayscale[60],
  },
});
