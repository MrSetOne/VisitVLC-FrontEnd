import {
  faChartSimple,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFavoritesRoutes } from "../../../features/auth/authSlice";

const FavRoutes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { favoriteRoutes } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getFavoritesRoutes());
  }, []);

  const favorites = favoriteRoutes.map((route) => {
    return (
      <button
        className="FavRoutes__item"
        style={{ backgroundImage: `url(${route.image})` }}
        onClick={() => navigate(`/route/${route.route_id}`)}
      >
        <div className="route-btn__cover">
          <div className="title">{route.name}</div>
          <div className="data">
            <div className="time">
              <FontAwesomeIcon icon={faClock} />
              <p>{route.duration} mins.</p>
            </div>
            <div className="points">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>{route.poi.length} Lugares</p>
            </div>
            <div className="difficulty">
              <FontAwesomeIcon icon={faChartSimple} />
              <p>{route.difficulty === "NaN" ? "alta" : route.difficulty}</p>
            </div>
          </div>
        </div>
      </button>
    );
  });

  return <div className="FavRoutes">{favorites}</div>;
};

export default FavRoutes;
