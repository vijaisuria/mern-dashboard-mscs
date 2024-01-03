import React from "react";
import YearwiseChart from "./chart/YearwiseChartPage";
import StatewiseChartPage from "./chart/StatewiseChartPage";
import SectorWiseChartPage from "./chart/SectorwiseChartPage";

const ChartPage = () => {
  return (
    <>
      <StatewiseChartPage />
      <YearwiseChart />
      <SectorWiseChartPage />
    </>
  );
};

export default ChartPage;
