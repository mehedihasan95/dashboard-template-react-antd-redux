import { Table as AntTable, Button, Typography, type TableProps } from "antd";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { FilterState, addFilter } from "../../app/features/filterSlice";
import Iconify from "../../configuration/IconifyConfig/IconifyConfig";

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
