import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, spacing } from '../theme';

type ButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

export function Button({ label, onPress, disabled = false }: ButtonProps) {
  const [focused, setFocused] = useState(false);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        focused && styles.focused,
        disabled && styles.disabled,
      ]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.large,
    backgroundColor: colors.primary,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: 'transparent',
  },
  pressed: { backgroundColor: colors.primaryPressed },
  focused: { borderColor: colors.focus },
  disabled: { opacity: 0.5 },
  label: { color: colors.onPrimary, fontSize: 16, fontWeight: '600', textAlign: 'center' },
});
