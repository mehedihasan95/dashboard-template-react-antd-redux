import React from "react";

import ApexChartsConfig from "../../../configuration/ApexChartsConfig/ApexChartsConfig";

const DailyExpenseCharts: React.FC = () => {
  return (
    <ApexChartsConfig
      // loading={true}
      options={{
        series: [
          {
            name: "Inflation",
            data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
          },
        ],
        chart: {
          height: 400,
          type: "bar",
        },
      }}
    />
  );
};

export default DailyExpenseCharts;
