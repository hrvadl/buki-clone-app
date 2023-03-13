import { ErrorApiResponse } from "..";

const isApiError = (data: unknown): data is ErrorApiResponse =>
  !!(data && typeof data === "object" && "statusCode" in data);

export default isApiError;
