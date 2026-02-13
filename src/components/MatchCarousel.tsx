import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import colors from '../theme/colors';
import spacing from '../theme/spacing';
import { fontFamily, fontSize } from '../theme/typography';

const MatchCarousel = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://picsum.photos/600/400' }}
      style={styles.card}
      imageStyle={styles.image}
    >
      <Text style={styles.date}>22 July, 2025</Text>
      <Text style={styles.title}>
        Exciting match ahead, who will come out on top?
      </Text>

      <View style={styles.teams}>
        <Text style={styles.team}>Man City</Text>
        <Text style={styles.vs}>VS</Text>
        <Text style={styles.team}>Brighton</Text>
      </View>
    </ImageBackground>
  );
};

export default MatchCarousel;

const styles = StyleSheet.create({
  card: {
    height: 200,
    borderRadius: 20,
    padding: spacing.lg,
    marginTop: spacing.lg,
    justifyContent: 'space-between',
  },
  image: {
    borderRadius: 20,
  },
  date: {
    color: colors.white,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.medium,
  },
  title: {
    color: colors.white,
    fontSize: fontSize.h5,
    fontFamily: fontFamily.bold,
    lineHeight: 28,
  },
  teams: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  team: {
    color: colors.white,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
  },
  vs: {
    marginHorizontal: spacing.sm,
    color: colors.white,
    fontFamily: fontFamily.bold,
  },
});
