import { User } from "..";

export const isUser = (data: unknown): data is User =>
  !!(
    data &&
    typeof data === "object" &&
    "id" in data &&
    "email" in data &&
    "name" in data
  );
