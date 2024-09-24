import { Space, Typography } from "antd";
import React from "react";
import useBreakpoints from "../../../hooks/useBreakpoints";

interface Props {
  title: string;
  description: string;
}

const AuthHeader: React.FC<Props> = ({ title, description }) => {
  const { lg } = useBreakpoints();

  return (
    <React.Fragment>
      <Space
        direction='vertical'
        align='center'
        style={{ width: "100%", marginBottom: "3rem" }}
      >
        <Typography.Text
          strong
          style={{
            fontSize: lg ? "1.5rem" : "1rem",
            textTransform: "uppercase",
          }}
        >
          {title}
        </Typography.Text>
        <Typography.Text type='secondary'>{description}</Typography.Text>
      </Space>
    </React.Fragment>
  );
};

export default AuthHeader;
