import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SocietyListPage from "./pages/SocietyListPage";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import YearwiseChartPage from "./pages/chart/YearwiseChartPage";
import StatisticalDataPage from "./pages/Statistics";
import Home from "./pages/Home";
import "./App.css";
import StatewiseChartPage from "./pages/chart/StatewiseChartPage";
import SectorWiseChartPage from "./pages/chart/SectorwiseChartPage";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/society" element={<SocietyListPage />}></Route>
        <Route path="/statistics" element={<StatisticalDataPage />}></Route>
        <Route path="/yearChart" element={<YearwiseChartPage />}></Route>
        <Route path="/stateChart" element={<StatewiseChartPage />}></Route>
        <Route path="/sectorChart" element={<SectorWiseChartPage />}></Route>
        <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
