import React, { useState, useEffect } from "react";
import axios from "../../services/api";
import LineChartComponent from "../../components/chart/lineChart.sector";
import BarChartComponent from "../../components/chart/barChart.sector";
import PieChartComponent from "../../components/chart/pieChart.sector";
import "../../styles/chart.css";

const SectorWiseChart = () => {
  const [selectedChart, setSelectedChart] = useState("pie");
  const [sectorwiseData, setSectorwiseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/societies");
      const societies = response.data;
      setIsLoading(false);
      const sectorwiseCounts = {};
      societies.forEach((society) => {
        const sector = society["Sector Type"];
        if (sectorwiseCounts.hasOwnProperty(sector)) {
          sectorwiseCounts[sector]++;
        } else {
          sectorwiseCounts[sector] = 1;
        }
      });
      const sectorwiseChartData = Object.keys(sectorwiseCounts).map(
        (sector) => ({
          sector,
          numberOfSociety: sectorwiseCounts[sector],
        })
      );
      setSectorwiseData(sectorwiseChartData);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleChartChange = (event) => {
    setSelectedChart(event.target.value);
  };

  const renderChart = () => {
    switch (selectedChart) {
      case "line":
        return <LineChartComponent data={sectorwiseData} />;
      case "bar":
        return <BarChartComponent data={sectorwiseData} />;
      case "pie":
        return <PieChartComponent data={sectorwiseData} />;
      default:
        return null;
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h2>SECTOR-WISE CHART</h2>
      <select
        value={selectedChart}
        className="filter-select"
        onChange={handleChartChange}
      >
        <option value="line">Line Chart</option>
        <option value="bar">Bar Chart</option>
        <option value="pie">Pie Chart</option>
      </select>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div
            className="spinner-grow"
            style={{ width: "3rem", height: "3rem", marginTop: "5rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="chart-container">{renderChart()}</div>
      )}
    </div>
  );
};

export default SectorWiseChart;
