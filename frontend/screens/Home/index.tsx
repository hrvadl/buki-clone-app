import Container from "@/design/container/Container";
import { HomeTabs } from "@/modules/navigation/types/home-tabs";
import { SafeAreaView } from "@/modules/platform";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Ads from "./Ads";
import Profile from "./Profile";

const Tab = createBottomTabNavigator<HomeTabs>();

const Home = () => {
  return (
    <SafeAreaView>
      <Container>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Ads" component={Ads} />
          </Tab.Navigator>
          <Tab.Screen name="Profile" component={Profile} />
        </NavigationContainer>
      </Container>
    </SafeAreaView>
  );
};

export default Home;
