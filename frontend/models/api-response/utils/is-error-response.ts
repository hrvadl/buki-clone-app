import { NotParsedApiResponse } from "..";

const isErrorResponse = (data: unknown): data is NotParsedApiResponse =>
  !!(
    data &&
    typeof data === "object" &&
    "StatusCode" in data &&
    typeof data.StatusCode === "number"
  );

export default isErrorResponse;
