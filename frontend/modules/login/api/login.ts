import Environment from "@/Config";
import apiRequest from "@/lib/fetch";
import { User } from "@/models/user";
import { isUser } from "@/models/user/utils/is-user";
import defaultLogInValues from "../mocks/default-form-values";

const isDataAuthedUser = (data: unknown): data is User & { token: string } =>
  isUser(data) && "token" in data;

export const logIn = async (values: typeof defaultLogInValues) => {
  const url = new URL(Environment.REACT_APP_API_URL + "/api/auth/log-in");
  const user = await apiRequest.post(url, { body: JSON.stringify(values) });

  if (!isDataAuthedUser(user)) throw new Error("Log in failed");

  return user;
};
