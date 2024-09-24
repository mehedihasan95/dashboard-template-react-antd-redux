import { Drawer, Layout, Menu } from "antd";
import React, { useEffect } from "react";
import { navigationMenu, renderMenuItem } from "../../utilities/navigationMenu";
import BottomSection from "../LayoutMenu/BottomSection";
import useBreakpoints from "../../../hooks/useBreakpoints";
import { ThemeState } from "../../../app/features/themeSlice";
import { useAppSelector } from "../../../app/store";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  siderWidth: number;
}

const LayoutDrawer: React.FC<Props> = ({ open, setOpen, siderWidth }) => {
  const { lg } = useBreakpoints();
  const { siderBg } = useAppSelector(ThemeState);

  useEffect(() => {
    if (lg) setOpen(false);
  }, [lg, setOpen]);

  return (
    <Drawer
      placement='left'
      onClose={() => setOpen(false)}
      open={open}
      footer={null}
      width={siderWidth}
      styles={{
        content: { background: siderBg },
        body: {
          padding: 0,
          display: "grid",
          alignContent: "space-between",
          scrollbarWidth: "thin",
        },
      }}
    >
      <Layout.Sider width={"100%"} collapsed={false}>
        <Menu mode='inline' items={navigationMenu.map(renderMenuItem)} />
      </Layout.Sider>
      <BottomSection />
    </Drawer>
  );
};

export default LayoutDrawer;
