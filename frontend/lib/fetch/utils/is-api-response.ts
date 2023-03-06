import ApiResponse from "../../../models/api-response";

export default function isApiResponse(res: unknown): res is ApiResponse {
  return !!(res && typeof res === "object" && "errors" in res && "data" in res);
}
