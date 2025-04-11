export interface APIResponse<T = unknown> {
  data: T | undefined | null;
  success: boolean;
  message: string | undefined | null;
  error: boolean;
}
