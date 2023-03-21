import React, { memo } from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";
import { Text } from "../Text";

type Props = {
  letter: string;
  style?: ViewStyle;
  onPress?: () => void;
};

const Avatar = ({ letter, style, onPress }: Props) => {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.AvatarContainer,
        style,
        { backgroundColor: theme.colors.primary },
      ]}
    >
      <Text style={styles.Text} variant="headlineSmall">
        {letter}
      </Text>
    </Pressable>
  );
};

export default memo(Avatar);

const styles = StyleSheet.create({
  AvatarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: 40,
    height: 40,
    borderRadius: 1000,
  },
  Text: {
    color: "#fff",
  },
});
