import React from "react";
import { Divider } from "antd";

import CustomizeTheme from "../components/Appearance/CustomizeTheme";
import CustomizePrimaryColor from "../components/Appearance/CustomizePrimaryColor";
import CustomizeFontSizeAndFontFamily from "../components/Appearance/CustomizeFontSizeAndFontFamily";

const Settings: React.FC = () => {
  return (
    <React.Fragment>
      <CustomizeTheme />
      <Divider />
      <CustomizePrimaryColor />
      <Divider />
      <CustomizeFontSizeAndFontFamily />
    </React.Fragment>
  );
};

export default Settings;
