import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineChartComponent = ({ data }) => {
  const [chartWidth, setChartWidth] = useState(700);
  const [chartHeight, setChartHeight] = useState(500);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Adjust the chart dimensions based on different devices or breakpoints
      if (windowWidth < 576) {
        setChartWidth(windowWidth * 0.8);
        setChartHeight(windowHeight * 0.4);
      } else if (windowWidth < 992) {
        setChartWidth(windowWidth * 0.6);
        setChartHeight(windowHeight * 0.5);
      } else {
        setChartWidth(700);
        setChartHeight(500);
      }
    };

    // Call the handleResize function initially and on window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <LineChart width={chartWidth} height={chartHeight} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="numberOfSociety" stroke="#8884d8" />
    </LineChart>
  );
};

export default LineChartComponent;
