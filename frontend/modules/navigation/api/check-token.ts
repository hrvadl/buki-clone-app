import Environment from "@/Config";
import apiRequest from "@/lib/fetch";
import storage from "@/lib/local-storage";
import { isUser } from "@/models/user/utils/is-user";

export async function checkToken() {
  const url = new URL(Environment.REACT_APP_API_URL + "/api/user/auth/");
  const token = await storage.read("token");
  if (!token) return;
  const user = await apiRequest.get(url);

  if (!isUser(user)) throw new Error("User not found");

  return user;
}
