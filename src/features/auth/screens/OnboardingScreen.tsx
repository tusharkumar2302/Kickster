import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Pressable,
  SafeAreaView,
} from 'react-native';

import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import { fontFamily, fontSize } from '../../../theme/typography';
import { STRINGS } from '../../../constants/strings';
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get('window');

const SLIDES = [
  {
    id: '1',
    image: require('../../../assets/images/Onboarding1.png'),
  },
  {
    id: '2',
    image: require('../../../assets/images/Onboarding2.png'),
  },
  {
    id: '3',
    image: require('../../../assets/images/Onboarding3.png'),
  },
];

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const ref = useRef<FlatList>(null);

 const onNext = () => {
  if (index < SLIDES.length - 1) {
    ref.current?.scrollToIndex({ index: index + 1 });
  } else {
    navigation.navigate('SignIn');
  }
};


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={ref}
        data={SLIDES}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        onMomentumScrollEnd={e => {
          const i = Math.round(e.nativeEvent.contentOffset.x / width);
          setIndex(i);
        }}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />

            <Text style={styles.title}>
              {STRINGS.onboarding.slides[index].title}
            </Text>

            <Text style={styles.description}>
              {STRINGS.onboarding.slides[index].description}
            </Text>
          </View>
        )}
      />

      {/* Pagination */}
      <View style={styles.dots}>
        {SLIDES.map((_, i) => (
          <View key={i} style={[styles.dot, i === index && styles.activeDot]} />
        ))}
      </View>

      {/* Button */}
      <Pressable style={styles.button} onPress={onNext}>
        <Text style={styles.buttonText}>
          {STRINGS.onboarding.slides[index].button}
        </Text>
      </Pressable>

      {/* Footer text (last screen only visually exists in design) */}
      {index === 2 && (
        <Text style={styles.footer}>
          Don’t have an account? <Text style={styles.link}>Register</Text>
        </Text>
      )}
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  slide: {
    width,
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },

  image: {
    width: width - spacing.xl * 2,
    height: 420,
    resizeMode: 'cover',
    borderRadius: 28,
    marginTop: spacing.vertical.lg,
  },

  title: {
    marginTop: spacing.lg,
    textAlign: 'center',
    fontFamily: fontFamily.bold,
    fontSize: fontSize.h5,
    color: colors.black,
  },

  description: {
    marginTop: spacing.sm,
    textAlign: 'center',
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    color: colors.grayscale[70],
    paddingHorizontal: spacing.sm,
  },

  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.lg,
    marginBottom: spacing.md,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.grayscale[30],
    marginHorizontal: spacing.xs,
  },

  activeDot: {
    width: 20,
    backgroundColor: colors.primary,
  },

  button: {
    marginHorizontal: spacing.xl,
    marginBottom: spacing.md,
    paddingVertical: spacing.md,
    borderRadius: 32,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.lg,
  },

  footer: {
    marginBottom: spacing.lg,
    textAlign: 'center',
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    color: colors.grayscale[100],
  },

  link: {
    color: colors.primary,
    fontFamily: fontFamily.medium,
  },
});
