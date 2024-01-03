import React, { useState, useEffect } from "react";
import axios from "../../services/api";
import LineChartComponent from "../../components/chart/lineChart.state";
import BarChartComponent from "../../components/chart/barChart.state";
import PieChartComponent from "../../components/chart/pieChart.state";
import "../../styles/chart.css";

const StatewiseChart = () => {
  const [selectedChart, setSelectedChart] = useState("pie");
  const [statewiseData, setStatewiseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/societies");
      const societies = response.data;
      setIsLoading(false);
      const statewiseCounts = {};
      societies.forEach((society) => {
        const state = society.State;
        if (statewiseCounts.hasOwnProperty(state)) {
          statewiseCounts[state]++;
        } else {
          statewiseCounts[state] = 1;
        }
      });
      const statewiseChartData = Object.keys(statewiseCounts).map((state) => ({
        state,
        numberOfSociety: statewiseCounts[state],
      }));
      setStatewiseData(statewiseChartData);
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
        return <LineChartComponent data={statewiseData} />;
      case "bar":
        return <BarChartComponent data={statewiseData} />;
      case "pie":
        return <PieChartComponent data={statewiseData} />;
      default:
        return null;
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h2>STATE-WISE CHART</h2>
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
            style={{ width: "3rem", height: "3rem", marginTop: "5rem" }}
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

export default StatewiseChart;
