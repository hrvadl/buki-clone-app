import storage from "@/lib/local-storage";
import baseFetch from "./base";

export default async function get(
  url: URL | string,
  opt: RequestInit = {}
): Promise<unknown> {
  const token = await storage.read("token");

  return baseFetch(url, {
    ...opt,
    method: "GET",
    headers: {
      ...(opt.headers ?? {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
}
