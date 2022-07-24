import React from "react";
import { Typography } from "antd";
const { Paragraph } = Typography;

const PoiDetail = ({ poi }) => {
  console.log(poi);
  return (
    <li>
      <Paragraph
        ellipsis={{ rows: 2, expandable: true, symbol: "leer más..." }}
      >
        <b>{poi.name} </b>
        {poi.description_es === "NaN" ? null : poi.description_es}
      </Paragraph>
    </li>
  );
};

export default PoiDetail;
