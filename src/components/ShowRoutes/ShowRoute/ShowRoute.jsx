import React from "react";
import { Link } from "react-router-dom";

const ShowRoute = ({ route }) => {
  console.log(route);
  return (
    <Link to={`/route/${route.route_id}`}>
      <div className="ShowRoute">
        <h2>{route.name}</h2>
        <p>Difficult: {route.difficulty}</p>
        <p>Points: {route.poi.length}</p>
        <p>Duration: {route.duration}min.</p>
        <img src={route.image} alt={route.name} />
      </div>
    </Link>
  );
};

export default ShowRoute;
