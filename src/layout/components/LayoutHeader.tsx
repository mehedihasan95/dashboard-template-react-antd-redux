import {
  Badge,
  Breakpoint,
  Button,
  Dropdown,
  Flex,
  Layout,
  MenuProps,
  Space,
  Typography,
} from "antd";
import React from "react";
import Iconify from "../../utilities/IconifyConfig/IconifyConfig";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Profile",
    icon: <Iconify icon='mingcute:user-5-fill' />,
  },
  {
    key: "2",
    label: "Settings",
    icon: <Iconify icon='ic:round-settings' />,
  },
  {
    key: "3",
    label: "Help Center",
    icon: <Iconify icon='bi:question' />,
  },
  {
    key: "4",
    label: "Logout",
    danger: true,
    icon: <Iconify icon='ant-design:logout-outlined' />,
  },
];

interface Props {
  breakPoint: Partial<Record<Breakpoint, boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LayoutHeader: React.FC<Props> = ({ breakPoint, setOpen }) => {
  return (
    <Layout.Header
      style={{
        padding: "0 1rem",
        lineHeight: 0,
        maxHeight: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Flex align='center' justify='space-between' style={{ width: "100%" }}>
        <Space>
          {breakPoint?.xs && (
            <Button
              onClick={() => setOpen(true)}
              type='text'
              icon={<Iconify icon='pepicons-pop:menu' />}
            />
          )}
          <Typography.Text>Good Night!</Typography.Text>
        </Space>

        <Flex align='center' gap={20}>
          <Badge count={100}>
            <Button
              shape='circle'
              type='default'
              icon={
                <Iconify icon='material-symbols-light:notifications-unread-outline-rounded' />
              }
            />
          </Badge>
          <Button
            shape='circle'
            type='default'
            icon={<Iconify icon='line-md:moon-rising-filled-loop' />}
          />

          <Dropdown menu={{ items }} trigger={["click"]}>
            <Button
              shape='circle'
              type='default'
              icon={<Iconify icon='mingcute:user-5-fill' />}
            />
          </Dropdown>
        </Flex>
      </Flex>
    </Layout.Header>
  );
};

export default LayoutHeader;
