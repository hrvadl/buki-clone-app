import { createContext } from "react";
import { UserContextType } from "../types/user-context";

const initialUserContextData: UserContextType = {
  user: null,
  setUser(user) {},
};

export const UserContext = createContext<UserContextType>(
  initialUserContextData
);
