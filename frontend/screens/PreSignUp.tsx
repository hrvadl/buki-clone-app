import SafeAreaViewCrossPlatform from "@/modules/platform/SafeAreaView";
import RoleForm from "@/modules/pre-sign-up/components/RoleForm";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "PreSignUp">;

const PreSignUp = ({ navigation }: Props) => {
  return (
    <SafeAreaViewCrossPlatform>
      <Text style={styles.FormHeader}>Who are you?</Text>
      <RoleForm />
    </SafeAreaViewCrossPlatform>
  );
};

const styles = StyleSheet.create({
  FormHeader: {
    textAlign: "center",
  },
});

export default PreSignUp;
