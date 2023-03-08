import Container from "@/design/container/Container";
import LoginForm from "@/modules/login/components/LoginForm";
import SafeAreaViewCrossPlatform from "@/modules/platform/SafeAreaView";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;

const LogIn = ({ navigation }: Props) => {
  return (
    <SafeAreaViewCrossPlatform>
      <Container>
        <LoginForm />
        <Text
          variant="bodyLarge"
          style={styles.GoSignUpHint}
          onPress={() => navigation.navigate("PreSignUp")}
        >
          Don't have an account yet?
        </Text>
      </Container>
    </SafeAreaViewCrossPlatform>
  );
};

const styles = StyleSheet.create({
  GoSignUpHint: {
    textAlign: "center",
    marginTop: 20,
  },
});

export default LogIn;
