import { Tabs } from "@/modules/home";
import { SafeAreaView } from "@/modules/platform";
import React from "react";

import { StyleSheet, View } from "react-native";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <Tabs />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: "100%",
  },
});

export default Home;
