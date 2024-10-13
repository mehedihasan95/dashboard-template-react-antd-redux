import { Button, ButtonProps } from "antd";
import React from "react";
import Iconify from "../../../configuration/IconifyConfig/IconifyConfig";

const PrintButton: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <Button
      {...rest}
      type='primary'
      icon={<Iconify icon='material-symbols:print' />}
    >
      Print
    </Button>
  );
};

export default PrintButton;
