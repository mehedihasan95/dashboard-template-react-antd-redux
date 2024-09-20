import { RouterProvider } from "react-router-dom";
import React from "react";
import router from "./router/Router";
import "./App.css";
import { App, ConfigProvider, FloatButton, theme } from "antd";
import { Helmet } from "react-helmet-async";
import siteConfig from "./settings/siteConfig";
import { useSelector } from "react-redux";
import { ThemeState } from "./app/features/themeSlice";

const MyApp: React.FC = () => {
  const {
    mode,
    colorPrimary,
    fontFamily,
    fontSize,
    siderBg,
    itemBg,
    headerBg,
  } = useSelector(ThemeState);

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
