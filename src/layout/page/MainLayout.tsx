import { Layout } from "antd";
import React, { useState } from "react";
import ResizableSidebar from "../utilities/ResizableSidebar";
import { Outlet } from "react-router-dom";
import LayoutDrawer from "../components/LayoutDrawer/LayoutDrawer";
import LayoutFooter from "../components/LayoutFooter/LayoutFooter";
import LayoutMenu from "../components/LayoutMenu/LayoutMenu";
import LayoutHeader from "../components/LayoutHeader/LayoutHeader";
import useBreakpoints from "../../hooks/useBreakpoints";

const MainLayout: React.FC = () => {
  const [siderWidth, setSiderWidth] = useState<number>(256);
  const { lg, xs } = useBreakpoints();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Layout hasSider style={{ minHeight: "100vh" }}>
      <Layout.Sider
        width={siderWidth}
        style={{
          position: "fixed",
          userSelect: "none",
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: "auto",
          overflowY: "auto",
          scrollbarWidth: "thin",
        }}
        trigger={null}
        collapsedWidth={0}
        breakpoint='lg'
      >
        <LayoutMenu />
        <LayoutDrawer open={open} setOpen={setOpen} siderWidth={siderWidth} />
        <ResizableSidebar onResize={(value: number) => setSiderWidth(value)} />
      </Layout.Sider>

      <Layout
        style={{
          marginLeft: lg ? siderWidth : 0,
          transition: "margin-left 0.2s ease",
        }}
      >
        <LayoutHeader xs={xs} setOpen={setOpen} />
        <Layout.Content style={{ padding: "10px" }}>
          <Outlet />
        </Layout.Content>

        <LayoutFooter />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
