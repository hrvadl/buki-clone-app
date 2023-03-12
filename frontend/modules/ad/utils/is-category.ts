import { Category } from "@/models/category";

const isCategory = (data: unknown): data is Category[] =>
  !!(
    data &&
    typeof data === "object" &&
    Array.isArray(data) &&
    data.length > 0
  );

export default isCategory;
