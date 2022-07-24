import React from 'react'
import api from "../../assets/APIExample.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapLocationDot,
    faFilter,
    faLocationDot,
    faPlaceOfWorship,
    faClock,
    faChartSimple,
  } from "@fortawesome/free-solid-svg-icons";
  import { useNavigate } from "react-router-dom";
  import { Button } from "antd";

const Places = () => {

    const data = api.map((place) => {
        console.log(place)
        return (
          <button
            className="route-btn"
            style={{ backgroundImage: `url(${place.image})` }}
          >
            <div className="route-btn__cover">
              <div className="title">{place.pois[0].name}</div>
              <div className="data">
                Hola
              </div>
            </div>
          </button>
        );
      });

  return (
    <>
        <div>Sitios destacados</div>
        {data}
    </>
  )
}

export default Places