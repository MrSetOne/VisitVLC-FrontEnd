import { Rate } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileReviews.scss";

const ProfileReviews = ({ review }) => {
  const navigate = useNavigate();
  return (
    <button className="ProfileReviews" onClick={() => navigate(`/route/${review.route_id}`)}>
      <img src={review.image} alt={review.name} />
      <div className="ProfileReviews__info">
        <div className="ProfileReviews__info--header">
          <h5>{review.name}</h5>
          <Rate disabled allowHalf defaultValue={review.score} />
        </div>
        <h3>{review.comment}</h3>
      </div>
    </button>
  );
};

export default ProfileReviews;
