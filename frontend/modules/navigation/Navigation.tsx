import theme from "@/design";
import React from "react";
import { Provider } from "react-native-paper";
import NavigationRoutes from "./components/NavigationRoutes";
import UserContextProvider from "./components/UserContextProvider";

const Navigation = () => {
  return (
    <UserContextProvider>
      <Provider theme={theme}>
        <NavigationRoutes />
      </Provider>
    </UserContextProvider>
  );
};

export default Navigation;
