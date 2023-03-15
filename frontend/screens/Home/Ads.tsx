import Container from "@/design/container/Container";
import {
  AdHeader,
  Categories,
  ChosenCategoryContextProvider,
} from "@/modules/ad";
import { UserContext } from "@/modules/navigation/context/user-context";
import React, { useContext } from "react";
import { Text } from "react-native-paper";

const Ads = () => {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <ChosenCategoryContextProvider>
        <AdHeader name={user?.name ?? ""} />
        <Categories style={{ paddingVertical: 10 }} />
        <Text style={{ fontFamily: "Montserrat-Regular" }}>
          Whereas disregard and contempt for human rights have resulted
        </Text>
      </ChosenCategoryContextProvider>
    </Container>
  );
};

export default Ads;
