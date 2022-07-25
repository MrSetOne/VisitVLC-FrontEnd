import {
  faBicycle,
  faChartSimple,
  faClock,
  faLocationPin,
  faPersonWalking,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rate } from "antd";
import React from "react";
import "./ProfileReviews.scss";

const ProfileReviews = ({ review }) => {
  console.log(review);
  return (
    <button className="ProfileReviews">
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
