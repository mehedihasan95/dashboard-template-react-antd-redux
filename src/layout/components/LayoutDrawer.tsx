import { Drawer } from "antd";
import React from "react";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LayoutDrawer: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <Drawer
      placement='left'
      onClose={() => setOpen(false)}
      open={open}
      footer={null}
      closable={false}
      width={256}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default LayoutDrawer;
