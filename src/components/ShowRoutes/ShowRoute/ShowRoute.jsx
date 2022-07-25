import {
  faBicycle,
  faChartSimple,
  faClock,
  faLocationPin,
  faPersonWalking,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./ShowRoute.scss";

const ShowRoute = ({ route }) => {
  console.log(route);
  return (
    <button className="ShowRoute">
      <h2>{route.name}</h2>
      <img src={route.image} alt={route.name} />
      <div>
        <div>
          <FontAwesomeIcon icon={faLocationPin} />
          <p>{route.poi.length} puntos</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faClock} />
          <p>{route.duration}min.</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faChartSimple} />
          <p>{route.difficulty === "NaN" ? "difícil" : route.difficulty}</p>
        </div>
        <div>
          {route.transport === "peu" ? (
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

export default ShowRoute;
