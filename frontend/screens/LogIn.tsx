import Container from "@/design/container/Container";
import { LoginForm } from "@/modules/login";
import { SafeAreaView } from "@/modules/platform";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import React from "react";
import { StyleSheet } from "react-native";
import { Appbar, Text } from "react-native-paper";

type Props = NativeStackScreenProps<RootStackParamList, "LogIn">;

const LogIn = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <Container>
        <Appbar.Header>
          <Appbar.Content title="Log In" />
        </Appbar.Header>
        <LoginForm />
        <Text
          variant="bodyLarge"
          style={styles.GoSignUpHint}
          onPress={() => navigation.navigate("PreSignUp")}
        >
          Don't have an account yet?
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

export default LogIn;
