import { notification } from "antd";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/store";
import {
  NotificationState,
  clearNotification,
} from "../../app/features/notificationSlice";

const NotificationConfig: React.FC = () => {
  const { type, description, placement } = useAppSelector(NotificationState);
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (description && type) {
      const message = {
        success: "Operation completed successfully.",
        error: "An error occurred while processing your request.",
        warning: "Please check the warning details.",
        info: "Here is some relevant information.",
      }[type];

      api[type]({
        message,
        description,
        placement,
      });

      dispatch(clearNotification());
    }
  }, [type, description, placement, api, dispatch]);

  return <React.Fragment>{contextHolder}</React.Fragment>;
};

export default NotificationConfig;
