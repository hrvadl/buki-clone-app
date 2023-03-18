import React from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";
import { Avatar, useTheme } from "react-native-paper";

type Props = {
  style?: ViewStyle;
  color?: string;
  onPress: () => void;
};

const LikeButton = ({ style, color = "#fff", onPress }: Props) => {
  const theme = useTheme();

  return (
    <Pressable style={style} onPress={onPress}>
      <Avatar.Icon
        size={50}
        color={color}
        style={[styles.Button, { backgroundColor: theme.colors.primary }]}
        icon="heart"
      />
    </Pressable>
  );
};

export default LikeButton;

const styles = StyleSheet.create({
  Button: {
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
