import Environment from "@/Config";
import apiRequest from "@/lib/fetch";
import { User } from "@/models/user";
import { isUser } from "@/models/user/utils/is-user";

const baseUrl = Environment.REACT_APP_API_URL + "/api/user/search";

const isArrayOfUsers = (data: unknown): data is User[] =>
  Boolean(
    data &&
      typeof data === "object" &&
      Array.isArray(data) &&
      (data.length === 0 || isUser(data[0]))
  );

export const findUsers = async (search: string) => {
  const res = await apiRequest.get(baseUrl + "?name=" + search);

  if (!isArrayOfUsers(res)) throw new Error("Something went wrong");

  return res;
};
