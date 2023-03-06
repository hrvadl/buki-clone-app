import { HttpError } from "../error";
import isApiResponse from "./utils/is-api-response";

export default async function baseFetch(
  url: URL,
  options: RequestInit
): Promise<unknown> {
  const response = await fetch(url, options);
  const resJson = await response.json();

  if (response.ok) return resJson;

  let opt: ErrorOptions = {};

  if (isApiResponse(resJson)) opt.cause = resJson.errors;
  throw new HttpError(response.status, `fetching ${url} failed`, opt);
}
