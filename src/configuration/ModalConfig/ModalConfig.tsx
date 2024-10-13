import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { Modal, Typography } from "antd";
import { closeModal, ModalState } from "../../app/features/modalSlice";

const ModalConfig: React.FC = () => {
  const { open, title, content, width } = useAppSelector(ModalState);
  const dispatch = useAppDispatch();

  return (
    <Modal
      open={open}
      onCancel={() => dispatch(closeModal())}
      onOk={() => dispatch(closeModal())}
      width={width}
      footer={null}
      title={
        <Typography.Paragraph strong style={{ fontSize: "1rem" }}>
          {title}
        </Typography.Paragraph>
      }
      children={content}
    />
  );
};

export default ModalConfig;
