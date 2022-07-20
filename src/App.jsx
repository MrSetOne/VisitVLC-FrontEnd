import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import MapView from "./components/MapView/MapView";
import LogPage from "./components/LogPage/LogPage";
import { useSelector } from "react-redux";
import "./antd-theme/antd-customized.css";
import NavBar from "./components/NavBar/NavBar";
import MyProfile from "./components/MyProfile/MyProfile";
import ShowRoutes from "./components/ShowRoutes/ShowRoutes";
import RouteDetail from "./components/RouteDetail/RouteDetail";

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/allroutes" element={<ShowRoutes />} />
            <Route path="/route/:id" element={<RouteDetail />} />
          </Routes>
        </>
      ) : (
        <LogPage />
      )}
    </div>
  );
}

export default App;
