export default class HttpError extends Error {
  constructor(
    private readonly statusCode: number,
    message: string,
    options?: ErrorOptions
  ) {
    super(message, options);
  }
}
