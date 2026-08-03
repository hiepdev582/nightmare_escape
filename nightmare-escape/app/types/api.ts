export interface PagingResponse<T> {
  data: T;
  total?: number;
  page?: number;
  pageSize?: number;
}

export interface AuthResponse {
  token: string;
  username: string;
  email: string;
}
