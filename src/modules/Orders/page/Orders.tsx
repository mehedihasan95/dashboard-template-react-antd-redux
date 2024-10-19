import React, { useState } from "react";
import Container from "../../../common/Container/Container";
import OrderList from "../components/OrderList";
import useQueryParams from "../../../hooks/useQueryParams";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import CreateOrder from "../components/CreateOrder";

export type FilterDataTypes = Partial<{
  from_date: string;
  to_date: string;
}>;

const Orders: React.FC = () => {
  const [filterData, setFilterData] = useState<FilterDataTypes>();
  const filters = useQueryParams<FilterDataTypes>();

  return (
    <React.Fragment>
      <Container
        title='List of orders'
        content={<OrderList filters={filters} />}
        buttonLabel='Create Order'
        openModal={{ title: "Create Order", content: <CreateOrder /> }}
        filterData={filterData}
        filterContent={[
          <DatePicker.RangePicker
            value={[dayjs(filters.from_date), dayjs(filters.to_date)]}
            onChange={(_, dateString) =>
              setFilterData((prev) => ({
                ...prev,
                from_date: String(dateString[0]),
                to_date: String(dateString[1]),
              }))
            }
          />,
        ]}
      />
    </React.Fragment>
  );
};

export default Orders;
