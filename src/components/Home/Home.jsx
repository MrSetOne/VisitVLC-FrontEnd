import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.scss";
import {
  faMapLocationDot,
  faFilter,
  faLocationDot,
  faPlaceOfWorship,
  faClock,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import api from "../../assets/APIExample.json";
import { Button } from "antd";
import { useState } from "react";
import AIForm from "./HighRated/AIForm/AIForm";
import { motion } from "framer-motion";
import HighRated from "./HighRated/HighRated";
import FavRoutes from "./FavRoutes/FavRoutes";

const Home = () => {
  const navigate = useNavigate();

  const [tabBar, setTabBar] = useState({
    width: 120,
    translateX: "calc(-50% + 10px)",
    left: "50%",
  });

  const [content, setContent] = useState(<HighRated />);

  const goto = (dest) => {
    if (dest === "HighRated") {
      setContent(<HighRated />);
      setTabBar({
        width: 120,
        translateX: "calc(-50% + 10px)",
        left: "50%",
      });
    } else if (dest === "FavRoutes") {
      setContent(<FavRoutes />);
      setTabBar({ width: 65, left: "calc(100% - 95px)" });
    }
  };

  return (
    <div className="Home">
      <div className="tab-menu">
        <button onClick={() => setTabBar({ width: 85, left: 0 + 30 })}>
          Cerca de Mi
        </button>
        <button onClick={() => goto("HighRated")}>Mejor Valoradas</button>
        <button onClick={() => goto("FavRoutes")}>Favoritas</button>
        <motion.div className="tab-menu__tab" animate={tabBar} />
      </div>
      <div className="content">{content}</div>
      <footer className="footer">
        <button className="footer-btn">
          <FontAwesomeIcon icon={faFilter} />
        </button>
        <button className="footer-btn" onClick={() => navigate("/allroutes")}>
          <FontAwesomeIcon icon={faMapLocationDot} />
        </button>
        <button className="footer-btn">
          <FontAwesomeIcon icon={faPlaceOfWorship} />
        </button>
      </footer>
    </div>
  );
};

export default Home;
