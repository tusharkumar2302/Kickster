import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import spacing from '../theme/spacing';
import { fontFamily, fontSize } from '../theme/typography';
import colors from '../theme/colors';

import Search from '../assets/icons/Search';
import Bell from '../assets/icons/Bell';

const Header = () => {
  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150' }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.welcome}>Hi Welcome 👋</Text>
          <Text style={styles.name}>Rudolph Schroeder</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <Pressable style={styles.icon}>
          <Search width={20} height={20} />
        </Pressable>

        <Pressable style={styles.icon}>
          <Bell width={20} height={20} />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: spacing.sm,
  },
  welcome: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    color: colors.grayscale[70],
  },
  name: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.lg,
    color: colors.black,
  },
  actions: {
    flexDirection: 'row',
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.grayscale[20],
    marginLeft: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
