import { Card } from "antd";
import ApexCharts, { ApexOptions } from "apexcharts";
import React, { useEffect, useRef } from "react";

interface Props {
  options: ApexOptions;
  loading?: boolean;
}

const ApexChartsConfig: React.FC<Props> = ({ options, loading }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading || !ref.current) return;

    const chart: ApexCharts = new ApexCharts(ref.current, options);
    chart.render();
    return () => {
      chart.destroy();
    };
  }, [options, loading]);

  return <Card loading={loading} key='charts' ref={ref} />;
};

export default ApexChartsConfig;
