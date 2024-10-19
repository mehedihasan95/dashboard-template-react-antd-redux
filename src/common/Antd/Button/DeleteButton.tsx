import { Button, type ButtonProps } from "antd";
import React from "react";
import Iconify from "../../../configuration/IconifyConfig/IconifyConfig";

const DeleteButton: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <Button
      {...rest}
      key='delete'
      type='link'
      size='small'
      icon={<Iconify icon='mage:trash' />}
      danger
    >
      Delete this data
    </Button>
  );
};

export default DeleteButton;
