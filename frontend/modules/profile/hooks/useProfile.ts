import storage from "@/lib/local-storage";
import { UserContext } from "@/modules/navigation/context/user-context";
import { useContext } from "react";

export default function useProfile() {
  const { user, setUser } = useContext(UserContext);

  const logOut = () => {
    setUser(null);
    storage.remove("token");
  };

  return { user, logOut };
}
