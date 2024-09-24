import api from "../../../app/api/api";
import { ApiResponse } from "../../../app/utilities/response";
import { CREATE_TAGS } from "../../../app/utilities/tags";
import { ProfileTypes } from "../types/ProfileTypes";

const profileEndpoint = api.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<ApiResponse<ProfileTypes>, void>({
      query: () => ({
        url: "/student/profile",
      }),
      providesTags: [CREATE_TAGS("PROFILE")],
    }),
  }),
});

export const { useGetProfileQuery } = profileEndpoint;
