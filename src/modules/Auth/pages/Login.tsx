import { Form, FormProps, Input, Space, Typography } from "antd";
import React from "react";
import useBreakpoints from "../../../hooks/useBreakpoints";
import { LoginTypes } from "../types/AuthTypes";
import FormItem from "../../../common/Antd/Form/FormItem";
import { REQUIRED } from "../../../settings/constants";
import FormBody from "../../../common/Antd/Form/FormBody";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const { lg } = useBreakpoints();
  const [form] = Form.useForm();

  const onFinish: FormProps<LoginTypes>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  return (
    <React.Fragment>
      <>
        <Space
          direction='vertical'
          align='center'
          style={{ width: "100%", marginBottom: "3rem" }}
        >
          <Typography.Text strong style={{ fontSize: lg ? "1.5rem" : "1rem" }}>
            WELCOME BACK!
          </Typography.Text>
          <Typography.Text type='secondary'>
            Enter your email and password to sign in
          </Typography.Text>
        </Space>
      </>

      <FormBody
        form={form}
        buttonLabel='Submit'
        loading={false}
        onFinish={onFinish}
        content={
          <>
            <FormItem<LoginTypes>
              label='Enter email address'
              name='email'
              rules={[{ required: true, message: REQUIRED }]}
              content={<Input placeholder='e.g: example@some.com' />}
            />
            <FormItem<LoginTypes>
              label='Enter password'
              name='password'
              rules={[{ required: true, message: REQUIRED }]}
              content={<Input.Password placeholder='********' />}
            />
          </>
        }
      />
      <Typography.Paragraph type='danger'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        doloribus nemo totam quasi sint nihil.
      </Typography.Paragraph>
      <Link to='/auth/send-otp'>
        <Typography.Link>Forgot password!</Typography.Link>
      </Link>
    </React.Fragment>
  );
};

export default Login;
