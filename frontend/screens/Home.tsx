import SafeAreaViewCrossPlatform from "@/modules/platform/SafeAreaView";
import React from "react";
import { Text } from "react-native";

type Props = {};

const Home = (props: Props) => {
  return (
    <SafeAreaViewCrossPlatform>
      <Text>Home</Text>
    </SafeAreaViewCrossPlatform>
  );
};

export default Home;
