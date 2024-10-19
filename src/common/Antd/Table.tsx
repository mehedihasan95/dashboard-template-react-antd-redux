import {
  Table as AntTable,
  Button,
  Dropdown,
  Typography,
  type TableProps,
} from "antd";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { FilterState, addFilter } from "../../app/features/filterSlice";
import Iconify from "../../configuration/IconifyConfig/IconifyConfig";
import React from "react";
import { useSearchParams } from "react-router-dom";

interface Props<T> extends TableProps<T> {
  total: number | undefined;
  refetch: () => void;
}

const Table = <T extends object>({
  total,
  refetch,

  ...rest
}: Props<T>) => {
  const { limit, skip } = useAppSelector(FilterState);
  const dispatch = useAppDispatch();
  const showPagination: boolean = total !== undefined && total >= limit;

  return (
    <AntTable
      title={() => (
        <Button
          type='link'
          size='small'
          icon={<Iconify icon='mage:reload' />}
          onClick={() => refetch()}
        >
          Refetch
        </Button>
      )}
      {...rest}
      scroll={{ x: true, y: Number(total) * 13 >= 650 ? 650 : undefined }}
      size='small'
      pagination={
        showPagination
          ? {
              total: total,
              showSizeChanger: true,
              showTotal: (total) => (
                <Typography.Text strong>
                  Total {limit} of {total}
                </Typography.Text>
              ),
              current: Math.floor(skip / limit) + 1,
              pageSize: limit,
              onChange: (page: number, pageSize: number) => {
                dispatch(addFilter({ value: pageSize, name: "LIMIT" }));
                dispatch(
                  addFilter({ value: (page - 1) * pageSize, name: "SKIP" })
                );
              },
            }
          : false
      }
      footer={
        showPagination
          ? undefined
          : () => <Typography.Text>Total Data: {total || 0}</Typography.Text>
      }
    />
  );
};

export default Table;

// TABLE COLUMN ACTION DROPDOWN
export const TableActionDropdown = <T,>({
  title = "Actions",
  content,
}: {
  title?: string;
  content: (record: T) => React.ReactElement[];
}) => {
  return {
    title,
    render: (_: unknown, record: T) => {
      const items = content(record).map((item, index) => ({
        key: String(index),
        label: item,
      }));
      return (
        <Dropdown
          placement='bottomRight'
          trigger={["click"]}
          arrow
          menu={{ items }}
        >
          <Button
            type='text'
            size='small'
            icon={<Iconify icon='entypo:dots-three-horizontal' />}
          />
        </Dropdown>
      );
    },
  };
};

// TABLE COLUMN SERIAL
export const TableColumnSerial = () => {
  const [searchParams] = useSearchParams();
  const skip: number = Number(searchParams.get("skip")) || 0;
  return {
    title: "SL",
    width: 60,
    render: (_: unknown, __: unknown, index: number) => skip + index + 1,
  };
};
