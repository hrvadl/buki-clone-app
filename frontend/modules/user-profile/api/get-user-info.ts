import Environment from "@/Config";
import apiRequest from "@/lib/fetch";
import type { User } from "@/models/user";
import { isUser } from "@/models/user/utils/is-user";

const baseUrl = (id: number) =>
  new URL(Environment.REACT_APP_API_URL + "/api/user/" + id);

export const getUserInfo = async (id: number) => {
  const res = await apiRequest.get(baseUrl(id));

  if (!isUser(res)) throw new Error("Something went wrong");

  const userOmitExtra = {
    name: res.name,
    email: res.email,
    number: res.number,
  };

  const normalizedData: User = {
    ...res,
    ads: res.ads?.map((it) => ({ ...it, author: userOmitExtra as User })),
  };

  return normalizedData;
};
