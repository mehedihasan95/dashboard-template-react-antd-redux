import { Form, FormItemProps } from "antd";
import React from "react";

interface Props<T> extends Omit<FormItemProps<T>, "name"> {
  name?: FormItemProps<T>["name"];
  label?: string;
  content: React.ReactNode;
}

const FormItem = <T extends object>({
  content,
  name,
  label,
  ...rest
}: Props<T>) => {
  return (
    <Form.Item<T> label={label} name={name} {...rest}>
      {content}
    </Form.Item>
  );
};

export default FormItem;
