import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileFavs.scss";

const ProfileFavs = ({ route }) => {
  const navigate = useNavigate();
  return (
    <button
      className="ProfileFavs"
      onClick={() => navigate(`/route/${route.route_id}`)}
    >
      <img src={route.image} alt={route.name} />
      <h3>{route.name}</h3>
    </button>
  );
};

export default ProfileFavs;
