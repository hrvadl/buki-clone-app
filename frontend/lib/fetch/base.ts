import isErrorResponse from "@/models/api-response/utils/is-error-response";
import { HttpError } from "../error";
import parseErrorToCamelCase from "../utils/parse-to-camel-case";

export default async function baseFetch(
  url: URL | string,
  options: RequestInit
): Promise<unknown> {
  const response = await fetch(url, options);
  const resJson = await response.json();

  if (response.ok) return resJson;

  let message: string = "Something went wrong...";

  if (isErrorResponse(resJson))
    message = parseErrorToCamelCase(resJson).message ?? message;

  throw new HttpError(response.status, message, {
    cause: `fetching ${url} failed`,
  });
}
