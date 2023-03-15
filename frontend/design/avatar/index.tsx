import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Text } from "../Text";
import generateColor from "./utils/generate-color";

type Props = {
  letter: string;
  style?: ViewStyle;
};

const Avatar = ({ letter, style }: Props) => {
  return (
    <View style={[styles.AvatarContainer, style]}>
      <Text variant="headlineSmall">{letter}</Text>
    </View>
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
    backgroundColor: generateColor(),
  },
});
