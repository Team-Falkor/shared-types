type ApiError =
  | {
      message: string;
      code?: string;
    }
  | boolean;

export interface MetaResponse {
  total: number;
  totalPages: number;
  currentPage: number;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string | undefined | null;
  data?: T | undefined | null;
  error?: ApiError;
  meta?: MetaResponse;
}
