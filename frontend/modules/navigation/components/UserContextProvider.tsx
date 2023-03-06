import { User } from "@/models/user";
import React, { useState } from "react";
import { UserContext } from "../context/user-context";
import { UserContextType } from "../types/user-context";

type Props = {
  children: React.ReactNode;
};

const UserContextProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState<UserContextType>({
    setUser,
    user: null,
  });

  function setUser(user: User) {
    setUserData({ ...userData, user });
  }

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
