import React, { useState } from "react";
import Container from "../../../common/Container/Container";
import StudentList from "../components/StudentList";
import CreateStudent from "../components/CreateStudent";
import { Select } from "../../../common/Antd";
import { DatePicker } from "antd";
import useQueryParams from "../../../hooks/useQueryParams";
import dayjs from "dayjs";

export type FilterDataTypes = Partial<{
  gender: string;
  status: string;
  start_date: string;
  end_date: string;
}>;

const Students: React.FC = () => {
  const [filterData, setFilterData] = useState<FilterDataTypes>();
  const filters = useQueryParams<FilterDataTypes>();

  return (
    <React.Fragment>
      <Container
        title='Student List'
        content={<StudentList />}
        buttonLabel='Create Student'
        openModal={{
          title: "Create Student",
          content: <CreateStudent />,
        }}
        filterData={filterData}
        filterContent={[
          {
            key: "1",
            label: (
              <Select
                value={filters.gender}
                width='100%'
                options={[
                  { label: "Male", value: "Male" },
                  { label: "Female", value: "Female" },
                ]}
                onChange={(value) =>
                  setFilterData((prev) => ({ ...prev, gender: value }))
                }
              />
            ),
          },
          {
            key: "2",
            label: (
              <Select
                value={filters.status}
                width='100%'
                options={[
                  { label: "Success", value: "Success" },
                  { label: "Pending", value: "Pending" },
                  { label: "Reject", value: "Reject" },
                ]}
                onChange={(value) =>
                  setFilterData((prev) => ({ ...prev, status: value }))
                }
              />
            ),
          },
          {
            key: "3",
            label: (
              <DatePicker.RangePicker
                value={[dayjs(filters.start_date), dayjs(filters.end_date)]}
                onChange={(_, dateString) =>
                  setFilterData((prev) => ({
                    ...prev,
                    start_date: dateString[0],
                    end_date: dateString[1],
                  }))
                }
              />
            ),
          },
        ]}
      />
    </React.Fragment>
  );
};

export default Students;
