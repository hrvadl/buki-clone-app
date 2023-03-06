import SafeAreaViewCrossPlatform from "@/modules/platform/SafeAreaView";
import React from "react";
import { Text } from "react-native";

type Props = {};

const LogIn = (props: Props) => {
  return (
    <SafeAreaViewCrossPlatform>
      <Text>LogIn</Text>
    </SafeAreaViewCrossPlatform>
  );
};

export default LogIn;
