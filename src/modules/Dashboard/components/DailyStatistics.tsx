import { Card, Statistic, StatisticProps } from "antd";
import React from "react";
import CountUp from "react-countup";
import Iconify from "../../../configuration/IconifyConfig/IconifyConfig";

const DailyStatistics: React.FC = () => {
  const formatter: StatisticProps["formatter"] = (value) => (
    <CountUp end={value as number} separator=',' />
  );
  return (
    <Card
      styles={{
        header: { border: "none" },
      }}
      bordered={false}
    >
      <Card.Grid style={{ width: "50%" }}>
        <Statistic
          title='Active users'
          value={6543216}
          formatter={formatter}
          prefix={<Iconify icon='streamline:graph-arrow-increase' />}
        />
      </Card.Grid>
      <Card.Grid style={{ width: "50%" }}>
        <Statistic
          title='Inactive users'
          value={362154}
          formatter={formatter}
          prefix={<Iconify icon='streamline:graph-arrow-increase' />}
        />
      </Card.Grid>
      <Card.Grid style={{ width: "50%" }}>
        <Statistic
          title='Active users'
          value={6543216}
          formatter={formatter}
          prefix={<Iconify icon='streamline:graph-arrow-increase' />}
        />
      </Card.Grid>
      <Card.Grid style={{ width: "50%" }}>
        <Statistic
          title='Active users'
          value={6543216}
          formatter={formatter}
          prefix={<Iconify icon='streamline:graph-arrow-increase' />}
        />
      </Card.Grid>
    </Card>
  );
};

export default DailyStatistics;
