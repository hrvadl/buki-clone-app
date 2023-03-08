import storage from "@/lib/local-storage";
import { ErrorApiResponse } from "@/models/api-response";
import { User } from "@/models/user";
import { UserContext } from "@/modules/navigation/context/user-context";
import { useContext, useEffect } from "react";
import { useMutation } from "react-query";
import { logIn } from "../api/login";
import defaultLogInValues from "../mocks/default-form-values";

export default function useLoginMutation() {
  const { mutate, error, data } = useMutation<
    User & { token: string },
    ErrorApiResponse | Error,
    typeof defaultLogInValues
  >(logIn);
  const { setUser, user } = useContext(UserContext);

  useEffect(() => {
    if (!data) return;

    setUser(data);
    storage.add("token", data.token);
  }, [data]);

  return { mutate, error, success: !!user };
}
