import { RouterProvider } from "react-router-dom";
import React from "react";
import router from "./router/Router";
import "./App.css";
import { App, ConfigProvider, theme } from "antd";

const MyApp: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: "#722ED1",
        },
        components: {
          Layout: {
            siderBg: "#ffffff",
            headerBg: "#ffffff",
            algorithm: true,
          },
          Menu: {
            itemBg: "#fff",
            subMenuItemBg: "#fff",
          },
        },
      }}
    >
      <App>
        <RouterProvider router={router} />
      </App>
    </ConfigProvider>
  );
};

export default MyApp;
