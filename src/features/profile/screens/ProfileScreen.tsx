import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  Switch,
  Image,
} from 'react-native';
import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import { fontFamily, fontSize } from '../../../theme/typography';
import ArrowRight from '../../../assets/icons/ArrowRight';
import Person from '../../../assets/icons/Person';
import Wallet from '../../../assets/icons/Wallet';
import Lock from '../../../assets/icons/Lock';
import Unlock from '../../../assets/icons/Unlock';
import Shield from '../../../assets/icons/Shield';
import Globe from '../../../assets/icons/Globe';
import Trash from '../../../assets/icons/Trash';
import Legal from '../../../assets/icons/Legal';
import Question from '../../../assets/icons/Question';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Pressable style={styles.back}>
            <Text style={styles.backIcon}>←</Text>
          </Pressable>
          <Text style={styles.headerTitle}>Setting</Text>
        </View>

        {/* User */}
        <View style={styles.userRow}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150' }}
            style={styles.avatar}
          />
          <View style={{ marginLeft: spacing.md }}>
            <Text style={styles.name}>Andy Lexsian</Text>
            <Text style={styles.username}>@Andy1999</Text>
            <View style={styles.vip}>
              <Text style={styles.vipText}>VIP</Text>
            </View>
          </View>
        </View>

        {/* Section */}
        <Text style={styles.section}>Personal Info</Text>
        <Item title="Profile" icon={Person} onPress={() => navigation.navigate('ProfileInfo')}/>
        <Item title="Payment Method" icon={Wallet}/>

        <Text style={styles.section}>Security</Text>
        <Item title="Change Password" icon={Lock} onPress={() => navigation.navigate('ChangePassword')}/>
        <Item title="Forgot Password" icon={Unlock} onPress={() => navigation.navigate('ForgotPassword')}/>
        <Item title="Security" icon={Shield} onPress={() => navigation.navigate('Security')}/>

        <Text style={styles.section}>General</Text>
        <Item title="Language" icon={Globe} onPress={() => navigation.navigate('Language')}/>
        <Item title="Clear Cache" right="88 MB" icon={Trash}/>

        <Text style={styles.section}>About</Text>
        <Item title="Legal and Policies" icon={Legal} onPress={() => navigation.navigate('LegalPolicies')}/>
        <Item title="Help & Support" icon={Question} onPress={() => navigation.navigate('HelpSupport')}/>

        <View style={styles.item}>
          <Text style={styles.itemText}>Dark Mode</Text>
          <Switch />
        </View>

        {/* Logout */}
        <Pressable style={styles.logout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const Item = ({
  title,
  right,
  icon: Icon,
  onPress,
}: {
  title: string;
  right?: string;
  icon: React.FC<any>;
  onPress?: () => void;
}) => (
  <Pressable style={styles.item} onPress={onPress}>
    <View style={styles.left}>
      <Icon width={20} height={20} />
      <Text style={styles.itemText}>{title}</Text>
    </View>

    {right ? (
      <Text style={styles.right}>{right}</Text>
    ) : (
      <ArrowRight width={10} height={15} />
    )}
  </Pressable>
);


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

  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.xl,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },

  name: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.lg,
    color: colors.black,
  },

  username: {
    marginTop: spacing.xs,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    color: colors.grayscale[70],
  },

  vip: {
    marginTop: spacing.xs,
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },

  vipText: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.xs,
    color: colors.white,
  },

  section: {
    marginTop: spacing.xl,
    marginBottom: spacing.sm,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.sm,
    color: colors.grayscale[70],
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  itemText: {
    marginLeft: spacing.md,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.lg,
    color: colors.black,
  },

  arrow: {
    fontSize: 22,
    color: colors.grayscale[60],
  },

  right: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    color: colors.grayscale[60],
  },

  logout: {
    marginTop: spacing.xl,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 32,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },

  logoutText: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.lg,
    color: colors.primary,
  },
});
