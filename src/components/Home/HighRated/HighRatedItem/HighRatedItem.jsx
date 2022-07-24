import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faFilter,
  faLocationDot,
  faPlaceOfWorship,
  faClock,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import "./HighRatedItem.scss";
import { useNavigate } from "react-router-dom";

const HighRatedItem = ({ item }) => {
  const navigate = useNavigate();
  console.log(item);

  return (
    <button
      className="HighRatedItem"
      style={{ backgroundImage: `url(${item.image})` }}
      onClick={() => navigate(`/route/${item.route_id}`)}
    >
      <div className="route-btn__cover">
        <div className="title">{item.name}</div>
        <div className="data">
          <div className="time">
            <FontAwesomeIcon icon={faClock} />
            <p>{item.duration} mins.</p>
          </div>
          <div className="points">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>{item.poi.length} Lugares</p>
          </div>
          <div className="difficulty">
            <FontAwesomeIcon icon={faChartSimple} />
            <p>{item.difficulty}</p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default HighRatedItem;
