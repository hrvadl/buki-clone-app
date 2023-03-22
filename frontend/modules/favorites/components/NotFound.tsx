import NotFound from "@/design/NotFound";
import { RootStackParamList } from "@/modules/navigation/types/root-stack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

const NotFoundFavorites = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.Container}>
      <NotFound
        subtitle="Seems like you haven't like any ad yet"
        title="No ads"
      />
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
});

export default NotFoundFavorites;
