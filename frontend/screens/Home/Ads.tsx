import Container from "@/design/container/Container";
import {
  AdHeader,
  Categories,
  ChosenCategoryContextProvider,
} from "@/modules/ad";
import LatestAds from "@/modules/ad/components/LatestAds";
import TopAds from "@/modules/ad/components/TopAds";
import { UserContext } from "@/modules/navigation/context/user-context";
import React, { useContext } from "react";
import { ScrollView, StyleSheet } from "react-native";

const Ads = () => {
  const { user } = useContext(UserContext);

  return (
    <ScrollView>
      <Container>
        <ChosenCategoryContextProvider>
          <AdHeader name={user?.name ?? ""} />
          <Categories style={styles.Categories} />
          <TopAds style={styles.Ads} />
          <LatestAds style={styles.Ads} />
        </ChosenCategoryContextProvider>
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Ads: {
    marginTop: 20,
  },
  Categories: {
    paddingVertical: 10,
  },
});

export default Ads;
