import { HomeTabs } from "@/modules/navigation/types/home-tabs";
import Ads from "@/screens/Home/Ads";
import Favorites from "@/screens/Home/Favorites";
import Profile from "@/screens/Home/Profile";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

const Tab = createBottomTabNavigator<HomeTabs>();
const tabsOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarIconStyle: {},
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    height: 70,
  },
};

const Tabs = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator screenOptions={tabsOptions}>
      <Tab.Screen
        name="Ads"
        component={Ads}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.TabContainer}>
              <Image
                resizeMode="contain"
                style={[
                  styles.TabIcon,
                  { tintColor: focused ? theme.colors.primary : "" },
                ]}
                source={require("@/assets/home.png")}
              />
              <Text>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.TabContainer}>
              <Image
                resizeMode="contain"
                style={[
                  styles.TabIcon,
                  { tintColor: focused ? theme.colors.primary : "" },
                ]}
                source={require("@/assets/favorites.png")}
              />
              <Text>Favorites</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.TabContainer}>
              <Image
                resizeMode="contain"
                style={[
                  styles.TabIcon,
                  { tintColor: focused ? theme.colors.primary : "" },
                ]}
                source={require("@/assets/profile.png")}
              />
              <Text>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  TabIcon: {
    width: 25,
    height: 25,
  },
  TabContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Tabs;
