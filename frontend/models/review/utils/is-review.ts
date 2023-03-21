import { Review } from "..";

export const isReview = (data: unknown): data is Review =>
  !!(data && typeof data === "object" && "text" in data && "rate" in data);
