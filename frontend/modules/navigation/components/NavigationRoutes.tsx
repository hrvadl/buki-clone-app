import {
  HomeScreen,
  LoginScreen,
  PreSignUpScreen,
  SignUpScreen,
} from "@/screens";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";
import useVerifyToken from "../hooks/useVerifyToken";
import Stack from "../root-stack";

const headerOptions = {
  headerShown: false,
} as const;

const NavigationRoutes = () => {
  const { isLoading, isLogined } = useVerifyToken();

  if (isLoading) return <ActivityIndicator size="large" />;

  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator screenOptions={headerOptions}>
        {isLogined ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen name="PreSignUp" component={PreSignUpScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="LogIn" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRoutes;
