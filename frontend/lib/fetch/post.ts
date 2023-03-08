import storage from "@/lib/local-storage";
import baseFetch from "./base";

export default async function post(
  url: URL | string,
  opt: RequestInit = {}
): Promise<unknown> {
  const token = await storage.read("token");
  return baseFetch(url, {
    ...opt,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(opt.headers ?? {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
}
