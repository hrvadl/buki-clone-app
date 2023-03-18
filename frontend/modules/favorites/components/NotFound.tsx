import { Text } from "@/design/Text";
import { UserContext } from "@/modules/navigation/context/user-context";
import { RootStackParamList } from "@/modules/navigation/types/root-stack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

const NotFound = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { user } = useContext(UserContext);

  if (!user) return null;

  const role = +user.role === 0 ? "student" : "teacher";

  return (
    <View style={styles.Container}>
      <Image style={styles.Image} source={require("@/assets/not-found.png")} />
      <Text style={styles.Heading} variant="boldLarger">
        No {role}s
      </Text>
      <Text style={styles.Text}>
        Looks like you have not liked for any {role} yet
      </Text>
      <Button
        textColor="#fff"
        mode="contained"
        onPress={() =>
          navigation.navigate("Home", {
            screen: "Ads",
          })
        }
      >
        Explore teachers
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: { alignItems: "center" },
  Heading: {
    marginVertical: 15,
    fontWeight: "bold",
  },
  Text: {
    marginBottom: 15,
    textAlign: "center",
  },
  Image: {
    marginTop: 30,
  },
});

export default NotFound;
