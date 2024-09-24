import { FetchArgs } from "@reduxjs/toolkit/query";
import api from "../../../app/api/api";
import { ApiResponse, ApiResult } from "../../../app/utilities/response";
import { LoginTypes } from "../types/AuthTypes";
import { CREATE_TAGS } from "../../../app/utilities/tags";
import { openNotification } from "../../../app/features/notificationSlice";
import { setAuth } from "../../../app/features/authSlice";

const authEndpoint = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ApiResponse<ApiResult>, LoginTypes>({
      query: (data): FetchArgs => ({
        url: "/auth/student/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data.success) {
          const { success, token } = data;
          dispatch(setAuth({ success, token }));
          dispatch(
            openNotification({
              description: "You have successfully logged in.",
            })
          );
        }
      },
      invalidatesTags: [CREATE_TAGS("PROFILE")],
    }),
    ////
  }),
});

export const { useLoginMutation } = authEndpoint;
