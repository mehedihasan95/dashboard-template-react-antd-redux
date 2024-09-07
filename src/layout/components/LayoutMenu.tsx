import { Menu, Space, Typography } from "antd";
import React from "react";
import Iconify from "../../utilities/IconifyConfig/IconifyConfig";

const menuItems = [
  { key: "1", icon: <Iconify icon='ic:baseline-home' />, label: "Short" },
  {
    key: "2",
    icon: <Iconify icon='ic:baseline-home' />,
    label: "A very long menu item name",
  },
  {
    key: "3",
    icon: <Iconify icon='ic:baseline-home' />,
    label: "Another long menu item name that stretches",
  },
];

const LayoutMenu: React.FC = () => {
  return (
    <React.Fragment>
      <Space
        style={{
          width: "100%",
          padding: "1rem",
        }}
      >
        <Iconify icon='logos:google-cloud-run' width={35} />
        <Typography.Text strong>New Dashboard</Typography.Text>
      </Space>

      <Menu mode='inline' items={menuItems} />
    </React.Fragment>
  );
};

export default LayoutMenu;
