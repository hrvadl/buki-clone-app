import Container from "@/design/container/Container";
import { useProfile } from "@/modules/profile";
import React from "react";
import { Button, Text } from "react-native-paper";

type Props = {};

const Profile = (props: Props) => {
  const { logOut, user } = useProfile();

  return (
    <Container>
      <Button mode="contained" textColor="#fff" onPress={logOut}>
        <Text>Log Out</Text>
      </Button>
    </Container>
  );
};

export default Profile;
