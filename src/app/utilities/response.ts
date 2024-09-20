import { Dispatch, SetStateAction } from "react";

export type ApiResponse<T> = Partial<{
  data: T;
  total: number;
  success: boolean;
  message: string;
  token: string;
}>;

export type ApiResult<T> = Partial<{
  data: T;
  success: boolean;
  message: string;
}>;

export type SetStateAnyOrNull = Dispatch<SetStateAction<unknown | null>>;
export type SetStateNullable<T> = Dispatch<SetStateAction<T | null>>;

export const errorStatus: Array<string | number> = [401, 403];
