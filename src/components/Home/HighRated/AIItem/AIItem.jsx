import {
  faChartSimple,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRecomendedRoute } from "../../../../features/Routes/RoutesSlice";
import "./AIItem.scss";

const AIItem = () => {
  const { user } = useSelector((state) => state.auth);
  const { isLoadingRecomendedRoute, recomenendedRoute } = useSelector(
    (state) => state.routes
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getRecomendedRoute(user.recomendedRoute));
  }, []);

  return isLoadingRecomendedRoute ? (
    <div className="HighRatedItem HighRatedItem--IA">
      <div className="route-btn__cover HighRatedItem--IA__cover">
        <div className="title">
          <h3>Estamos cargando tu ruta recomendada</h3>
        </div>
        <h3 style={{ color: "white" }}>En breves la tendrás disponible.</h3>
      </div>
    </div>
  ) : (
    <button
      className="HighRatedItem"
      style={{ backgroundImage: `url(${recomenendedRoute.image})` }}
      onClick={() => navigate(`/route/${recomenendedRoute.route_id}`)}
    >
      <div className="route-btn__cover">
        <div className="title">{recomenendedRoute.name}</div>
        <div className="data">
          <div className="time">
            <FontAwesomeIcon icon={faClock} />
            <p>{recomenendedRoute.duration} mins.</p>
          </div>
          <div className="points">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>{recomenendedRoute.poi.length} Lugares</p>
          </div>
          <div className="difficulty">
            <FontAwesomeIcon icon={faChartSimple} />
            <p>
              {recomenendedRoute.difficulty === "NaN"
                ? "alta"
                : recomenendedRoute.difficulty}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default AIItem;
