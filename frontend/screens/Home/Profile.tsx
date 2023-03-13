import Container from "@/design/container/Container";
import GoBackTopBar from "@/design/top-bar/GoBackTopBar";
import { RootStackParamList } from "@/modules/navigation/types/root-stack";
import { ProfileItem, useProfile } from "@/modules/profile";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text } from "react-native-paper";

type Props = {};

const Profile = ({}: Props) => {
  const { logOut, user } = useProfile();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  if (!user) return logOut();

  return (
    <>
      <GoBackTopBar title="Profile" onPressGoBack={() => navigation.goBack()} />
      <Container>
        <ProfileItem style={{ marginBottom: 20 }} {...user} />
        <Button mode="contained" textColor="#fff" onPress={logOut}>
          <Text>Log Out</Text>
        </Button>
      </Container>
    </>
  );
};

export default Profile;
