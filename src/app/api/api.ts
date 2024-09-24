import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { clearAuth } from "../features/authSlice";
import { TagTypes } from "../utilities/tags";
import siteConfig from "../../settings/site.settings";
import { errorStatus } from "../utilities/response";

export const baseUrl: string = siteConfig.urls.isDev
  ? siteConfig.urls.dev
  : siteConfig.urls.prod;

const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> =
  fetchBaseQuery({
    baseUrl,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

export const api = createApi({
  reducerPath: "root",
  baseQuery: async (args, api, extraOptions) => {
    const response = await baseQuery(args, api, extraOptions);
    if (response.error && errorStatus.includes(response.error.status)) {
      api.dispatch(clearAuth());
      localStorage.clear();
    }
    return response;
  },
  tagTypes: Object.values(TagTypes),
  endpoints: () => ({}),
});

export default api;
