import React from "react";
import { Table } from "../../../common/Antd";

const generateRandomData = () => {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Harry",
    "Ivy",
    "Jack",
    "Kate",
    "Liam",
    "Mia",
    "Noah",
    "Olivia",
    "Paul",
    "Quinn",
    "Riley",
    "Sophia",
    "Thomas",
    "Ursula",
    "Victor",
    "Wendy",
    "Xavier",
    "Yara",
    "Zoe",
  ];
  const domains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "icloud.com",
  ];

  return {
    name: names[Math.floor(Math.random() * names.length)],
    email: `${names[
      Math.floor(Math.random() * names.length)
    ].toLowerCase()}${Math.floor(Math.random() * 100)}@${
      domains[Math.floor(Math.random() * domains.length)]
    }`,
    studentId: `STU${Math.floor(Math.random() * 100000)}`,
    address: `${Math.floor(Math.random() * 100)} Street, ${
      names[Math.floor(Math.random() * names.length)]
    } City`,
    phone: `+880${Math.floor(Math.random() * 1000000000)}`,
  };
};

const StudentList: React.FC = () => {
  const dataSource = Array.from({ length: 50 }).map(() => generateRandomData());

  return (
    <React.Fragment>
      <Table
        total={50}
        dataSource={dataSource}
        columns={[
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "Email",
            dataIndex: "email",
            key: "email",
          },
          {
            title: "Student ID",
            dataIndex: "studentId",
            key: "studentId",
          },
          {
            title: "Address",
            dataIndex: "address",
            key: "address",
          },
          {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
          },
        ]}
      />
    </React.Fragment>
  );
};

export default StudentList;
