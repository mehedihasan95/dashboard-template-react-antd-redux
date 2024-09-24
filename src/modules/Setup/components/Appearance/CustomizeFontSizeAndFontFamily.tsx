import { Card, Flex, Radio, Space, Typography } from "antd";
import React from "react";
import {
  themeCustomize,
  ThemeState,
} from "../../../../app/features/themeSlice";
import { fontFamilies, fontSizes } from "../../../../app/utilities/theme";
import useBreakpoints from "../../../../hooks/useBreakpoints";
import { useAppDispatch, useAppSelector } from "../../../../app/store";

const CustomizeFontSizeAndFontFamily: React.FC = () => {
  const { lg } = useBreakpoints();
  const { fontSize, fontFamily } = useAppSelector(ThemeState);
  const dispatch = useAppDispatch();

  return (
    <Space direction='vertical' style={{ width: "100%" }}>
      <Typography.Text strong style={{ fontSize: lg ? "1.5rem" : "1rem" }}>
        Customize font size & font family
      </Typography.Text>
      <Typography.Text type='secondary'>
        Choose your preferred font size to enhance readability.
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
      <br />
      <>
        <Radio.Group
          value={fontFamily}
          onChange={(event) =>
            dispatch(
              themeCustomize({
                type: "FONT_FAMILY",
                value: event.target.value,
              })
            )
          }
        >
          <Space direction='vertical' style={{ width: "100%" }}>
            {fontFamilies.map(({ label, value }, index) => (
              <Radio key={index} value={value}>
                <Card size='small' title={label} style={{ fontFamily: value }}>
                  <Typography.Text
                    style={{ fontFamily: value, fontSize: "2rem" }}
                  >
                    Whereas disregard and contempt for human rights have
                    resulted.
                  </Typography.Text>
                </Card>
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </>
    </Space>
  );
};

export default CustomizeFontSizeAndFontFamily;
