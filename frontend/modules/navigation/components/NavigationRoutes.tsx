import {
  HomeScreen,
  LoginScreen,
  PreSignUpScreen,
  SearchScreen,
  SignUpScreen,
} from "@/screens";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import useVerifyToken from "../hooks/useVerifyToken";
import Stack from "../root-stack";

const headerOptions = {
  headerShown: false,
} as const;

const NavigationRoutes = () => {
  const { isLoading, isLogined } = useVerifyToken();

  if (isLoading)
    return (
      <View style={styles.LoaderWrapper}>
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator screenOptions={headerOptions}>
        {isLogined ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="LogIn" component={LoginScreen} />
            <Stack.Screen name="PreSignUp" component={PreSignUpScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  LoaderWrapper: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NavigationRoutes;
