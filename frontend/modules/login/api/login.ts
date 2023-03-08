import Environment from "@/Config";
import apiRequest from "@/lib/fetch";
import { isUser } from "@/models/user/utils/is-user";
import defaultLogInValues from "../mocks/default-form-values";

export const logIn = async (values: typeof defaultLogInValues) => {
  const url = new URL(Environment.REACT_APP_API_URL + "/api/auth/log-in");
  const user = await apiRequest.post(url, { body: JSON.stringify(values) });

  if (!isUser(user)) throw new Error("Log in failed");

  return user;
};
