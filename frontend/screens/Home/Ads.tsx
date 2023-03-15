import Container from "@/design/container/Container";
import {
  AdHeader,
  Categories,
  ChosenCategoryContextProvider,
} from "@/modules/ad";
import { UserContext } from "@/modules/navigation/context/user-context";
import React, { useContext } from "react";

const Ads = () => {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <ChosenCategoryContextProvider>
        <AdHeader name={user?.name ?? ""} />
        <Categories style={{ paddingVertical: 10 }} />
      </ChosenCategoryContextProvider>
    </Container>
  );
};

export default Ads;
