import { Button, type ButtonProps } from "antd";
import React from "react";
import Iconify from "../../../configuration/IconifyConfig/IconifyConfig";
import { Link } from "react-router-dom";

interface Props extends ButtonProps {
  pathname: string;
}

const ViewButton: React.FC<Props> = ({ pathname, ...rest }) => {
  return (
    <Link state={location.pathname} to={pathname}>
      <Button
        {...rest}
        key='view'
        type='link'
        size='small'
        icon={<Iconify icon='lucide:view' />}
      >
        View this data
      </Button>
    </Link>
  );
};

export default ViewButton;
