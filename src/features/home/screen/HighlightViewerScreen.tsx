import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import { fontFamily, fontSize } from '../../../theme/typography';
import ArrowRight from '../../../assets/icons/ArrowRight';

const HighlightViewerScreen = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d',
          }}
          style={styles.background}
        />

        {/* Top Overlay */}
        <View style={styles.top}>
          <View style={styles.progressBar}>
            <View style={styles.progress} />
          </View>

          <View style={styles.topRow}>
            <View style={styles.views}>
              <Text style={styles.viewsText}>👁 24k views</Text>
            </View>

            <Pressable style={styles.close}>
              <Text style={styles.closeText}>✕</Text>
            </Pressable>
          </View>
        </View>

        {/* Comments */}
        <View style={styles.comments}>
          <Comment name="Joe Stanton" text="Good Game!" />
          <Comment name="Dennis Mosciski" text="Hilarious game 🔥" />
          <Comment name="James Wolf" text="Hopefully you can win, guys" />
        </View>

        {/* Right Actions */}
        <View style={styles.actions}>
          <Action emoji="❤️" />
          <Action emoji="💬" />
          <Action emoji="📌" />
          <Action emoji="↗️" />
        </View>

        {/* Bottom Input */}
        <View style={styles.inputRow}>
          <TextInput
            placeholder="Comment..."
            placeholderTextColor={colors.grayscale[60]}
            style={styles.input}
          />
          <Pressable style={styles.send}>
            <ArrowRight width={16} height={16} fill={colors.white} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HighlightViewerScreen;

/* ---------- Components ---------- */

const Comment = ({ name, text }: { name: string; text: string }) => (
  <View style={styles.comment}>
    <View style={styles.avatar} />
    <View>
      <Text style={styles.commentName}>{name}</Text>
      <Text style={styles.commentText}>{text}</Text>
    </View>
  </View>
);

const Action = ({ emoji }: { emoji: string }) => (
  <Pressable style={styles.action}>
    <Text style={styles.actionText}>{emoji}</Text>
  </Pressable>
);

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.black,
  },
  container: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },

  /* Top */
  top: {
    padding: spacing.md,
  },
  progressBar: {
    height: 3,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 2,
  },
  progress: {
    width: '30%',
    height: '100%',
    backgroundColor: '#E63946',
    borderRadius: 2,
  },
  topRow: {
    marginTop: spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  views: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 20,
  },
  viewsText: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.sm,
    color: colors.white,
  },
  close: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    color: colors.white,
    fontSize: 18,
  },

  /* Comments */
  comments: {
    position: 'absolute',
    bottom: 90,
    left: spacing.md,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.grayscale[40],
    marginRight: spacing.sm,
  },
  commentName: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.sm,
    color: colors.white,
  },
  commentText: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    color: colors.white,
  },

  /* Actions */
  actions: {
    position: 'absolute',
    right: spacing.md,
    bottom: 140,
  },
  action: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  actionText: {
    fontSize: 20,
  },

  /* Input */
  inputRow: {
    position: 'absolute',
    bottom: spacing.lg,
    left: spacing.md,
    right: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 24,
    paddingHorizontal: spacing.md,
  },
  input: {
    flex: 1,
    color: colors.white,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
  },
  send: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: spacing.sm,
  },
});
