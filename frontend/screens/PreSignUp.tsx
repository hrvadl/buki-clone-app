import Container from "@/design/container/Container";
import { Text } from "@/design/Text";
import { RootStackParamList } from "@/modules/navigation/types/root-stack";
import { SafeAreaView } from "@/modules/platform";
import RoleForm from "@/modules/pre-sign-up/components/RoleForm";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "PreSignUp">;

const PreSignUp = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <Container>
        <Text variant="headlineMedium" style={styles.FormHeader}>
          Who are you?
        </Text>
        <RoleForm />
        <Text
          variant="bodyLarge"
          style={styles.GoLoginHint}
          onPress={() => navigation.navigate("LogIn")}
        >
          Already have an account?
        </Text>
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  FormHeader: {
    textAlign: "center",
  },
  GoLoginHint: {
    textAlign: "center",
    marginTop: 20,
  },
});

export default PreSignUp;
