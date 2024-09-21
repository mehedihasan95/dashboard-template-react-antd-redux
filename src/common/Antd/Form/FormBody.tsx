import { Form, FormProps } from "antd";
import React, { ReactNode } from "react";
import FormSubmit from "./FormSubmit";

interface Props extends Omit<FormProps, "children" | "content"> {
  content: ReactNode;
  buttonLabel: string;
  loading: boolean;
}

const FormBody: React.FC<Props> = ({
  content,
  buttonLabel,
  loading,
  ...rest
}) => {
  return (
    <Form layout='vertical' {...rest}>
      {content}
      <FormSubmit name={buttonLabel} loading={loading} />
    </Form>
  );
};

export default FormBody;
