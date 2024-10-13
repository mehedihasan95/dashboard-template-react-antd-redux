import { type Dispatch } from "@reduxjs/toolkit";
import { openNotification } from "../features/notificationSlice";
import { ApiResponse } from "./response";
import { closeModal } from "../features/modalSlice";

interface QueryFulfilledResponse<T> {
  data: ApiResponse<T>;
}

interface QueryError {
  error: {
    status: number;
    data: { message: string; success: boolean };
  };
}

export const onQueryResponse = async <T>(
  queryFulfilled: Promise<QueryFulfilledResponse<T>>,
  dispatch: Dispatch,
  message?: string
) => {
  try {
    const response = await queryFulfilled;
    dispatch(closeModal());
    dispatch(
      openNotification({
        description: message || response.data.message,
      })
    );
  } catch (err) {
    const error = err as QueryError;
    dispatch(
      openNotification({
        type: "error",
        description: message || error.error.data.message,
        placement: "bottomLeft",
      })
    );
  }
};
