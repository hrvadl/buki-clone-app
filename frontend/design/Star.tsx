import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { Avatar } from "react-native-paper";

type Props = {
  style?: ViewStyle;
  filled?: boolean;
  size: number;
};

const Star = ({ filled, style, size }: Props) => {
  return (
    <Avatar.Icon
      size={size}
      style={[styles.Star, style]}
      color={filled ? "#F6BE00" : "#000"}
      icon="star"
    />
  );
};

const styles = StyleSheet.create({
  Star: {
    backgroundColor: "transparent",
  },
});

export default Star;
