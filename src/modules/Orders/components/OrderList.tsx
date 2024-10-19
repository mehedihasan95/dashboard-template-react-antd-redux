import React from "react";
import { Table } from "../../../common/Antd";
import { useGetOrderListQuery } from "../api/orderEndpoint";
import { FilterDataTypes } from "../page/Orders";
import {
  TableActionDropdown,
  TableColumnSerial,
} from "../../../common/Antd/Table";
import ViewButton from "../../../common/Antd/Button/ViewButton";
import DeleteButton from "../../../common/Antd/Button/DeleteButton";
import EditButton from "../../../common/Antd/Button/EditButton";
import { OrderTypes } from "../types/orderTypes";
import confirmationModal from "../../../configuration/ModalConfig/confirmationModal";
import { dateAndTimeFormatter } from "../../../utilities/helper.function";

interface Props {
  filters: FilterDataTypes;
}

const OrderList: React.FC<Props> = ({ filters }) => {
  const { data, isLoading, isFetching, refetch } =
    useGetOrderListQuery(filters);

  const handleDelete = (id: number) => {
    console.log(id);

    confirmationModal({
      onConfirm: async () => {
        //delete order
      },
    });
  };

  return (
    <React.Fragment>
      <Table
        total={data?.total}
        refetch={refetch}
        loading={isLoading || isFetching}
        dataSource={data?.data || []}
        rowKey={"invoice_id"}
        columns={[
          TableColumnSerial(),
          {
            title: "Order ID",
            dataIndex: "invoice_no",
          },
          {
            title: "Date",
            render: (_, { invoice_created_at }) =>
              dateAndTimeFormatter(invoice_created_at),
          },
          {
            title: "Order Type",
            dataIndex: "invoice_customer_type",
          },

          TableActionDropdown<OrderTypes>({
            content: (record) => [
              <ViewButton pathname={`${record.invoice_id}`} />,
              <EditButton
                onClick={() => {
                  console.log(record);
                }}
              />,
              <DeleteButton onClick={() => handleDelete(record.invoice_id)} />,
            ],
          }),
        ]}
      />
    </React.Fragment>
  );
};

export default OrderList;
