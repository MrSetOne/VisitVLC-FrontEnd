import React from "react";
import { Rate } from "antd";

const EvaluationsRoute = ({ item }) => {
  return (
    <div className="EvaluationsRoute">
      <Rate disabled allowHalf defaultValue={item.score} />
      <p>{item.comment}</p>
    </div>
  );
};

export default EvaluationsRoute;
