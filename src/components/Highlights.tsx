import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../theme/colors';
import spacing from '../theme/spacing';
import { fontFamily, fontSize } from '../theme/typography';

const DATA = [
  {
    id: '1',
    title: 'Fighting till the final whistle! ⚽',
    views: '24k views',
    image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d',
  },
  {
    id: '2',
    title: 'The Thrill of Victory & Pain of Defeat',
    views: '19k views',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2',
  },
];

const Highlights = () => {
  const navigation = useNavigation<any>();

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={DATA}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate('HighlightViewer')}
          style={styles.card}
        >
          <Image source={{ uri: item.image }} style={styles.image} />

          <View style={styles.views}>
            <Text style={styles.viewsText}>{item.views}</Text>
          </View>

          <Text style={styles.title}>{item.title}</Text>
        </Pressable>
      )}
    />
  );
};

export default Highlights;

const styles = StyleSheet.create({
  list: {
    paddingBottom: spacing.lg,
  },
  card: {
    width: 260,
    height: 300,
    borderRadius: 20,
    marginRight: spacing.md,
    overflow: 'hidden',
    backgroundColor: colors.grayscale[20],
  },
  image: {
    width: '100%',
    height: '100%',
  },
  views: {
    position: 'absolute',
    top: spacing.sm,
    left: spacing.sm,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 12,
  },
  viewsText: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.xs,
    color: colors.white,
  },
  title: {
    position: 'absolute',
    bottom: spacing.md,
    left: spacing.md,
    right: spacing.md,
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.lg,
    color: colors.white,
  },
});
