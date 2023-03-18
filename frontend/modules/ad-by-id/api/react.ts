import Environment from "@/Config";
import apiRequest from "@/lib/fetch";
import { isUser } from "@/models/user/utils/is-user";

const url = Environment.REACT_APP_API_URL + "/api/ad";

const unlike = async (id: number) => {
  const res = await apiRequest.post(url + "/unlike/" + id);

  if (!isUser(res)) throw new Error("Something went wrong");

  return res;
};

const like = async (id: number) => {
  const res = await apiRequest.post(url + "/like/" + id);

  if (!isUser(res)) throw new Error("Something went wrong");

  return res;
};

export type ReactProps = {
  isLiked: boolean;
  id: number;
};

export const react = async ({ isLiked, id }: ReactProps) =>
  isLiked ? unlike(id) : like(id);
