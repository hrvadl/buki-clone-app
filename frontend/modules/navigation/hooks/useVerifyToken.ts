import storage from "@/lib/local-storage";
import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { checkToken } from "../api/check-token";
import { UserContext } from "../context/user-context";

export default function useVerifyToken() {
  const { setUser, user } = useContext(UserContext);
  const { data, isLoading, error } = useQuery("check-token", checkToken, {
    retry: false,
  });

  useEffect(() => {
    if (data) setUser(data);
  }, [data]);

  useEffect(() => {
    if (error) storage.remove("token");
  }, [error]);

  return { isLoading, isLogined: Boolean(user) };
}
