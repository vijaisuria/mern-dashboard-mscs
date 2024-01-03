import React, { useEffect, useState } from "react";
import axios from "../services/api";

const StatisticalDataPage = () => {
  const [yearwiseData, setYearwiseData] = useState([]);
  const [statewiseData, setStatewiseData] = useState([]);
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

      // Process year-wise data
      const yearwiseCounts = {};
      societies.forEach((society) => {
        const year = new Date(society["Date of Registration"]).getFullYear();
        if (yearwiseCounts.hasOwnProperty(year)) {
          yearwiseCounts[year]++;
        } else {
          yearwiseCounts[year] = 1;
        }
      });
      const yearwiseChartData = Object.keys(yearwiseCounts).map((year) => ({
        year: parseInt(year),
        numberOfSociety: yearwiseCounts[year],
      }));
      setYearwiseData(yearwiseChartData);

      // Process state-wise data
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

      // Process sector-wise data
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

  return (
    <div className="container">
      <h2>Statistical Data</h2>
      {/* YEAR-WISE DATA */}
      <div className="container">
        <h3>Year-wise Data</h3>
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <div
              className="spinner-grow"
              style={{ width: "3rem", height: "3rem", margin: "20%" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Year</th>
                  <th>Number of Societies</th>
                </tr>
              </thead>
              <tbody>
                {yearwiseData.map((data) => (
                  <tr key={data.year}>
                    <td>{data.year}</td>
                    <td>{data.numberOfSociety}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {/* STATE-WISE DATA */}
      <div className="container">
        <h3>State-wise Data</h3>
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <div
              className="spinner-grow"
              style={{ width: "3rem", height: "3rem", margin: "20%" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>State</th>
                  <th>Number of Societies</th>
                </tr>
              </thead>
              <tbody>
                {statewiseData.map((data) => (
                  <tr key={data.state}>
                    <td>{data.state}</td>
                    <td>{data.numberOfSociety}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {/* SECTOR-WISE DATA */}
      <div className="container">
        <h3>Sector-wise Data</h3>
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <div
              className="spinner-grow"
              style={{ width: "3rem", height: "3rem", margin: "20%" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Sector</th>
                  <th>Number of Societies</th>
                </tr>
              </thead>
              <tbody>
                {sectorwiseData.map((data) => (
                  <tr key={data.sector}>
                    <td>{data.sector}</td>
                    <td>{data.numberOfSociety}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatisticalDataPage;
