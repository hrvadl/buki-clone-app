import Container from "@/design/container/Container";
import { SafeAreaView } from "@/modules/platform";
import React from "react";
import { Text } from "react-native";

const Home = () => {
  return (
    <SafeAreaView>
      <Container>
        <Text>Home</Text>
      </Container>
    </SafeAreaView>
  );
};

export default Home;
