import { RootStackParamList } from "@/modules/navigation/types/root-stack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

const NotFound = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.Container}>
      <Image style={styles.Image} source={require("@/assets/not-found.png")} />
      <Text style={styles.Heading} variant="titleLarge">
        No teachers
      </Text>
      <Text style={styles.Text}>
        Looks like you have not liked for any teacher yet
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
  },
  Image: {
    marginTop: 30,
  },
});

export default NotFound;
