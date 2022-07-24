import React from "react";
import { Rate } from "antd";

const EvaluationsRoute = ({ item }) => {
  return (
    <li className="EvaluationsRoute">
      <Rate disabled allowHalf defaultValue={item.score} />
      <p>{item.comment}</p>
    </li>
  );
};

export default EvaluationsRoute;
