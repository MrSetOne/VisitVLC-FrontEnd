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
import AIForm from "./AIForm/AIForm";

const Home = () => {
  const navigate = useNavigate();

  const [modalAIVisible, setModalAIVisible] = useState(false);

  const data = api.map((place) => {
    return (
      <button
        className="route-btn"
        style={{ backgroundImage: `url(${place.image})` }}
      >
        <div className="route-btn__cover">
          <div className="title">{place.name}</div>
          <div className="data">
            <div className="time">
              <FontAwesomeIcon icon={faClock} />
              <p>{place.duration} mins.</p>
            </div>
            <div className="points">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>{place.pois.length} Lugares</p>
            </div>
            <div className="difficulty">
              <FontAwesomeIcon icon={faChartSimple} />
              <p>{place.difficulty}</p>
            </div>
          </div>
        </div>
      </button>
    );
  });

  return (
    <div className="Home">
      <div className="tab-menu">
        <label htmlFor="">Cerca de Mi</label>
        <label htmlFor="">Mejor Valoradas</label>
        <label htmlFor="">Favoritas</label>
      </div>
      <div className="content">
        <Button type="primary" onClick={() => setModalAIVisible(true)}>
          Push me
        </Button>
        {data}
      </div>
      <footer className="footer">
        <Button type="primary" className="footer-btn">
          <FontAwesomeIcon icon={faFilter} />
          <p>Categorias</p>
        </Button>
        <Button
          type="primary"
          className="footer-btn"
          onClick={() => navigate("/allroutes")}
        >
          <FontAwesomeIcon icon={faMapLocationDot} />
          <p>Todas las Rutas</p>
        </Button>
        <Button type="primary" className="footer-btn">
          <FontAwesomeIcon icon={faPlaceOfWorship} />
          <p>Sitios</p>
        </Button>
      </footer>
      <AIForm
        modalAIVisible={modalAIVisible}
        setModalAIVisible={setModalAIVisible}
      />
    </div>
  );
};

export default Home;
