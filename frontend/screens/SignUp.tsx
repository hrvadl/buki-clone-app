import GoBackTopBar from "@/design/top-bar/GoBackTopBar";
import SafeAreaViewCrossPlatform from "@/modules/platform/SafeAreaView";
import useSignUp from "@/modules/sign-up/hooks/useSignUp";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import React, { useCallback } from "react";
import { StyleSheet, Text } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;

const MemoizedGoBackTopBar = React.memo(GoBackTopBar);

const SignUp = ({ navigation, route }: Props) => {
  const {
    params: { role },
  } = route;

  const onPressGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

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
      <MemoizedGoBackTopBar onPressGoBack={onPressGoBack} title="Sign Up" />
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

export default SignUp;
