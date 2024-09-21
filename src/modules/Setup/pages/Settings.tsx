import React from "react";
import {
  Card,
  Col,
  ColorPicker,
  Flex,
  Radio,
  Row,
  Space,
  Tooltip,
  Typography,
} from "antd";
import useBreakpoints from "../../../hooks/useBreakpoints";
import {
  themeCustomize,
  ThemeState,
  toggleTheme,
} from "../../../app/features/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  fontFamilies,
  fontSizes,
  primaryColors,
  themePresets,
} from "../../../app/utilities/theme";
import CommonButton from "../../../common/Antd/Button/CommonButton";

const Settings: React.FC = () => {
  const { lg } = useBreakpoints();
  const { name, colorPrimary, fontSize } = useSelector(ThemeState);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Space style={{ width: "100%" }} direction='vertical'>
        <>
          <Typography.Text strong style={{ fontSize: lg ? "1.5rem" : "1rem" }}>
            Customize Theme
          </Typography.Text>
          <Typography.Text type='secondary'>
            Adjust the theme to suit your mood or environment by selecting your
            preferred light or dark mode.
          </Typography.Text>
          <Row gutter={[10, 10]}>
            {themePresets.map((elements, index) => (
              <Col key={index} span={24} md={8} lg={6}>
                <Card
                  hoverable
                  bordered={false}
                  style={{
                    position: "relative",
                    minHeight: "10rem",
                    overflow: "hidden",
                  }}
                >
                  <Radio
                    onChange={() => dispatch(toggleTheme({ ...elements }))}
                    checked={elements.name === name}
                  >
                    <Typography.Text strong>{elements.name}</Typography.Text>
                  </Radio>
                  <div
                    style={{
                      width: "10rem",
                      height: "10rem",
                      position: "absolute",
                      top: 0,
                      right: -50,
                      transform: "rotate(45deg)",
                      backgroundColor: elements.siderBg,
                      borderRadius: "0.5rem",
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                      zIndex: 2,
                    }}
                  />
                  <div
                    style={{
                      width: "10rem",
                      height: "10rem",
                      position: "absolute",
                      top: 0,
                      right: -25,
                      transform: "rotate(45deg)",
                      backgroundColor: elements.colorPrimary,
                      borderRadius: "0.5rem",
                      boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
                      zIndex: 1,
                    }}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </>
        <>
          <Typography.Text strong style={{ fontSize: lg ? "1.5rem" : "1rem" }}>
            Customize Primary Color
          </Typography.Text>
          <Typography.Text type='secondary'>
            Select a primary color that matches your personal style or brand
            preferences.
          </Typography.Text>
          <Flex align='center' wrap gap={5}>
            {primaryColors.map(({ label, value }, index) => (
              <Tooltip key={index} title={label} color={value}>
                <CommonButton
                  onClick={() =>
                    dispatch(themeCustomize({ type: "PRIMARY_COLOR", value }))
                  }
                  type='primary'
                  style={{ background: value }}
                  shape='circle'
                  icon={value === colorPrimary ? "mingcute:check-2-line" : ""}
                />
              </Tooltip>
            ))}
            <ColorPicker
              mode='single'
              onChangeComplete={(value) =>
                dispatch(
                  themeCustomize({
                    type: "PRIMARY_COLOR",
                    value: value.toHexString(),
                  })
                )
              }
            />
          </Flex>
        </>
        <>
          <Typography.Text strong style={{ fontSize: lg ? "1.5rem" : "1rem" }}>
            Font Family and Font Size
          </Typography.Text>
          <Typography.Text type='secondary'>
            Choose your preferred font size to enhance readability. This setting
            allows you to adjust the display text according to your comfort
            level.
          </Typography.Text>

          <Flex align='center' gap={5}>
            <Radio.Group
              value={fontSize}
              onChange={(event) =>
                dispatch(
                  themeCustomize({
                    type: "FONT_SIZE",
                    value: event.target.value,
                  })
                )
              }
            >
              {fontSizes.map(({ label, value }, index) => (
                <Radio key={index} value={value}>
                  <Typography.Text style={{ fontSize: value }}>
                    aA {label}
                  </Typography.Text>
                </Radio>
              ))}
            </Radio.Group>
          </Flex>

          <Flex align='center' gap={5}>
            <Radio.Group
              value={fontSize}
              onChange={(event) =>
                dispatch(
                  themeCustomize({
                    type: "FONT_SIZE",
                    value: event.target.value,
                  })
                )
              }
            >
              {fontFamilies.map(({ label, value }, index) => (
                <Radio key={index} value={value}>
                  <Typography.Text style={{ fontFamily: value }}>
                    {label}
                  </Typography.Text>
                </Radio>
              ))}
            </Radio.Group>
          </Flex>
        </>
      </Space>
    </React.Fragment>
  );
};

export default Settings;
