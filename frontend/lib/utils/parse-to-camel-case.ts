import { ErrorApiResponse } from "@/models/api-response";

const parseErrorToCamelCase = (
  data: Record<string, string | number>
): ErrorApiResponse => ({
  message: typeof data.Message === "string" ? data.Message : "",
  statusCode: typeof data.StatusCode === "number" ? data.StatusCode : 400,
});

export default parseErrorToCamelCase;
