import { message, Modal } from "antd";
import React from "react";

type ConfirmationModalTypes = {
  title?: React.ReactNode;
  content?: React.ReactNode;
  onConfirm: () => void | Promise<void>;
};

const confirmationModal = ({
  title = "ARE YOU SURE",
  content = "Do you really want to delete this record? If you delete it, you can't recover it. Click OK if you agree.",
  onConfirm,
}: ConfirmationModalTypes): void => {
  Modal.confirm({
    title,
    content,
    maskClosable: true,
    onOk: async () => {
      try {
        await onConfirm?.();
      } catch (error) {
        console.error("Confirmation action failed:", error);
        message.error("Confirmation action failed:");
      }
    },
  });
};

export default confirmationModal;
