import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import colors from '../theme/colors';
import spacing from '../theme/spacing';
import { fontFamily, fontSize } from '../theme/typography';

const DATA = [
  {
    id: '1',
    title: "Liverpool: Will Arne Slot's side win Premier League?",
    image:
      'https://images.unsplash.com/photo-1518091043644-c1d4457512c6',
  },
  {
    id: '2',
    title: 'Real Madrid dominate Champions League again',
    image:
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20',
  },
];

const LatestNews = () => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={item => item.id}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
    />
  );
};

export default LatestNews;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 12,
    marginRight: spacing.md,
  },
  title: {
    flex: 1,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
    color: colors.black,
  },
});
