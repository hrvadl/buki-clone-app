import React from "react";
import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";

type Props = {
  children: React.ReactNode;
};

export default function SafeAreaViewCrossPlatform(props: Props) {
  return (
    <SafeAreaView style={styles.AndroidSafeArea} {...props}>
      {props.children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
