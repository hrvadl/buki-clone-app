import { Ad } from "../index";

const isAd = (data: unknown): data is Ad =>
  !!(
    data &&
    typeof data === "object" &&
    "id" in data &&
    "author" in data &&
    "subject" in data
  );

export default isAd;
