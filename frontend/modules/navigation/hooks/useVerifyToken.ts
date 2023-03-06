import Environment from "@/Config";
import apiRequest from "@/lib/fetch";
import storage from "@/lib/local-storage";
import { isUser } from "@/models/user/utils/is-user";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user-context";

export default function useVerifyToken() {
  const { setUser, user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getToken = async () => {
      const token = await storage.read("token");
      if (!token) return setIsLoading(false);

      try {
        const url = new URL(Environment.REACT_APP_API_URL + "/api/auth/");
        const user = await apiRequest.get(url);

        if (!isUser(user)) return setIsLoading(false);

        setUser(user);
      } catch (e) {
        return setIsLoading(false);
      }
    };

    getToken();
  }, []);

  return { isLoading, isLogined: !!user };
}
