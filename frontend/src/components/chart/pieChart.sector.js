import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const PieChartComponent = ({ data }) => {
  const COLORS = [
    "#FF6361",
    "#58508D",
    "#BC5090",
    "#FFA600",
    "#003F5C",
    "#FF7C43",
    "#3C1642",
    "#FFC300",
    "#1A1A1D",
    "#D62828",
    "#4EA8DE",
    "#7F3E4F",
    "#FF5733",
    "#2C394B",
    "#D72638",
    "#1F271B",
    "#F77F00",
    "#1D2D44",
    "#9B2C2C",
  ];

  return (
    <PieChart width={600} height={400}>
      <Pie
        data={data}
        dataKey="numberOfSociety"
        nameKey="sector"
        cx="50%"
        cy="50%"
        outerRadius={160}
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartComponent;
