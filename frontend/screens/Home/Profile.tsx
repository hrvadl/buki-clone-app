import AddIcon from "@/design/add-icon/AddIcon";
import Container from "@/design/container/Container";
import { Text } from "@/design/Text";
import GoBackTopBar from "@/design/top-bar/GoBackTopBar";
import { RootStackParamList } from "@/modules/navigation/types/root-stack";
import { ProfileItem, useProfile } from "@/modules/profile";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";

const Profile = () => {
  const { logOut, user } = useProfile();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const goToAddScreen = () => {
    navigation.navigate("AddAd");
  };

  if (!user) {
    logOut();
    navigation.navigate("LogIn");
  }

  return (
    <>
      <GoBackTopBar title="Profile" onPressGoBack={() => navigation.goBack()} />
      <Container>
        <ProfileItem style={{ marginBottom: 20 }} {...user!} />
        <TouchableOpacity onPress={goToAddScreen} style={styles.AddNew}>
          <AddIcon style={{ marginRight: 10 }} />
          <Text variant="bodyLarge">Add new ad</Text>
        </TouchableOpacity>
        <Button mode="contained" textColor="#fff" onPress={logOut}>
          <Text style={{ color: "#fff" }}>Log Out</Text>
        </Button>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  AddNew: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default Profile;
