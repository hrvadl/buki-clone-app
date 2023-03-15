import Container from "@/design/container/Container";
import { Text } from "@/design/Text";
import GoBackTopBar from "@/design/top-bar/GoBackTopBar";
import { RootStackParamList } from "@/modules/navigation/types/root-stack";
import { ProfileItem, useProfile } from "@/modules/profile";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native-paper";

const Profile = () => {
  const { logOut, user } = useProfile();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  if (!user) {
    logOut();
    navigation.navigate("LogIn");
  }

  return (
    <>
      <GoBackTopBar title="Profile" onPressGoBack={() => navigation.goBack()} />
      <Container>
        <ProfileItem style={{ marginBottom: 20 }} {...user!} />
        <Button mode="contained" textColor="#fff" onPress={logOut}>
          <Text style={{ color: "#fff" }}>Log Out</Text>
        </Button>
      </Container>
    </>
  );
};

export default Profile;
