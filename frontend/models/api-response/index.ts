export type NotParsedApiResponse = {
  StatusCode: number;
  Message?: string;
};

export interface ErrorApiResponse {
  statusCode: number;
  message?: string;
}

export default class ApiResponse<T = unknown> {
  Message: string = "";
  StatusCode?: T;
}
