import { Space, Typography } from "antd";
import React from "react";
import useBreakpoints from "../../../hooks/useBreakpoints";

const SendOTP: React.FC = () => {
  const { lg } = useBreakpoints();
  return (
    <React.Fragment>
      <>
        <Space
          direction='vertical'
          align='center'
          style={{ width: "100%", marginBottom: "3rem" }}
        >
          <Typography.Text strong style={{ fontSize: lg ? "1.5rem" : "1rem" }}>
            MATCH OTP
          </Typography.Text>
          <Typography.Text type='secondary'>
            Enter your email and password to sign in
          </Typography.Text>
        </Space>
      </>
    </React.Fragment>
  );
};

export default SendOTP;
