import { Form, Input, type FormProps } from "antd";
import React from "react";
import FormSubmit from "../../../common/Antd/Button/FormSubmit";
import { sanitizeFormData } from "../../../utilities/helper.function";
import { Select } from "../../../common/Antd";

type FieldType = {
  username: string;
  email: string;
  phone?: string;
  is_active?: number;
};

const CreateOrder: React.FC = React.memo(() => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const data = sanitizeFormData(values, {
      except: ["phone"],
      needs: ["is_active"],
    });
    console.log(data);
  };

  return (
    <React.Fragment>
      <Form onFinish={onFinish} layout='vertical'>
        <Form.Item<FieldType>
          label='Username'
          name='username'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label='Email'
          name='email'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType> label='Phone' name='phone'>
          <Input />
        </Form.Item>

        <Form.Item<FieldType> label='Status' name='is_active'>
          <Select
            options={[
              { label: "Active", value: 1 },
              { label: "Disable", value: 0 },
            ]}
          />
        </Form.Item>

        <FormSubmit name='Submit' />
      </Form>
    </React.Fragment>
  );
});

export default CreateOrder;
