import React from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";
import { Text } from "../Text";

type Props = {
  isActive: boolean;
  name: string;
  style?: ViewStyle;
  onSelect: (name: string) => void;
};

const Tab = ({ name, style, onSelect, isActive }: Props) => {
  const theme = useTheme();

  return (
    <Pressable onPress={() => onSelect(name)} style={[style]}>
      <Text
        style={[
          isActive
            ? {
                color: theme.colors.primary,
                textDecorationLine: "underline",
              }
            : {},
          style,
        ]}
        variant="titleLarge"
      >
        {name}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default Tab;
