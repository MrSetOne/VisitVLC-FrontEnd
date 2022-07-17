import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Map from "./components/Map/Map";
import LogPage from "./components/LogPage/LogPage";
import { useSelector } from "react-redux";
import "./antd-theme/antd-customized.css";

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="App">
      {user ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      ) : (
        <LogPage />
      )}
    </div>
  );
}

export default App;
