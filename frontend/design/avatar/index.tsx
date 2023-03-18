import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";
import { Text } from "../Text";

type Props = {
  letter: string;
  style?: ViewStyle;
};

const Avatar = ({ letter, style }: Props) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.AvatarContainer,
        style,
        { backgroundColor: theme.colors.primary },
      ]}
    >
      <Text style={styles.Text} variant="headlineSmall">
        {letter}
      </Text>
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
  },
  Text: {
    color: "#fff",
  },
});
