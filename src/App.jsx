import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Map from "./components/Map/Map";
import LogPage from "./components/LogPage/LogPage";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logpage" element={<LogPage />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
