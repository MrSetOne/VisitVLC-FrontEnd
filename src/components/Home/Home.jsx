import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.scss";
import {
  faMapLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, transform } from "framer-motion";
import HighRated from "./HighRated/HighRated";
import FavRoutes from "./FavRoutes/FavRoutes";

const Home = () => {
  const navigate = useNavigate();

  const [tabBar, setTabBar] = useState({
    translateX: -72,
    width: 117,
  });

  const [content, setContent] = useState(<HighRated />);

  const goto = (dest) => {
    if (dest === "HighRated") {
      setContent(<HighRated />);
      setTabBar({
        translateX: -72,
        width: 117,
      });
    } else if (dest === "FavRoutes") {
      setContent(<FavRoutes />);
      setTabBar({ width: 105, translateX: 77 });
    }
  };

  return (
    <div className="Home">
      <div className="tab-menu">
        <button onClick={() => goto("HighRated")}>Mejor Valoradas</button>
        <button onClick={() => goto("FavRoutes")}>Rutas Favoritas</button>
        <motion.div className="tab-menu__tab" animate={tabBar} />
      </div>
      <div className="content">{content}</div>
      <footer className="footer">
        <div>
          <button className="footer-btn">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              onClick={() => navigate("/search")}
            />
            Buscar
          </button>
          <button className="footer-btn" onClick={() => navigate("/allroutes")}>
            <FontAwesomeIcon icon={faMapLocationDot} />
            Todas las rutas
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Home;
