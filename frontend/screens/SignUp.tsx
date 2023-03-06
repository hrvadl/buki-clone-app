import SafeAreaViewCrossPlatform from "@/modules/platform/SafeAreaView";
import useSignUp from "@/modules/sign-up/hooks/useSignUp";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import React from "react";
import { StyleSheet, Text } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;

const PreSignUp = ({ navigation, route }: Props) => {
  const {
    params: { role },
  } = route;

  const {
    changeEmailHandler,
    changeNameHandler,
    changePasswordHandler,
    signUpHandler,
    email,
    name,
    password,
  } = useSignUp();

  return (
    <SafeAreaViewCrossPlatform>
      <Text>{role}</Text>
    </SafeAreaViewCrossPlatform>
  );
};

const styles = StyleSheet.create({
  Form: {
    display: "flex",
    flexDirection: "column",
  },
  Input: {
    marginTop: 40,
  },
});

export default PreSignUp;
