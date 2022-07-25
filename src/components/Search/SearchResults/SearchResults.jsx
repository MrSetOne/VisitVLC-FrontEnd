import React from "react";
import "./SearchResults.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faClock,
  faChartSimple,
  faPersonWalking,
  faBicycle,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ item }) => {
  console.log(item);
  const navigate = useNavigate();
  return (
    <button
      className="SearchResults"
      onClick={() => navigate(`/route/${item.route_id}`)}
    >
      <h3>{item.name}</h3>
      <img src={item.image} alt="" />
      <div>
        <div>
          <FontAwesomeIcon icon={faLocationPin} />
          <p>{item.poi.length} puntos</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faClock} />
          <p>{item.duration} min.</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faChartSimple} />
          <p>{item.difficulty === "NaN" ? "difícil" : item.difficulty}</p>
        </div>
        <div>
          {item.transport === "peu" ? (
            <>
              <FontAwesomeIcon icon={faPersonWalking} />
              <p>Andando</p>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faBicycle} />
              <p>Bicicleta</p>
            </>
          )}
        </div>
      </div>
    </button>
  );
};

export default SearchResults;
