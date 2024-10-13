import { FetchArgs } from "@reduxjs/toolkit/query";
import api from "../../../app/api/api";
import { ApiResponse } from "../../../app/utilities/response";
import { FilterDataTypes } from "../page/Orders";
import { OrderTypes } from "../types/orderTypes";

const orderEndpoint = api.injectEndpoints({
  endpoints: (builder) => ({
    getOrderList: builder.query<ApiResponse<OrderTypes[]>, FilterDataTypes>({
      query: (params): FetchArgs => ({
        url: `/member/invoice/`,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetOrderListQuery } = orderEndpoint;
