import { User } from "..";

export const isUser = (data: unknown): data is User =>
  !!(data && typeof data === "object" && "email" in data && "role" in data);
