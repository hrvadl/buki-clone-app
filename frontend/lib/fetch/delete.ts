import storage from "@/lib/local-storage";
import baseFetch from "./base";

export default async function deleteReq(
  url: URL | string,
  opt: RequestInit = {}
): Promise<unknown> {
  const token = await storage.read("token");
  return baseFetch(url, {
    ...opt,
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...(opt.headers ?? {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
}
