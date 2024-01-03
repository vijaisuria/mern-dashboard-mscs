import React, { useState, useEffect } from "react";
import axios from "../../services/api";
import LineChartComponent from "../../components/chart/lineChart.year";
import BarChartComponent from "../../components/chart/barChart.year";
import PieChartComponent from "../../components/chart/pieChart.year";
//import "../../styles/chart.css";

const ChartSelector = () => {
  const [selectedChart, setSelectedChart] = useState("line");
  const [yearwiseData, setYearwiseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/societies");
      const societies = response.data;
      setIsLoading(false);

      // Process societies data to get year-wise counts
      const yearwiseCounts = {};
      societies.forEach((society) => {
        const year = new Date(society["Date of Registration"]).getFullYear();
        if (yearwiseCounts.hasOwnProperty(year)) {
          yearwiseCounts[year]++;
        } else {
          yearwiseCounts[year] = 1;
        }
      });

      // Prepare data for chart
      const chartData = Object.keys(yearwiseCounts).map((year) => ({
        year: parseInt(year),
        numberOfSociety: yearwiseCounts[year],
      }));

      setYearwiseData(chartData);
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
        return <LineChartComponent data={yearwiseData} />;
      case "bar":
        return <BarChartComponent data={yearwiseData} />;
      case "pie":
        return <PieChartComponent data={yearwiseData} />;
      default:
        return null;
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h2>YEAR-WISE CHART</h2>
      <div className="container md-5">
        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-4">
            <select
              className="form-select"
              value={selectedChart}
              onChange={handleChartChange}
            >
              <option value="line">Line Chart</option>
              <option value="bar">Bar Chart</option>
              <option value="pie">Pie Chart</option>
            </select>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div
            className="spinner-grow"
            style={{
              width: "3rem",
              height: "3rem",
              marginTop: "5rem",
            }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container d-flex justify-content-center align-items-center mt-3">
          {renderChart()}
        </div>
      )}
    </div>
  );
};

export default ChartSelector;
