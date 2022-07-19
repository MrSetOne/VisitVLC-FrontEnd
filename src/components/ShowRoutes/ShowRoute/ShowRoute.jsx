import React from "react";

const ShowRoute = ({ route }) => {
  console.log(route);
  return (
    <div className="ShowRoute">
      <h2>{route.name}</h2>
      <p>Difficult: {route.difficulty}</p>
      <p>Points: {route.pois.length}</p>
      <p>Duration: {route.duration}min.</p>
      <img src={route.image} alt={route.name} />
    </div>
  );
};

export default ShowRoute;
