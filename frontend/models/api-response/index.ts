export default class ApiResponse<T = unknown> {
  errors: string[] = [];
  data?: T;
}
