import React from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  children: React.ReactNode;
  style?: StyleSheet.NamedStyles<unknown>;
};

const Container = ({ children, style }: Props) => {
  return <View style={[styles.Container, style]}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  Container: {
    padding: 20,
  },
});
