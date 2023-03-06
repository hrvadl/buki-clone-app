import { User } from "@/models/user";

export type UserContextType = {
  user: User | null;
  setUser: (user: User) => void;
};
