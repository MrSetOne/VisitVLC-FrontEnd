import React from "react";
import { Link } from "react-router-dom";
import './ShowRoute.scss'

const ShowRoute = ({ route }) => {
  console.log(route);
  return (
    <Link to={`/route/${route.route_id}`}>
      <div className="ShowRoute">
        <h2>{route.name}</h2>
        <p>Dificultad: {route.difficulty}</p>
        <p>Puntos: {route.poi.length}</p>
        <p>Duración: {route.duration}min.</p>
        <img src={route.image} alt={route.name} />
      </div>
    </Link>
  );
};

export default ShowRoute;
