import { Button, ButtonProps } from "antd";
import React from "react";
import Iconify from "../../../configuration/IconifyConfig/IconifyConfig";

interface Props extends ButtonProps {
  name?: string;
  icon?: string;
}

const CommonButton: React.FC<Props> = ({ name, icon, ...rest }) => {
  return (
    <Button icon={icon && <Iconify icon={icon} />} {...rest}>
      {name}
    </Button>
  );
};

export default CommonButton;
