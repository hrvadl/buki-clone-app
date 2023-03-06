import Home from "@/screens/Home";
import LogIn from "@/screens/LogIn";
import PreSignUp from "@/screens/PreSignUp";
import SignUp from "@/screens/SignUp";
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
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <>
            <Stack.Screen name="PreSignUp" component={PreSignUp} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="LogIn" component={LogIn} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRoutes;
