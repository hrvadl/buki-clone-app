import { Tabs } from "@/modules/home";
import React from "react";

import { StyleSheet, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.Container}>
      <Tabs />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: "100%",
  },
});

export default Home;
