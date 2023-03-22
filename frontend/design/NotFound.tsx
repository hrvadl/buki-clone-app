import React from "react";
import { Image, StyleSheet, View, ViewStyle } from "react-native";
import { Text } from "./Text";

type Props = {
  style?: ViewStyle;
  title: string;
  subtitle: string;
};

const NotFound = ({ subtitle, title, style }: Props) => {
  return (
    <View style={[styles.Container, style]}>
      <Image style={styles.Image} source={require("@/assets/not-found.png")} />
      <Text style={styles.Heading} variant="boldLarger">
        {title}
      </Text>
      <Text style={styles.Text}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: { alignItems: "center" },
  Heading: {
    marginVertical: 15,
    fontWeight: "bold",
  },
  Text: {
    marginBottom: 15,
    textAlign: "center",
  },
  Image: {
    marginTop: 30,
  },
});

export default NotFound;
