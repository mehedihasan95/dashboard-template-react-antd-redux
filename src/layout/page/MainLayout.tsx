import { Grid, Layout } from "antd";
import React, { useState } from "react";
import ResizableSidebar from "../utilities/ResizableSidebar";
import { Outlet } from "react-router-dom";
import LayoutHeader from "../components/LayoutHeader";
import LayoutDrawer from "../components/LayoutDrawer";
import LayoutFooter from "../components/LayoutFooter";
import LayoutMenu from "../components/LayoutMenu";

const MainLayout: React.FC = () => {
  const [siderWidth, setSiderWidth] = useState<number>(256);
  const breakPoint = Grid.useBreakpoint();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Layout hasSider style={{ minHeight: "100vh" }}>
      <Layout.Sider
        width={siderWidth}
        style={{ position: "relative", userSelect: "none" }}
        trigger={null}
        collapsedWidth={0}
        breakpoint='lg'
      >
        <LayoutMenu />

        <LayoutDrawer open={open} setOpen={setOpen} />

        <ResizableSidebar onResize={(value: number) => setSiderWidth(value)} />
      </Layout.Sider>

      <Layout>
        <LayoutHeader breakPoint={breakPoint} setOpen={setOpen} />

        <Layout.Content style={{ padding: "10px" }}>
          <Outlet />
        </Layout.Content>

        <LayoutFooter />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
