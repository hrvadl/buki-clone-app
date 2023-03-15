import Container from "@/design/container/Container";
import { Text } from "@/design/Text";
import GoBackTopBar from "@/design/top-bar/GoBackTopBar";
import { RootStackParamList } from "@/modules/navigation/types/root-stack";
import { SafeAreaView } from "@/modules/platform";
import { SignUpForm } from "@/modules/sign-up";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import React from "react";
import { StyleSheet } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;

const SignUp = ({ navigation, route }: Props) => {
  const {
    params: { role },
  } = route;

  const onPressGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <GoBackTopBar onPressGoBack={onPressGoBack} title="Sign Up" />
      <Container>
        <SignUpForm role={role} />
        <Text
          variant="bodyLarge"
          style={styles.GoSignUpHint}
          onPress={() => navigation.navigate("LogIn")}
        >
          Already have an account?
        </Text>
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  GoSignUpHint: {
    textAlign: "center",
    marginTop: 20,
  },
});

export default SignUp;
