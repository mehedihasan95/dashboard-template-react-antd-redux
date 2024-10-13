import React from "react";
import { Table } from "../../../common/Antd";
import { useGetOrderListQuery } from "../api/orderEndpoint";
import { FilterDataTypes } from "../page/Orders";

interface Props {
  filters: FilterDataTypes;
}

const OrderList: React.FC<Props> = ({ filters }) => {
  const { data, isLoading, isFetching, refetch } =
    useGetOrderListQuery(filters);

  return (
    <React.Fragment>
      <Table
        total={data?.total}
        refetch={refetch}
        loading={isLoading || isFetching}
        dataSource={data?.data || []}
        rowKey={"invoice_id"}
        columns={[
          {
            title: "Order ID",
            dataIndex: "invoice_no",
          },
          {
            title: "Date",
            dataIndex: "invoice_created_at",
          },
          {
            title: "Order Type",
            dataIndex: "invoice_customer_type",
          },
          {
            title: "Price",
            dataIndex: "invoice_net_total",
          },
        ]}
      />
    </React.Fragment>
  );
};

export default OrderList;
