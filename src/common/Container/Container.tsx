import {
  Button,
  Col,
  Dropdown,
  Flex,
  Input,
  MenuProps,
  Row,
  Space,
  Tooltip,
  Typography,
} from "antd";
import React, { useEffect, useMemo, useState } from "react";
import useBreakpoints from "../../hooks/useBreakpoints";
import BreadCrumb from "../Antd/BreadCrumb";
import Iconify from "../../configuration/IconifyConfig/IconifyConfig";
import { ModalTypes, showModal } from "../../app/features/modalSlice";
import { useAppDispatch } from "../../app/store";
import {
  addFilter,
  addRestFilter,
  resetFilter,
} from "../../app/features/filterSlice";
import { debounce } from "lodash";
import { useNavigate, useSearchParams } from "react-router-dom";

interface Props {
  title: string;
  content: React.ReactNode;
  buttonLabel?: string;
  openModal?: ModalTypes;
  showButton?: boolean;
  showSearch?: boolean;
  placeholder?: string;
  showFilter?: boolean;
  filterContent?: MenuProps["items"];
  filterData?: {
    [key: string]: string | number | boolean;
  };
}

const Container: React.FC<Props> = ({
  title,
  content,
  openModal,
  buttonLabel = "Create",
  showButton = true,
  showSearch = true,
  placeholder = "Search",
  showFilter = true,
  filterContent,
  filterData,
}) => {
  const { lg } = useBreakpoints();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const items: MenuProps["items"] = filterContent;
  const [searchParams] = useSearchParams();

  const searchDebounce = useMemo(
    () =>
      debounce((value: string) => {
        dispatch(addFilter({ name: "KEY", value: value || undefined }));
      }, 500),
    [dispatch]
  );
  useEffect(() => {
    return () => {
      searchDebounce.cancel();
    };
  }, [searchDebounce]);

  return (
    <Space direction='vertical' style={{ width: "100%" }}>
      <Flex justify='space-between' align='center' wrap>
        <Typography.Text
          strong
          style={{
            fontSize: lg ? "1.5rem" : "1rem",
          }}
        >
          {title}
        </Typography.Text>
        <BreadCrumb />
      </Flex>

      <Row gutter={[10, 10]}>
        <Col span={24} lg={6}>
          {showSearch && (
            <Input
              allowClear
              defaultValue={searchParams.get("key") || undefined}
              maxLength={50}
              prefix={<Iconify icon='flat-color-icons:search' />}
              placeholder={placeholder}
              onChange={(value) => searchDebounce(value.target.value)}
            />
          )}
        </Col>
        <Col span={24} lg={18}>
          <Flex justify='flex-end' align='center' gap={8} wrap>
            {showButton && (
              <Button
                onClick={() => dispatch(showModal(openModal))}
                type='primary'
                icon={<Iconify icon='mdi:add-bold' />}
              >
                {buttonLabel}
              </Button>
            )}

            {showFilter && (
              <>
                <Dropdown.Button
                  open={open}
                  trigger={["click"]}
                  style={{ width: "max-content" }}
                  menu={{ items }}
                  icon={
                    <Iconify
                      icon={
                        open ? "mingcute:filter-fill" : "mingcute:filter-line"
                      }
                    />
                  }
                  type='default'
                  placement='bottomRight'
                  arrow
                  onOpenChange={() => setOpen(!open)}
                  onClick={() => {
                    if (filterData) {
                      Object.keys(filterData).forEach((key) => {
                        dispatch(
                          addRestFilter({
                            label: key,
                            value: filterData[key],
                          })
                        );
                      });
                    }
                  }}
                >
                  <Typography.Text>
                    {open ? "Filter Now" : "Filter By"}
                  </Typography.Text>
                </Dropdown.Button>
                <Tooltip
                  title='Filter reset'
                  placement='topLeft'
                  children={
                    <Button
                      onClick={() => {
                        dispatch(resetFilter());
                        navigate(window.location.pathname, { replace: true });
                      }}
                      icon={<Iconify icon='carbon:reset' />}
                    />
                  }
                />
              </>
            )}
          </Flex>
        </Col>
      </Row>
      <>{content}</>
    </Space>
  );
};

export default Container;
