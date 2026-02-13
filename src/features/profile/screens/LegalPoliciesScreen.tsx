import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import { fontFamily, fontSize } from '../../../theme/typography';

const LegalPoliciesScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.back} onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>←</Text>
        </Pressable>

        <Text style={styles.headerTitle}>Legal and Policies</Text>
      </View>

      {/* Content */}
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={true}
      >
        {/* Terms */}
        <Text style={styles.heading}>Terms</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare
          quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien,
          consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam
          est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
          {'\n\n'}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare
          quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien,
          consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam
          est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
        </Text>

        {/* Changes */}
        <Text style={[styles.heading, { marginTop: spacing.xl }]}>
          Changes to the Service and/or Terms:
        </Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare
          quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien,
          consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam
          est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
          {'\n\n'}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare
          quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien,
          consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam
          est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LegalPoliciesScreen;

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

  content: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xl,
  },

  heading: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.lg,
    color: colors.black,
    marginBottom: spacing.sm,
  },

  paragraph: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    color: colors.grayscale[70],
    lineHeight: 22,
  },
});
