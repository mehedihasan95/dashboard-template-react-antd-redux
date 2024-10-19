import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { closeDrawer, DrawerState } from "../../app/features/drawerSlice";
import { Drawer } from "antd";

const DrawerConfig: React.FC = () => {
  const { open, title, content, extra, footer, placement, size, width } =
    useAppSelector(DrawerState);
  const dispatch = useAppDispatch();

  return (
    <Drawer
      onClose={() => dispatch(closeDrawer())}
      open={open}
      title={title}
      children={content}
      extra={extra}
      footer={footer}
      placement={placement}
      size={size}
      width={width}
    />
  );
};

export default DrawerConfig;
