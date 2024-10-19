import { RouterProvider } from "react-router-dom";
import React from "react";
import router from "./router/Router";
import "./App.css";
import { App, ConfigProvider, FloatButton, theme } from "antd";
import { Helmet } from "react-helmet-async";
import siteConfig from "./settings/site.settings";
import { ThemeState } from "./app/features/themeSlice";
import { useAppSelector } from "./app/store";
import NotificationConfig from "./configuration/NotificationConfig/NotificationConfig";
import ModalConfig from "./configuration/ModalConfig/ModalConfig";
import DrawerConfig from "./configuration/DrawerConfig/DrawerConfig";

const MyApp: React.FC = () => {
  const {
    mode,
    colorPrimary,
    fontFamily,
    fontSize,
    siderBg,
    itemBg,
    headerBg,
  } = useAppSelector(ThemeState);

  const isLight: boolean = mode === "light" ? true : false;

  return (
    <ConfigProvider
      theme={{
        algorithm: isLight ? theme.defaultAlgorithm : theme.darkAlgorithm,
        token: {
          colorPrimary,
          fontFamily,
          fontSize,
        },
        components: {
          Layout: {
            siderBg,
            headerBg,
            algorithm: true,
          },
          Menu: {
            itemBg,
            algorithm: true,
          },
        },
      }}
    >
      <App>
        <RouterProvider router={router} />
        <NotificationConfig />
        <ModalConfig />
        <DrawerConfig />
        <FloatButton.BackTop />
        <Helmet>
          <title>{siteConfig.name}</title>
          <meta charSet='UTF-8' />
          <meta name='description' content={siteConfig.description} />
          <meta
            name='keywords'
            content='React, Ant Design, Redux, App, Dashboard'
          />
          <meta name='author' content={siteConfig.author} />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
        </Helmet>
      </App>
    </ConfigProvider>
  );
};

export default MyApp;
