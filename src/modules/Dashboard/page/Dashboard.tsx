import { Col, Row } from "antd";
import React from "react";
import DailyExpenseCharts from "../components/DailyExpenseCharts";
import DailyStatistics from "../components/DailyStatistics";

const Dashboard: React.FC = () => {
  return (
    <React.Fragment>
      <Row gutter={[10, 10]}>
        <Col span={24} lg={12}>
          <DailyStatistics />
        </Col>
        <Col span={24} lg={12}>
          <DailyExpenseCharts />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Dashboard;
