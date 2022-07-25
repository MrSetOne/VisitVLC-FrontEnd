import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import MapView from "./components/MapView/MapView";
import LogPage from "./components/LogPage/LogPage";
import { useDispatch, useSelector } from "react-redux";
import "./antd-theme/antd-customized.css";
import NavBar from "./components/NavBar/NavBar";
import MyProfile from "./components/MyProfile/MyProfile";
import ShowRoutes from "./components/ShowRoutes/ShowRoutes";
import RouteDetail from "./components/RouteDetail/RouteDetail";
import Places from "./components/Places/Places";
import Search from "./components/Search/Search";
import { getCurrentUser } from "./features/auth/authSlice";

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.token) {
      dispatch(getCurrentUser());
    }
  }, []);

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map/:id" element={<MapView />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/allroutes" element={<ShowRoutes />} />
            <Route path="/route/:id" element={<RouteDetail />} />
            <Route path="/places" element={<Places />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </>
      ) : (
        <LogPage />
      )}
    </div>
  );
}

export default App;
