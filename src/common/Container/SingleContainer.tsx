import { Card, Flex, Space, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import CommonButton from "../Antd/Button/CommonButton";
import BreadCrumb from "../Antd/BreadCrumb";

interface Props {
  title?: string;
  extra?: React.ReactNode;
  children: React.ReactNode;
}

const SingleContainer: React.FC<Props> = ({ children, title, extra }) => {
  const navigate = useNavigate();
  return (
    <>
      <Space direction='vertical' style={{ width: "100%" }}>
        <Flex align='center' justify='space-between' wrap>
          <CommonButton
            name='Previous Page'
            type='link'
            danger
            icon='weui:previous-filled'
            onClick={() => navigate(-1)}
          />
          <BreadCrumb />
        </Flex>

        <Card
          bordered={false}
          title={
            <Typography.Text strong style={{ fontSize: "1rem" }}>
              {title}
            </Typography.Text>
          }
          extra={extra}
          children={children}
          style={{ background: "transparent", boxShadow: "none" }}
        />
      </Space>
    </>
  );
};

export default SingleContainer;
