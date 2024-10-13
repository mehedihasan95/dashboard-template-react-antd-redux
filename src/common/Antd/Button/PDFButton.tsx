import { Button, ButtonProps } from "antd";
import React from "react";
import Iconify from "../../../configuration/IconifyConfig/IconifyConfig";

const PDFButton: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <Button
      {...rest}
      type='primary'
      icon={<Iconify icon='fluent:document-pdf-20-filled' />}
    >
      PDF
    </Button>
  );
};

export default PDFButton;
