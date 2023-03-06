import React from "react";
import NavigationRoutes from "./components/NavigationRoutes";
import UserContextProvider from "./components/UserContextProvider";

const Navigation = () => {
  return (
    <UserContextProvider>
      <NavigationRoutes />
    </UserContextProvider>
  );
};

export default Navigation;
